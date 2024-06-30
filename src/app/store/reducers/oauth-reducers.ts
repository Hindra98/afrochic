import { ActionTypes } from "../actions/constants/action-types";
import { produce } from "immer";
import { StoreShape, initialState, AuthenticateUserAction, VerifyPinCodeStoreShape, initialStatePinCode, VerifyPinCodeAction } from "../actions/oauth";
import { getClaim } from "../sagas";
import { jwtDecode } from "jwt-decode";

export const authenticatedUserReducer = (state: StoreShape = initialState , args: AuthenticateUserAction ) : StoreShape => {

    switch(args.type){

        case ActionTypes.AUTHENTICATE_USER_SUCCESS:
        
            return produce(state, draftState => {
                 draftState.value.message = args.payload?.user?.message ;
                 draftState.value.tenantId = args.payload?.user?.tenantId;
                 draftState.value.token = args.payload?.user?.token;
                 draftState.value.userCanChangePassword = args.payload?.user?.userCanChangePassword;
                 draftState.value.userMustChangePassword = args.payload?.user?.userMustChangePassword;
                 draftState.value.isTwoFactorAuthenticationEnabled = args.payload?.user?.isTwoFactorAuthenticationEnabled;
                 draftState.value.userName = getClaim(JSON.stringify(jwtDecode(args.payload?.user?.token)), "name".toLowerCase());
                 draftState.Errors = [];
                 draftState.pending = false;
            });

        case ActionTypes.AUTHENTICATE_USER_REQUEST:
            return produce(state, drafState => {
                drafState.pending = true;
                drafState.subscriptionKey = args.payload?.command?.subscriptionKey;
            });

        case ActionTypes.AUTHENTICATE_USER_FAILURE:
            return produce(state, draftState => {
                draftState.Errors = args.payload.errors.errors;
                draftState.value.message = "";
                draftState.pending = false;
            });

        
        case ActionTypes.SET_TEMP_AUTHENTICATED_USER:
          return produce(state, (draftState) => {
            draftState.value.message = args.payload?.user?.message;
            draftState.value.tenantId = args.payload?.user?.tenantId;
            draftState.value.token = args.payload?.user?.token;
            draftState.value = args.payload?.user;
          });
          
            
    case ActionTypes.LOGOUT_USER:
      return produce(state, (draftState) => {
        
        draftState.value.message = "User logged out" ;
        draftState.value.tenantId = "";
        draftState.value.token = "";
        draftState.value.userCanChangePassword = true;
        draftState.value.userMustChangePassword = true;
        draftState.value.isTwoFactorAuthenticationEnabled = false;
        draftState.value.userName = "";
        draftState.Errors = [];
        draftState.pending = false;
      });
            
        default:
            return state;
    }
};


export const verifyPinCodeReducer = (state: VerifyPinCodeStoreShape = initialStatePinCode, args: VerifyPinCodeAction): VerifyPinCodeStoreShape => {

  switch (args.type) {

    case ActionTypes.VERIFY_PIN_CODE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.value.isVerified = true;
        draftState.value.message = args.payload?.user?.message;
        draftState.Errors = [];
        draftState.pending = false;
      });

    case ActionTypes.VERIFY_PIN_CODE_REQUEST:
      return produce(state, (draftState) => {
        draftState.pending = true;
      });

    case ActionTypes.VERIFY_PIN_CODE_FAILURE:
      return produce(state, (draftState) => {
        draftState.Errors = args.payload?.errors.errors;
        draftState.value.message = "";
        draftState.pending = false;
      });

    default:
      return state;
  }
};