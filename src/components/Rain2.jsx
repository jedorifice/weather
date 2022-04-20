import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import "../CSSFiles/CSSRain.css";

function ShowRain2(props) {
  var dropletQuantity = Math.round(props.weatherData.current.rain["1h"] * 10);
  //   console.log(props.weatherData.current.rain["1h"]);
  var delay = Math.random();
  var rotation = props.weatherData.current.wind_deg / 50;
  var leftPosition = Math.floor(Math.random() * 500);
  console.log(leftPosition);
  const droplet = useRef();

  let raindropArray = [];

  for (let i = 0; i < dropletQuantity; i++) {
    raindropArray.push({ i });
  }
  console.log(raindropArray);

  useEffect(() => {
    gsap.fromTo(
      ".droplet",
      {
        y: 0,
        x: `${leftPosition}`,
        rotation: `${leftPosition}`,
        transformOrigin: "50% 50%",
      },
      {
        y: 800,
        x: `${leftPosition}`,
        duration: 3,
        delay: `${delay}`,
        rotation: 90,
        // transformOrigin: "50% 50%",
        // ease: "power2.inOut",
        repeat: -1,
      }
    );
  });

  //   var dropletQuantity = 1;

  //   for (var i = dropletQuantity - 1; i >= 0; i--) {
  //     var leftPosition = Math.floor(Math.random() * 100 + 1);
  //     var speed = (Math.random() * 10).toFixed(2);

  //     gsap.to(
  //       droplet.current,
  //       { speed },
  //       {
  //         y: 520,
  //         delay: delay,
  //         repeat: -1,
  //         // ease: Linear.easeNone,
  //       }
  //     );

  return (
    <>
      <section className="rainContainer">
        {raindropArray.map((item) => {
          return (
            <img
              key={item.value}
              className="droplet"
              src="./assets/raindrop2.png"
              alt="A digital drawing of a plump blue raindrop"
            />
          );
        })}
      </section>
    </>
  );
}
export default ShowRain2;

// {/* <div className="weatherContainer">
//   {/* <g id="rain1" class="rain1"> */}
//   <div className="rainSet1">
//     {raindropArray1.map((item) => {
//       return (
//         <img
//           id={item.value}
//           className="raindrop1"
//           src="https://www.transparentpng.com/thumb/raindrops/drawings-of-raindrops-clipart-7.png"
//           alt="A blue raindrop"
//         />
//       );
//     })}
//   </div>
// </div>; */}

//   style={{ left: `${leftPosition}%)` }}
