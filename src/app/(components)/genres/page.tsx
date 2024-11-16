import React from 'react';
import {getAllGenres} from "@/services/api.service";
import {IGenre, IGenreResponre} from "@/models/GenreModel";

const GenresPage = async () => {

    const {genres}: IGenreResponre = getAllGenres
    console.log(genres)
    return (
        <div>
            {genres.map((genre:IGenre)=>(<div key={genre.id}>{genre.name}</div>))}
        </div>
    );
};

export default GenresPage;