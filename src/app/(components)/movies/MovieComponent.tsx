import React, {FC} from 'react';
import {IMovie} from "@/models/MovieModel";
import Link from "next/link";
import css from './Movie.module.css'


type IProps = {
    movie: IMovie
}

const MovieComponent: FC<IProps> = ({movie}) => {
    const {
        adult,
        backdrop_path,
        genre_ids,
        id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count
    } = movie

    return (
        <div className={css.movieCard}>
            <Link key={id} href={`/movies/${id}`}>

                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                />
                <div className={css.movieCardContent}>
                    <h2 className={css.movieCardTitle}>{title}</h2>
                    <p className={css.movieCardDate}>{release_date}</p>
                    <p className={css.movieCardRating}>⭐ {vote_average}</p>
                </div>

            </Link>
        </div>
    );
};

export default MovieComponent;