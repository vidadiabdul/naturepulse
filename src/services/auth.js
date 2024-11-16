import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = "https://naturepulse.xyz/api/auth";

// Register user
export const registerUser = async (data) => {
  try {
    const resp = await axios.post(`${baseUrl}?action=register`, data);
    if (resp.data.status === "success") {
      toast.success("Registration successful.");
    } else {
      toast.error(resp.data.message);
    }
    return resp.data;
  } catch (error) {
    console.log("register", error);
    toast.error("Registration failed.");
  }
};

// Login user
export const loginUser = async (data) => {
  try {
    const respi = await axios.post(`${baseUrl}?action=login`, data);
    if (respi.data.status === "success") {
      localStorage.setItem("userdata", JSON.stringify(respi.data));
      localStorage.setItem("token", respi.data.data.token); 
    } else {
      console.error(respi.data.message);
    }
    return respi.data;
  } catch (error) {
    console.log("login", error);
  }
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userdata");
};

// Check authentication
export const checkAuth = () => {
  return localStorage.getItem("token") !== null;
};

export const getUserData = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get(
        `${baseUrl}?action=getUserByToken&token=${token}`
      );
      if (response.status === 200) {
        console.error("response",response);

        return response.data;
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.log("getUserData", error);
    }
  }
  return null;
};
