import "./App.css";
import { useState } from "react";
import Search from "./components/search";
import { useEffect } from "react";
import { convertLocationToCoordinates } from "./utils";

const App = () => {
  const [locationInput, setLocationInput] = useState();
  const [latLong, setLatLong] = useState({});

  useEffect(() => {
    convertLocationToCoordinates(locationInput, latLong, setLatLong);
  }, [locationInput]);

  // const weatherAPICall = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={alerts,minutely}&appid=3701e84be0f127db0b34218eb0a00fe2`)

  return (
    <>
      <Search setLocationInput={setLocationInput} />
    </>
  );
};

export default App;
