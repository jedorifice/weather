import DayWeather from "./DayWeather";
import styles from "../index.css";

function show8DayForecast(props) {
  return (
    <>
      {props.weatherData.daily.map((dayWeather) => {
        return (
          <section
            className={styles.DailyForecastContainer}
            key={dayWeather.dt}
          >
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
