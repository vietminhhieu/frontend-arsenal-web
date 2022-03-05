import React, { useState } from "react";
import "./UserInfo.scss";
import {
  HomeOutlined,
  History,
  AccountCircleOutlined,
  BuildOutlined,
  ExitToAppOutlined,
  ImageOutlined,
} from "@material-ui/icons";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import { Col, Row } from "react-bootstrap";
import { Container } from "@material-ui/core";
import MainHeader from "../../../components/Header/MainHeader/MainHeader";
import { useHistory } from "react-router-dom";
import routerName from "../../../Router/RouterName";
import ChangeAvatar from "./components/ChangeAvatar/ChangeAvatar";

const UserInfo = () => {
  const [render, setRender] = useState("personalInfo");

  let history = useHistory();

  const handleLogoutClick = () => {
    localStorage.removeItem("login-token");
    localStorage.removeItem("user-data");
    // trở về trang chủ
    history.push(routerName.HOME);
  };

  return (
    <>
      <MainHeader />

      <Container fluid="true">
        <Row className="user-info">
          <Col xs={12} sm={10} md={8} lg={3} xl={3} xxl={3}>
            <ul className="block-menu">
              <li
                className="block-menu__item"
                onClick={() => setRender("home")}
              >
                <HomeOutlined />
                <span>Trang chủ</span>
              </li>
              <li
                className="block-menu__item"
                onClick={() => setRender("buyHistory")}
              >
                <History />
                <span>Lịch sử mua hàng</span>
              </li>
              <li
                className="block-menu__item"
                onClick={() => setRender("personalInfo")}
              >
                <AccountCircleOutlined /> <span>Thông tin cá nhân</span>
              </li>
              <li
                className="block-menu__item"
                onClick={() => setRender("changeAvatar")}
              >
                <ImageOutlined /> <span>Thay đổi ảnh đại diện</span>
              </li>
              <li
                className="block-menu__item"
                onClick={() => setRender("changePassword")}
              >
                <BuildOutlined /> <span>Thay đổi mật khẩu</span>
              </li>
              <li
                className="block-menu__item"
                onClick={() => setRender("logOut")}
              >
                <ExitToAppOutlined /> <span>Đăng xuất</span>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={8}>
            {render === "home" && history.push(routerName.HOME)}
            {render === "buyHistory" && <h1>Lịch sử mua hàng</h1>}
            {render === "personalInfo" && <PersonalInfo />}
            {render === "changeAvatar" && <ChangeAvatar />}
            {render === "changePassword" && <ChangePassword />}
            {render === "logOut" && handleLogoutClick()}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserInfo;
