const temperature = (props) => {
  const integerTemp = Math.round(props.temp);
  return <p className="temperature">{integerTemp}°c</p>;
};

export default temperature;
