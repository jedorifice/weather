import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";
import Icon from "./Icon";
import Sunrise from "./Sunrise";
import styles from "../index.css";

function showDayWeather(props) {
  return (
    <>
      <section className={styles.DailyForecastContainer}>
        <Icon icon={props.icon} textDescription={props.textDescription} />
        <WeatherDescription textDescription={props.textDescription} />
        <Temperature temp={props.temp} />
        <Sunrise unixSunrise={props.unixSunrise} />
      </section>
    </>
  );
}

export default showDayWeather;
