import React from "react";

const url = "http://localhost:8000/posts"

function NationalPark({ imageUrl, imageAlt, name, park }) {

    function handleClick(park) {

        const newPark = {...park, haveBeen : "false"}

        // console.log(newPark)

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
        <div  className="national-park-card">
            <h2 className="card-title">{name}</h2>

            <div className="card-image">
                <img src={imageUrl} alt={imageAlt}></img>
            </div>
            <button onClick={() => handleClick(park)} className="add-to-my-trip">Add to my trip</button>


        </div>
    )
}

export default NationalPark;