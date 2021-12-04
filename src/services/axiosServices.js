import api from "../common/constants/api";
import { AxiosClient } from "./API/axiosConnection";

export const axiosServices = {
  login: async (params) => {
    const { data } = await AxiosClient.post(api.AUTH.login, params);
    return data;
  },
  register: async (params) => {
    const { data } = await AxiosClient.post(api.AUTH.registerUnConfirm, params);
    return data;
  },
  forgetPW: async (params) => {
    const { data } = await AxiosClient.post(api.AUTH.forgetPWUnConfirm, params);
    return data;
  },
};
