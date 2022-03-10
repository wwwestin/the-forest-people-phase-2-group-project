import React from "react";

const url = "http://localhost:8000/parks"

function NationalPark({ imageUrl, imageAlt, name, park, onFocus }) {

    function addToTrip(park) {
        const newPark = { ...park, haveBeen: false }

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

        const reviewPark = { ...park, haveBeen: "true" }

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
        <div className="national-park-card"
            onClick={(e) => {
                e.stopPropagation()
                onFocus(park)
            }}
        >

            <h2 className="card-title">{name}</h2>

            <div className="card-image">
                <img src={imageUrl} alt={imageAlt}></img>
            </div>
            {window.location.pathname === "/where-im-going" ? <button className="orange"
                onClick={(e) => {
                    e.stopPropagation()
                    addToTrip(park)
                }}>
                Add to my trip
            </button> : null}

            {window.location.pathname === "/where-ive-been" ? null : <button className="already-been"
                onClick={(e) => {
                    e.stopPropagation()
                    leaveReview(park)
                }}>
                Leave a review
            </button>}

        </div>
    )
}

export default NationalPark;