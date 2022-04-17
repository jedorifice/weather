import React from "react";
import "../CSSFiles/CSSTopArea.css";

function showCurrentWeatherIcon(props) {
  const currentWeather = props.weatherData.current;
  const currentWeatherIcon = currentWeather.weather[0].icon;

  return (
    <>
      <img
        className="currentWeatherIcon"
        src={`http://openweathermap.org/img/wn/${currentWeatherIcon}@4x.png`}
        alt={`A digital symbol of ${currentWeather.weather[0].description}}`}
      />
    </>
  );
}

export default showCurrentWeatherIcon;
