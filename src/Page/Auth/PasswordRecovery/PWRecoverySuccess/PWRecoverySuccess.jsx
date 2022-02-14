import React from "react";
import { useHistory } from "react-router-dom";
import routerName from "../../../../Router/RouterName";
import { Button } from "@material-ui/core";
import PWRecoveryHeader from "../components/PWRecoveryHeader";

const PWRecoverySuccess = () => {
  let history = useHistory();
  function handleClick() {
    history.push(routerName.LOGIN);
  }

  return (
    <div
      className="sign_up-success"
      style={{ backgroundColor: "rgb(250, 250, 250)", height: "100vh" }}
    >
      <PWRecoveryHeader />

      <div className=" sign_up-contents">
        <h2 className="content__title">Hiếu Viết Store</h2>
        <img
          className="content__img"
          src="https://res.cloudinary.com/duitozhul/image/upload/v1644671810/Smartphone_Web_Frontend/Authentication/authentication.svg"
          alt="Password Recovery"
        />
        <h1 className="content__info">
          Tài khoản cũ của bạn đã được thay mới thành công
        </h1>
        <h6 className="content__h3">
          Giờ bạn có thể đăng nhập vào tài khoản này để sử dụng
        </h6>

        <form>
          <div className="email__input"></div>
          <Button
            variant="contained"
            color="secondary"
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              textTransform: "initial",
            }}
            onClick={handleClick}
          >
            Đăng nhập
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PWRecoverySuccess;
