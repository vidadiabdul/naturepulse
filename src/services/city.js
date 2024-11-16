import axios from "axios";

const baseUrl = "https://naturepulse.xyz/api/cities";

export const getCities = async () => {
  try {
    const resp = await axios.get(baseUrl);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCityById = async (id) => {
  try {
    const resp = await axios.get(`${baseUrl}/${id}`);
    return resp.data;
    
  } catch (error) {
    console.log(error);
  }
};

export const getCityByName = async (cityName) => {
  try {
    const resp = await axios.get(`${baseUrl}?cityName=${encodeURIComponent(cityName)}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCityById = async (id) => {
  try {
    const resp = await axios.delete(`${baseUrl}/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

const apikey = "21b92e4e01ec463d9f4185615242608"

export const getWeather = async (cityName) => {
  try {
    const resp = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${encodeURIComponent(cityName)}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};