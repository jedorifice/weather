import "../CSSFiles/CSSWeatherDescription.css";

const weatherDescription = (props) => {
  return <p className="weatherText">{props.textDescription}</p>;
};

export default weatherDescription;
