import React from "react";
import { useState, useEffect } from "react";
import { getLocationOptions } from "../utils";
import LocationOptionsList from "./LocationOptionsList";
import "../CSSFiles/CSSTopArea.css";

function HandleUserSearchBox(props) {
  const [tempLocationInput, setTempLocationInput] = useState("");
  const [locationOptions, setLocationOptions] = useState();

  const { setLocationInput, weatherData } = props;

  // Storing user's input in component's state each time the input changes
  function inputHandler(event) {
    setTempLocationInput(event.target.value);
    console.log(tempLocationInput);
  }

  // Function to call location API to return list of options based on user input
  async function callLocationAPI() {
    if (tempLocationInput.length >= 3) {
      const result = await getLocationOptions(tempLocationInput);
      console.log(result);
      setLocationOptions(result.data);
    }
  }

  // Above function wrapped in a useEffect
  useEffect(() => {
    callLocationAPI();
  }, [tempLocationInput]);

  return (
    <>
      <section className="searchSection">
        <section>
          <input
            type="text"
            spellCheck="false"
            autoFocus
            value={tempLocationInput}
            onInput={inputHandler}
          />
        </section>
        {locationOptions && (
          <LocationOptionsList
            setTempLocationInput={setTempLocationInput}
            setLocationInput={setLocationInput}
            locationOptions={locationOptions}
            setLocationOptions={setLocationOptions}
            weatherData={weatherData}
          />
        )}
      </section>
    </>
  );
}

export default HandleUserSearchBox;

// const handleLocationChoice = (e) => {
//   props.setLocationInput(e.target.value);
// };
