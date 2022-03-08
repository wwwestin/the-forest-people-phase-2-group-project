import React from "react";

const url = "http://localhost:8000/posts"

function NationalPark({ imageUrl, imageAlt, name, park }) {

    function handleClick(park) {

        const newPark = {...park, haveBeen : "false"}

        console.log(newPark)

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPark)
        }
        )
    }

    return (
        <div onClick={() => handleClick(park)} className="national-park-card">
            <h2 className="card-title">{name}</h2>

            <div className="card-image">
                <img src={imageUrl} alt={imageAlt}></img>
            </div>

        </div>
    )
}

export default NationalPark;