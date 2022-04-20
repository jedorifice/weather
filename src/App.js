import "./App.css";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { getWeatherData } from "./utils";
import Search from "./components/Search";
import Dailies from "./components/Dailies";
import CurrentWeatherIcon from "./components/CurrentWeatherIcon";
import Sunrise from "./components/Sunrise";
import BiggerCircle from "./components/BiggerCircle";
import MainTextCurve from "./components/MainTextCurve";
import CurrentWeather from "./components/CurrentWeather";
import SunFinder from "./components/SunFinder";
import FloatingClouds from "./components/FloatingClouds";
import Rain2 from "./components/Rain2";

import "./CSSFiles/CSSTopArea.css";

const App = () => {
  const [locationInput, setLocationInput] = useState();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    if (locationInput) {
      getWeatherAPIData();
    } else {
      setWeatherData(undefined);
    }
  }, [locationInput]);

  const getWeatherAPIData = async () => {
    const weather = await getWeatherData(locationInput);
    setWeatherData(weather);
    // console.log(weatherData);
  };

  return (
    <>
      <section className="absoluteParent">
        {/* <Rain2 /> */}
        {weatherData && <Rain2 weatherData={weatherData} />}

        <section className="relativeChild">
          <section className="topAreaParent">
            <Search
              setLocationInput={setLocationInput}
              weatherData={weatherData}
              locationInput={locationInput}
            />

            <section className="topAreaChild">
              {/* this section used to have className test as well but not sure it needs it */}
              {weatherData && <CurrentWeatherIcon weatherData={weatherData} />}
            </section>
          </section>
        </section>
      </section>
      {weatherData && <SunFinder weatherData={weatherData} />}
      {weatherData && <Dailies weatherData={weatherData} />}
    </>
  );
};

export default App;

{
  /* <FloatingClouds /> */
}
{
  /* {weatherData && <FloatingClouds weatherData={weatherData} />} */
}

{
  /* {weatherData && <Dailies weatherData={weatherData} />} */
}
{
  /* {weatherData && <SunFinder2 weatherData={weatherData} />} */
}

//////////////////////////////////// MOST RELIABLE RETURN:

{
  /* <section className="topAreaParent">
<section className={weatherData ? "inputUp" : "inputDown topAreaChild"}>
  <Search
    setLocationInput={setLocationInput}
    weatherData={weatherData}
  />
</section>
{weatherData && <BiggerCircle weatherData={weatherData} />}
<section className="topAreaChild">
  <MainTextCurve
    text={
      weatherData ? (
        <CurrentWeather weatherData={weatherData} />
      ) : (
        "What's the weather in"
      )
    }
  />
  <section className="topAreaChild">
    {/* this section used to have className test as well but not sure it needs it */
}
//     {weatherData && <CurrentWeatherIcon weatherData={weatherData} />}
//   </section>
// </section>
// </section>

////////////////////////////////////////////////////////

{
  /* 
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
      (<Sunrise weatherData={weatherData} />)} */
}

//////////////////////////////////////////// MOST RECENT FUCKUP

{
  /* {weatherData && <Rain weatherData={weatherData} />} */
}

{
  /* <section className="topAreaParent">
<section className={weatherData ? "inputUp" : "inputDown topAreaChild"}>
  <Search
    setLocationInput={setLocationInput}
    weatherData={weatherData}
    locationInput={locationInput}
  />
</section>

<section className="topAreaChild">
  {weatherData && <CurrentWeatherIcon weatherData={weatherData} />}
</section>
</section>
{weatherData && <SunFinder weatherData={weatherData} />}
{weatherData && <Dailies weatherData={weatherData} />} */
}
