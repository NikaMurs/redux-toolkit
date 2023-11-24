export type FilmItemType = {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

export type SearchResponceType = {
    search: {
        Search: Array<FilmItemType>,
        responce: string,
        totalResult: string
    }
}

export type StateType = {
        films: SearchResponceType
}