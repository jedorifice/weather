import axios from "axios";
import { LOCATION_API_URL } from "./config";

export async function convertLocationToCoordinates(locationInput) {
  const locationAPICall = await axios.get(
    `${LOCATION_API_URL}${locationInput}`
  );
  return locationAPICall.data.data[0];
}

export async function getWeatherData(coords) {
  console.log(coords);
  const { latitude, longitude } = coords;
  const weatherAPICall = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=alerts,minutely&appid=3701e84be0f127db0b34218eb0a00fe2`
  );

  return weatherAPICall.data;
}
