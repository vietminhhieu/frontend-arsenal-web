import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const UpdateModal = ({ show, onHide, result, isError, changeAvatar }) => {
  let userDataInLocalStorage = JSON.parse(localStorage.getItem("user-data"));
  const idUser = userDataInLocalStorage._id;

  let history = useHistory();

  const handleClickModal = () => {
    onHide(false);
    changeAvatar && history.push(`/user/information/${idUser}`);
  };

  return (
    <Modal
      show={show}
      onHide={handleClickModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img
            src="https://res.cloudinary.com/duitozhul/image/upload/v1639843038/Smartphone_Web_Frontend/Logo/logo-circle.jpg"
            alt="Logo Store"
            width="40"
          />
          <h3>Hiếu Viết Store</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isError ? (
          <img
            src="https://res.cloudinary.com/duitozhul/image/upload/v1645007684/Smartphone_Web_Frontend/Authentication/failed-update.svg"
            alt="failed-update"
            width="120"
            style={{ display: "flex", margin: "0.75rem auto 1rem" }}
          />
        ) : (
          <img
            src="https://res.cloudinary.com/duitozhul/image/upload/v1645007680/Smartphone_Web_Frontend/Authentication/success-update.svg"
            alt="success-update"
            width="120"
            style={{ display: "flex", margin: "0.75rem auto 1rem" }}
          />
        )}
        <h5>{result}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClickModal}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;
