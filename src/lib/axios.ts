import axios from "axios";
const API_ENDPOINT = "http://localhost:3000";


// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance as axios };
