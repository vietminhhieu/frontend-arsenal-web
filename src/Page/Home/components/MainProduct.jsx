import React from "react";
import { Container, Col, Row } from "react-bootstrap";

let productArr = [];

const MainProduct = ({ products }) => {
  return (
    <Container fluid>
      <Row className="main__product">
        {products?.map((product, index) => {
          const linkHref = "/product-list/" + product.category.toLowerCase();
          if (productArr.length !== 0) {
            let count = 0;
            productArr.forEach((item, index) => {
              item === product.category && ++count;
            });
            if (count === 0) {
              productArr.push(product.category);
              return (
                <Col sm={12} md={6} xl={4} key={product._id}>
                  <div className="main__product-img">
                    <a href={linkHref}>
                      <img src={product.thumbnail[0]} alt="" width="100%" />
                    </a>
                    <h4>{product.category}</h4>
                  </div>
                </Col>
              );
            }
          } else {
            productArr.push(product.category);
            return (
              <Col sm={12} md={6} xl={4} key={product._id}>
                <div className="main__product-img">
                  <a href={linkHref}>
                    <img src={product.thumbnail[0]} alt="" width="100%" />
                  </a>
                  <h4>{product.category}</h4>
                </div>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default MainProduct;
