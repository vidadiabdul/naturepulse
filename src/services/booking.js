import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = "https://naturepulse.xyz/api/booking";


export const getAllBookings = async () => {
  try {
    const resp = await axios.get(`${baseUrl}?action=getAllBookings`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};