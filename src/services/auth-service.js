import config from "../config";
import { serviceInstance } from "../Axios-Connect/index";

const authService = {
  onLogin: (request) =>
    serviceInstance
      .post(`${config.baseUrl}admin/login `, request)
      .then(({ data, status }) => ({
        ...data,
        status,
      })),

  registerUser: (request) =>
    serviceInstance
      .post(`${config.baseUrl}admin/register `, request)
      .then(({ data, status }) => ({
        ...data,
        status,
      })),
  verfyOtp: (request) =>
    serviceInstance
      .post(`${config.baseUrl}admin/verify-otp `, request)
      .then(({ data, status }) => ({
        ...data,
        status,
      })),
};

export default authService;
