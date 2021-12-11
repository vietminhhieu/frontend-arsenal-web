const routerName = {
  HOME: "/home",
  LOGIN: "/login",
  SIGNUP: "/sign-up",
  SIGNUP_SUCCESS: "/sign-up/success/:token",
  PWRECOVERY: "/password-recovery",
  PWRECOVERY_NEWPASSWORD: "/password-recovery/new-password/:token",
  PWRECOVERY_SUCCESS: "/password-recovery/new-password/:token/success",
  TEST: "/test",
  PRODUCT_LIST: "/product-list/:category",
  PRODUCT_DETAIL: "/product-list/:category/:id",
};

export default routerName;
