import React, { useEffect, useState } from "react";
import ParkDetailsCard from "./ParkDetailsCard";


const WhereImGoing = () => {

    const [plannedTrip, setPlannedTrip] = useState([])
    console.log(plannedTrip)
    useEffect(() => {
        fetch("http://localhost:8000/parks")
            .then(res => res.json())
            .then(data => setPlannedTrip(data))
    }, [])


    const mapPlannedTrip = plannedTrip.map(park => {
        return (
            <ParkDetailsCard key={park.id} park={park} />
        )
    })

    // console.log(plannedTrip)

    return (
        <div>
            {mapPlannedTrip}
        </div>
    )
}

export default WhereImGoing