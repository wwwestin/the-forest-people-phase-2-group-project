import React from "react";
import NationalPark from "./NationalPark";


function NationalParksContainer({parks}) {
  
    return (
        <div className="cards-container">
            
            {parks.map((park) => (
                <NationalPark
                key={park.id}
                name={park.fullName}
                imageUrl={park.images[0].url}
                imageAlt={park.images[0].altText}
                park={park}
                />
            ))}
        </div>
    )
}

export default NationalParksContainer;