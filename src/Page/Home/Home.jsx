import React from "react";
import "./Home.scss";
import { Container, Col, Row, Nav } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="wrapper">
      <Row className="h-50 w-100 m-0 ">
        <Col md={6} sm={12} className="h-25 red"></Col>
        <Col md={3} sm={12} className="h-25 blue"></Col>
        <Col md={3} sm={12} className="h-25 green"></Col>
      </Row>

      <Container>
        <h1>This is home page</h1>
      </Container>
    </div>
  );
};

export default Home;
