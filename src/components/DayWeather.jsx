import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";
import Icon from "./Icon";
// import Sunrise from "./Sunrise";
import DayOfWeek from "./DayOfWeek";
import "../CSSFiles/CSSDayWeather.css";

function ShowDayWeather(props) {
  const dayWeatherRef = useRef();

  useEffect(() => {
    gsap.to(".dayWeather", {
      opacity: 1,
      duration: 5,
      ease: "none",
    });
  });

  return (
    <>
      <section className="dayWeather opacityZero" ref={dayWeatherRef}>
        <Temperature temp={props.temp} />
        <DayOfWeek weatherDate={props.weatherDate} />
        {/* <div className="lilParent"> */}
        <Icon icon={props.icon} textDescription={props.textDescription} />
        {/* </div> */}
        {/* <div className="lilChild"> */}
        {/* </div>
        <div className="lilChild"> */}
        <WeatherDescription textDescription={props.textDescription} />
        {/* </div> */}
      </section>
    </>
  );
}

export default ShowDayWeather;
