function FindSun(props) {
  const weekByHourArray = props.weatherData.hourly;

  // weekByHourArray.map((icon) => {

  // for-loop over hourly weather array to check:
  // if (arr[i] === sunny && arr[i+1] === sunny), then check if arr[i+2], if truthy then check arr[1+3], and so on
  // return arr[i] and the last element where this was truthy
  let sunStart = [];
  let sunEnd = [];
  let locationTimezone = props.weatherData.timezone;
  for (let i = 0; i + 2 < weekByHourArray.length; i++) {
    if (
      (weekByHourArray[i].weather[0].icon === "01d" ||
        weekByHourArray[i].weather[0].icon === "02d") &&
      (weekByHourArray[i + 1].weather[0].icon === "01d" ||
        weekByHourArray[i + 1].weather[0].icon === "02d")
    ) {
      sunStart.push(weekByHourArray[i]);
    }
    if (
      (weekByHourArray[i].weather[0].icon === "01d" ||
        weekByHourArray[i].weather[0].icon === "02d") &&
      (weekByHourArray[i + 1].weather[0].icon === "01d" ||
        weekByHourArray[i + 1].weather[0].icon === "02d") &&
      weekByHourArray[i + 2].weather[0].icon != "01d" &&
      weekByHourArray[i + 2].weather[0].icon != "02d"
    ) {
      sunEnd.push(weekByHourArray[i + 2]);
    }
  }
  console.log(sunStart, sunEnd);

  // console.log(sunStart.weather[0].icon, sunEnd.weather[0].icon);

  // for (let x = 0; x < sunStart.length; x++) {
  //   let startDateTime = new Date(sunStart[x].dt * 1000);
  //   const humanStart = startDateTime.toLocaleString("en-GB");

  //   let endDateTime = new Date(sunEnd[x].dt * 1000);
  //   const humanEnd = endDateTime.toLocaleString("en-GB");

  //   console.log(humanStart[x], humanEnd[x]);
  // }

  // make array of all two-hour arrays.
  //loop over so that:
  // if array[0][1] === array[1][0], slice off one duplicate, then push the two arrays together into one?
  // then you would have several arrays of varying lengths x, where el[0] is when the sun starts and el[x] is where the sun ends
  // let arrayOfArrays = [];
  // const twoHourSun = [weekByHourArray[i].dt, weekByHourArray[i + 1].dt];
  // arrayOfArrays = [twoHourSun];
  // console.log(twoHourSun);

  // // if (weekByHourArray.weather[0].icon === "01d" || "02d") {

  // // }

  //         return (
  //           <DayWeather
  //             key={dayWeather.dt}
  //             weatherDate={dayWeather.dt}
  //             temp={dayWeather.temp.day}
  //             textDescription={dayWeather.weather[0].description}
  //             icon={dayWeather.weather[0].icon}
  //           />
  //         );
  //       })}

  //     const avgSunriseUnix = Math.round(
  //       sunrises.reduce((result, number) => result + number) / sunrises.length
  //     );

  //     console.log(avgSunriseUnix);

  //     const date = new Date(avgSunriseUnix * 1000);
  //     const avgSunriseHuman = date.toLocaleTimeString([], {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     });

  //     return (
  //       <>
  //         <p> average sunrise this week is {avgSunriseHuman}</p>
  //       </>
  //     );
}

export default FindSun;
