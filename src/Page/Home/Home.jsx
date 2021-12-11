import React from "react";
import "./Home.scss";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import Footer from "../../components/Footer/Footer";
import {
  productArr,
  carouselArr,
  storeInfoTop,
  storeInfoBottom,
} from "./Constant";

export const Home = () => {
  return (
    <>
      {/* SUB-NAVIGATION */}
      <SubHeader />

      {/* MAIN-NAVIGATION */}
      <MainHeader />

      {/* CAROUSEL */}
      <Carousel className=" w-100 " variant="dark">
        {carouselArr.map((carousel, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={carousel.imgSource}
              alt={carousel.name}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* MAIN-PRODUCT */}
      <Container fluid>
        <Row className="main__product">
          {productArr?.map((product, index) => (
            <Col sm={12} md={6} xl={4} key={index}>
              <div className="main__product-img">
                <img src={product.imgSource} alt="" width="100%" />
                <h4>{product.name}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* BUSINESS-IMG */}
      <div className="business__img">
        <img
          src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-88630e9/wp-content/uploads/2021/09/Desktop-U%CC%9Bu-da%CC%83i-nha%CC%82n-vie%CC%82n-1536x704.png"
          alt=""
        />
      </div>

      {/* STORE-INFO */}
      <Container fluid className="store__info">
        <h2 className="text-center">Yêu Smartphone, đến Hiếu Viết Store</h2>
        <Row className="store__info-top">
          {storeInfoTop.map((item, index) => (
            <Col sm={12} lg={6} key={index}>
              <img src={item.imgSource} alt="" width="100%" />
              <h4>{item.h4}</h4>
            </Col>
          ))}
        </Row>
        <Row className="store__info-bottom">
          {storeInfoBottom.map((item, index) => (
            <Col sm={12} md={6} xl={4} key={index}>
              <img src={item.imgSource} alt="" width="15%" />
              <h4>{item.h4}</h4>
              <h6>{item.h6}</h6>
            </Col>
          ))}
        </Row>
      </Container>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
