import axios from "axios";
import { LOCATION_API_URL } from "./config";

export async function getLocationOptions(tempLocationInput) {
  const locationAPICall = await axios.get(
    `${LOCATION_API_URL}${tempLocationInput}`
  );
  console.log("location API call made from the utils file");
  if (locationAPICall.data) {
    console.log(locationAPICall.data);
    return locationAPICall.data;
  }
}

export async function getWeatherData(locationInput) {
  const { latitude, longitude } = locationInput;
  // const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=42&lon=-122&units=metric&exclude=alerts,minutely&appid=3701e84be0f127db0b34218eb0a00fe2`;
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=alerts,minutely&appid=3701e84be0f127db0b34218eb0a00fe2`;
  const weatherAPICall = await axios.get(URL);
  console.log(weatherAPICall);
  return weatherAPICall.data;
}

// BEFORE ADDING LIST OF LOCATION OPTIONS ON INPUT

// export async function convertLocationToCoordinates(locationInput) {
//   const locationAPICall = await axios.get(
//     `${LOCATION_API_URL}${locationInput}`
//   );
//   return locationAPICall.data.data[0];
// }

// export async function getWeatherData(coords) {
//   const { latitude, longitude } = coords;
//   const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=alerts,minutely&appid=3701e84be0f127db0b34218eb0a00fe2`;
//   const weatherAPICall = await axios.get(URL);
//   console.log(URL);

//   return weatherAPICall.data;
// }
