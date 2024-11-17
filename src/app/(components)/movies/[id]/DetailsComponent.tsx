import React, {FC} from 'react';
import {IDetails} from "@/models/DetailsModel";

type IProps = {
    details: IDetails
}
const DetailsComponent: FC<IProps> = ({details}) => {
    return (
        <div>
            {details.title}
            {details.original_language}
            {details.id}
        </div>
    );
};

export default DetailsComponent;