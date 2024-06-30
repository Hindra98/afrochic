import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";


      
    // let partialState: Partial<any> = {
    //     authenticatedUser: {
    //       value: loadAuthenticatedUser(),
    //     }
    // };

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  // preloadedState: partialState,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
