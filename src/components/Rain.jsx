import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import "../CSSFiles/CSSRain.css";

function ShowRain(props) {
  useEffect(() => {
    const random1 = Math.random() * 1000;
    var tween1 = gsap.fromTo(
      ".raindrop1",
      { y: 0, x: random1 },
      { y: 1000, x: random1, duration: 2, repeat: -1 }
    );

    const random2 = Math.random() * 1000;
    var tween2 = gsap.fromTo(
      ".raindrop2",
      { y: 0, x: random2 },
      { y: 1000, duration: 2, repeat: -1 }
    );
    tween2.delay(0.5);

    const random3 = Math.random() * 1000;
    var tween3 = gsap.fromTo(
      ".raindrop3",
      { y: 0, x: random3 },
      { y: 1000, x: random3, duration: 2, repeat: -1 }
    );
    tween3.delay(1);

    const random4 = Math.random() * 1000;
    var tween4 = gsap.fromTo(
      ".raindrop4",
      { y: 0, x: random4 },
      { y: 1000, x: random4, duration: 2, repeat: -1 }
    );
    tween4.delay(1.5);
  });

  if (props.weatherData.current.rain["1h"]) {
    const raindropArray1 = [];
    const raindropArray2 = [];
    const raindropArray3 = [];
    const raindropArray4 = [];

    const currentRainProportion = Math.round(
      props.weatherData.current.rain["1h"] * 10
    );

    console.log(
      props.weatherData.current.rain["1h"],
      currentRainProportion,
      raindropArray1
    );

    for (let i = 0; i < currentRainProportion / 4; i++) {
      raindropArray1.push({ i });
    }

    for (
      let i = currentRainProportion / 4;
      i < currentRainProportion / 2;
      i++
    ) {
      raindropArray2.push({ i });
    }

    for (
      let i = currentRainProportion / 2;
      i < 3 * (currentRainProportion / 4);
      i++
    ) {
      raindropArray3.push({ i });
    }

    for (
      let i = 3 * (currentRainProportion / 4);
      i < currentRainProportion;
      i++
    ) {
      raindropArray4.push({ i });
    }

    return (
      <>
        <div className="weatherContainer">
          {/* <g id="rain1" class="rain1"> */}
          <div className="rainSet1">
            {raindropArray1.map((item) => {
              return (
                <img
                  id={item.value}
                  className="raindrop1"
                  src="https://www.transparentpng.com/thumb/raindrops/drawings-of-raindrops-clipart-7.png"
                  alt="A blue raindrop"
                />
              );
            })}
          </div>
          <div className="rainSet2">
            {raindropArray2.map((item) => {
              return (
                <img
                  id={item.value}
                  className="raindrop2"
                  src="https://www.transparentpng.com/thumb/raindrops/drawings-of-raindrops-clipart-7.png"
                  alt="A blue raindrop"
                />
              );
            })}
          </div>
          {/* </g> */}
          {/* <g id="rain2" class="rain2"> */}
          <div className="rainSet3">
            {raindropArray3.map((item) => {
              return (
                <img
                  id={item.value}
                  className="raindrop3"
                  src="https://www.transparentpng.com/thumb/raindrops/drawings-of-raindrops-clipart-7.png"
                  alt="A blue raindrop"
                />
              );
            })}
          </div>
          <div className="rainSet4">
            {raindropArray4.map((item) => {
              return (
                <img
                  id={item.value}
                  className="raindrop4"
                  src="https://www.transparentpng.com/thumb/raindrops/drawings-of-raindrops-clipart-7.png"
                  alt="A blue raindrop"
                />
              );
            })}
          </div>
          {/* </g> */}
        </div>
      </>
    );
  }
}
export default ShowRain;
