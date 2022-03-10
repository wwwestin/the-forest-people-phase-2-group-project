import React, {useState} from "react";




function ParkDetailsCard({ park, clearCard, onReview }) {


    const [stars, setStars] = useState(["☆","☆","☆","☆","☆"]);

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

    

    const activitiesSlice = (parkToMap) => {
        console.log(parkToMap)
        if( parkToMap.activities.length <= 4) {
            return park.activities
        } else {
            return parkToMap.activities.slice(0,4)
        }
    }

    let activities = activitiesSlice(park)
    console.log(activities)


    const parkActivities = activities.map(activity => {
        return (
            <li>{activity.name}</li>
        )
    })

    function handleClick(index) {
        console.log(index);
        let review = [];
        for(let i = 0; i <= 4; i++){
            i <= index ? review.push("★") : review.push("☆")
        }
        setStars(review)
        onReview(review, park.id);
    }

    return (
        <div className="national-park-detail-card">
            <h2 className="card-title">
                {park.fullName}
                <button onClick={() => clearCard(null)}>X</button>
            </h2>
            <img className="card-image" src={park.images[0].url} alt={park.images[0].altText}></img>
            <section className="card-detail-section">
                {console.log(!park.starRating)}
                {park.starRating ? <h4>Review</h4>  : <h4>Leave a review</h4>}
                {console.log("this is what the star state looks like: ", stars)}
                <ul className="star-container">
                    {park.starRating ? 
                         park.starRating.map((star) => {
                            return <li className="star">{star}</li>
                        })
                        :
                        stars.map((star, index) => {
                            return <li onClick={() => handleClick(index)} className="star">{star}</li>
                        })}
                        
                </ul>
            </section>
            {park.haveBeen ? console.log("i have been") :  console.log('i aint been')}
            {park.haveBeen ? null :  <button onClick={() => leaveReview(park)}className="already-been">Leave a review</button>}
            
            <section className="card-detail-section">
                <h4>About This Beautiful Park</h4>
                <p className="card-description">{park.description}</p>
            </section>
            
            <section className="card-detail-section">
                <h4>Things to get in to</h4>
                <ul className="activities">
                    {parkActivities} 
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
                    <a className="card-link" href={park.directionsUrl} target="_blank" rel="noreferrer">{park.directionsUrl}</a>
                </div>
            </footer>
        </div>
    )
}

export default ParkDetailsCard;