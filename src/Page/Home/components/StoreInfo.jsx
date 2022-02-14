import React from "react";
import { storeInfoBottom, storeInfoTop } from "../Constant";
import { Container, Col, Row } from "react-bootstrap";

const StoreInfo = () => {
  return (
    <Container fluid className="store__info">
      <h2 className="text-center">Yêu Smartphone, đến Hiếu Viết Store</h2>
      <Row className="store__info-top">
        {storeInfoTop?.map((item, index) => (
          <Col sm={12} lg={6} key={index}>
            <img src={item.imgSource} alt="" width="100%" />
            <h4>{item.h4}</h4>
          </Col>
        ))}
      </Row>
      <Row className="store__info-bottom">
        {storeInfoBottom?.map((item, index) => (
          <Col sm={12} md={6} xl={4} key={index}>
            <img src={item.imgSource} alt="" width="15%" />
            <h4>{item.h4}</h4>
            <h6>{item.h6}</h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StoreInfo;
