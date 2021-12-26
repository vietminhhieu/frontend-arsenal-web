import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Feedback.scss";

const Feedback = () => {
  return (
    <Row className="feedback">
      <Col sm={12} md={6} xl={4} className="feedback_info d-flex">
        <img
          src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/desktop/source/rev-3eb1eb3/avatar/1dc61884508515d5b8bb6c0b7f2dc5fc.93d77305749e568150ce20899de7e455"
          alt=""
        />
        <div className="main-content">
          <div className="first-line d-flex">
            <div className="customer-name">Long</div>
            <div className="submitted-time">2021-10-02</div>
          </div>
          <div className="feedback-content">Đang hóng em này lắm</div>
        </div>
      </Col>
      <Col sm={12} md={6} xl={4} className="feedback_form"></Col>
    </Row>
  );
};

export default Feedback;
