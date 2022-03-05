import React from "react";
import ImageGallery from "react-image-gallery";
import { Tooltip } from "@material-ui/core";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux-toolkit/features/Cart/CartSlice";
import { useHistory } from "react-router-dom";
import routerName from "../../../../Router/RouterName";

const SmartphoneInfo = ({ id, products, inputs, setInputs }) => {
  const loginTokenInLocalStorage = JSON.parse(
    localStorage.getItem("login-token")
  );

  const history = useHistory();

  const handleChangeQuantity = (e) => {
    setInputs({ ...inputs, ["quantity"]: e.target.value });
  };

  const handleSetInput = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const handleSetCapacityInput = (key1, value1, key2, value2) => {
    setInputs({ ...inputs, [key1]: value1, [key2]: value2 });
  };

  const handleColor = (productItem) => {
    let getColorName = "";
    if (productItem.includes("Màu"))
      getColorName = productItem.replace("Màu", "").toLowerCase();
    else getColorName = productItem.replace("", " ").toLowerCase();
    let finalColor =
      getColorName.slice(0, 2).toUpperCase() + getColorName.slice(2);
    return finalColor;
  };

  //Get image album
  let images = [];
  products.map((item, index) => {
    if (item._id === id) {
      images = item.thumbnail.map((el, ind) => {
        return {
          original: el,
          thumbnail: el,
        };
      });
    }
  });

  const dispatch = useDispatch();

  const handleOnClickAddToCart = (
    productId,
    productThumbnail,
    productName,
    productColor,
    productCapacity,
    productQuantity,
    productPrice
  ) => {
    loginTokenInLocalStorage
      ? dispatch(
          addToCart({
            productId,
            productThumbnail,
            productName,
            productColor,
            productCapacity,
            productQuantity,
            productPrice,
          })
        )
      : history.push(routerName.LOGIN);
  };

  return (
    <Container fluid>
      {products.map((product, index) => {
        if (product._id === id)
          return (
            <Row className="general_info" key={index}>
              <Col sm={12} lg={6} className="image_slider">
                <ImageGallery items={images} />
              </Col>
              <Col sm={12} lg={6} className="smartphone_detail">
                <div className="smartphone_detail-info">
                  <h1 style={{ marginTop: "0.5em" }}>{product.name}</h1>

                  {/* Handle color */}
                  <div className="smartphone_detail-color">
                    <label className="color-title">
                      {inputs.color ? (
                        <>
                          Chọn màu : <span>{inputs.color}</span>
                        </>
                      ) : (
                        <>
                          Chọn màu :{" "}
                          <span>{handleColor(product.color[0])}</span>
                        </>
                      )}
                    </label>
                    <div className="color-selected d-flex ">
                      {product.color.map((item, colorIndex) => {
                        const finalColor = handleColor(item);
                        return (
                          <Tooltip
                            title={finalColor}
                            arrow
                            placement="top"
                            key={colorIndex}
                          >
                            <Button
                              variant="outline-dark"
                              // onClick={() => setInputs({ ...inputs, color: item })}
                              onClick={() =>
                                handleSetInput("color", finalColor)
                              }
                            >
                              {finalColor}
                            </Button>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </div>

                  {/* Handle capacity */}
                  <div className="smartphone_detail-capacity">
                    {product.capacity.length !== 0 && (
                      <label className="capacity-title">
                        {inputs.capacity ? (
                          <>
                            Chọn Dung lượng : <span>{inputs.capacity}</span>
                          </>
                        ) : (
                          <>
                            Chọn Dung lượng : <span>{product.capacity[0]}</span>
                          </>
                        )}
                      </label>
                    )}
                    <div className="capacity-selected d-flex ">
                      {product.capacity.map((item, capacityIndex) => (
                        <Tooltip
                          title={item}
                          arrow
                          placement="top"
                          key={capacityIndex}
                        >
                          <Button
                            variant="outline-dark"
                            // onClick={() => setInputs({ ...inputs, capacity: item })}
                            onClick={() =>
                              handleSetCapacityInput(
                                "capacity",
                                item,
                                "priceIndex",
                                capacityIndex
                              )
                            }
                          >
                            {item}
                          </Button>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                  <hr />

                  {/* Handle price */}
                  {inputs.capacity === "" && (
                    <div className="smartphone_detail-price">
                      {product.price[0]}
                    </div>
                  )}
                  {product.capacity?.map((price, priceIndex) => {
                    if (price === inputs.capacity)
                      return (
                        <div
                          className="smartphone_detail-price"
                          key={priceIndex}
                        >
                          {/* {product.price[priceIndex]} */}
                          {product.price[inputs.priceIndex]}
                        </div>
                      );
                  })}

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
                      <Button
                        variant="dark add-to-cart"
                        onClick={() =>
                          handleOnClickAddToCart(
                            product._id,
                            product.thumbnail[0],
                            product.name,
                            inputs.color
                              ? inputs.color
                              : handleColor(product.color[0]),
                            inputs.capacity
                              ? inputs.capacity
                              : product.capacity[0],
                            Number(inputs.quantity),
                            product.price[inputs.priceIndex]
                          )
                        }
                      >
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
                    {product.promotion.map((promotionItem, promotionIndex) => (
                      <li key={promotionIndex}>{promotionItem}</li>
                    ))}
                  </ul>
                </div>
                <hr />
                <div className="smartphone_detail-category">
                  <label className="capacity-category">
                    Danh mục : <span>{product.category}</span>
                  </label>
                </div>
              </Col>
            </Row>
          );
      })}
    </Container>
  );
};

export default SmartphoneInfo;
