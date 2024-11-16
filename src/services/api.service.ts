export const token: string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRlNmQyMjY1ZDc2MTQ4MmYyZjYzYWFmMjA5YzhhZiIsIm5iZiI6MTczMTc3OTc1OC4wNTY3NjI1LCJzdWIiOiI2NWQ4ZWYxZGY5MTgzYTAxNjM1NWRkNWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.r2YbdxDSp696_KRQmHZCoMMM6Tk1hoB4JYko506diQY'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: token
    }
};

export const getAllMovies = await fetch(`https://api.themoviedb.org/3/discover/movie`, options)
    .then(response => response.json())


export const getAllGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list', options)
    .then(response => response.json())

export const searchByKeyword = await fetch('https://api.themoviedb.org/3/search/movie?query=', options)
    .then(response => response.json())