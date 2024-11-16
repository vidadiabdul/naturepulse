import axios from "axios";

const baseUrl = "https://naturepulse.xyz/api/places";

export const getPlaces = async () => {
  try {
    const resp = await axios.get(baseUrl);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};


export const getPlacesByCity = async (cityId) => {
  try {
    const resp = await axios.get(`${baseUrl}?cityId=${cityId}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
