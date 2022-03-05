import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import SubHeader from "../Header/SubHeader/SubHeader";
import MainHeader from "../Header/MainHeader/MainHeader";
import Footer from "../Footer/Footer";
import localApiName from "../../services/API/axiosEndPoint";
import { AxiosClient } from "../../services/API/axiosConnection";
import { handlePriceNotSale } from "../../Page/ProductList/ProductList";
import { useSelector } from "react-redux";
import LoadingPageComponent from "../Loading/LoadingPage";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);

  //Nhập từ thanh tìm kiếm
  const phoneNameFormRedux = useSelector((state) => state.search.phoneName);
  // console.log("phoneNameFormRedux", phoneNameFormRedux);

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
      <SubHeader />
      <MainHeader />

      <h1
        style={{
          fontSize: "2rem",
          marginTop: "1rem",
          fontWeight: "bolder",
          opacity: "0.95",
        }}
      >
        Kết quả tìm kiếm: {phoneNameFormRedux}
      </h1>

      {loadingPage ? (
        <LoadingPageComponent loading={loadingPage} />
      ) : (
        <>
          <Container fluid>
            <Row className="main__product">
              {products?.map((product, index) => {
                const linkHrefWhenClickToProduct =
                  "/product-list/" +
                  product.category.toLowerCase() +
                  "/" +
                  product._id.toLowerCase();

                const handlePhoneName = phoneNameFormRedux.toLocaleLowerCase();

                // Nếu tên sản phẩm bao từ nhập vào từ thanh tìm kiếm
                if (product.name.toLowerCase().includes(handlePhoneName)) {
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
                }
              })}
            </Row>
          </Container>
        </>
      )}

      <Footer />
    </>
  );
};

export default Search;
