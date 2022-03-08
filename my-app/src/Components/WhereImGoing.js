import React, { useState, useEffect } from "react";
// import MyNationalPark from "./MyNationalPark"
import ParkDetailsCard from "./ParkDetailsCard";


const url = "http://localhost:8000/parks"


function WhereImGoing() {


    const [parks, setParks] = useState([])


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const parksToReview = data.filter(park => park.haveBeen === "false")
                setParks(parksToReview)
            })
    }, [parks])

    // debugger
    // const parksFilterHaveBeen = parks.filter(park => park.haveBeen.includes("false"))

    const nationalParkComponents = parks.map(park => {
        console.log(park)

        return (
            <ParkDetailsCard
                key={park.id}
                name={park.fullName}
                imageUrl={park.images[0].url}
                imageAlt={park.images[0].altText}
                park={park}
            />
        )
    }
    )


    return (
        <div className="cards-container">
            {nationalParkComponents}
        </div>
    )
}


export default WhereImGoing