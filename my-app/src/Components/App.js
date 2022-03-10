import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import NationalParksContainer from "./NationalParksContainer";
import WhereImGoing from "./WhereImGoing";
import WhereIveBeen from "./WhereIveBeen";



function App() {
    const [search, setSearch] = useState("");
    const [parks, setParks] = useState([]);
    const [limitNum, setLimitNum] = useState(9);

    const BASE_URL = 'https://developer.nps.gov/api/v1/parks?api_key=3nGt9ZQTH0fW8byyMhNt9bA1avBgXX7gbGuT7Rt4&limit='

    useEffect(() => {
        fetch(BASE_URL + limitNum)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setParks(data.data)
            })
    }, [limitNum])


    const displayedParks = parks.filter((park) =>
    park.fullName.toLowerCase().includes(search.toLowerCase())
  );
    
    return (
        <Router>
            <Header onSearch={setSearch}/>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<NationalParksContainer parks = {displayedParks} />} />
                <Route path="/where-im-going" element= {<WhereImGoing />} />
                <Route path="/where-ive-been" element={<WhereIveBeen />} />
            </Routes>
            <button id="load-button" onClick={() => setLimitNum(limitNum => limitNum + 9)}>LoadMore</button>
        </Router>
    )


}


export default App;
