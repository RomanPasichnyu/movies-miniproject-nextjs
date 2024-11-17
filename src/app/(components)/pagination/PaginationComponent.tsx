'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IMovie } from '@/models/MovieModel';
import { IApiResponse } from '@/models/apiResponceModel';
import { options } from '@/services/api.service';

const PaginationComponent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [movies, setMovies] = useState<IApiResponse<IMovie> | null>(null); // Зберігає отримані дані
    const [currentPage, setCurrentPage] = useState<number>(
        parseInt(searchParams.get('page') || '1', 10)
    ); // Стан для поточної сторінки

    const fetchMovies = async (page: number) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?page=${page}`,
                options
            );
            const data: IApiResponse<IMovie> = await response.json();
            setMovies(data);
        } catch (error) {
            console.error('Failed to fetch movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]); // Викликається при зміні сторінки

    const updatePage = (newPage: number) => {
        setCurrentPage(newPage); // Оновлює стан сторінки
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`?${params.toString()}`);
    };

    const prevPage = () => {
        if (movies && currentPage > 1) {
            updatePage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (movies && currentPage < movies.total_pages) {
            updatePage(currentPage + 1);
        }
    };

    return (
        <div>
            {movies && (
                <>
                    <div>
                        {movies.results.map((movie) => (
                            <div key={movie.id}>
                                <p>{movie.title}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button onClick={prevPage} disabled={currentPage === 1}>
                            Prev page
                        </button>
                        <span>
                            Page {currentPage} of {movies.total_pages}
                        </span>
                        <button
                            onClick={nextPage}
                            disabled={currentPage === movies.total_pages}
                        >
                            Next page
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default PaginationComponent;
