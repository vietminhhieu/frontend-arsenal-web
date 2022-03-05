import routerName from "./RouterName";
import Home from "../Page/Home/Home";
import SignIn from "../Page/Auth/SignIn/SignIn";
import PWRecovery from "../Page/Auth/PasswordRecovery/PWRecovery";
import SignUp from "../Page/Auth/SignUp/SignUp";
import Test from "../Test/Test";
import SignUpSuccess from "../Page/Auth/SignUp/SignUpSuccess/SignUpSuccess";
import PWRecoverySuccess from "../Page/Auth/PasswordRecovery/PWRecoverySuccess/PWRecoverySuccess";
import NewPW from "../Page/Auth/PasswordRecovery/NewPW/NewPW";
import { ProductList } from "../Page/ProductList/ProductList";
import { ProductDetail } from "../Page/ProductDetail/ProductDetail";
import UserInfo from "../Page/Auth/UserInfo/UserInfo";
import Search from "../components/Search/Search";
import Cart from "../components/Cart/CartInfo/CartInfo";
import Checkout from "../components/Cart/Checkout/Checkout";
import CheckoutSuccess from "../components/Cart/CheckoutSuccess/CheckoutSuccess";

const authRoute = [
  {
    path: routerName.LOGIN,
    exact: true,
    component: SignIn,
    name: "SignIn",
  },
  {
    path: routerName.SIGNUP,
    exact: true,
    component: SignUp,
    name: "SignUp",
  },
  {
    path: routerName.SIGNUP_SUCCESS,
    exact: true,
    component: SignUpSuccess,
    name: "SignUpSuccess",
  },
  {
    path: routerName.PWRECOVERY,
    exact: true,
    component: PWRecovery,
    name: "PWRecovery",
  },
  {
    path: routerName.PWRECOVERY_NEWPASSWORD,
    exact: true,
    component: NewPW,
    name: "NewPW",
  },

  {
    path: routerName.PWRECOVERY_SUCCESS,
    exact: true,
    component: PWRecoverySuccess,
    name: "PWRecoverySuccess",
  },
];

const commonRoute = [
  {
    path: routerName.HOME,
    exact: true,
    component: Home,
    name: "Home",
  },
  {
    path: routerName.PRODUCT_LIST,
    exact: true,
    component: ProductList,
    name: "ProductList",
  },
  {
    path: routerName.PRODUCT_DETAIL,
    exact: true,
    component: ProductDetail,
    name: "ProductDetail",
  },
  {
    path: routerName.USER_INFO,
    exact: true,
    component: UserInfo,
    name: "UserInfo",
  },
  {
    path: routerName.TEST,
    exact: true,
    component: Test,
    name: "Test",
  },
  {
    path: routerName.CART,
    exact: true,
    component: Cart,
    name: "Cart",
  },
  {
    path: routerName.CHECKOUT,
    exact: true,
    component: Checkout,
    name: "Checkout",
  },
  {
    path: routerName.CHECKOUT_SUCCESS,
    exact: true,
    component: CheckoutSuccess,
    name: "CheckoutSuccess",
  },
  {
    path: routerName.SEARCH,
    exact: true,
    component: Search,
    name: "Search",
  },
];

//Write a function determine route render
const checkToken = () => {
  const loginToken = JSON.parse(localStorage.getItem("login-token"));
  if (loginToken) {
    return commonRoute;
  } else {
    return [...authRoute, ...commonRoute];
  }
};

export default checkToken();
