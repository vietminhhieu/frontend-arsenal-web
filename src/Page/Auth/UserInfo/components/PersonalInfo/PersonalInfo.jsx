import React from "react";
import "./PersonalInfo.scss";
import { Col, Row, Button, Form } from "react-bootstrap";

const PersonalInfo = () => {
  let userDataInLocalStorage = JSON.parse(localStorage.getItem("user-data"));
  // console.log("userDataInLocalStorage", userDataInLocalStorage);
  let { firstName, lastName } = userDataInLocalStorage;
  // console.log("firstName", firstName);
  // console.log("lastName", lastName);

  return (
    <Col sx={12} sm={10} md={8} xxl={6} className="personal-info_form">
      <Form>
        <h3>Thông tin cá nhân</h3>

        <Form.Group className="mb-3 mt-4">
          <Row className="mb-3 mt-2">
            <Col xs={4} className="pi-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>Họ tên: </Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="text" value={firstName + " " + lastName} />
            </Col>
          </Row>
          <Row className="mb-3 mt-2">
            <Col xs={4} className="pi-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>
                Giới tính:
              </Form.Label>
            </Col>
            <Col xs={8} className="pi-radio">
              <input type="radio" value="male" name="gender" />
              <span>Name</span>
              <input type="radio" value="female" name="gender" />
              <span>Nữ</span>
              <input type="radio" value="other-size" name="gender" />
              <span>Giới tính khác</span>
            </Col>
          </Row>
          <Row className="mb-3 mt-2">
            <Col xs={4} className="pi-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>
                Ngày sinh:{" "}
              </Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="date" placeholder="" />
            </Col>
          </Row>
          <Row className="mb-3 mt-2">
            <Col xs={4} className="pi-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>
                Số điện thoại:{" "}
              </Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="text" placeholder="" />
            </Col>
          </Row>
          <Row className="mb-3 mt-2">
            <Col xs={4} className="pi-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>Địa chỉ: </Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="text" placeholder="" />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          Xác nhận
        </Button>
      </Form>
    </Col>
  );
};

export default PersonalInfo;
