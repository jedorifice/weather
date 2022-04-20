import React from "react";
import { useState, useEffect } from "react";
import { locationAPICall } from "../utils";
import "../CSSFiles/CSSTopArea.css";

/////////////// MAKE EACH RAINDROP A COMPONENT WITH ITS OWN USEEFFECT, GSAP, CONTAINER???
////////////CAN YOU MAP OR FOR LOOP AND RETURN A CHILD COMPONENT????

function ShowLocationOptions(props) {
  const {
    tempLocationInput,
    setTempLocationInput,
    setLocationInput,
    locationOptions,
    setLocationOptions,
    weatherData,
  } = props;
  // console.log("LocationOptionsList came alive");

  useEffect(() => {
    locationOptions.map(
      (item) => {
        return item.longitude, item.latitude, item.label;
      },
      [locationOptions]
    );
  });

  // sending final location choice to App's state to trigger calling weather API
  const onSelectingOption = (longitude, latitude, label) => {
    setLocationInput({ longitude, latitude, label });
    // console.log(longitude, latitude, label);
    setTempLocationInput("");
    setLocationOptions(undefined);
  };
  // console.log(props);
  return (
    <>
      {/* <section className={weatherData ? "notDisplayed" : "LocationOptionsList"}> */}
      <section className="LocationOptionsList">
        {locationOptions.map((item) => {
          return (
            <button
              className="locationOption"
              key={item.latitude}
              onClick={() => {
                onSelectingOption(item.longitude, item.latitude, item.label);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </section>
    </>
  );
}
// <>
//   <section>
//     {locationAPICall.data.data.map((locationOption) => {
//       console.log(locationOption.label);
//       //   const locationOptionLabel = locationOption.label;
//       return <p>{locationOption.label}</p>;
//     })}
//   </section>
//   ;
// </>

//   <section>
//   {locationAPICall.data.data
//     ? locationAPICall.data.data.map((label) => {
//         return <ul>{label}</ul>;
//       })
//     : "sorry no locations match your entry"}
// </section>

//   <section>
//     <select onChange={onSelectingOption}>
//       {locationAPICall.data.data.map((locationOption) => {
//         console.log(locationOption.label);
//         const locationOptionLabel = locationOption.label;
//         return (
//           <option value={locationOptionLabel}>{locationOptionLabel}</option>
//         );
//       })}
//     </select>
//   </section>;

//  locationAPICall.data.data.map((label) => {
//               return <ul>{label}</ul>});
// const map1 = locationAPICall.data.data.map((location) => location.label);
// console.log(map1);

// for (let i = 0; i < locationAPICall.data.data.length; i++) {
//   console.log(locationAPICall.data.data[i].label);
// }

export default ShowLocationOptions;
