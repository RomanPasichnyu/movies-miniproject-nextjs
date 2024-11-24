import React, {FC} from 'react';
import {IDetails} from "@/models/DetailsModel";
import {imgUrl} from "@/services/api.service";
import {Badge} from 'reactstrap'; // Імпортуємо Badge з reactstrap
import css from './Details.module.css';

type IProps = {
    details: IDetails
}

const DetailsComponent: FC<IProps> = ({details}) => {
    const {title, backdrop_path, poster_path, genres, overview, runtime, vote_average} = details;

    return (
        <div className={css.detailsContainer} style={{backgroundImage: `url(${imgUrl + backdrop_path})`}}>
            <div className={css.detailsContent}>
                <img className={css.poster} src={imgUrl + poster_path} alt={title}/>
                <div className={css.textContent}>
                    <h1 className={css.title}>{title}</h1>
                    <p className={css.overview}>{overview}</p>
                    <p className={css.runtime}>Runtime: {runtime} mins</p>
                    <p className={css.rating}>Rating: {vote_average}/10</p>
                </div>

                <div className={css.genreBadgesContainer}>
                    {genres.map((genre) => (
                        <Badge key={genre.id} color="primary" className={css.genreBadge}>
                            {genre.name}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailsComponent;
