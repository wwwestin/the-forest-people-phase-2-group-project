import React, {useEffect, useState} from "react";
import NationalPark from "./NationalPark";

const BASE_URL = 'https://developer.nps.gov/api/v1/parks?api_key=3nGt9ZQTH0fW8byyMhNt9bA1avBgXX7gbGuT7Rt4&limit=9'


function NationalParksContainer() {
    
    const [parks, setParks] = useState([])

    useEffect(() => {
        fetch(BASE_URL)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            setParks(data.data)
        })
    }, [])

    const nationalParkComponents = parks.map(park => {
        console.log(park)
        return (
            <NationalPark
                key={park.id}
                name={park.fullName}
                imageUrl = {park.images[0].url}
                imageAlt = {park.images[0].altText}
            />
        )
    })

    console.log(nationalParkComponents)

    return <div className="cards-container">
        {nationalParkComponents}
    </div>
}

export default NationalParksContainer;