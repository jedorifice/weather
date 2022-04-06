import "../CSSFiles/CSSWeatherDescription.css";

const weatherDescription = (props) => {
  // <p className="weatherText">{props.textDescription}</p>;

  return (
    <>
      <svg viewBox="0 0 400 400" id="descriptionSVG">
        <path
          id="descriptionCurve"
          // className="notVisible"
          d=" M 300 200 A 100 100 0 0 1 100 203"
        />
        <text>
          <textPath
            textAnchor="middle"
            startOffset="50%"
            href="#descriptionCurve"
            className="weatherText"
          >
            {props.textDescription}
          </textPath>
        </text>
      </svg>
    </>
  );
};

export default weatherDescription;
