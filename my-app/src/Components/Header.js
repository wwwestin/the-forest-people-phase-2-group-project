import React from "react";
import Caravan from "../caravan-solid.svg"
function Header() {

    return (
        <div className = "header">
            <h1><span style={{color: "#283618"}}>Road</span> Trippin'</h1>
            <img src={Caravan}/>
        </div>
    )
}

export default Header;