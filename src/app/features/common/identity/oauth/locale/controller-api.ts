import { AxiosRequestConfig } from "axios";
import { useDebounced } from "../../../../../core/hooks";
import { HttpClient } from "../../../../../http/http-client";


const authenticateUser = (http: HttpClient) => async (payload: object) => {

    const response = await http.post("/v1/oauth/authenticate", payload);

    const result: AuthenticateUserResult = response.data;

    return response !== undefined ? result as AuthenticateUserResult : undefined;
}

const verifyIdentity = (http: HttpClient) => async (payload: object) => {
    const response = await http.post("/v1/oauth/verify-2fa", payload);
    
    const result: VerifyIdentityResult = response.data;
    
    return response !== undefined ? result as VerifyIdentityResult : undefined;
}

const refreshToken = (http: HttpClient) => async (config: AxiosRequestConfig) => {
   
    const response = await http.post("/v1/oauth/refreshToken", undefined, config);
    return response.data as refreshTokenResult;
}

const revokeToken = (http: HttpClient) => async (payload: object) => {
    
    const response = await http.post("/v1/oauth/revokeToken", payload);

    return response.data as revokeTokenResult;
}

const register = (http: HttpClient) => async (payload: object) => {
    
    const response = await http.post("/v1/oauth/register", payload);

    return response.data as registerResult;
}

export class ControllerApi {

     private readonly http = new HttpClient();

     public readonly authenticateUser = Object.assign(authenticateUser(this.http), {
         useResponse: (
             handler: (result: AuthenticateUserResult) => unknown,
             args: Parameters<ReturnType<typeof authenticateUser>>[0]) => useDebounced(() => this.authenticateUser(args).then(handler), Object.values(args), 500)});

    public readonly verifyIdentity = Object.assign(verifyIdentity(this.http), {
        useResponse: (
            handler: (result: VerifyIdentityResult) => unknown,
            args: Parameters<ReturnType<typeof verifyIdentity>>[0]) => useDebounced(() => this.verifyIdentity(args).then(handler), Object.values(args), 500)});

     public readonly refreshToken = Object.assign(refreshToken(this.http), {
        useResponse: (
            handler: (result: refreshTokenResult) => unknown,
            args: Parameters<ReturnType<typeof refreshToken>>[0]) => useDebounced(() => this.refreshToken(args).then(handler), Object.values(args), 500)});

     public readonly revokeToken = Object.assign(revokeToken(this.http), {
        useResponse: (
            handler: (result: revokeTokenResult) => unknown,
            args: Parameters<ReturnType<typeof revokeToken>>[0]) => useDebounced(() => this.revokeToken(args).then(handler), Object.values(args), 500)});

     public readonly register = Object.assign(register(this.http), {
        useResponse: (
            handler: (result: registerResult) => unknown,
            args: Parameters<ReturnType<typeof register>>[0]) => useDebounced(() => this.register(args).then(handler), Object.values(args), 500)});

}