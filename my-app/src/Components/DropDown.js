import {useState, useEffect} from "react";
import NationalPark from "./NationalPark";
import Select from 'react-select'


function DropDown({setParks}) {
  const [selectedState, setSelectedState] = useState([]);

  useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks?api_key=3nGt9ZQTH0fW8byyMhNt9bA1avBgXX7gbGuT7Rt4&states=')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setSelectedState(data.data)
        })
  }, [])

  
  const showStates = selectedState.map(park => ({
     "value" : park.id,
     "label" : park.states
  }))

  function handleStateChange(event) {
    setParks({id:event.value, states:event.label})
    //setParks(event.target.value);
  }
  // const parksToDisplay = showStates.filter((park) => {
  //   if (selectedState === "KY") return true;
  
  //   return park.states === selectedState;
  // });

  return (
    <div className ="parkList">
      <div className="Filter">
        <Select options={showStates} onChange={handleStateChange}/>
        <p>You have selected {selectedState.id}{selectedState.states}</p>
        </div>
      <ul className="NationalPark">
        {selectedState.map((park) => (
          <NationalPark
          key={park.id}
          name={park.fullName}
          imageUrl={park.images[0].url}
          imageAlt={park.images[0].altText}
          park={park} />
        ))}
      </ul>
    </div>
  );
}
 export default DropDown;


