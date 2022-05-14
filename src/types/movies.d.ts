export declare interface IMovie {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export declare interface IFavoriteData {
  Movies: IMovie[]
}