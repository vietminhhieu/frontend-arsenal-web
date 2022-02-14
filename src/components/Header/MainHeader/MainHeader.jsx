import React, { useState, useEffect } from "react";
import "./MainHeader.scss";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import {
  Search,
  LocalMallOutlined,
  AccountCircleOutlined,
} from "@material-ui/icons";
import { AxiosClient } from "../../../services/API/axiosConnection";
import localApiName from "../../../services/API/axiosEndPoint";
import { useHistory } from "react-router-dom";
import routerName from "../../../Router/RouterName";

const MainHeader = () => {
  const [categoryName, setCategoryName] = useState([]);

  let history = useHistory();

  useEffect(() => {
    const fetchApiCategory = async () => {
      const { data } = await AxiosClient.get(localApiName.apiCategory);
      setCategoryName(data);
    };

    fetchApiCategory();
  }, []);

  //Lấy login token từ localStorage
  let loginTokenInLocalStorage = localStorage.getItem("login-token");
  // console.log("loginTokenInLocalStorage", loginTokenInLocalStorage);

  //Lấy user data từ localStorage
  let userDataInLocalStorage = JSON.parse(localStorage.getItem("user-data"));
  // console.log("userDataInLocalStorage", userDataInLocalStorage);
  let firstName = "",
    lastName = "",
    email = "";
  if (localStorage.getItem("user-data")) {
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
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      sticky="top"
      className="main__nav"
    >
      <Container fluid className="">
        <Navbar.Brand href="/">
          <img
            src="https://res.cloudinary.com/duitozhul/image/upload/v1639843039/Smartphone_Web_Frontend/Logo/logo-rectangle.jpg"
            alt="Logo 1"
            className="img1"
          />
          <img
            src="https://res.cloudinary.com/duitozhul/image/upload/v1639843038/Smartphone_Web_Frontend/Logo/logo-mobile2.jpg"
            alt="Logo 2"
            className="img2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {categoryName.map((item, index) => {
              const linkHref = "/product-list/" + item.name.toLowerCase();
              return (
                <Nav.Link key={index} href={linkHref}>
                  {item.name}
                </Nav.Link>
              );
            })}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Bạn muốn mua gì?"
              aria-label="Search"
            />
            <Nav.Link href="" className="search">
              <Search />
            </Nav.Link>
          </Form>
          <Form
            className="last-icon d-flex"
            style={{ justifyContent: "flex-end" }}
          >
            <Nav.Link href="/cart" className="icon cart">
              <LocalMallOutlined />
            </Nav.Link>

            {/* Kiểm tra xem đã đăng nhập chưa  */}
            {loginTokenInLocalStorage ? (
              <NavDropdown
                title={
                  <img
                    src="https://www.ihep.org/wp-content/themes/ihep-theme/assets/images/user-profile.jpg"
                    alt="User Avatar"
                    className="login-success_icon"
                  />
                }
                id="navbarScrollingDropdown"
                className="login-success_dropdown"
              >
                <NavDropdown.Item disabled href="#" className="d-flex">
                  <img
                    src="https://www.ihep.org/wp-content/themes/ihep-theme/assets/images/user-profile.jpg"
                    alt="User Avatar"
                  />
                  <div>
                    <h5>{"Xin chào, " + firstName + " " + lastName}</h5>
                    <h6>{email}</h6>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Thiết lập trạng thái
                </NavDropdown.Item>
                <NavDropdown.Item href="/user/information">
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
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
