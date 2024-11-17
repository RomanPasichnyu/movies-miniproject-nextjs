import React, {FC} from 'react';
import {IDetails} from "@/models/DetailsModel";
import {imgUrl} from "@/services/api.service";

type IProps = {
    details: IDetails
}
const DetailsComponent: FC<IProps> = ({details}) => {
    return (
        <div>
            <img src={imgUrl+details.poster_path} alt={details.title}/>
            {details.title}
            {details.original_language}
            {details.id}
        </div>
    );
};

export default DetailsComponent;