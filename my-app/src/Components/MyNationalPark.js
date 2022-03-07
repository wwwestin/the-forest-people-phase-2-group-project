import React from "react";

function MyNationalPark({ imageUrl, imageAlt, name }) {

    return (
        <div className="national-park-card">
            <h2 className="card-title">{name}</h2>
            <img className="card-image" src={imageUrl} alt={imageAlt}></img>
        </div>
    )
}

export default MyNationalPark;