const temperature = (props) => {
  const integerTemp = Math.round(props.temp);
  console.log(integerTemp);
  return <p>{integerTemp}°c</p>;
};

export default temperature;
