import { ActionTypes } from "../constants/action-types";
import { AuthenticateUserAction, AuthenticateUserFailurePayload, VerifyPinCodeAction, VerifyPinCodeFailurePayload } from ".";
import { AuthenticationConstants } from "../../../core/constants/authentication-contants";
import { getStorage } from "../../../core/storage/storage";


export const authenticateUser = (payload: AuthenticateUserCommand): AuthenticateUserAction => { 
    return {
        type: ActionTypes.AUTHENTICATE_USER_REQUEST,
        payload: {
            command: payload,
            user: null,
            errors: null
        }
    } as AuthenticateUserAction
};

export const authenticateUserSuccess = (payload: AuthenticateUserSuccessPayload): AuthenticateUserAction => {
   return {

        type: ActionTypes.AUTHENTICATE_USER_SUCCESS,
        payload: {
            command: null,
            user: payload,
            errors: null
        }
    } as AuthenticateUserAction;
};

export const authenticateUserFailure = (payload: AuthenticateUserFailurePayload): AuthenticateUserAction => {

    return {
        type: ActionTypes.AUTHENTICATE_USER_FAILURE,
        payload: {
            command: null,
            user: null,
            errors: payload
        }
    } as AuthenticateUserAction;
};

export const authenticateUserSuccessTemp = (payload: AuthenticateUserSuccessPayload): AuthenticateUserAction => {
   return {

        type: ActionTypes.SET_TEMP_AUTHENTICATED_USER,
        payload: {
            command: null,
            user: payload,
            errors: null
        }
    } as AuthenticateUserAction;
};
  
export const verifyPinCode = (payload: VerifyIdentityCommand): VerifyPinCodeAction => { 
    return {
        type: ActionTypes.VERIFY_PIN_CODE_REQUEST,
        payload: {
            command: payload,
            user: null,
            errors: null
        }
    } as VerifyPinCodeAction
};

export const verifyPinCodeSuccess = (payload: VerifyIdentitySuccessPayload): VerifyPinCodeAction => {
   return {

        type: ActionTypes.VERIFY_PIN_CODE_SUCCESS,
        payload: {
            command: null,
            user: payload,
            errors: null
        }
    } as VerifyPinCodeAction;
};

export const verifyPinCodeFailure = (payload: VerifyPinCodeFailurePayload): VerifyPinCodeAction => {

    return {
        type: ActionTypes.VERIFY_PIN_CODE_FAILURE,
        payload: {
            command: null,
            user: null,
            errors: payload
        }
    } as VerifyPinCodeAction;
};


export const signOut = () => {
    
    getStorage(AuthenticationConstants.TENANT_ID, true);
    getStorage(AuthenticationConstants.ACCESS_TOKEN, true);
    getStorage("subscription_key", true);
    getStorage("is_verified", true);
    getStorage("is_accept_change_password", true);
    
    return {
        type: ActionTypes.LOGOUT_USER,
        payload: {
            command: null,
            user: null,
            errors: null
        }
    } as AuthenticateUserAction;
}
