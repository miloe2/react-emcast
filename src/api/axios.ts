import axios from "axios";

const BASE_URL = "https://dummyjson.com";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export { axiosInstance, BASE_URL };
