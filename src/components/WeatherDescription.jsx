import "../CSSFiles/WeatherDescription.css";

const weatherDescription = (props) => {
  return <p className="weatherText">{props.textDescription}</p>;
};

export default weatherDescription;
