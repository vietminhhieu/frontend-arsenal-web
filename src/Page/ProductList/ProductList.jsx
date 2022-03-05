import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import { Container, Col, Row } from "react-bootstrap";
import { AxiosClient } from "../../services/API/axiosConnection";
import localApiName from "../../services/API/axiosEndPoint";
import {
  convertMoneyToNumber,
  convertMoneyToVND,
  randomMoneyInPriceNotSale,
} from "../../common/calc/handleMoney";
import LoadingPageComponent from "../../components/Loading/LoadingPage";

export const handlePriceNotSale = (product) => {
  //chuyển tiền VNĐ về dạng số
  let firstHandleMoney = convertMoneyToNumber(product);

  //Ramdom số tiền chưa sale
  let secondHandleMoney = randomMoneyInPriceNotSale(firstHandleMoney);

  //Chuyển về tiền VNĐ
  let finalPrice = convertMoneyToVND(secondHandleMoney);

  return finalPrice;
};

let render = 0;

export const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    async function fetchProductApi() {
      const { data } = await AxiosClient.get(localApiName.apiProduct);
      setProducts(data);
      setLoadingPage(false);
    }
    fetchProductApi();
  }, []);

  return (
    <>
      {/* SUB-NAVIGATION */}
      <SubHeader />

      {/* MAIN-NAVIGATION */}
      <MainHeader />

      {loadingPage ? (
        <LoadingPageComponent loading={loadingPage} />
      ) : (
        <>
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
                const linkHrefWhenClickToProduct =
                  "/product-list/" +
                  product.category.toLowerCase() +
                  "/" +
                  product._id.toLowerCase();

                if (product.category.toLowerCase() === category)
                  return (
                    <Col sm={12} md={6} xl={4} key={index}>
                      <div className="main__product-img">
                        <a href={linkHrefWhenClickToProduct}>
                          <img
                            src={product.thumbnail[0]}
                            alt={product.name}
                            width="100%"
                          />
                        </a>
                        <div className="product-info">
                          <h3>{product.name}</h3>
                          <div className="product-price d-flex">
                            <h6 className="special-price">
                              {product.price[0]}
                            </h6>
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
        </>
      )}

      {/* FOOTER */}
      <Footer />
    </>
  );
};
