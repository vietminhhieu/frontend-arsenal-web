import React from "react";
import { useState } from "react";
import "./Description.scss";

const handleRenderDetailFeature = (feature) => {
  if (feature.includes("/strong/"))
    return <strong>{feature.replace("/strong/", "")}</strong>;
  if (feature.includes("https")) return <img src={feature} alt="" />;
  return <p>{feature}</p>;
};

const Description = ({ idProduct, productItem }) => {
  const [status, setStatus] = useState("");

  return (
    <div className="description">
      {productItem.map((product, index) => {
        if (idProduct === product._id) {
          return (
            <div className={"detail-feature" + " " + status} key={index}>
              {product.description.map((item, itemIndex) => {
                if (itemIndex === 0) {
                  return (
                    <div className="outstanding-feature" key={itemIndex}>
                      <h5>Tổng quát</h5>
                      <strong>{item.replace("/strong/", "")}</strong>
                    </div>
                  );
                } else {
                  return (
                    <div key={itemIndex}>{handleRenderDetailFeature(item)}</div>
                  );
                }
              })}
            </div>
          );
        }
      })}
      {status === "" && (
        <div className="see-more" onClick={() => setStatus("active")}>
          Xem thêm ▼
        </div>
      )}
      {status === "active" && (
        <div className="see-more" onClick={() => setStatus("")}>
          Thu gọn ▲
        </div>
      )}
    </div>
  );
};

export default Description;
