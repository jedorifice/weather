const temperature = (props) => {
  const integerTemp = Math.round(props.temp);
  return <p>{integerTemp}°c</p>;
};

export default temperature;
