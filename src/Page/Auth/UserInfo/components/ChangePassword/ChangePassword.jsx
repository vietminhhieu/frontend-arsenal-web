import React from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import "./ChangePassword.scss";

const ChangePassword = () => {
  return (
    <Col sx={12} sm={10} md={8} xxl={6} className="change-password_form">
      <Form>
        <h3>Thay đổi mật khẩu</h3>

        <Form.Group className="mb-2 mt-4">
          <Row className="mb-3 mt-2">
            <Col xs={5} className="cp-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>
                Mật khẩu cũ:{" "}
              </Form.Label>
            </Col>
            <Col xs={7}>
              <Form.Control type="password" placeholder="" />
            </Col>
          </Row>
          <Row className="mb-3 mt-2">
            <Col xs={5} className="cp-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>
                Mật khẩu mới:{" "}
              </Form.Label>
            </Col>
            <Col xs={7}>
              <Form.Control type="password" placeholder="" />
            </Col>
          </Row>
          <Row className="mb-3 mt-2">
            <Col xs={5} className="cp-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>
                Nhập lại mật khẩu mới:{" "}
              </Form.Label>
            </Col>
            <Col xs={7}>
              <Form.Control type="password" placeholder="" />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          Thay đổi
        </Button>
      </Form>
    </Col>
  );
};

export default ChangePassword;
