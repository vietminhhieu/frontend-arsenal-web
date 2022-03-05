import React, { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { HighlightOff } from "@material-ui/icons";
import SubHeader from "../../Header/SubHeader/SubHeader";
import MainHeader from "../../Header/MainHeader/MainHeader";
import Footer from "../../Footer/Footer";
import "./CartInfo.scss";
import {
  convertMoneyToNumber,
  convertMoneyToVND,
} from "../../../common/calc/handleMoney";
import { useHistory } from "react-router-dom";
import routerName from "../../../Router/RouterName";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantityInCart,
} from "../../../redux-toolkit/features/Cart/CartSlice";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const productInCart = useSelector((state) => state.cart.cartItems);

  let cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
  let userDatas = JSON.parse(localStorage.getItem("user-data"));

  const [updateProductQuantity, setUpdateProductQuantity] = useState(false);
  const [cartItemsWithNewQuantity, setCartItemsWithNewQuantity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let cartTotalArr = [];
  const handleCalculateTotalProductPrice = (productPrice, productQuantity) => {
    //Chuyển VND về dang number
    let convertToNumber = convertMoneyToNumber(productPrice);

    //tính kết quả với số lượng sản phẩm
    let res = convertToNumber * productQuantity;
    cartTotalArr.push(res);

    //Chuyển về dạng VND
    let finalPrice = convertMoneyToVND(res);

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

  const handleChangeProductQuantity = (e, productIndex) => {
    setUpdateProductQuantity(true);
    //update quantity from localStorage when click to increase or decrease quantity
    cartItemsFromLocalStorage[productIndex].productQuantity = e.target.value;
    //set new quantity value on localStorage
    setCartItemsWithNewQuantity(cartItemsFromLocalStorage);
  };

  const handleClickUpdateCart = () => {
    setUpdateProductQuantity(false);
    localStorage.setItem("cartItems", JSON.stringify(cartItemsWithNewQuantity));

    window.location.reload();
  };

  // const handleRemoveProductFromCart = (indexCartFromLocalStorage) => {
  //   cartItemsFromLocalStorage.splice(indexCartFromLocalStorage, 1);
  //   localStorage.setItem(
  //     "cartItems",
  //     JSON.stringify(cartItemsFromLocalStorage)
  //   );
  //   window.location.reload();
  // };

  const handleRemoveProductFromCart = (indexCartFromLocalStorage) => {
    dispatch(removeFromCart(indexCartFromLocalStorage));
    console.log("indexCartFromLocalStorage", indexCartFromLocalStorage);
  };

  const handleMakePayment = () => {
    if (
      userDatas.phoneNumber === "" ||
      userDatas.houseNumber === "" ||
      userDatas.district === "" ||
      userDatas.wards === "" ||
      userDatas.city === ""
    ) {
      toast.error(
        "Bạn hãy điền thông tin cá nhân trước khi tiến hành thanh toán nhé!"
      );
      history.push(`user/information/${userDatas._id}`);
    } else {
      history.push(routerName.CHECKOUT);
    }
  };

  return (
    <>
      <SubHeader />
      <MainHeader />

      <h1 className="cart-title">Giỏ hàng</h1>

      {productInCart.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://res.cloudinary.com/duitozhul/image/upload/v1646214419/Smartphone_Web_Frontend/Cart/empty_cart.svg"
            alt=""
          />
          <h4>Không có sản phẩm nào trong giỏ hàng</h4>
        </div>
      ) : (
        <Container fluid>
          <Table className="cart-table">
            <thead>
              <tr>
                <th className="product-thumbnail"></th>
                <th className="product-name">Sản phẩm</th>
                <th className="product-price">Giá</th>
                <th className="product-quantity">Số lượng</th>
                <th className="product-subtotal">Tạm tính</th>
                <th className="product-remove"></th>
              </tr>
            </thead>
            <tbody>
              {productInCart.map((cartItem, cartIndex) => {
                const category = cartItem.productName
                  .split(" ")[0]
                  .toLowerCase();
                const idProduct = cartItem.productId;
                return (
                  <tr key={cartIndex}>
                    <td className="product-thumbnail">
                      <img src={cartItem.productThumbnail} alt="" />
                    </td>
                    <td className="product-name">
                      <a href={`/product-list/${category}/${idProduct}`}>
                        {cartItem.productName}
                      </a>
                      <h6>Chọn màu: {cartItem.productColor}</h6>
                      {cartItem.productCapacity && (
                        <h6>Chọn Dung lượng: {cartItem.productCapacity}</h6>
                      )}
                    </td>
                    <td className="product-price">{cartItem.productPrice}</td>
                    <td className="product-quantity">
                      <input
                        type="number"
                        id="product-quantity"
                        name="product-quantity"
                        min={1}
                        defaultValue={cartItem.productQuantity}
                        onChange={(e) =>
                          handleChangeProductQuantity(e, cartIndex)
                        }
                      />
                    </td>
                    <td className="product-subtotal">
                      {handleCalculateTotalProductPrice(
                        cartItem.productPrice,
                        cartItem.productQuantity
                      )}
                    </td>
                    <td
                      className="product-remove"
                      onClick={() => handleRemoveProductFromCart(cartIndex)}
                    >
                      <HighlightOff />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="update-cart-btn">
            <Button
              className="update-cart"
              variant="dark"
              disabled={!updateProductQuantity}
              onClick={handleClickUpdateCart}
            >
              Cập nhật giỏ hàng
            </Button>
          </div>

          <Row className="cart-total-row">
            <Col className="col-unnecessary"></Col>
            <Col xs={12} lg={6} className="cart-total">
              <h6>Cộng giỏ hàng</h6>
              <Row className="total-detail">
                <Col xs={5}>Tổng: </Col>
                <Col xs={7}>{handleCalculateTotalCartPrice()}</Col>
              </Row>
              <div className="make-payment-btn">
                <Button
                  className="make-payment"
                  variant="dark"
                  onClick={handleMakePayment}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Tiến hành thanh toán"}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      <Footer />
    </>
  );
};

export default Cart;
