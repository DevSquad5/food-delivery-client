import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://devsquad-food-delivery-backend.vercel.app/api/v1",
});

export default axiosInstance;
