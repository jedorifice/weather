import React from "react";
import DayWeather from "./DayWeather";

function show8DayForecast(props) {
  return (
    <>
      {props.weatherData.daily.map((dayWeather) => {
        return (
          <section key={dayWeather.dt}>
            <DayWeather
              temp={dayWeather.temp.day}
              textDescription={dayWeather.weather[0].description}
              unixSunrise={dayWeather.sunrise}
              icon={dayWeather.weather[0].icon}
            />
          </section>
        );
      })}
    </>
  );
}

export default show8DayForecast;
