'use client';
import React, {useEffect, useState} from 'react';
import {options} from "@/services/api.service";
import {IMovie} from "@/models/MovieModel";
import {useRouter, useSearchParams} from 'next/navigation';
import PaginationComponent from "@/app/(components)/pagination/PaginationComponent";

type Params = { id: string };

const fetchMoviesByGenre = async (id: string, page: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?genre=${id}&page=${page}`, options);
    return response.json();
};

const FilmsByGenreId = ({params}: { params: Params }) => {
    const {id} = params;
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentPage = +(searchParams.get('page') || '1'); // Поточна сторінка з URL
    const [movies, setMovies] = useState<IMovie[]>([]);

    // Функція для отримання фільмів за жанром
    const fetchData = async (page: number) => {
        const data = await fetchMoviesByGenre(id, page);
        setMovies(data.results || []);
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage, id]); // Завантажуємо дані при зміні сторінки або жанру

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`?${params.toString()}`); // Оновлюємо URL з новою сторінкою
    };

    return (
        <div>
            <h1>Films by Genre ID: {id}</h1>
            <p>Showing page {currentPage}</p>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>

            <PaginationComponent
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default FilmsByGenreId;
