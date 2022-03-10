import React from "react"
import ParkDetailsCard from "./ParkDetailsCard"


function NationalParkFocus({focus, onClick}) {
    return (
        <div>
            <ParkDetailsCard park={focus} clearCard={onClick}/>
        </div>
    )
}

export default NationalParkFocus