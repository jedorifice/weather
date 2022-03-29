import "../CSSFiles/Icon.css";

function showDailyWeatherIcon(props) {
  return (
    <>
      <img
        className="weatherIcon"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt={`A digital symbol of ${props.textDescription}}`}
      />
    </>
  );
}

export default showDailyWeatherIcon;
