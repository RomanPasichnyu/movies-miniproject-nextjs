import React from 'react';
import { options } from "@/services/api.service";
import { IMovie } from "@/models/MovieModel";

type Params = { id: string };

const fetchMoviesByGenre = async (id: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?genre=${id}`, options);
    return response.json();
};

const FilmsByGenreId = async ({ params }: { params: Params }) => {
    const { id } = params;
    const data = await fetchMoviesByGenre(id);
    const movies: IMovie[] = data.results || [];

    return (
        <div>
            <h1>Films by Genre ID</h1>
            <p>Genre ID: {id}</p>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilmsByGenreId;
