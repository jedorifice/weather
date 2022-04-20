function FindSun(props) {
  const weekByHourArray = props.weatherData.hourly;
  // console.log(weekByHourArray);

  // let sunStart = [];
  // let sunEnd = [];

  let window = { start: undefined, end: undefined };

  let windows = [];

  // // Request a weekday along with a long date
  let localTimezone = props.weatherData.timezone;

  const startOptions = {
    timeZone: `${localTimezone}`,
    weekday: "long",
    hour: "numeric",
  };
  // No weekday for end time as it will always be same day as start time
  const endOptions = {
    timeZone: `${localTimezone}`,
    hour: "numeric",
  };

  for (let i = 0; i < weekByHourArray.length; i++) {
    // console.log(i, weekByHourArray[i]);
    const item = weekByHourArray[i].weather[0].icon;
    if (window.start === undefined && item === ("01d" || "02d")) {
      // console.log("the if ran");
      let startDateTime = new Date(weekByHourArray[i].dt * 1000);
      window.start = startDateTime.toLocaleString("en-GB", startOptions);
      // console.log(window.start);
    } else if (window.start !== undefined && item !== ("01d" || "02d")) {
      // console.log("the else ran");
      // console.log(i);
      let endDateTime = new Date(weekByHourArray[i - 1].dt * 1000);
      window.end = endDateTime.toLocaleString("en-GB", endOptions);
      // console.log(window.end);
      windows.push(window);
      window = { start: undefined, end: undefined };
    }
  }
  // console.log(windows);

  return (
    <>
      {windows.length > 0 && (
        <p>
          The best time{windows.length > 1 && "s"} to go for a sunny walk
          {windows.length > 1 ? " are" : " is"}:
        </p>
      )}
      {windows.map((time) => {
        return (
          <p key={time.start}>
            {time.start}h til {time.end}h
          </p>
        );
      })}
    </>
  );
}

export default FindSun;
