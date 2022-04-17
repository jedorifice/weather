// The p text that corresponds to this needs the same id as the text path, I think

{
  /* <svg viewBox="0 0 250 250" id="svg2">
  <circle id={props.unixSunrise + props.dt} class="notVisible" />
  <text>
    <textpath
      alignment-baseline="top"
      href={props.unixSunrise + props.dt}
      id={props.unixSunrise - props.dt}
    ></textpath>
  </text>
  <p></p>
</svg>; */
}

////////////////////// CONVERTING SUN SPOTS TO HUMAN TIME
// for (let x = 0; x < sunStart.length; x++) {
//   let startDateTime = new Date(sunStart[x].dt * 1000);
//   const humanStart = startDateTime.toLocaleString("en-GB");

//   let endDateTime = new Date(sunEnd[x].dt * 1000);
//   const humanEnd = endDateTime.toLocaleString("en-GB");

//   console.log(humanStart[x], humanEnd[x]);
// }

//  // sunEnd array

//  // if an hour is sunny, and the hour after is sunny, but the hour after that isn't sunny, then that final hour goes in the end pile
//   if (
//     (weekByHourArray[i].weather[0].icon === "01d" ||
//       weekByHourArray[i].weather[0].icon === "02d") &&
//     (weekByHourArray[i + 1].weather[0].icon === "01d" ||
//       weekByHourArray[i + 1].weather[0].icon === "02d") &&
//     weekByHourArray[i + 2].weather[0].icon != "01d" &&
//     weekByHourArray[i + 2].weather[0].icon != "02d"
//   ) {
//     sunEnd.push(weekByHourArray[i + 2]);
//   }

//   // small two hour window at end of array
//   // as i goes up to two below the array length, need a separate check on the last two hours in the array
//   //
//   if (
//     i + 2 == weekByHourArray.length &&
//     weekByHourArray[i].weather[0].icon !== "01d" &&
//     weekByHourArray[i].weather[0].icon !== "02d" &&
//     (weekByHourArray[i + 1].weather[0].icon === "01d" ||
//       weekByHourArray[i + 1].weather[0].icon === "02d") &&
//     (weekByHourArray[i + 2].weather[0].icon === "01d" ||
//       weekByHourArray[i + 2].weather[0].icon === "02d")
//   ) {
//     sunStart.push(weekByHourArray[i + 1]);
//     sunEnd.push(weekByHourArray[i + 2]);
//   }
// }
