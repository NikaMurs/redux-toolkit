import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "./filmsReducer";

export const configStore = configureStore({
    reducer: {
        films: filmsReducer.reducer
    },
})

export type RootState = ReturnType<typeof configStore.getState>
export type AppDispatch = typeof configStore.dispatch
