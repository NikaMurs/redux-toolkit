import { FetchData, isLoading } from "../../redux/filmsReducer"
import { ThunkType } from "../../redux/congifStore"

export const action = (search: string): ThunkType => {
    return (dispatch) => {
        dispatch(isLoading())
        return fetch(`https://www.omdbapi.com?apikey=64405bd2&s=${search}`)
            .then(response => response.json())
            .then(json => dispatch(
                FetchData(json)))
    }
}