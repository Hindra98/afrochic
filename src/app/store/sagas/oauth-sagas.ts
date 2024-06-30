import { call, put, takeLatest } from "redux-saga/effects";
import { AuthenticateUserAction, AuthenticateUserFailurePayload, VerifyPinCodeAction, VerifyPinCodeFailurePayload } from "../actions/oauth";
import { ControllerApi } from "../../features/common/identity/oauth/locale/controller-api";
import { ActionTypes } from "../actions/constants/action-types";
import { authenticateUserFailure, authenticateUserSuccess, authenticateUserSuccessTemp, verifyPinCodeFailure, verifyPinCodeSuccess } from "../actions/oauth/oauth-actions";
import { jwtDecode } from "jwt-decode";
import { getStorage, setStorage } from "../../core/storage/storage";
import { AuthenticationConstants } from "../../core/constants/authentication-contants";
import { getClaim } from ".";

const controllerApi = new ControllerApi();

let store;
export const injectStoreInOauthSaga = _store => { store = _store; }

const callApiToAuthenticateUser = async (command: AuthenticateUserCommand) => controllerApi.authenticateUser(command);

const callApiToVerifyPinCode = async (command: VerifyIdentityCommand) => controllerApi.verifyIdentity(command);

function* authenticateUserSaga(action: AuthenticateUserAction) {
  try {
      
      const response = yield call(callApiToAuthenticateUser, action.payload.command);

      if(response) {

          if(response.hasSucceeded) {

              if(response.payload.isTwoFactorAuthenticationEnabled) {
                
                yield put(authenticateUserSuccessTemp(response.payload as AuthenticateUserSuccessPayload));

              } else {

                  const decodedToken = jwtDecode(response.payload.token);
                  const stateAuth = store.getState(state => state.authenticatedUserResult);
                  const subscriptionKey:string = stateAuth.authenticatedUser.subscriptionKey

                  setStorage(AuthenticationConstants.ACCESS_TOKEN, response.payload.token);
                  setStorage(AuthenticationConstants.TENANT_ID, getClaim(JSON.stringify(decodedToken), "tenantid"));
                  setStorage(AuthenticationConstants.USER_LANGUAGE, getClaim(JSON.stringify(decodedToken), "userlanguage"));
                  if(subscriptionKey && subscriptionKey.length > 0) setStorage("subscription_key", subscriptionKey);
  
                  yield put(authenticateUserSuccess(response.payload as AuthenticateUserSuccessPayload));
              }

          } else {
              
              let messages: string[] = [];
              response.errorMessages.map((item) => {
                  return messages.push(item.errorMessage);
              })

              yield put(authenticateUserFailure({errors: messages } as AuthenticateUserFailurePayload));
          }
      }
  } catch(e) {

      let messages: string[] = [];
      messages.push(e.message);
      yield put(authenticateUserFailure({errors: messages } as AuthenticateUserFailurePayload));
  }
}

function* verifyPinCodeSaga ( action: VerifyPinCodeAction ) {
    try {
      
      const response = yield call(callApiToVerifyPinCode, action.payload.command);
  
      const stateAuth = store.getState(state => state.authenticatedUserResult);
      const token = stateAuth.authenticatedUser.value.token || "";
      const auth =  action.payload.command.auth;
      const subscriptionKey:string = stateAuth.authenticatedUser.subscriptionKey
   
      if (response.hasSucceeded) {
        const decodedToken = jwtDecode(token);
        setStorage(AuthenticationConstants.ACCESS_TOKEN, token);
        setStorage(AuthenticationConstants.TENANT_ID, getClaim(JSON.stringify(decodedToken), "tenantid"));
        setStorage(AuthenticationConstants.USER_LANGUAGE, getClaim(JSON.stringify(decodedToken), "userlanguage"));
        if(getStorage("subscription_key")) { setStorage("is_verified", "true"); getStorage("is_accept_change_password", true); }
        if(subscriptionKey && subscriptionKey.length > 0) setStorage("subscription_key", subscriptionKey);

        yield put(verifyPinCodeSuccess(response.payload as VerifyIdentitySuccessPayload));
        yield put(authenticateUserSuccess(auth as AuthenticateUserSuccessPayload));
   
      } else {
        let messages: string[] = [];
        response.errorMessages.map((item) => {
          return messages.push(item.errorMessage);
        });
        yield put(verifyPinCodeFailure({errors: messages } as VerifyPinCodeFailurePayload));
      }
   
    } catch (e) {
        let messages: string[] = [];
        messages.push(e.message);
        yield put(verifyPinCodeFailure({errors: messages } as VerifyPinCodeFailurePayload));
    }
  }
  

//Watcher: Authenticate user
export function* watchAuthenticateUserSaga(){

    yield takeLatest(ActionTypes.AUTHENTICATE_USER_REQUEST, authenticateUserSaga);
    yield takeLatest(ActionTypes.VERIFY_PIN_CODE_REQUEST, verifyPinCodeSaga);
}