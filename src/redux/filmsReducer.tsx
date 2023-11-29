import { createSlice } from "@reduxjs/toolkit";
import { FilmItemType } from "../types";

const initialState = {
    loading: false,
    search: {
        "Search": [],
        "totalResults": "0",
        "Response": "True"
    },
    filmInfo: {

    },
    favorites: []
}


export const filmsReducer = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        FetchData: (state, action) => {
            state.search = action.payload
            state.loading = false
        },
        FetchInfo: (state, action) => {
            state.filmInfo = action.payload
            state.loading = false
        },
        isLoading: (state) => {
            state.loading = true
        },
        addToFavorites: (state, action) => {
            let isHave = false;
            const fav = JSON.parse(JSON.stringify(state.favorites))
            fav.map((el: FilmItemType) => {
                if (el.imdbID === action.payload.imdbID) {
                    return isHave = true
                }
            })
            if (!isHave) {
                fav.push(action.payload)
                state.favorites = fav
            }
        },
        removeFromFavorites: (state, action) => {
            const fav = JSON.parse(JSON.stringify(state.favorites))
            for (let i = 0; i< fav.length; i++){
                if (fav[i].imdbID === action.payload.imdbID) {
                    fav.splice(i, 1)
                }
            }
            state.favorites = fav
        }
    }
})

export const { FetchData, FetchInfo, isLoading, addToFavorites, removeFromFavorites } = filmsReducer.actions