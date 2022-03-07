import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import NationalParksContainer from "./NationalParksContainer";


function App() {

    return (
        <div>
            <div>
            <Header />
            </div>
            <nav>
            <Navbar />
            </nav>
            <container>
                <NationalParksContainer />
            </container>
        </div>
    )


}


export default App;
