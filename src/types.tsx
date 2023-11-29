export type FilmItemType = {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}


export type FilmInfoType = {
    Poster: string,
    Title: string,
    Year: string,
    Genre: string,
    Runtime: string,
    Director: string,
    Actors: string,
    imdbRating: string
}

export type SearchResponceType = {
    loading: boolean,
    search: {
        Search: Array<FilmItemType>,
        Response: string,
        totalResult: string
    }
    filmInfo: FilmInfoType,
    favorites: Array<FilmItemType>
}

export type StateType = {
        films: SearchResponceType
}