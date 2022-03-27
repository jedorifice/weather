import React from "react";

function locationConversion(props) {
  function handleLocationInput(event) {
    if (event.keyCode === 13) {
      const input = event.target.value;
      console.log(input);
      props.setLocationInput(input);
    }
  }

  return (
    <>
      <input type="text" onKeyUp={handleLocationInput} />
    </>
  );
}

export default locationConversion;
