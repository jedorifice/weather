import React from "react";
import DayWeather from "./DayWeather";
import "../CSSFiles/CSSDailies.css";

function showDailyForecast(props) {
  const futureDays = props.weatherData.daily.slice(1, 6);
  return (
    <>
      <section className="daysWeatherContainer">
        {futureDays.map((dayWeather) => {
          return (
            <DayWeather
              key={dayWeather.dt}
              weatherDate={dayWeather.dt}
              temp={dayWeather.temp.day}
              textDescription={dayWeather.weather[0].description}
              icon={dayWeather.weather[0].icon}
              windDeg={dayWeather.wind_deg}
            />
          );
        })}
      </section>
    </>
  );
}

export default showDailyForecast;
