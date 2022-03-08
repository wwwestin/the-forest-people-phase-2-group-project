import React from "react";

function NationalPark({imageUrl, imageAlt, name}) {

    return (
        <div className="national-park-card">
            <h2 className="card-title">{name}</h2>
            <div className="card-image">
                <img src={imageUrl} alt={imageAlt}></img>
            </div>
        </div>
    )
}

export default  NationalPark;