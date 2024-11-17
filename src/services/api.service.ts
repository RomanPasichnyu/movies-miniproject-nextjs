import {IApiResponse} from "@/models/apiResponceModel";
import {IMovie} from "@/models/MovieModel";

export const imgUrl = 'https://image.tmdb.org/t/p/w500'

export const token: string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRlNmQyMjY1ZDc2MTQ4MmYyZjYzYWFmMjA5YzhhZiIsIm5iZiI6MTczMTc3OTc1OC4wNTY3NjI1LCJzdWIiOiI2NWQ4ZWYxZGY5MTgzYTAxNjM1NWRkNWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.r2YbdxDSp696_KRQmHZCoMMM6Tk1hoB4JYko506diQY'

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: token
    }
};

export const getAllMovies = await fetch(`https://api.themoviedb.org/3/discover/movie`, options)
    .then(response => response.json())

export const getMovieDetails = async (id: number) => {
    await fetch(`https://api.themoviedb.org/3/movie/`, options)
        .then(response => response.json())
}

export const getAllGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list', options)
    .then(response => response.json())


export const searchByKeyword = async (query: string) => {
    return await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`, options)
        .then((response) => response.json());
};

export const getData = async (formData: FormData) => {
    const query = formData.get('query');
    if (typeof query !== 'string') {
        throw new Error('Invalid or missing keyword parameter');
    }
    const searchResponce: IApiResponse<IMovie> = await searchByKeyword(query);
    return searchResponce;
};

