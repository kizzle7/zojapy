import axios from "axios";
import { getUserToken } from "./getUserToken";
import { notification } from "antd"
export const serviceInstance = axios.create({
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // Authorization: `Bearer ${getUserToken()?.token}`,
  },
});

serviceInstance.interceptors.request.use(
  (config) => {
    let token = getUserToken();
    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const Notification = (type, msgType, msg) => {
  notification[type]({
    message: msgType,
    description: msg,
  });
};

serviceInstance.interceptors.response.use(undefined, (err) => {
  const error = err.response;
  const customError = err.response?.data?.message
  if
    (error.status === 401) {
    Notification('error', 'Error', customError);
    sessionStorage.clear();
    localStorage.clear();
    window.location = "/";

  } else {
    Notification('error', 'Error', `${customError}`);
  }
  return Promise.reject(err);
});
