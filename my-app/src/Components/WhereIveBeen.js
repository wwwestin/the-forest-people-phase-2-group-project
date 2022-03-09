import React, { useState, useEffect} from "react";
import ParkDetailsCard from "./ParkDetailsCard";
// import MyNationalPark from "./MyNationalPark";

const url = "http://localhost:8000/parks"



function WhereIveBeen() {

    const [parks, setParks] = useState([])


    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                const parksIBeenTo = data.filter(park => park.haveBeen === "true")
                setParks(parksIBeenTo)
            })
    }, [])


    const nationalParkComponents = parks.map(park => {

        return (
            <ParkDetailsCard
                key={park.id}
                name={park.fullName}
                imageUrl={park.images[0].url}
                imageAlt={park.images[0].altText}
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

export default WhereIveBeen