import React from "react";



function ParkDetailsCard({ park }) {

    

    function leaveReview(park) {
        // Array.map(obj => if(obj.id === id){ {…obj, hasBeen: true} }

        const parkEdit = {...park, haveBeen: true}

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
        <div className="national-park-detail-card">
            <h2 className="card-title">{park.fullName}</h2>
            <img className="card-image" src={park.images[0].url} alt={park.images[0].altText}></img>
            {park.haveBeen ? console.log("i have been") :  console.log('i aint been')}
            {park.haveBeen ? null :  <button onClick={() => leaveReview(park)}className="already-been">Leave a review</button>}
            
            <section className="card-detail-section">
                <h4>About This Beautiful Park</h4>
                <p className="card-description">{park.description}</p>
            </section>
            
            <section className="card-detail-section">
                <h4>Things to get in to</h4>
                <ul className="activities">
                    <li>{park.activities[0].name}</li>
                    <li>{park.activities[1].name}</li>
                    <li>{park.activities[2].name}</li>
                    <li>{park.activities[3].name}</li> 
                </ul>
            </section>
            
            <section className="card-detail-section">
                <h4>Cost</h4>
                {park.entranceFees.map(fee => {
                   return (
                    <div className="card-detail-cost-row">
                        <p>${fee.cost}</p>
                        <p>{fee.description}</p>                        
                    </div>
                    )
                })}
            </section>
            
            <section className="card-detail-section">
                <h4>Weather</h4>
                <p className="weather-info">{park.weatherInfo}</p>
            </section>
            
            <section className="card-detail-section no-padding">
            <div className="additional-images-carousel">
                {park.images.slice(1).map(image => <img className="card-image" src={image.url} alt={image.altText}></img>)}
            </div>
            </section>

            <footer className="card-detail-section">
                <h4>Contact</h4>
                <div className="contact-information">
                    <p>{park.contacts.phoneNumbers[0].phoneNumber}</p>
                    <a className="card-link" href={park.directionsUrl} target="_blank">{park.directionsUrl}</a>
                </div>
            </footer>
        </div>
    )
}

export default ParkDetailsCard;