import React from "react";
import "../CSSFiles/CSSTopArea.css";

function locationConversion(props) {
  const { weatherData } = props;
  function handleLocationInput(event) {
    if (event.keyCode === 13) {
      const input = event.target.value;
      console.log(input);
      props.setLocationInput(input);
    }
  }
  // input.focus();

  return (
    <>
      <input
        className={`topAreaParent ${weatherData ? "inputUp" : "inputDown"}`}
        type="text"
        spellCheck="false"
        autoFocus
        onKeyUp={handleLocationInput}
      />
    </>
  );
}

export default locationConversion;
