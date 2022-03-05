import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SubHeader from "../../Header/SubHeader/SubHeader";
import MainHeader from "../../Header/MainHeader/MainHeader";
import Footer from "../../Footer/Footer";
import {
  convertMoneyToNumber,
  convertMoneyToVND,
} from "../../../common/calc/handleMoney";
import "./CheckoutSuccess.scss";

const CheckoutSuccess = () => {
  const cartItemsFromLocalStorage = JSON.parse(
    localStorage.getItem("cartItems")
  );
  const userDatasFromLocalStorage = JSON.parse(
    localStorage.getItem("user-data")
  );
  const checkoutSuccessFormLocal = JSON.parse(
    localStorage.getItem("checkout-sucess")
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

  return (
    <>
      <SubHeader />
      <MainHeader />

      <h1 className="cart-title">Đơn hàng của bạn</h1>

      <Container fluid>
        <Row className="cart-total-row checkout">
          <Col className="col-unnecessary"></Col>

          <Col xs={12} lg={8} className="cart-total">
            <Row className="total-detail checkout-detail checkout-success-first">
              <Col xs={6} className="left-col">
                Sản phẩm:{" "}
              </Col>
              <Col xs={6} className="right-col">
                Tạm tính
              </Col>
            </Row>
            {cartItemsFromLocalStorage.map((item, index) => {
              return (
                <Row
                  className="total-detail checkout-detail checkout-success"
                  key={index}
                >
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

            <Row className="total-detail checkout-detail checkout-success">
              <Col xs={6} className="left-col">
                Số điện thoại:
              </Col>
              <Col xs={6} className="right-col">
                {userDatasFromLocalStorage.phoneNumber}
              </Col>
            </Row>
            <Row className="total-detail checkout-detail checkout-success">
              <Col xs={6} className="left-col">
                Nhận hàng tại:
              </Col>
              <Col xs={6} className="right-col">
                {checkoutSuccessFormLocal.transport === "freeShip"
                  ? userDatasFromLocalStorage.houseNumber +
                    ", " +
                    userDatasFromLocalStorage.wards +
                    ", " +
                    userDatasFromLocalStorage.district +
                    ", " +
                    userDatasFromLocalStorage.city
                  : "Số 69 đường Phú Diễn, quận Bắc Từ Liêm, Thành phố Hà Nội"}
              </Col>
            </Row>
            <Row className="total-detail checkout-detail checkout-success">
              <Col xs={6} className="left-col">
                Hình thức thanh toán:
              </Col>
              <Col xs={6} className="right-col">
                {checkoutSuccessFormLocal.payment === "onlinePayment"
                  ? "Chuyển khoản ngân hàng"
                  : "Giao hàng - thu tiền (COD)"}
              </Col>
              {checkoutSuccessFormLocal.payment === "onlinePayment" && (
                <div className="payment-box mt-3">
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
              )}
            </Row>

            <Row className="total-detail checkout-detail checkout-success">
              <Col xs={6} className="left-col">
                Tổng:{" "}
              </Col>
              <Col xs={6} className="right-col">
                {handleCalculateTotalCartPrice()}
              </Col>
            </Row>
          </Col>

          <Col className="col-unnecessary"></Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default CheckoutSuccess;
