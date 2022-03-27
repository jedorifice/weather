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

  // useEffect(() => {});

  return (
    <>
      <Search setLocationInput={setLocationInput} />
    </>
  );
};

export default App;
