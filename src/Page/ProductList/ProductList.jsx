import React from "react";
import "./ProductList.scss";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import { Container, Col, Row } from "react-bootstrap";

export const ProductList = () => {
  const { category } = useParams();
  category.toLowerCase();

  return (
    <>
      {/* SUB-NAVIGATION */}
      <SubHeader />

      {/* MAIN-NAVIGATION */}
      <MainHeader />

      {/* TITLE  */}
      <h1>{category}</h1>

      {/* MAIN-PRODUCT */}
      <Container fluid>
        <Row className="main__product">
          {/* {productArr?.map((product, index) => ( */}
          <Col sm={12} md={6} xl={4}>
            <div className="main__product-img">
              <img
                src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg"
                alt=""
                width="100%"
              />
              <div className="product-info">
                <h3>iPhone 13 | Chính hãng VN/A</h3>
                <div className="product-price d-flex">
                  <h6 className="special-price">23.500.000 ₫</h6>
                  <h6 className="old-price">24.990.000 ₫</h6>
                </div>
              </div>
            </div>
          </Col>
          {/* ))} */}
        </Row>
      </Container>

      {/* FOOTER */}
      <Footer />
    </>
  );
};
