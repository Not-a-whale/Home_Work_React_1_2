import {Card} from "react-bootstrap";
import React from "react";

interface Props {
    resource: {
        "id": number;
        "name": string;
        "year": number;
        "color": string;
        "pantone_value": string;
    } | null
}

const UserCard = (props: Props) => {
    if (!props.resource) {
        return null
    }
    const imgPath = "https://0.academia-photos.com/attachment_thumbnails/42554273/mini_magick20190217-2769-p0vdsx.png?1550435947";
    const { id, name, year, color, pantone_value } = props.resource

    return (

        <div className="card">
            <img className="card-img-top" src={imgPath} alt="Card image cap" />
            <p style={{padding: '10px 10px 0 15px', fontSize: '20px'}}>{id}</p>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">{year}</h6>
                    <p className="card-text">{color}</p>
                    <span>{pantone_value}</span>
                </div>
        </div>
    )
}

export default UserCard
