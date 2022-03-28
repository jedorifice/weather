import DayWeather from "./DayWeather";

function show7DayForecast(props) {
  return (
    <>
      {props.weatherData.daily.map((dayWeather) => {
        return (
          <div className="dayWeather" key={dayWeather.dt}>
            <DayWeather
              temp={dayWeather.temp.day}
              textDescription={dayWeather.weather.description}
              // convert sunrise from unix to human date time
              unixSunrise={dayWeather.sunrise}
              icon={dayWeather.weather.icon}
            />
          </div>
        );
      })}
    </>
  );
}

export default show7DayForecast;
