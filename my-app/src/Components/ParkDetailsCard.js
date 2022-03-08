import React from "react";



function ParkDetailsCard({ park }) {

    

    function leaveReview(park) {
        // Array.map(obj => if(obj.id === id){ {…obj, hasBeen: true} }

        const parkEdit = {...park, haveBeen: "true"}

        fetch(`http://localhost:8000/parks/${park.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parkEdit)
        }
        )


    }

    return (
        <div className="national-park-card">
            <h2 className="card-title">{park.fullName}</h2>
            <img className="card-image" src={park.images[0].url} alt={park.images[0].altText}></img>
            <button onClick={() => leaveReview(park)}className="already-been">Leave a review</button>            <p className="card-description">{park.description}</p>
            <ul className="activities">
                <li>{park.activities[0].name}</li>
                <li>{park.activities[1].name}</li>
                <li>{park.activities[2].name}</li>
                <li>{park.activities[3].name}</li> 
            </ul>
            <p className="fees">{park.fees}</p>
            <p className="weather-info">{park.weatherInfo}</p>

            <div className="additional-images">
                <img className="smaller-images" src={park.images[1].url} alt={park.images[1].altText}></img>
                <img className="smaller-images" src={park.images[2].url} alt={park.images[2].altText}></img>
            </div>
            <div className="contact-information">
                <p>{park.contacts.phoneNumbers.phoneNumber}</p>
                <h4 className="card-link">{park.directionsUrl}</h4>
            </div>
        </div>
    )
}

export default ParkDetailsCard;