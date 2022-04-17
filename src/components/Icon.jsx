import "../CSSFiles/CSSIcon.css";
import { gsap } from "gsap";

function showDailyWeatherIcon(props) {
  // var bob = gsap.fromTo(
  //   ".weatherIcon",
  //   { y: "+=10" },
  //   { y: "-=10", duration: 2, repeat: -1 }
  // );

  return (
    <>
      <img
        className="weatherIcon"
        src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}
        alt={`A digital symbol of ${props.textDescription}}`}
      />
    </>
  );
}

export default showDailyWeatherIcon;
