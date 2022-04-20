import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Temperature from "./Temperature";
import WindArrow from "./WindArrow";
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
        <WindArrow windDeg={props.windDeg} />
        <Icon icon={props.icon} textDescription={props.textDescription} />
        <WeatherDescription textDescription={props.textDescription} />
      </section>
    </>
  );
}

export default ShowDayWeather;
