import api from "../common/constants/api";
import { AxiosClient } from "./API/axiosConnection";

export const axiosServices = {
  login: async (params) => {
    const { data } = await AxiosClient.post(api.AUTH.login, params);
    return data;
  },

  register_unConfirm: async (params) => {
    const { data } = await AxiosClient.post(api.AUTH.registerUnConfirm, params);
    return data;
  },
  register_confirm: async (token) => {
    const { data } = await AxiosClient.post(api.AUTH.registerConfirm(token));
    return data;
  },

  forgetPW_unConfirm: async (params) => {
    const { data } = await AxiosClient.post(api.AUTH.forgetPWUnConfirm, params);
    return data;
  },
  forgetPW_confirm: async (token, params) => {
    const { data } = await AxiosClient.post(
      api.AUTH.forgetPWConfirm(token),
      params
    );
    return data;
  },

  updateUser: async (id, params) => {
    const { data } = await AxiosClient.post(api.AUTH.updateUser(id), params);
    return data;
  },
  changePW: async (id, params) => {
    const { data } = await AxiosClient.post(api.AUTH.changePW(id), params);
    return data;
  },
  changeAvatar: async (id, params) => {
    const { data } = await AxiosClient.post(api.AUTH.changeAvatar(id), params);
    return data;
  },
};
