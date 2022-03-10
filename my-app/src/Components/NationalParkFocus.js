import React from "react"
import ParkDetailsCard from "./ParkDetailsCard"


function NationalParkFocus({focus, onClick, onRemove, onReview}) {
    return (
        <div className="detail-container">
            <ParkDetailsCard park={focus} clearCard={onClick}/>
            <div className="stupid-banner"></div>
        </div>
    )
}

export default NationalParkFocus