import React, { useEffect } from "react";
import SignUpHeader from "../components/SignUpHeader";
import { Button } from "@material-ui/core";
import "./SignUpSuccess.scss";
import { useHistory, useParams } from "react-router-dom";
import routerName from "../../../../Router/RouterName";
import { axiosServices } from "../../../../services/axiosServices";

const SignUpSuccess = () => {
  let { token } = useParams();
  // console.log("tokenParam", token);

  let history = useHistory();
  function handleClick() {
    history.push(routerName.LOGIN);
  }

  useEffect(async () => {
    await axiosServices.register_confirm(token);
  }, [token]);

  return (
    <div
      className="sign_up-success"
      style={{ backgroundColor: "rgb(250, 250, 250)", height: "100vh" }}
    >
      <SignUpHeader />

      <div className=" sign_up-contents">
        <h2 className="content__title">Hiếu Viết Store</h2>
        <img
          className="content__img"
          src="https://res.cloudinary.com/duitozhul/image/upload/v1644671810/Smartphone_Web_Frontend/Authentication/authentication.svg"
          alt="Password Recovery"
        />
        <h1 className="content__info">Tài khoản của bạn đã được kích hoạt</h1>
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

export default SignUpSuccess;
