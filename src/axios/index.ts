import axios from "axios";

const service = axios.create({
  baseURL: "https://forsa-staging.bit68.com/api/v1/",
  timeout: 35000,
});

// API Request interceptor
service.interceptors.request.use(async (config) => {
  return config;
});

// API respone interceptor
service.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default service;
