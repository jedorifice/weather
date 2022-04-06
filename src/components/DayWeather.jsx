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
      duration: 1,
      ease: "none",
    });
  });

  return (
    <>
      <section className="dayWeather" ref={dayWeatherRef}>
        <DayOfWeek weatherDate={props.weatherDate} />
        <Icon icon={props.icon} textDescription={props.textDescription} />
        <WeatherDescription textDescription={props.textDescription} />
        <Temperature temp={props.temp} />
      </section>
    </>
  );
}

export default ShowDayWeather;
