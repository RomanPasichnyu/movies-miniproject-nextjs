import React from 'react';
import {getAllMovies} from "@/services/api.service";
import {IApiResponse} from "@/models/apiResponceModel";
import {IMovie} from "@/models/MovieModel";
import Link from "next/link";


const MoviesPage = async () => {
    const {results}: IApiResponse<IMovie> = getAllMovies;
    return (
        <div>
            {results.map((movie) => (
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                    <div> {movie.id} - {movie.title}</div>
                </Link>
            ))}
        </div>
    );
};

export default MoviesPage;