'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import PaginationComponent from '@/app/(components)/pagination/PaginationComponent';
import { IMovie } from '@/models/MovieModel';
import { IApiResponse } from '@/models/apiResponceModel';
import { options } from '@/services/api.service';

const MoviesPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    const fetchMovies = async (page: number) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?page=${page}`,
                options
            );
            const data: IApiResponse<IMovie> = await response.json();
            setMovies(data.results);
            setTotalPages(data.total_pages);
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
            {/* Рендеринг постів */}
            <div>
                {movies.map((movie) => (
                    <Link key={movie.id} href={`/movies/${movie.id}`}>
                        <div>
                            {movie.id} - {movie.title}
                        </div>
                    </Link>
                ))}
            </div>

            {/* Підключення пагінації */}
            <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={changePage}
            />
        </div>
    );
};

export default MoviesPage;
