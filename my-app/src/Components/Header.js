import React from "react";
import Caravan from "../caravan-solid.svg"
import Search from "./Search";

function Header({onSearch}) {

    return (
        <div className = "header">
            <h1>Road Trippin'</h1>
            <img src={Caravan} alt="test"/>
            <Search onSearch={onSearch} />
        </div>
    )
}

export default Header;



//Michael