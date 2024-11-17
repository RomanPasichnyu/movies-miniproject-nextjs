import {IGenre} from "@/models/GenreModel";

export interface IDetails {
	adult: boolean;
	budget: number;
	genres: IGenre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	release_date: string;
	revenue: number;
	runtime: number;
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
