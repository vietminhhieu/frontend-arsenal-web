import React, { useState } from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import "./Checkout.scss";
import SubHeader from "../../Header/SubHeader/SubHeader";
import MainHeader from "../../Header/MainHeader/MainHeader";
import Footer from "../../Footer/Footer";
import {
  convertMoneyToNumber,
  convertMoneyToVND,
} from "../../../common/calc/handleMoney";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import routerName from "../../../Router/RouterName";

const Checkout = () => {
  let history = useHistory();

  const [deliveryRadio, setDeliveryRadio] = useState(false);
  const [checkout, setCheckout] = useState({
    transport: "freeShip",
    payment: "onlinePayment",
  });

  const cartItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("cartItems")
  );

  let cartTotalArr = [];
  const handlePriceForProduct = (price, quantity) => {
    let priceNumberType = convertMoneyToNumber(price);

    let totalPrice = priceNumberType * quantity;
    cartTotalArr.push(totalPrice);

    let finalPrice = convertMoneyToVND(totalPrice);

    return finalPrice;
  };

  const handleCalculateTotalCartPrice = () => {
    let cartTotalRes = 0;
    cartTotalArr.map((item) => {
      cartTotalRes += item;
    });
    //Chuyển về dạng VND
    let finalPrice = convertMoneyToVND(cartTotalRes);
    return finalPrice;
  };

  const handleTransportType = (e) => {
    setDeliveryRadio(!deliveryRadio);
    setCheckout({ ...checkout, [e.target.name]: e.target.value });
  };

  const handlePaymentType = (e) => {
    setCheckout({ ...checkout, [e.target.name]: e.target.value });
  };

  const handleDeal = () => {
    localStorage.setItem("checkout-sucess", JSON.stringify(checkout));
    toast.success("Chúc mừng bạn đã đặt hàng thành công", {
      position: "bottom-left",
    });
    history.push(routerName.CHECKOUT_SUCCESS);
  };

  return (
    <>
      <SubHeader />
      <MainHeader />

      <h1 className="cart-title">Thanh toán</h1>

      <Container fluid>
        <Row className="cart-total-row checkout">
          <Col className="col-unnecessary"></Col>

          <Col xs={12} lg={8} className="cart-total">
            <h6>Đơn hàng của bạn</h6>
            <Row className="total-detail checkout-detail">
              <Col xs={6} className="left-col">
                Sản phẩm:{" "}
              </Col>
              <Col xs={6} className="right-col">
                Tạm tính
              </Col>
            </Row>
            {cartItemsFromLocalStorage.map((item, index) => {
              return (
                <Row className="total-detail checkout-detail" key={index}>
                  <Col xs={6} className="left-col">
                    <img src={item.productThumbnail} alt="" />
                    <br />
                    <div href="#" className="product-name-checkout">
                      {item.productName}
                      <strong> x {item.productQuantity}</strong>
                    </div>
                    <h5>Chọn màu: {item.productColor}</h5>
                    {item.productCapacity ? (
                      <h5>Chọn Dung lượng: {item.productCapacity}</h5>
                    ) : (
                      ""
                    )}
                  </Col>
                  <Col xs={6} className="right-col">
                    {handlePriceForProduct(
                      item.productPrice,
                      item.productQuantity
                    )}
                  </Col>
                </Row>
              );
            })}

            <Row className="total-detail checkout-detail">
              <Col xs={6} className="left-col">
                Giao hàng:
              </Col>
              <Col xs={6} className="right-col">
                <Form.Check
                  type="radio"
                  name="transport"
                  label="Free ship"
                  defaultChecked="true"
                  value="freeShip"
                  onChange={(e) => handleTransportType(e)}
                />

                <Form.Check
                  type="radio"
                  name="transport"
                  label="Nhận hàng tại cửa hàng"
                  value="onStore"
                  onChange={(e) => handleTransportType(e)}
                />
              </Col>
            </Row>
            <Row className="total-detail checkout-detail">
              <Col xs={6} className="left-col">
                Tổng:{" "}
              </Col>
              <Col xs={6} className="right-col">
                {handleCalculateTotalCartPrice()}
              </Col>
            </Row>
            <Row className="total-detail checkout-detail">
              <Form.Check
                type="radio"
                name="payment"
                label="Chuyển khoản ngân hàng"
                value="onlinePayment"
                defaultChecked="true"
                onChange={(e) => handlePaymentType(e)}
              />
              {checkout.payment === "onlinePayment" && (
                <>
                  <div className="arrow-up"></div>
                  <div className="payment-box">
                    <p>
                      B1: Quý khách chọn tài khoản ngân hàng thanh toán
                      <br />
                      CHỦ TÀI KHOẢN: VIẾT MINH HIẾU
                      <br />
                      1. VIETCOMBANK – CN THĂNG LONG, HÀ NỘI
                      <br />
                      – STK: 049 1000 181 279 <br />
                      2. MB BANK – CN NAM THĂNG LONG, HÀ NỘI <br />
                      – STK: 9704 2292 8080 2336
                      <br />
                      Nội dung chuyển khoản khách hàng viết theo cú pháp: Tên +
                      tên chi tiết sản phẩm (tên + dung lượng + màu sắc) Ví dụ:
                      Nguyen Van A iPhone 13 Pro Max 128GB Trang
                    </p>
                    <hr />
                    <p>
                      B2: Chuyển khoản xong, quý khách chụp lại thông tin chuyển
                      khoản gửi SMS hoặc liên hệ Hotline 0964.819.769 để được hỗ
                      trợ.
                    </p>
                  </div>
                </>
              )}
              {!deliveryRadio && (
                <>
                  <Form.Check
                    type="radio"
                    name="payment"
                    value="offlinePayment"
                    label="Giao hàng - thu tiền (COD)"
                    onChange={(e) => handlePaymentType(e)}
                  />
                </>
              )}
            </Row>
            <div className="make-payment-btn">
              <Button
                className="make-payment"
                variant="dark"
                onClick={handleDeal}
              >
                Đặt hàng
              </Button>
            </div>
          </Col>

          <Col className="col-unnecessary"></Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Checkout;
