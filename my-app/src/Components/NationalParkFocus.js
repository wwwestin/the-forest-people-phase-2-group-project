import React from "react"
import ParkDetailsCard from "./ParkDetailsCard"


function NationalParkFocus({focus, onClick, onRemove, onReview}) {
    return (
        <div>
            <ParkDetailsCard park={focus} clearCard={onClick} onRemove={onRemove} onReview={onReview}/>
        </div>
    )
}

export default NationalParkFocus