import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header";
import Navbar from "./Navbar";
import NationalParksContainer from "./NationalParksContainer";
import WhereImGoing from "./WhereImGoing";
import WhereIveBeen from "./WhereIveBeen";



function App() {

    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<NationalParksContainer />} />
                <Route path="/where-im-going" component={<WhereImGoing />} />
                <Route path="/where-ive-been" component={<WhereIveBeen />} />
            </Routes>
        </Router>
    )


}


export default App;
