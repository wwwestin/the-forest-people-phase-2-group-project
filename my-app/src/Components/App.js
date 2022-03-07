import React from "react";
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
>>>>>>> 0b55de284d8455049110b1059fdfb67ac62c6118
import Header from "./Header";
import Navbar from "./Navbar";
import NationalParksContainer from "./NationalParksContainer";
import WhereImGoing from "./WhereImGoing";
import WhereIveBeen from "./WhereIveBeen";




function App() {

    return (
<<<<<<< HEAD
        <div>
            <div>
=======
        <Router>
>>>>>>> 0b55de284d8455049110b1059fdfb67ac62c6118
            <Header />
            </div>
            <nav>
            <Navbar />
<<<<<<< HEAD
            </nav>
            <container>
                <NationalParksContainer />
            </container>
        </div>
=======
            <Routes>
                <Route exact path="/" element={<NationalParksContainer />} />
                <Route path="/where-im-going" component={<WhereImGoing />} />
                <Route path="/where-ive-been" component={<WhereIveBeen />} />
            </Routes>
        </Router>
>>>>>>> 0b55de284d8455049110b1059fdfb67ac62c6118
    )


}


export default App;
