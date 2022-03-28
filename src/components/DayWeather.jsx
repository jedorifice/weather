import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";
import Icon from "./Icon";
import Sunrise from "./Sunrise";

function showDayWeather(props) {
  const { dayWeather } = props;
  return (
    <div className="flex-container">
      <Temperature temp={dayWeather.temp.day} />
      <WeatherDescription text={dayWeather.weather.description} />
      <Icon icon={dayWeather.weather.icon} />
      <Sunrise unixSunrise={dayWeather.sunrise} />
    </div>
  );
}
