const sunrise = (props) => {
  const unixSunrise = props.unixSunrise;
  const date = new Date(unixSunrise * 1000);
  const humanSunrise = date.toLocaleDateString("en-UK");
  console.log(humanSunrise);

  return <p>{integerTemp}°c</p>;
};

export default sunrise;
