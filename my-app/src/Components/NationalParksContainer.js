import React, { useEffect, useState } from "react";
import NationalPark from "./NationalPark";

const BASE_URL = 'https://developer.nps.gov/api/v1/parks?api_key=3nGt9ZQTH0fW8byyMhNt9bA1avBgXX7gbGuT7Rt4&limit='


function NationalParksContainer() {

    const [parks, setParks] = useState([])
    const [limitNum, setLimitNum] = useState(9)
   

    useEffect(() => {
        fetch(BASE_URL + limitNum)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setParks(data.data)
            })
    }, [limitNum])

    function addToTrip(park) {
        // const newPlannedParks = [...plannedParks, park]
        // setPlannedParks(newPlannedParks)

        
        
        fetch("http://localhost:8000/parks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(park)
        }    
        )
        }
    

   


    const nationalParkComponents = parks.map(park => {

        return (
            <NationalPark
                key={park.id}
                park={park}
                handleClick={addToTrip}
            />
        )
    })


    return (
        <div className="cards-container">
            {nationalParkComponents}
            <button onClick={() => setLimitNum(limitNum => limitNum + 9)}>LoadMore</button>
        </div>
    )
}

export default NationalParksContainer;