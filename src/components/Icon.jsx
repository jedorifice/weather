function showDailyWeatherIcon(props) {
  return (
    <>
      <img
        src={`http://openweathermap.org/img/wn/${props.dayWeather.weather.icon}@2x.png`}
        alt={`A digital symbol of ${props.dayWeather.weather.description}`}
      />
    </>
  );
}
