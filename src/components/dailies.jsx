import React from "react";
import DayWeather from "./DayWeather";
import "../CSSFiles/CSSDailies.css";

function showDailyForecast(props) {
  const futureDays = props.weatherData.daily.slice(1, 6);
  return (
    <>
      <div className="daysWeatherContainer">
        {futureDays.map((dayWeather) => {
          return (
            <section key={dayWeather.dt} className="dayWeatherContainer">
              <DayWeather
                weatherDate={dayWeather.dt}
                temp={dayWeather.temp.day}
                textDescription={dayWeather.weather[0].description}
                unixSunrise={dayWeather.sunrise}
                icon={dayWeather.weather[0].icon}
              />
            </section>
          );
        })}
      </div>
    </>
  );
}

export default showDailyForecast;
