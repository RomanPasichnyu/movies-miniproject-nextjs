import React from 'react';
import { getAllGenres } from "@/services/api.service";
import { IGenre, IGenreResponre } from "@/models/GenreModel";
import Link from "next/link";
import css from './Genres.module.css';

const GenresPage = async () => {
    const { genres }: IGenreResponre = getAllGenres;
    return (
        <div className={css.genresContainer}>
            {genres.map((genre: IGenre) => (
                <Link key={genre.id} href={`/genres/${genre.id}`}>
                    <div className={css.genreCard}>
                        <h3 className={css.genreName}>{genre.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default GenresPage;
