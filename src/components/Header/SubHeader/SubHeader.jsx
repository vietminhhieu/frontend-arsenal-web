import React from "react";
import "./SubHeader.scss";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Call, LocationOn } from "@material-ui/icons";

const SubHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="sub__nav px-2"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <h3> Hiếu Viết Store</h3>
          <h6>Uy tín - Chất lượng - Chính hãng</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/contact">
              <Call />
              <span>0964819769</span>
            </Nav.Link>
            <Nav.Link href="/address">
              <LocationOn />
              <span>Số 69 Phú Diễn, Bắc Từ Liêm, Hà Nội</span>
            </Nav.Link>
            {/* <Nav.Link href="#" className="cart">
                <LocalMallOutlined />
              </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SubHeader;
