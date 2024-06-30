import { InternalAxiosRequestConfig } from "axios";
import { AuthenticationConstants } from "../../core/constants/authentication-contants";
import { getStorage } from "../../core/storage/storage";
import { v4 as uuidv4 } from "uuid";


let store;
export const injectStoreInRequestHeaderInterceptor = _store => { store = _store; }

/**
 * Intercepts http requests to aad headers.
 * @param config The axios current configuration.
 */
export const requestHeadersInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  
  if (config.url.includes("/test") || config.url.includes("/authenticate") || config.url.includes("/get-languages")
    || config.url.includes("/forgot-password") || config.url.includes("/reset-password") || config.url.includes("/refresh-token")
    || config.url.includes("/send-pin-code") || config.url.includes("/verify-2fa")) {
    
    config.headers["Allow-Anonymous"] = "1";

    if (config.url.includes("/authenticate") || config.url.includes("/forgot-password") ) {
      
      const authViewModel = config.data;
      config.headers["Subscription-Key"] = authViewModel.subscriptionKey;
      
    }

    if (config.url.includes("/reset-password") ) {
      
      const authViewModel = config.data;
      config.headers["Tenant-Id"] = authViewModel.tenantId;
      
    }

    if (config.url.includes("/send-pin-code") || config.url.includes("/verify-2fa")) {
      const stateAuth = store.getState(state => state.authenticatedUserResult);
      const subscriptionKey = stateAuth.authenticatedUser.subscriptionKey;

      config.headers["Subscription-Key"] = getStorage("subscription_key") || subscriptionKey;
      
    }

    if (config.url.includes("/refresh-token")) {
      config.headers["Tenant-Id"] = getStorage(AuthenticationConstants.TENANT_ID);
    }
  } else {
    config.headers["Subscription-Key"] = getStorage("subscription_key")
    config.headers["Tenant-Id"] = getStorage(AuthenticationConstants.TENANT_ID);
    config.headers["Authorization"] = `Bearer ${getStorage(AuthenticationConstants.ACCESS_TOKEN)}`;
  }

  config.headers["X-Correlation-Id"] = uuidv4();
  config.headers["X-Api-Key"] = "ba7d06dc-babe-45d2-9e0f-14081f97c5f8.08336f9e-bafa-43af-8dbe-d4dc9e5494f0";
  config.headers["Accept-Language"] = getStorage(AuthenticationConstants.USER_LANGUAGE);

  return config;
};
