const api = {
  AUTH: {
    login: "api/users/login",
    registerUnConfirm: "api/users/register",
    registerConfirm: (token) => `api/users/register/${token}`,
    forgetPWUnConfirm: "api/users/forget-password",
    forgetPWConfirm: (token) => `api/users/forget-password/${token}`,
    updateUser: (id) => `api/users/information/${id}`,
    changePW: (id) => `api/users/change-password/${id}`,
    changeAvatar: (id) => `api/users/change-avatar/${id}`,
  },
};

export default api;
