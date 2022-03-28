import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { convertLocationToCoordinates, getWeatherData } from "./utils";
import Search from "./components/Search";
import Dailies from "./components/Dailies";

const App = () => {
  const [locationInput, setLocationInput] = useState();
  const [latLong, setLatLong] = useState({});
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    convertLocationToCoordinates(locationInput, latLong, setLatLong);
  }, [locationInput]);

  useEffect(() => {
    getWeatherData(latLong, weatherData, setWeatherData);
  }, [latLong]);

  return (
    <>
      <Search setLocationInput={setLocationInput} />
      {weatherData && latLong && locationInput ? (
        <Dailies weatherData={weatherData} />
      ) : (
        <p>Loading, please wait</p>
      )}
    </>
  );
};

export default App;
