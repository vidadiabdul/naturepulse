import axios from "axios";

const baseUrl = "https://naturepulse.xyz/api/activities";

export const getActivities = async (sort = "newest") => {
  try {
    const resp = await axios.get(`${baseUrl}?sort=${sort}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getActivitiesByCategory = async (categoryId, sort = "newest") => {
  try {
    const resp = await axios.get(
      `${baseUrl}?category_id=${categoryId}&sort=${sort}`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getActivitiesByCityId = async (cityId, sort = "newest") => {
  try {
    const resp = await axios.get(`${baseUrl}?cityId=${cityId}&sort=${sort}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getActivityById = async (id) => {
  try {
    const resp = await axios.get(`${baseUrl}?id=${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchActivities = async (keyword, sort = "newest") => {
  try {
    const resp = await axios.get(`${baseUrl}?keyword=${keyword}&sort=${sort}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
