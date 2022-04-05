import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { convertLocationToCoordinates, getWeatherData } from "./utils";
import Search from "./components/Search";
import Dailies from "./components/Dailies";
import CurrentWeather from "./components/CurrentWeather";

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
      <Search
        setLocationInput={setLocationInput}
        text={
          weatherData ? (
            <CurrentWeather weatherData={weatherData} />
          ) : (
            "What's the weather in"
          )
        }
      />
      {/* {weatherData && <CurrentWeather weatherData={weatherData} />} */}
      {/* {weatherData && <Dailies weatherData={weatherData} />} */}
    </>
  );
};

export default App;
