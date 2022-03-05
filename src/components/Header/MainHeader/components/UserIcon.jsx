import React from "react";
import { NavDropdown } from "react-bootstrap";
import { AccountCircleOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import routerName from "../../../../Router/RouterName";

const UserIcon = () => {
  let history = useHistory();

  //Lấy login token từ localStorage
  let loginTokenInLocalStorage = localStorage.getItem("login-token");
  // console.log("loginTokenInLocalStorage", loginTokenInLocalStorage);

  //Lấy user data từ localStorage
  let userDataInLocalStorage = JSON.parse(localStorage.getItem("user-data"));
  // console.log("userDataInLocalStorage", userDataInLocalStorage);
  let avatar = "",
    idUser = "",
    firstName = "",
    lastName = "",
    email = "";
  if (localStorage.getItem("user-data")) {
    idUser = userDataInLocalStorage._id;
    avatar = userDataInLocalStorage.avatar;
    firstName = userDataInLocalStorage.firstName;
    lastName = userDataInLocalStorage.lastName;
    email = userDataInLocalStorage.email;
  }
  // console.log("firstName", firstName);
  // console.log("lastName", lastName);
  // console.log("email", email);

  const handleLogoutClick = () => {
    localStorage.removeItem("login-token");
    localStorage.removeItem("user-data");

    // trở về trang chủ
    history.push(routerName.HOME);
  };

  return (
    <>
      {/* Kiểm tra xem đã đăng nhập chưa  */}
      {loginTokenInLocalStorage ? (
        <NavDropdown
          title={
            <img
              src={avatar}
              alt="User Avatar"
              className="login-success_icon"
            />
          }
          id="navbarScrollingDropdown"
          className="login-success_dropdown"
        >
          <NavDropdown.Item disabled href="#" className="d-flex">
            <img src={avatar} alt="User Avatar" />
            <div>
              <h5>{"Xin chào, " + firstName + " " + lastName}</h5>
              <h6>{email}</h6>
            </div>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Thiết lập trạng thái</NavDropdown.Item>
          <NavDropdown.Item href={"/user/information/" + idUser}>
            Sửa thông tin cá nhân
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#" onClick={handleLogoutClick}>
            Đăng xuất
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <NavDropdown
          title={<AccountCircleOutlined />}
          id="navbarScrollingDropdown"
          className="no-login_dropdown"
        >
          <NavDropdown.Item href="/sign-up">Đăng ký</NavDropdown.Item>
          <NavDropdown.Item href="/login">Đăng nhập</NavDropdown.Item>
        </NavDropdown>
      )}
    </>
  );
};

export default UserIcon;
