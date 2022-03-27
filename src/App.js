import "./App.css";
import { useState } from "react";
import Search from "./components/search";
import { useEffect } from "react";
import { convertLocationToCoordinates, getWeatherData } from "./utils";

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
    </>
  );
};

export default App;
