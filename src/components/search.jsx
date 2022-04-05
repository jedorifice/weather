import React from "react";
import "../CSSFiles/CSSTopArea.css";
import WelcomeText from "./WelcomeText";

function locationConversion(props) {
  function handleLocationInput(event) {
    if (event.keyCode === 13) {
      console.log(props.weatherData);
      const input = event.target.value;
      console.log(input);
      props.setLocationInput(input);
    }
  }
  // input.focus();

  return (
    <>
      <input
        className="topAreaParent"
        type="text"
        spellCheck="false"
        onKeyUp={handleLocationInput}
      />
      <WelcomeText text={props.text} />
    </>
  );
}

export default locationConversion;
