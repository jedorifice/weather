import "../CSSFiles/CSSIcon.css";

function showDailyWeatherIcon(props) {
  return (
    <>
      <img
        className="weatherIcon"
        src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}
        alt={`A digital symbol of ${props.textDescription}}`}
      />
    </>
  );
}

export default showDailyWeatherIcon;
