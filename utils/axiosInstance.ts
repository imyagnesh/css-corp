import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://4b4a-122-170-57-99.ngrok.io",
  timeout: 5000,
  timeoutErrorMessage: "Timeout. Please try after sometime",
});

export default axiosInstance;
