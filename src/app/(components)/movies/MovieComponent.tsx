import React, {FC} from 'react';
import {IMovie} from "@/models/MovieModel";
import Link from "next/link";
import css from './Movie.module.css'
import StarRatings from 'react-star-ratings';

type IProps = {
    movie: IMovie
}

const MovieComponent: FC<IProps> = ({movie}) => {
    const {id, poster_path, release_date, title, vote_average} = movie

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
                    <StarRatings
                        rating={vote_average}
                        starRatedColor="gold"
                        numberOfStars={10}
                        name='rating'
                        starDimension="30px"
                        starSpacing="2px"
                    />
                </div>

            </Link>
        </div>
    );
};

export default MovieComponent;