import { combineReducers } from "@reduxjs/toolkit";
import { changeLanguageReducer, setLanguagesReducer } from "./languages-reducers";
import { authenticatedUserReducer, verifyPinCodeReducer } from "./oauth-reducers";


const rootReducer = combineReducers ({
    authenticatedUser: authenticatedUserReducer,
    verifyPinCode: verifyPinCodeReducer,
    appLanguages: setLanguagesReducer,
    currentLanguage: changeLanguageReducer,
});

export default rootReducer;