import React from "react";
import routerName from "../../../../Router/RouterName";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const PWRecoveryHeader = () => {
  let history = useHistory();
  const handleButtonClick = (location) => {
    history.push(location);
  };

  return (
    <header>
      <div className="left-header">
        <img
          className="store-logo"
          src="https://res.cloudinary.com/duitozhul/image/upload/v1639843038/Smartphone_Web_Frontend/Logo/logo-circle.jpg"
          alt="Store Logo"
          onClick={() => handleButtonClick(routerName.HOME)}
        />

        <Button
          onClick={() => handleButtonClick(routerName.HOME)}
          variant="contained"
          style={{
            textTransform: "initial",
            backgroundColor: "#fff",
            padding: "0 10px",
          }}
        >
          Trang chủ
        </Button>
      </div>

      <div className="right-header">
        <Button
          onClick={() => handleButtonClick(routerName.SIGNUP)}
          variant="contained"
          color="secondary"
          style={{
            textTransform: "initial",
            padding: "2px 10px",
          }}
        >
          Tạo tài khoản
        </Button>

        <Button
          onClick={() => handleButtonClick(routerName.LOGIN)}
          variant="contained"
          style={{
            textTransform: "initial",
            backgroundColor: "#fff",
            padding: "2px 10px",
            marginLeft: "1rem",
          }}
        >
          Đăng nhập
        </Button>
      </div>
    </header>
  );
};

export default PWRecoveryHeader;
