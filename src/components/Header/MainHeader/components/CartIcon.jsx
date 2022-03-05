import React from "react";
import { Nav } from "react-bootstrap";
import { LocalMallOutlined } from "@material-ui/icons";
import routerName from "../../../../Router/RouterName";
import { useSelector } from "react-redux";

const CartIcon = () => {
  //Lấy login token từ localStorage
  let loginTokenInLocalStorage = localStorage.getItem("login-token");
  // console.log("loginTokenInLocalStorage", loginTokenInLocalStorage);
  let checkoutSuccessInLocalStorage = localStorage.getItem("checkout-sucess");
  console.log("checkoutSuccessInLocalStorage", checkoutSuccessInLocalStorage);

  const cartTotal = useSelector((state) => state.cart.cartItems.length);
  // console.log("cartTotal", cartTotal);

  return (
    <Nav.Link
      href={loginTokenInLocalStorage ? routerName.CART : routerName.LOGIN}
      className="icon cart"
    >
      <LocalMallOutlined />
      {loginTokenInLocalStorage ? (
        cartTotal > 0 ? (
          <span>{cartTotal}</span>
        ) : (
          <span>0</span>
        )
      ) : (
        ""
      )}
    </Nav.Link>
  );
};

export default CartIcon;
