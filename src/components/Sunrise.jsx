const sunrise = (props) => {
  const date = new Date(props.unixSunrise * 1000);
  const humanSunrise = date.toLocaleDateString("en-UK");
  console.log(humanSunrise);

  return <p>Sunrise at {humanSunrise}</p>;
};

export default sunrise;
