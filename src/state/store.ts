import {configureStore} from "@reduxjs/toolkit";
import personalDataReducer from './personData/personDataSlice'

export const store = configureStore({
    reducer: {
        personalData: personalDataReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;