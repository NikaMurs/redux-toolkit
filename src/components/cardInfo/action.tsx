import { FetchInfo, isLoading } from "../../redux/filmsReducer"
import { ThunkType } from "../../redux/congifStore"

export const action = (filmID: string): ThunkType => {
    return (dispatch) => {
        dispatch(isLoading())
        return fetch(`https://www.omdbapi.com?apikey=64405bd2&i=${filmID}`)
            .then(response => response.json())
            .then(json => dispatch(
                FetchInfo(json)))
    }
}