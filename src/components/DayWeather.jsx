import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";
import Icon from "./Icon";
import Sunrise from "./Sunrise";

function showDayWeather(props) {
  console.log(props);
  return (
    <>
      <div className="flex-container">
        <Temperature temp={props.temp} />
        <WeatherDescription textDescription={props.textDescription} />
        <Icon icon={props.icon} textDescription={props.textDescription} />
        <Sunrise unixSunrise={props.unixSunrise} />
        {/* <Temperature temp={props.dayWeather.temp.day} />
        <WeatherDescription text={props.dayWeather.weather.description} />
        <Icon icon={props.dayWeather.weather.icon} />
        <Sunrise unixSunrise={props.dayWeather.sunrise} /> */}
      </div>
    </>
  );
}

export default showDayWeather;
