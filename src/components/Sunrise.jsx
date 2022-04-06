function sunrise(props) {
  const timeFrame = props.weatherData.daily.slice(1, 6);

  const sunrises = timeFrame.map(({ sunrise }) => sunrise);

  const avgSunriseUnix = Math.round(
    sunrises.reduce((result, number) => result + number) / sunrises.length
  );

  console.log(avgSunriseUnix);

  const date = new Date(avgSunriseUnix * 1000);
  const avgSunriseHuman = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <p> average sunrise this week is {avgSunriseHuman}</p>
    </>
  );
}

export default sunrise;
