import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { convertLocationToCoordinates, getWeatherData } from "./utils";
import Search from "./components/Search";
import Dailies from "./components/Dailies";
import CurrentWeather from "./components/CurrentWeather";
import CurrentWeatherIcon from "./components/CurrentWeatherIcon";
import MainTextCurve from "./components/MainTextCurve";
import Sunrise from "./components/Sunrise";
import BiggerCircle from "./components/BiggerCircle";
import SunFinder from "./components/SunFinder";
import "./CSSFiles/CSSTopArea.css";

const App = () => {
  const [locationInput, setLocationInput] = useState();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    console.log("usefeffect ran");
    if (locationInput) {
      getAPIData();
    } else {
      setWeatherData(undefined);
    }
  }, [locationInput]);

  const getAPIData = async () => {
    const coords = await convertLocationToCoordinates(locationInput);
    const weather = await getWeatherData(coords);
    weather.coords = coords;
    setWeatherData(weather);
  };
  console.log(weatherData);

  return (
    <>
      <section className="topAreaParent">
        <div className={weatherData ? "inputUp" : "inputDown topAreaChild"}>
          <Search
            setLocationInput={setLocationInput}
            weatherData={weatherData}
          />
        </div>
        <div className="topAreaChild"></div>
        {weatherData && <BiggerCircle weatherData={weatherData} />}{" "}
        <div className="topAreaChild">
          <MainTextCurve
            text={
              weatherData ? (
                <CurrentWeather weatherData={weatherData} />
              ) : (
                "What's the weather in"
              )
            }
          />
          <div className="topAreaChild test">
            {weatherData && <CurrentWeatherIcon weatherData={weatherData} />}
          </div>
        </div>
      </section>

      {/* {weatherData && <Dailies weatherData={weatherData} />} */}
      {weatherData && <SunFinder weatherData={weatherData} />}

      {/* 
            <section className="topAreaParent">
      <Search setLocationInput={setLocationInput} weatherData={weatherData} />
        <MainTextCurve
          text={
            weatherData ? (
              <CurrentWeather weatherData={weatherData} />
            ) : (
              "What's the weather in"
            )
          }
        />
        {weatherData && <BiggerCircle />}
        {weatherData && <CurrentWeatherIcon weatherData={weatherData} />}
      </section>

      {weatherData && (<Dailies weatherData={weatherData} />)
      (<Sunrise weatherData={weatherData} />)} */}
    </>
  );
};

export default App;
