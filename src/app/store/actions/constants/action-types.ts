export const ActionTypes = {

    //Authentication
    SET_AUTHENTICATED_USER: "SET_AUTHENTICATED_USER",
    LOGOUT_USER: "LOGOUT_USER",
    REGISTER_USER: "REGISTER_USER",
    REFRESH_TOKEN: "REFRESH_TOKEN",
    SET_REFRESHED_TOKEN: "SET_REFRESHED_TOKEN",

    //Authentication V2
    AUTHENTICATE_USER_REQUEST: "AUTHENTICATE_USER_REQUEST",
    AUTHENTICATE_USER_SUCCESS: "AUTHENTICATE_USER_SUCCESS",
    AUTHENTICATE_USER_FAILURE: "AUTHENTICATE_USER_FAILURE",

    //Authentication Verify-2fa
    SET_TEMP_AUTHENTICATED_USER: "SET_TEMP_AUTHENTICATED_USER",
    SET_VERIFY_PIN_CODE: "SET_VERIFY_PIN_CODE",

    //Authentication Verify-2fa v2
    VERIFY_PIN_CODE_REQUEST: "VERIFY_PIN_CODE_REQUEST",
    VERIFY_PIN_CODE_SUCCESS: "VERIFY_PIN_CODE_SUCCESS",
    VERIFY_PIN_CODE_FAILURE: "VERIFY_PIN_CODE_FAILURE",

    //Languages
    GET_LANGUAGES: "GET_LANGUAGES",
    SET_LANGUAGES: "SET_LANGUAGES",

    GET_LANGUAGES_REQUEST: "GET_LANGUAGES_REQUEST",
    GET_LANGUAGES_SUCCESS: "GET_LANGUAGES_SUCCESS",
    GET_LANGUAGES_FAILURE: "GET_LANGUAGES_FAILURE",

    CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

}