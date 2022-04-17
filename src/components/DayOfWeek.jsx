import "../CSSFiles/CSSDayOfWeek.css";
import "../CSSFiles/CSSDayWeather.css";

const dayOfWeek = (props) => {
  const weekdayName = { weekday: "long" };
  const dayOfWeather = new Date(props.weatherDate * 1000)
    .toLocaleDateString(undefined, weekdayName)
    .toLowerCase();

  return (
    <>
      <svg viewBox="80 0 250 200" id="headerSVG" className="dayOfWeek">
        <path
          id="dayCurve"
          className="notVisible"
          d=" M 100 200 A 150 150 0 0 1 300 200"
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
