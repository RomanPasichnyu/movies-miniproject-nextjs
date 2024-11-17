import React from 'react';
import {options} from "@/services/api.service";
import DetailsComponent from "@/app/(components)/movies/[id]/DetailsComponent";

type Params = { id: string }

const MoviePage = async ({params}: { params: Params }) => {

    const details = await fetch(`https://api.themoviedb.org/3/movie/` + params.id, options)
        .then(response => response.json())

    return (
        <div>
            <DetailsComponent key={details.id} details={details}/>
        </div>
    );
};

export default MoviePage;