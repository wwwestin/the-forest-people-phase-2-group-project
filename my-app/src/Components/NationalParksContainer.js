import React, { useEffect, useState } from "react";
import NationalPark from "./NationalPark";
import NationalParkFocus from "./NationalParkFocus";
import Search from "./Search";


const BASE_URL = 'https://developer.nps.gov/api/v1/parks?api_key=3nGt9ZQTH0fW8byyMhNt9bA1avBgXX7gbGuT7Rt4&limit='


function NationalParksContainer() {

    const [parks, setParks] = useState([])
    const [limitNum, setLimitNum] = useState(9)
    const [focus, setFocus] = useState(null)
    const [search, setSearch] = useState("");
   

    useEffect(() => {
        fetch(BASE_URL + limitNum)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setParks(data.data)
            })
    }, [limitNum])

    const displayedParks = parks.filter((park) => park.states.toLowerCase().includes(search.toLowerCase()))
    console.log(displayedParks)
   


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
        <div className="search-bar">
            <Search onSearch={setSearch}/>
        </div>    
        {focus ? <NationalParkFocus focus={focus} onClick={setFocus}/> : null}

        {nationalParkComponents}
        <button id="load-button" onClick={() => setLimitNum(limitNum => limitNum + 9)}>LoadMore</button>
    </div>
    )
}

export default NationalParksContainer;