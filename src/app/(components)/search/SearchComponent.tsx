'use client';
import React, {useState} from 'react';
import {getData} from "@/services/api.service";
import {IMovie} from "@/models/MovieModel";
import {IApiResponse} from "@/models/apiResponceModel";
import Link from 'next/link';
import css from './Search.module.css';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [searchResponse, setSearchResponse] = useState<IMovie[] | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response: IApiResponse<IMovie> = await getData(new FormData(e.target as HTMLFormElement));
        setSearchResponse(response.results);
    };

    return (
        <div className={css.searchPageContainer}>
            <h1 className={css.searchTitle}>Search Movies</h1>
            <form className={css.searchForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    placeholder="Enter search word"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={css.searchInput}
                />
                <button type="submit" className={css.searchButton}>Search</button>
            </form>

            <div className={css.resultsContainer}>
                {searchResponse && (
                    <div className={css.movieCardsContainer}>
                        {searchResponse.map((movie: IMovie) => (
                            <Link key={movie.id} href={`/movies/${movie.id}`}>
                                <div className={css.movieCard}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className={css.movieCardImage}
                                    />
                                    <div className={css.movieCardContent}>
                                        <h3 className={css.movieCardTitle}>{movie.title}</h3>
                                        <p className={css.movieCardDate}>{movie.release_date}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
