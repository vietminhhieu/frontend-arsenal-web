import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import "./Feedback.scss";
import { Rating } from "@material-ui/lab";

const Feedback = ({ feedbacks }) => {
  return (
    <Row className="feedback">
      <Col sx={12} md={6} className="feedback_info">
        {feedbacks.customerName.map((item, index) => {
          return (
            <Col className=" feedback_info-item d-flex" key={index}>
              <img src={feedbacks.avatar} alt="" height={50} />
              <div className="main-content ">
                <div className="first-line d-flex">
                  <div className="customer-name">
                    {feedbacks.customerName[index]}
                  </div>
                  <div className="submitted-time">
                    {feedbacks.submitTime[index]}
                  </div>
                </div>
                <div className="second-line ">
                  <div className="feedback-rating d-flex">
                    <h6>Đánh giá:</h6>
                    <Rating
                      name="size-small"
                      size="small"
                      defaultValue={feedbacks.rating[index]}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div className="feedback-content">
                    Nhận xét: <span>{feedbacks.feedbackContent[index]}</span>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Col>

      <Col sx={12} md={6} className="feedback_form">
        <Form>
          <h3>Thêm bình luận</h3>
          <p>
            Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
            được đánh dấu *
          </p>
          <Form.Group className="mb-2">
            <Form.Label style={{ marginBottom: "0.25rem" }}>
              Đánh giá của bạn*:
            </Form.Label>
            <br />
            <Rating name="size-small" size="small" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ marginBottom: "0.5rem" }}>
              Nhận xét của bạn*:
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Row>
              <Col xs={2}>
                <Form.Label style={{ marginTop: "0.5rem" }}>Tên*: </Form.Label>
              </Col>
              <Col xs={9}>
                <Form.Control type="text" placeholder="" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Row>
              <Col xs={2}>
                <Form.Label style={{ marginTop: "0.5rem" }}>Email*:</Form.Label>
              </Col>
              <Col xs={9}>
                <Form.Control type="email" placeholder="" />
              </Col>
            </Row>
          </Form.Group>

          <Button variant="primary" type="submit">
            Gửi đi
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Feedback;
