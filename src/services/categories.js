import axios from "axios";

const baseUrl = "https://naturepulse.xyz/api/categories";

export const getCategories = async () => {
  try {
    const resp = await axios.get(baseUrl);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryById = async (categoryId) => {
  try {
    const resp = await axios.get(`${baseUrl}/${categoryId}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategoryById = async (id) => {
  try {
    const resp = await axios.delete(`${baseUrl}/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
