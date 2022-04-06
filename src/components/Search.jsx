import React from "react";
import { useState } from "react";
import "../CSSFiles/CSSTopArea.css";

function LocationConversion(props) {
  const [tempLocationInput, setTempLocationInput] = useState("");

  const { weatherData } = props;
  function handleLocationInput(event) {
    if (event.keyCode === 13) {
      props.setLocationInput(tempLocationInput);
      setTempLocationInput("");
    }
  }

  function onInput(event) {
    if (event.target.value === "lond") {
      setTempLocationInput("london");
    } else {
      setTempLocationInput(event.target.value);
    }
  }

  return (
    <>
      <input
        type="text"
        spellCheck="false"
        autoFocus
        value={tempLocationInput}
        onKeyUp={handleLocationInput}
        onInput={onInput}
      />
    </>
  );
}

export default LocationConversion;
