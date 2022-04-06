import React from "react";
import "../CSSFiles/CSSTopArea.css";

function showCurrentWeather(props) {
  const currentWeather = props.weatherData.current;
  console.log(currentWeather.weather[0].description);
  const integerCurrentTemp = Math.round(currentWeather.temp);
  const currentWeatherIcon = currentWeather.weather[0].icon;
  const location = props.weatherData.coords.label;
  const description = currentWeather.weather[0].description;

  return (
    <>
      {integerCurrentTemp}°c with {description} in {location}
      <img
        className="weatherIcon topAreaChild"
        src={`http://openweathermap.org/img/wn/${currentWeatherIcon}@4x.png`}
        alt={`A digital symbol of ${currentWeather.weather[0].description}}`}
      />
    </>
  );
}

export default showCurrentWeather;
