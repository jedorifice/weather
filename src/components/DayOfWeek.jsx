import "../CSSFiles/CSSDayOfWeek.css";

const dayOfWeek = (props) => {
  const weekdayName = { weekday: "long" };
  const dayOfWeather = new Date(props.weatherDate * 1000)
    .toLocaleDateString(undefined, weekdayName)
    .toLowerCase();
  //  alignmentBaseline="top" textLength="80%"
  //width="100" textAnchor="middle"
  //M 100 200 A 100 100 0 0 1 300 200
  // M 94 131 A 100 90 0 0 1 268 131
  // M 117 165 A 74 108 0 0 1 245 165
  // M 150 113 A 100 100 0 0 1 253 115
  return (
    <>
      <svg className="child" viewBox="80 10 250 190" id="headerSVG">
        <path
          id="dayCurve"
          className="notVisible"
          d=" M 100 200 A 100 100 0 0 1 300 200"
        />
        <text>
          <textPath
            textAnchor="middle"
            startOffset="50%"
            href="#dayCurve"
            className="weekdayName"
          >
            {dayOfWeather}
          </textPath>
        </text>
      </svg>
    </>
  );
};

export default dayOfWeek;
