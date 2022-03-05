const routerName = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/sign-up",
  SIGNUP_SUCCESS: "/sign-up/success/:token",
  PWRECOVERY: "/password-recovery",
  PWRECOVERY_NEWPASSWORD: "/password-recovery/new-password/:token",
  PWRECOVERY_SUCCESS: "/password-recovery/new-password/:token/success",
  USER_INFO: "/user/information/:id",
  TEST: "/test",
  PRODUCT_LIST: "/product-list/:category",
  PRODUCT_DETAIL: "/product-list/:category/:id",
  CART: "/cart",
  CHECKOUT: "/checkout",
  CHECKOUT_SUCCESS: "/checkout/success",
  SEARCH: "/search",
};

export default routerName;
