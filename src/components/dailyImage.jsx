function showDailyWeatherIcon(props) {
  // this needs to be a child of a single daily unit i think
  return (
    <>
      <img
        src={`http://openweathermap.org/img/wn/${dayWeather.weather.icon}@2x.png`}
      />
    </>
  );
}
