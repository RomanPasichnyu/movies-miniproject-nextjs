import React from 'react';
import {getAllGenres} from "@/services/api.service";
import {IGenre, IGenreResponre} from "@/models/GenreModel";
import Link from "next/link";

const GenresPage = async () => {

    const {genres}: IGenreResponre = getAllGenres
    console.log(genres)
    return (
        <div>
            {genres.map((genre:IGenre)=>(
                <div key={genre.id}>
            <Link key={genre.id} href={`/genres/${genre.id}`}>
                <div> {genre.id} - {genre.name}</div>
            </Link>
                </div>))}
        </div>
    );
};

export default GenresPage;