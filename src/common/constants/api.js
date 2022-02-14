const api = {
  AUTH: {
    login: "api/users/login",
    registerUnConfirm: "api/users/register",
    registerConfirm: (token) => `api/users/register/${token}`,
    forgetPWUnConfirm: "api/users/forget-password",
    forgetPWConfirm: (token) => `api/users/forget-password/${token}`,
  },
};

export default api;
