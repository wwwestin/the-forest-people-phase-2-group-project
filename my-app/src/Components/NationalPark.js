import React from "react";

const url = "http://localhost:8000/parks"

function NationalPark({ imageUrl, imageAlt, name, park }) {

    function addToTrip(park) {
        const newPark = {...park, haveBeen : false}
    
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPark)
        }
        )
    }

    function leaveReview(park) {

        const reviewPark ={...park, haveBeen: "true"}

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewPark)
        }
        )
    }

    return (
        <div  className="national-park-card">
            <h2 className="card-title">{name}</h2>

            <div className="card-image">
                <img src={imageUrl} alt={imageAlt}></img>
            </div>
            <button onClick={() => addToTrip(park)} className="add-to-my-trip">Add to my trip</button>
            <button onClick={() => leaveReview(park)}className="already-been">Leave a review</button>

        </div>
    )
}

export default NationalPark;