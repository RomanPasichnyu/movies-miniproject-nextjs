'use client';
import React, { useEffect, useState } from 'react';
import { options } from "@/services/api.service";
import { IMovie } from "@/models/MovieModel";
import { useRouter, useSearchParams } from 'next/navigation';
import PaginationComponent from "@/app/(components)/pagination/PaginationComponent";
import Link from 'next/link';
import css from './Genre.module.css';

const fetchMoviesByGenre = async (id: string, page: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}`, options);
    return response.json();
};

const FilmsByGenreId = ({ params }: { params: Promise<{ id: string }> }) => {
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        const fetchParams = async () => {
            const resolvedParams = await params;
            setId(resolvedParams.id);
        };
        fetchParams();
    }, [params]);
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentPage = +(searchParams.get('page') || '1');
    const [movies, setMovies] = useState<IMovie[]>([]);

    // Завантаження фільмів за жанром
    const fetchData = async (page: number) => {
        if (id) {  // Перевірка, чи є id
            const data = await fetchMoviesByGenre(id, page);
            setMovies(data.results || []);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData(currentPage);
        }
    }, [currentPage, id]);

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`?${params.toString()}`);
    };

    return (
        <div>


            <div className={css.genreContainer}>
                {movies.map((movie) => (
                    <Link key={movie.id} href={`/movies/${movie.id}`} passHref>
                        <div className={css.movieCard}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className={css.movieCardContent}>
                                <h3 className={css.movieCardTitle}>{movie.title}</h3>
                                <p className={css.movieCardDate}>{movie.release_date}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className={css.paginationContainer}>
                <PaginationComponent
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default FilmsByGenreId;
