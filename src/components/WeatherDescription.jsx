import "../CSSFiles/CSSWeatherDescription.css";

const weatherDescription = (props) => {
  // <p className="weatherText">{props.textDescription}</p>;

  return (
    <>
      <svg
        viewBox="80 0 500 500"
        id="descriptionSVG"
        className="weatherDescription"
      >
        <path
          id="descriptionCurve"
          className="notVisible"
          // d=" M 300 200 A 100 100 0 0 1 100 203"
          d="M 156 204 A 100 100 0 0 0 500 200"
        />
        <text>
          <textPath
            textAnchor="middle"
            startOffset="50%"
            href="#descriptionCurve"
            className="weatherText"
            alignmentBaseline="hanging"
          >
            {props.textDescription}
          </textPath>
        </text>
      </svg>
    </>
  );
};

export default weatherDescription;
