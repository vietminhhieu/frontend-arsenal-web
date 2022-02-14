import React from "react";
import { Container, Col } from "react-bootstrap";
import "./Test.scss";
import {
  HomeOutlined,
  History,
  AccountCircleOutlined,
  BuildOutlined,
  ExitToAppOutlined,
} from "@material-ui/icons";

const Test = () => {
  return (
    <Container fluid>
      <Col xs={2}>
        <ul className="block-menu">
          <li className="block-menu__item">
            <HomeOutlined />
            <span>Trang chủ</span>
          </li>
          <li className="block-menu__item">
            <History />
            <span>Lịch sử mua hàng</span>
          </li>
          <li className="block-menu__item">
            <AccountCircleOutlined /> <span>Thông tin cá nhân</span>
          </li>
          <li className="block-menu__item">
            <BuildOutlined /> <span>Thay đổi mật khẩu</span>
          </li>
          <li className="block-menu__item">
            <ExitToAppOutlined /> <span>Đăng xuất</span>
          </li>
        </ul>
      </Col>
      <Col xs={10}></Col>
    </Container>
  );
};

export default Test;
