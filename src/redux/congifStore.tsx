import { Action, configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "./filmsReducer";
import thunk, { ThunkAction } from "redux-thunk";



export const configStore = configureStore({
    reducer: {
        films: filmsReducer.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk)
})


export type StateType = ReturnType<typeof filmsReducer.reducer>
export type ThunkType<R = void, A extends Action = Action> = ThunkAction<R, StateType, string, A>
export type RootState = ReturnType<typeof configStore.getState>
export type AppDispatch = typeof configStore.dispatch
