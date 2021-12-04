const api = {
  AUTH: {
    login: "api/users/login",
    registerUnConfirm: "api/users/register",
    registerConfirm: () => "api/users/register/:token",
    forgetPWUnConfirm: "api/users/forget-password",
    forgetPWConfirm: () => "api/users/forget-password/:token",
  },
};

export default api;
