import axios from "axios";
import { LOCATION_API_URL } from "./config";

export async function convertLocationToCoordinates(
  locationInput,
  latLong,
  setlatLong
) {
  let lat = "";
  let long = "";
  const locationAPICall = await axios.get(
    `${LOCATION_API_URL}${locationInput}`
  );
  console.log(locationAPICall.data.data[0]);

  lat = locationAPICall.data.data[0].latitude;
  long = locationAPICall.data.data[0].longitude;
  console.log(lat, long);
  // setlatLong(lat, long);
  // console.log(latLong);
}
