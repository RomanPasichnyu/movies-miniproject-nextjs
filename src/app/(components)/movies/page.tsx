import React from 'react';
import {getAllMovies} from "@/services/api.service";
import {IApiResponse} from "@/models/apiResponceModel";
import {IMovie} from "@/models/MovieModel";

const MoviesPage = async () => {
    const {results}: IApiResponse<IMovie> = getAllMovies

    return (
        <div>
            {results.map((movie: IMovie) => (<div key={movie.id}>{movie.title}</div>))}
        </div>
    );
};

export default MoviesPage;