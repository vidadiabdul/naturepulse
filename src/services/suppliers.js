import axios from "axios";

const baseUrl = "https://naturepulse.xyz/api/suppliers";

export const getAllSuppliers = async () => {
  try {
    const resp = await axios.get(`${baseUrl}?action=getAllSuppliers`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
