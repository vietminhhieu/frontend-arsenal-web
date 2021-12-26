import React from "react";
import "./Footer.scss";
import { Container, Col, Row } from "react-bootstrap";
import Iframe from "react-iframe";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: "#000" }}>
      <Container fluid>
        <Row>
          <Col sm={12} md={6} xl={4} className="footer-info">
            <ul style={{ color: "#fff" }}>
              <li>
                <img
                  src="https://res.cloudinary.com/duitozhul/image/upload/v1639843038/Smartphone_Web_Frontend/Logo/logo-mobile2.jpg"
                  alt=""
                />
              </li>
              <li>Địa chỉ: Số 69 Phú Diễn, Bắc Từ Liêm, Hà Nội</li>
              <li>Hotline: 0964 819 769</li>
              <li>Email: hieuvietstore@gmail.com</li>
            </ul>
          </Col>
          <Col className="footer-map">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.70011733077!2d105.75992191465741!3d21.044681785989773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c17d1a64d5%3A0x8069b74dcdc8e817!2zNjkgxJAuIFBow7ogRGnhu4VuLCBD4bqndSBEaeG7hW4sIELhuq9jIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1639146504808!5m2!1svi!2s"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            />
          </Col>
          <Col className="footer-fanpage">
            <Iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHi%25E1%25BA%25BFu-Vi%25E1%25BA%25BFt-Store-274886254350122&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%"
              height="300"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
