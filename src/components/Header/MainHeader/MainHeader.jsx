import React, { useState } from "react";
import "./MainHeader.scss";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Search, LocalMallOutlined } from "@material-ui/icons";

const MainHeader = () => {
  const [onHover, setOnHover] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      sticky="top"
      className="main__nav"
    >
      <Container fluid className="">
        <Navbar.Brand href="#home">
          <img src="./image/logo/logo-rectangle.jpg" alt="" className="img1" />
          <img src="./image/logo/logo-mobile2.jpg" alt="" className="img2" />
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
            <Nav.Link href="/product-list/iPhone">iPhone</Nav.Link>
            <Nav.Link href="/product-list/Samsung">Samsung</Nav.Link>
            <Nav.Link href="/product-list/Xiaomi">Xiaomi</Nav.Link>
            <Nav.Link href="/product-list/OPPO">OPPO</Nav.Link>
            <Nav.Link href="/product-list/Realmi">Realmi</Nav.Link>
            <Nav.Link href="/product-list/Vsmart">Vsmart</Nav.Link>
            <Nav.Link href="/product-list/ASUS">ASUS</Nav.Link>
            <Nav.Link href="/product-list/Vivo">Vivo</Nav.Link>
            <Nav.Link href="/product-list/OnePlus">OnePlus</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Bạn muốn mua gì?"
              aria-label="Search"
            />
            <Nav.Link href="#" className="search">
              <Search />
            </Nav.Link>
          </Form>
          <Nav.Link href="#" className="cart">
            <LocalMallOutlined />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
