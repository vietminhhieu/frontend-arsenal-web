import React from "react";
import "./MainHeader.scss";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Search, LocalMallOutlined } from "@material-ui/icons";

const MainHeader = () => {
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
            alt=""
            className="img1"
          />
          <img
            src="https://res.cloudinary.com/duitozhul/image/upload/v1639843038/Smartphone_Web_Frontend/Logo/logo-mobile2.jpg"
            alt=""
            className="img2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown
              title="Apple"
              id="collasible-nav-dropdown"
              onMouseEnter={() => setOnHover(true)}
            >
              <NavDropdown.Item href="#iPhone 13">
                iPhone 13 Series
              </NavDropdown.Item>
              <NavDropdown.Item href="#iPhone 12">
                iPhone 12 Series
              </NavDropdown.Item>
              <NavDropdown.Item href="#iPhone 11">
                iPhone 11 Series
              </NavDropdown.Item>
              <NavDropdown.Item href="#iPhone X/XR">
                iPhone X/XR
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/product-list/iphone">iPhone</Nav.Link>
            <Nav.Link href="/product-list/samsung">Samsung</Nav.Link>
            <Nav.Link href="/product-list/xiaomi">Xiaomi</Nav.Link>
            <Nav.Link href="/product-list/oppo">OPPO</Nav.Link>
            <Nav.Link href="/product-list/realmi">Realmi</Nav.Link>
            <Nav.Link href="/product-list/vsmart">Vsmart</Nav.Link>
            <Nav.Link href="/product-list/asus">ASUS</Nav.Link>
            <Nav.Link href="/product-list/vivo">Vivo</Nav.Link>
            <Nav.Link href="/product-list/oneplus">OnePlus</Nav.Link>
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
          <Nav.Link href="/cart" className="cart">
            <LocalMallOutlined />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
