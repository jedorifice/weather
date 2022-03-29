import React from "react";
import "../CSSFiles/Search.css";

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
      <section className="parent">
        <svg className="child" viewBox="80 10 250 190" id="svg1">
          <path
            id="welcomeCurve"
            class="notVisible"
            d=" M 100 200 A 100 100 0 0 1 300 200"
          />
          <text width="100">
            <textPath
              alignment-baseline="top"
              textLength="125%"
              href="#welcomeCurve"
              className="welcomeText"
            >
              Where would you like the weather for?
            </textPath>
          </text>
        </svg>

        <input className="child" type="text" onKeyUp={handleLocationInput} />
      </section>
    </>
  );
}

export default locationConversion;
