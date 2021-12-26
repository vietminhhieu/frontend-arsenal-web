import React, { useState, useEffect, useMemo } from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import ImageGallery from "react-image-gallery";
import { Tooltip } from "@material-ui/core";
import Description from "./components/Description/Description";
import ExtraInfo from "./components/ExtraInfo/ExtraInfo";
import Feedback from "./components/Feedback/Feedback";

const images = [
  {
    original:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg",
    thumbnail:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg",
  },
  {
    original:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg",
    thumbnail:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg",
  },
  {
    original:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_11_white_4_.png",
    thumbnail:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_11_white_4_.png",
  },
  {
    original:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg",
    thumbnail:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg",
  },
  {
    original:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg",
    thumbnail:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg",
  },
  {
    original:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_11_white_4_.png",
    thumbnail:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_11_white_4_.png",
  },
  {
    original:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg",
    thumbnail:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg",
  },
  {
    original:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg",
    thumbnail:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg",
  },
  {
    original:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_11_white_4_.png",
    thumbnail:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_11_white_4_.png",
  },
];

const smartphoneDetailPromotionArr = [
  "Tặng ốp Clear Case chính hãng Apple (N/Y: 1.430.000đ) với giá 0đ",
  "Tặng 1.000.000đ triệu khi mua kèm tai nghe AirPods 2/ AirPods Pro (2021)",
  "Tặng 1.000.000đ triệu khi mua kèm ốp chính hãng Apple (Silicone Case, Leather Case)(*Lưu ý: Khách hàng chỉ đc chọn 1 trong các chương trình trên, Chương trình KM tính trên giá niêm yết, không áp dụng chung với KM khác)",
  "Trả góp 0% lãi suất thẻ tín dụng",
];

const colorSelectedArr = ["Blue", "Gray", "Silver", "Gold"];

const capacitySelectedArr = ["128GB", "256GB", "512GB", "1TB"];

// 'description', 'extraInfo', 'Feedback'

export const ProductDetail = () => {
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    color: "",
    capacity: "",
    quantity: 1,
  });

  const [render, setRender] = useState("description");

  const handleChangeQuantity = (e) => {
    setInputs({ ...inputs, ["quantity"]: e.target.value });
  };

  const handleSetInput = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  return (
    <>
      {/* SUB-NAVIGATION */}
      <SubHeader />

      {/* MAIN-NAVIGATION */}
      <MainHeader />

      {/* PRODUCT -DETAIL */}
      <Container fluid>
        <Row className="general_info">
          <Col sm={12} lg={6} className="image_slider">
            <ImageGallery items={images} />;
          </Col>
          <Col sm={12} lg={6} className="smartphone_detail">
            <div className="smartphone_detail-info">
              <h1>Tên smartphone</h1>
              <div className="smartphone_detail-color">
                <label className="color-title">
                  Chọn màu : <span>{inputs.color}</span>
                </label>
                <div className="color-selected d-flex ">
                  {colorSelectedArr.map((item, index) => (
                    <Tooltip
                      key={index}
                      title={item}
                      arrow
                      placement="top"
                      style={{ fontSize: "20px" }}
                    >
                      <Button
                        variant="outline-dark"
                        // onClick={() => setInputs({ ...inputs, capacity: item })}
                        onClick={() => handleSetInput("color", item)}
                        style={{ backgroundColor: item.toLowerCase() }}
                      ></Button>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="smartphone_detail-capacity">
                <label className="capacity-title">
                  Chọn Dung lượng : <span>{inputs.capacity}</span>
                </label>
                <div className="capacity-selected d-flex ">
                  {capacitySelectedArr.map((item, index) => (
                    <Tooltip title={item} arrow placement="top" key={index}>
                      <Button
                        variant="outline-dark"
                        // onClick={() => setInputs({ ...inputs, capacity: item })}
                        onClick={() => handleSetInput("capacity", item)}
                      >
                        {item}
                      </Button>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <hr />
              <div className="smartphone_detail-price">32.950.000 ₫</div>
              <div className="smartphone_detail-payment d-flex">
                <div className="product-quantity">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min={1}
                    onChange={handleChangeQuantity}
                    value={inputs.quantity}
                  />
                </div>
                <div className="payment-method d-flex">
                  <Button variant="primary add-to-cart">
                    Thêm vào giỏ hàng
                  </Button>
                  <Button variant="outline-dark amortization">
                    Tính toán trả góp
                  </Button>
                </div>
              </div>
            </div>
            <div className="smartphone_detail-promotion">
              <label className="capacity-title">Khuyến mại</label>
              <ul>
                {smartphoneDetailPromotionArr.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="smartphone_detail-category">
              <label className="capacity-category">
                Danh mục : <span>iPhone</span>
              </label>
            </div>
          </Col>
        </Row>
      </Container>

      {/* EXTRA-INFO */}
      <Container fluid>
        <div className="extra_info">
          <ul className="extra_info-tabs d-flex active">
            <li
              className="tab-item active"
              onClick={() => setRender("description")}
            >
              Mô tả
            </li>
            <li className="tab-item" onClick={() => setRender("extraInfo")}>
              Thông tin bổ sung
            </li>
            <li className="tab-item" onClick={() => setRender("feedback")}>
              Đánh giá
            </li>
          </ul>
          <hr />
        </div>
        {render === "description" && <Description />}
        {render === "extraInfo" && <ExtraInfo />}
        {render === "feedback" && <Feedback />}
      </Container>

      {/* FOOTER */}
      <Footer />
    </>
  );
};
