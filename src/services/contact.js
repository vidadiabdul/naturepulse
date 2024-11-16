import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = "https://naturepulse.xyz/api/contact";

export const submitContactForm = async (formData) => {
  try {
    const resp = await axios.post(baseUrl, formData);
    toast.success("Message sent successfully.");
    return resp.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    toast.error("Something went wrong.");
  }
};

export const getAllContact = async () => {
  try {
    const resp = await axios.get(`${baseUrl}?action=getAllContact`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};