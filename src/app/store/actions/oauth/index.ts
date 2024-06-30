import { jwtDecode } from "jwt-decode";
import { getStorage } from "../../../core/storage/storage";
import { getClaim } from "../../sagas";

export interface StoreShape {

    pending: boolean;
    value: AuthenticateUserSuccessPayload;
    Errors: string[];
    subscriptionKey: string;
}

export const initialState: StoreShape = { value: {

    token: "",
    message: "",
    userMustChangePassword: true,
    userCanChangePassword: true,
    isTwoFactorAuthenticationEnabled: false,
    tenantId: "",
    userName: ""
} as AuthenticateUserSuccessPayload, pending: false, Errors: [], subscriptionKey: ""}

export const initializeState = () : StoreShape => {
    
    initialState.value.tenantId = getStorage("tenantId")||'';
    initialState.value.token = getStorage("access_token")||'';
    
  const decodedToken = jwtDecode(initialState.value.token);
  const name = getClaim(JSON.stringify(decodedToken), "name".toLowerCase());
  
  initialState.value.userName = name;

    return initialState;
}

export interface ModelShape {

    command: AuthenticateUserCommand;
}

export interface AuthenticateUserFailurePayload {
    errors: string[];
}

export interface AuthenticateUserRequest {
    type: string;
    payload: AuthenticateUserCommand;
}

export interface AuthenticateUserSuccess {

    type: string;
    payload: AuthenticateUserSuccessPayload;
}

export interface AuthenticateUserFailure {
    type: string;
    payload: AuthenticateUserFailurePayload;
}

export interface AuthenticateUserPayload {
    command: AuthenticateUserCommand;
    user: AuthenticateUserSuccessPayload;
    errors: AuthenticateUserFailurePayload;
}

export interface AuthenticateUserAction {
    type: string;
    payload: AuthenticateUserPayload;
}


export interface VerifyPinCodeStoreShape {

    pending: boolean;
    value: VerifyIdentitySuccessPayload;
    Errors: string[];
}

export const initialStatePinCode: VerifyPinCodeStoreShape = { value: {

    isVerified: false,
    message: ""
} as VerifyIdentitySuccessPayload, pending: false, Errors: []}

export interface VerifyPinCodeModelShape {
    command: VerifyIdentityCommand;
}

export interface VerifyPinCodeFailurePayload {
    errors: string[];
}

export interface VerifyPinCodeRequest {
    type: string;
    payload: VerifyIdentityCommand;
}

export interface VerifyPinCodeSuccess {

    type: string;
    payload: VerifyIdentitySuccessPayload;
}

export interface VerifyPinCodeFailure {
    type: string;
    payload: VerifyPinCodeFailurePayload;
}

export interface VerifyPinCodePayload {
    command: VerifyIdentityCommand;
    user: VerifyIdentitySuccessPayload;
    errors: VerifyPinCodeFailurePayload;
}

export interface VerifyPinCodeAction {
    type: string;
    payload: VerifyPinCodePayload;
}


