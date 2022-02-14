import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import { Container, Col, Row } from "react-bootstrap";
import { AxiosClient } from "../../services/API/axiosConnection";
import localApiName from "../../services/API/axiosEndPoint";

const handlePriceNotSale = (product) => {
  let productNotHandle = product;
  let productHandleUnit, productHandleDot1, productHandleDot2;
  //Loại ₫ và dấu .
  if (productNotHandle.includes(" ₫"))
    productHandleUnit = productNotHandle.replace(" ₫", "");
  if (productHandleUnit.includes("."))
    productHandleDot1 = productHandleUnit.replace(".", "");
  if (productHandleDot1.includes(".")) {
    productHandleDot2 = productHandleDot1.replace(".", "");
  } else {
    productHandleDot2 = productHandleDot1;
  }

  //Ramdom số tiền chưa sale
  let convertPriceToNumber = Number(productHandleDot2);
  let randomPrice, roundPrice;
  if (convertPriceToNumber < 1000000) {
    randomPrice = convertPriceToNumber * 1.5;
    roundPrice = Math.round(randomPrice / 10000) * 10000 - 10000;
  }
  if (convertPriceToNumber >= 1000000 && convertPriceToNumber < 10000000) {
    randomPrice = convertPriceToNumber * 1.35;
    roundPrice = Math.round(randomPrice / 100000) * 100000 - 10000;
  }
  if (convertPriceToNumber >= 10000000) {
    randomPrice = convertPriceToNumber * 1.15;
    roundPrice = Math.round(randomPrice / 100000) * 100000 - 10000;
  }
  //Chuyển về dạng string và thêm ₫ và dấu .
  let priceToString = roundPrice.toString();
  let priceAddDot = "",
    count = 0;
  for (let i = priceToString.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && count !== 0) priceAddDot += ".";
    priceAddDot += priceToString[i];
    ++count;
  }
  let finalPriceAddDot = "";
  for (let i = priceAddDot.length - 1; i >= 0; i--) {
    finalPriceAddDot += priceAddDot[i];
  }
  let finalPrice = finalPriceAddDot + " ₫";

  return finalPrice;
};

let render = 0;

export const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProductApi() {
      const { data } = await AxiosClient.get(localApiName.apiProduct);
      setProducts(data);
    }

    fetchProductApi();
  }, []);

  return (
    <>
      {/* SUB-NAVIGATION */}
      <SubHeader />

      {/* MAIN-NAVIGATION */}
      <MainHeader />

      {/* TITLE  */}
      {products.map((item, index) => {
        if (item.category.toLowerCase() === category) {
          ++render;
          if (render === 1)
            return (
              <h1
                style={{
                  marginTop: "1rem",
                  fontWeight: "bolder",
                  opacity: "0.95",
                }}
                key={index}
              >
                {item.category}
              </h1>
            );
        }
      })}

      {/* MAIN-PRODUCT */}
      <Container fluid>
        <Row className="main__product">
          {products?.map((product, index) => {
            const linkHref =
              "/product-list/" +
              product.category.toLowerCase() +
              "/" +
              product._id.toLowerCase();
            if (product.category.toLowerCase() == category)
              return (
                <Col sm={12} md={6} xl={4} key={index}>
                  <div className="main__product-img">
                    <a href={linkHref}>
                      <img
                        src={product.thumbnail[0]}
                        alt={product.name}
                        width="100%"
                      />
                    </a>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <div className="product-price d-flex">
                        <h6 className="special-price">{product.price[0]}</h6>
                        <h6 className="old-price">
                          {handlePriceNotSale(product.price[0])}
                        </h6>
                      </div>
                    </div>
                  </div>
                </Col>
              );
          })}
        </Row>
      </Container>

      {/* FOOTER */}
      <Footer />
    </>
  );
};
