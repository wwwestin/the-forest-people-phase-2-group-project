import React, { useState, useEffect } from "react";
import NationalParkFocus from "./NationalParkFocus";
import NationalPark from "./NationalPark";


const url = "http://localhost:8000/parks"


function WhereImGoing() {


    const [parks, setParks] = useState([])
    const [focus, setFocus] = useState(null)


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const parksToReview = data.filter(park => !park.haveBeen)
                setParks(parksToReview)
            })
    }, [])

    // debugger
    // const parksFilterHaveBeen = parks.filter(park => park.haveBeen.includes("false"))

    const nationalParkComponents = parks.map(park => {
        console.log(park)

        return (
            <NationalPark
                key={park.id}
                name={park.fullName}
                imageUrl={park.images[0].url}
                imageAlt={park.images[0].altText}
                park={park}
                onFocus={setFocus}
            />
        )
    }
    )


    return (
        <div className="cards-container">
            {focus ? <NationalParkFocus focus={focus}  onClick={setFocus}/> : null}
            {nationalParkComponents}
        </div>
    )
}


export default WhereImGoing