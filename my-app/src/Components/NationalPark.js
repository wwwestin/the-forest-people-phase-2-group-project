import React from "react";

function NationalPark({ park, handleClick }) {

    return (
        <div className="national-park-card">
            <h2 className="card-title">{park.fullName}</h2>
            <img className="card-image" src={park.images[0].url} alt={park.images[0].altText}></img>
            <button onClick={()=> handleClick(park)} className="card-button">Add To My Trip</button>
            <button className="card-button">Please Review</button>
        </div>
    )
}

export default  NationalPark;