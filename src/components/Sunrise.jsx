const sunrise = (props) => {
  const date = new Date(props.unixSunrise * 1000);
  const humanSunrise = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return <p> ◒ {humanSunrise}</p>;
};

export default sunrise;
