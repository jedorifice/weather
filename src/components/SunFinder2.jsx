function FindSun2(props) {
  const weekByHourArray = props.weatherData.hourly;

  let sunStart = [];
  let sunEnd = [];

  if (
    weekByHourArray[0].weather[0].icon === ("01d" || "02d") &&
    weekByHourArray[1].weather[0].icon === ("01d" || "02d")
  ) {
    sunStart.push(weekByHourArray[0]);
  }

  if (
    weekByHourArray[0].weather[0].icon === ("01d" || "02d") &&
    weekByHourArray[1].weather[0].icon === ("01d" || "02d") &&
    weekByHourArray[2].weather[0].icon !== ("01d" || "02d")
  ) {
    sunEnd.push(weekByHourArray[2]);
  }

  for (let i = 1; i + 2 < weekByHourArray.length; i++) {
    // sunStart array
    // if an hour is sunny, and the hour after is sunny, and the hour before was not sunny, then the hour goes in the start array
    if (
      weekByHourArray[i].weather[0].icon === ("01d" || "02d") &&
      weekByHourArray[i + 1].weather[0].icon === ("01d" || "02d") &&
      weekByHourArray[i - 1].weather[0].icon !== ("01d" || "02d")
    ) {
      sunStart.push(weekByHourArray[i]);
    }

    // sunEnd array
    // if an hour is sunny, and the hour after is sunny, but the hour after that isn't sunny, then that final hour goes in the end pile
    if (
      weekByHourArray[i].weather[0].icon === ("01d" || "02d") &&
      weekByHourArray[i + 1].weather[0].icon === ("01d" || "02d") &&
      weekByHourArray[i + 2].weather[0].icon != ("01d" || "02d")
    ) {
      sunEnd.push(weekByHourArray[i + 2]);
    }

    // small two hour window at end of array
    // since i goes up to two below the array length, need a separate check on the last two hours in the array

    if (
      i + 2 == weekByHourArray.length &&
      weekByHourArray[i].weather[0].icon !== ("01d" || "02d") &&
      weekByHourArray[i + 1].weather[0].icon === ("01d" || "02d") &&
      weekByHourArray[i + 2].weather[0].icon === ("01d" || "02d")
    ) {
      sunStart.push(weekByHourArray[i + 1]);
      sunEnd.push(weekByHourArray[i + 2]);
    }
  }

  console.log(sunStart, sunEnd);

  let humanStart = [];
  let humanEnd = [];

  // Request a weekday along with a long date
  let localTimezone = props.weatherData.timezone;
  const options = { timeZone: `${localTimezone}` };

  sunStart.length > 0
    ? convertToHumanTime()
    : console.log("There is no sun in the next 48 hours lol");

  function convertToHumanTime() {
    for (let x = 0; x < sunStart.length; x++) {
      let startDateTime = new Date(sunStart[x].dt * 1000);
      humanStart.push(startDateTime.toLocaleString("en-GB", options));

      let endDateTime = new Date(sunEnd[x].dt * 1000);
      humanEnd.push(endDateTime.toLocaleString("en-GB", options));
    }
    console.log(humanStart, humanEnd);
  }

  return (
    <>
      <p>hi this is a test</p>
    </>
  );
}
export default FindSun2;