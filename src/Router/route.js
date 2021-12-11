import routerName from "./RouterName";
import Home from "../Page/Home/Home";
import SignIn from "../Page/Auth/SignIn/SignIn";
import PWRecovery from "../Page/Auth/PasswordRecovery/PWRecovery";
import SignUp from "../Page/Auth/SignUp/SignUp";
import { Test } from "../Test/Test";
import SignUpSuccess from "../Page/Auth/SignUp/SignUpSuccess";
import PWRecoverySuccess from "../Page/Auth/PasswordRecovery/PWRecoverySuccess";
import NewPW from "../Page/Auth/PasswordRecovery/NewPW";
import { ProductList } from "../Page/ProductList/ProductList";

const routerBeforeLogin = [
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
    name: "PWRecovery",
  },
  {
    path: routerName.PWRECOVERY,
    exact: true,
    component: PWRecoverySuccess,
    name: "PWRecovery",
  },
  {
    path: routerName.TEST,
    exact: true,
    component: Test,
    name: "Test",
  },
];

const routerAfterLogin = [];

//Write a function determine route render
const getTokenFromLocalStorage = () => {
  const loginToken = JSON.parse(localStorage.getItem("login-token"));
  if (loginToken) {
    return routerAfterLogin;
  } else {
    return routerBeforeLogin;
  }
};

export default routerBeforeLogin;
