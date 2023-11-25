
export const action = (search: string) => {
    return (dispatch) => {
        console.log('a')
        return fetch(`https://www.omdbapi.com?apikey=64405bd2&s=${search}`)
            .then(response => response.json())
            .then(json => dispatch(
                { type: "FetchData", payload: json }))
    }

}