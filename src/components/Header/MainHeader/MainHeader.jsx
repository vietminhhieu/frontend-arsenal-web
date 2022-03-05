import React, { useState, useEffect } from "react";
import "./MainHeader.scss";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { AxiosClient } from "../../../services/API/axiosConnection";
import localApiName from "../../../services/API/axiosEndPoint";
import SearchBar from "./components/SearchBar";
import CartIcon from "./components/CartIcon";
import UserIcon from "./components/UserIcon";

const MainHeader = () => {
  const [categoryName, setCategoryName] = useState([]);

  useEffect(() => {
    const fetchApiCategory = async () => {
      const { data } = await AxiosClient.get(localApiName.apiCategory);
      setCategoryName(data);
    };

    fetchApiCategory();
  }, []);

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

          <SearchBar />

          <Form
            className="last-icon d-flex"
            style={{ justifyContent: "flex-end" }}
          >
            <CartIcon />
            <UserIcon />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
