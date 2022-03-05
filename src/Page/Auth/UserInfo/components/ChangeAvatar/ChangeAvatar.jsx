import React from "react";
import "./ChangeAvatar.scss";
import { Col, Row, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { Image } from "cloudinary-react";
import { useParams } from "react-router-dom";
import { axiosServices } from "../../../../../services/axiosServices";
import UpdateModal from "../UpdateModal";

const ChangeAvatar = () => {
  const { id } = useParams();
  // console.log("id", id);

  const userData = JSON.parse(localStorage.getItem("user-data"));
  const avatarFromLocalStorage = userData.avatar;
  // console.log("avatarFromLocalStorage", avatarFromLocalStorage);

  const [imageSelected, setImageSelected] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isLoading, setIsLoading] = useState({
    changeAva: false,
    loadImage: false,
  });
  const [modalShow, setModalShow] = useState(false);
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(true);

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "xbs8zgmr");

    try {
      setIsLoading({ ...isLoading, loadImage: true });

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/duitozhul/image/upload",
        formData
      );
      // console.log("response", response?.data?.url);
      setAvatarUrl(response?.data?.url);
      // console.log("avatarUrlInLoadImg", avatarUrl);
    } catch (error) {
      console.log("error", error.response);
    } finally {
      setIsLoading({ ...isLoading, loadImage: false });
    }
  };

  const handleChangeAvatar = async (e) => {
    e.preventDefault();
    try {
      setIsLoading({ ...isLoading, changeAva: true });

      // console.log("avatarUrlInHanldeChangeAvatar", avatarUrl);
      const response = await axiosServices.changeAvatar(id, {
        newAvatar: avatarUrl,
      });
      // console.log("response.message", response?.message);
      setResult(response?.message);
      setIsError(true);
      const dataFromDB = response?.data?.user;
      // console.log("dataFromDB", dataFromDB);
      //update avatar trong CSDL từ /user/information/:id
      localStorage.setItem("user-data", JSON.stringify(dataFromDB));
    } catch (error) {
      console.log("error", error.response?.data?.message);
      setResult(error.response?.data?.message);
      setIsError(false);
    } finally {
      setIsLoading({ ...isLoading, changeAva: false });
      setModalShow(true);
      setAvatarUrl("");
    }
  };

  return (
    <Col sx={12} sm={10} md={9} xxl={8} className="change-password_form">
      <Form style={{ padding: "3rem 0 2rem" }}>
        <h3>Thay đổi ảnh đại diện</h3>

        <Form.Group className="mb-3 mt-4">
          <Row className="mb-3 mt-2">
            <Col xs={12} md={3} className="pi-label">
              <Form.Label style={{ marginTop: "0.5rem", display: "flex" }}>
                Ảnh đại diện:
              </Form.Label>
            </Col>

            {avatarUrl === "" ? (
              <Col xs={8} md={6} className="pi-radio d-flex">
                <Image
                  cloudName="duitozhul"
                  publicId={avatarFromLocalStorage}
                />
              </Col>
            ) : (
              <>
                <Col xs={8} md={6} className="pi-radio d-flex">
                  <Image cloudName="duitozhul" publicId={avatarUrl} />
                </Col>
                <Col xs={4} md={3} className="pi-label">
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={(e) => handleChangeAvatar(e)}
                    disabled={isLoading.changeAva}
                  >
                    {isLoading.changeAva
                      ? "Loading..."
                      : "Xác nhận thay đổi ảnh đại diện"}
                  </Button>
                </Col>
              </>
            )}

            {/* {avatarUrl !== "" && (
              <Col xs={4} md={3} className="pi-label">
                <Button
                  variant="danger"
                  type="submit"
                  onClick={(e) => handleChangeAvatar(e)}
                  disabled={isLoading.changeAva}
                >
                  {isLoading.changeAva
                    ? "Loading..."
                    : "Xác nhận thay đổi ảnh đại diện"}
                </Button>
              </Col>
            )} */}
          </Row>
          <Row className="mb-3 mt-2">
            <Col md={9} className="pi-radio d-flex">
              <Form.Control
                type="file"
                onChange={(e) => {
                  setImageSelected(e.target.files[0]);
                }}
              />
            </Col>
            <Col md={3} className="pi-label">
              <Button
                variant="danger"
                type="submit"
                onClick={(e) => uploadImage(e)}
                disabled={isLoading.loadImage}
              >
                {isLoading.loadImage ? "Loading..." : "Tải ảnh lên"}
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>

      <UpdateModal
        show={modalShow}
        onHide={setModalShow}
        result={result}
        isError={isError}
        changeAvatar={true}
      />
    </Col>
  );
};

export default ChangeAvatar;
