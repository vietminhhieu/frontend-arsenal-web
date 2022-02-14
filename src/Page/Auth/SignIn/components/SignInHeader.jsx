import React from "react";
import routerName from "../../../../Router/RouterName";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const SignInHeader = () => {
  //Sử dụng useHistory xử lý để khi click vào button không reload lại trang
  let history = useHistory();
  const handleClick = (location) => {
    history.push(location);
  };

  return (
    <header>
      <div className="left-header">
        <img
          className="store-logo"
          src="https://res.cloudinary.com/duitozhul/image/upload/v1639843038/Smartphone_Web_Frontend/Logo/logo-circle.jpg"
          alt="Store Logo"
          onClick={() => handleClick(routerName.HOME)}
        />
        <Button
          onClick={() => handleClick(routerName.HOME)}
          variant="contained"
          style={{
            textTransform: "initial",
            backgroundColor: "#fff",
            padding: "0 10px",
          }}
        >
          {/* Cho thẻ Link ở đây */}
          Trang chủ
        </Button>
      </div>

      <div className="right-header">
        <Button
          onClick={() => handleClick(routerName.SIGNUP)}
          variant="contained"
          color="secondary"
          style={{
            textTransform: "initial",
            padding: "2px 10px",
          }}
        >
          Tạo tài khoản
        </Button>
      </div>
    </header>
  );
};

export default SignInHeader;
