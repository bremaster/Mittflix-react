export type Genre = {
    id: number;
    name: string;
}

export type Movie = {
    id: number;
    backdrop_path: string;
    my_list: boolean;
    overview: string;
    poster_path: string;
    title: string;
    vote_average: number;
    genre_ids: Array<number>
}