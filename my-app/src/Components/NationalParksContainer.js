import React, { useEffect, useState } from "react";
import NationalPark from "./NationalPark";
import DropDown from "./DropDown";
import NationalParkFocus from "./NationalParkFocus";

const BASE_URL = 'https://developer.nps.gov/api/v1/parks?api_key=3nGt9ZQTH0fW8byyMhNt9bA1avBgXX7gbGuT7Rt4&limit='


function NationalParksContainer() {

    const [parks, setParks] = useState([])
    const [limitNum, setLimitNum] = useState(9)
    const [focus, setFocus] = useState(null)
    const [databaseParks, setDataBaseParks] = useState([]) 
   

    useEffect(() => {
        fetch(BASE_URL + limitNum)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setParks(data.data)
            })
    }, [limitNum])

    useEffect(() => {
        fetch('http://localhost:8000/parks')
        .then(res=>res.json())
        .then(data => setDataBaseParks(data));
    }, [])

  
    function addToTrip(park){
        setDataBaseParks([...databaseParks, park])
    }

    const parksToRender = parks.map(park => {
        if(databaseParks.some(dbPark => dbPark.id === park.id)){
            return databaseParks.find(dbPark => dbPark.id === park.id)
        }
        return park
    })

    const nationalParkComponents = parksToRender.map(park => {

        return (
            <NationalPark
                key={park.id}
                name={park.fullName}
                imageUrl={park.images[0].url}
                imageAlt={park.images[0].altText}
                park={park}
                onFocus={setFocus}
                handleClick={addToTrip}
            />
        )
    })



    return (
    <div className="cards-container">
        {focus ? <NationalParkFocus focus={focus} onClick={setFocus}/> : null}

        {nationalParkComponents}
        <button id="load-button" onClick={() => setLimitNum(limitNum => limitNum + 9)}>LoadMore</button>
    </div>
    )
}

export default NationalParksContainer;