function showDailyWeatherIcon(props) {
  return (
    <>
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt={`A digital symbol of ${props.textDescription}}`}
      />
    </>
  );
}

export default showDailyWeatherIcon;
