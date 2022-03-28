import axios from "axios";
import { LOCATION_API_URL } from "./config";

export async function convertLocationToCoordinates(
  locationInput,
  latLong,
  setlatLong
) {
  let coordinates = {};
  const locationAPICall = await axios.get(
    `${LOCATION_API_URL}${locationInput}`
  );
  coordinates.latitude = locationAPICall.data.data[0].latitude;
  coordinates.longitude = locationAPICall.data.data[0].longitude;
  setlatLong(coordinates);
  console.log(latLong);
}

export async function getWeatherData(latLong, weatherData, setWeatherData) {
  const { latitude, longitude } = latLong;
  const weatherAPICall = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=alerts,minutely&appid=3701e84be0f127db0b34218eb0a00fe2`
  );
  console.log(weatherAPICall.data);
  setWeatherData(weatherAPICall.data);
  console.log(weatherData);
}
