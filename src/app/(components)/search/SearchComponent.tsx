'use client'
import React, {useState} from 'react';
import {getData} from "@/services/api.service";
import {IMovie} from "@/models/MovieModel";
import {IApiResponse} from "@/models/apiResponceModel";

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [searchResponse, setSearchResponse] = useState<IMovie[] | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const response: IApiResponse<IMovie> = await getData(new FormData(e.target as HTMLFormElement));
        setSearchResponse(response.results);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    placeholder="Enter search word"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div>
                {searchResponse && (<ul>
                    {searchResponse.map((movie: IMovie) => (
                        <li key={movie.id}>
                            <h3>{movie.title}</h3>
                            <p></p> {/* Заміни на актуальні поля з даних */}
                        </li>
                    ))}
                </ul>)}
            </div>
        </div>
    );
};

export default SearchPage;
