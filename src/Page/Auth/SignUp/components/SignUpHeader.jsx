import React from "react";
import { useHistory } from "react-router-dom";
import routerName from "../../../../Router/RouterName";
import { Button } from "@material-ui/core";

const SignUpHeader = () => {
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
          Trang chủ
        </Button>
      </div>

      <div className="right-header">
        <Button
          onClick={() => handleClick(routerName.LOGIN)}
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

export default SignUpHeader;
