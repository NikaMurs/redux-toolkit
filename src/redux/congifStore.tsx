import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "./filmsReducer";
import thunk from "redux-thunk";

export const configStore = configureStore({
    reducer: {
        films: filmsReducer.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk)
})


export type RootState = ReturnType<typeof configStore.getState>
export type AppDispatch = typeof configStore.dispatch
