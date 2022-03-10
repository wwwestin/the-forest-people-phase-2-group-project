import React, { useState, useEffect} from "react";
// import ParkDetailsCard from "./ParkDetailsCard";
// import MyNationalPark from "./MyNationalPark";
import NationalParkFocus from "./NationalParkFocus";
import NationalPark from "./NationalPark";

const url = "http://localhost:8000/parks"



function WhereIveBeen() {

    const [parks, setParks] = useState([])
    const [focus, setFocus] = useState(null)


    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                const parksIBeenTo = data.filter(park => park.haveBeen)
                setParks(parksIBeenTo)
            })
    }, [])


    const nationalParkComponents = parks.map(park => {

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
    })


    return (
        <div className="cards-container">
            {focus ? <NationalParkFocus focus={focus}  onClick={setFocus}/> : null}
            {nationalParkComponents}
        </div>
    )

}

export default WhereIveBeen