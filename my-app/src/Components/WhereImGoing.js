import React, { useState, useEffect } from "react";
// import MyNationalPark from "./MyNationalPark"
import ParkDetailsCard from "./ParkDetailsCard";


const url = "http://localhost:8000/posts"


function WhereImGoing() {


    const [parks, setParks] = useState([])


    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setParks(data)
            })
    }, [])

    const nationalParkComponents = parks.map(park => {

        return (
            <ParkDetailsCard
                key={park.id}
                // name={park.fullName}
                // imageUrl={park.images[0].url}
                // imageAlt={park.images[0].altText}
                park={park}
            />
        )
    })


    return (
        <div className="cards-container">
            {nationalParkComponents}
        </div>
    )
}


export default WhereImGoing