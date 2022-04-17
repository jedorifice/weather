function FindSun(props) {
  const weekByHourArray = props.weatherData.hourly;

  let sunStart = [];
  let sunEnd = [];
  let locationTimezone = props.weatherData.timezone;

  for (let i = 0; i + 2 < weekByHourArray.length; i++) {
    // sunStart array
    // for the first hour in the array, if it's sunny, and the second hour is sunny, then hour[1] goes in the start array
    if (
      (i =
        0 &&
        (weekByHourArray[0].weather[0].icon === "01d" ||
          weekByHourArray[0].weather[0].icon === "02d") &&
        (weekByHourArray[1].weather[0].icon === "01d" ||
          weekByHourArray[1].weather[0].icon === "02d"))
    ) {
      sunStart.push(weekByHourArray[0]);
    }
    // else if an hour is sunny, and the hour after is sunny, and the hour before was not sunny, then the hour goes in the start array
    else if (
      (weekByHourArray[i].weather[0].icon === "01d" ||
        weekByHourArray[i].weather[0].icon === "02d") &&
      (weekByHourArray[i + 1].weather[0].icon === "01d" ||
        weekByHourArray[i + 1].weather[0].icon === "02d") &&
      weekByHourArray[i - 1].weather[0].icon !== "01d" &&
      weekByHourArray[i - 1].weather[0].icon !== "02d"
    ) {
      sunStart.push(weekByHourArray[i]);
    }
  }
  console.log(sunStart);

  return (
    <>
      <p>hi this is a test</p>
    </>
  );
}
export default FindSun;
