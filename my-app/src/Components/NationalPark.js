import React from "react";

function NationalPark({ park, handleClick }) {

    return (
        <div className="national-park-card">
            <h2 className="card-title">{park.fullName}</h2>
            <img className="card-image" src={park.images[0].url} alt={park.images[0].altText}></img>
            <button onClick={()=> handleClick(park)} className="card-button">Lets go!</button>
            <button className="card-button">Been there!</button>
        </div>
    )
}

export default  NationalPark;