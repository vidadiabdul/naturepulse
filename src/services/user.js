import axios from "axios";

const baseUrl = "https://naturepulse.xyz/api/user";

export const getAllUsers = async () => {
  try {
    const resp = await axios.get(`${baseUrl}?action=getAllUsers`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserById = async (id, data) => {
  try {
    const resp = await axios.put(`${baseUrl}?action=updateUserById`, {id, ...data});
    console.log('up resp', resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id) => {
  try {
    const resp = await axios.get(`${baseUrl}/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};


export const deleteUserById = async (id) => {
  try {
    const resp = await axios.delete(`${baseUrl}?action=deleteUserById&id=${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
