'use client';
import React, {useEffect, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import PaginationComponent from '@/app/(components)/pagination/PaginationComponent';
import {IMovie} from '@/models/MovieModel';
import {IApiResponse} from '@/models/apiResponceModel';
import {options} from '@/services/api.service';
import MovieComponent from "@/app/(components)/movies/MovieComponent";
import css from './Movies.module.css'

const MoviesPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [movies, setMovies] = useState<IMovie[]>([]);
    const currentPage = +(searchParams.get('page') || '1');

    const fetchMovies = async (page: number) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?page=${page}`,
                options
            );
            const data: IApiResponse<IMovie> = await response.json();
            setMovies(data.results)
        } catch (error) {
            console.error('Failed to fetch movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        router.push(`?${params.toString()}`);
    };

    return (
        <div>
            <div className={css.moviesContainer}>
                {movies.map((movie) => (<MovieComponent key={movie.id} movie={movie}/>))}
            </div>
            <div className={css.pagination}>
                <PaginationComponent currentPage={currentPage} onPageChange={changePage}/>
            </div>
        </div>
    );
};

export default MoviesPage;
