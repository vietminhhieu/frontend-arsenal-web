import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ResultModal.scss";

const ResultModal = ({ show, onHide, result, isError }) => {
  return (
    <Modal
      show={show}
      onHide={() => onHide(false)}
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
            src="https://res.cloudinary.com/duitozhul/image/upload/v1644724972/Smartphone_Web_Frontend/Authentication/mail-not-sent.svg"
            alt="Mail not sent"
            width="120"
            style={{ display: "flex", margin: "0.75rem auto 1rem" }}
          />
        ) : (
          <img
            src="https://res.cloudinary.com/duitozhul/image/upload/v1644659981/Smartphone_Web_Frontend/Authentication/mail-sent.svg"
            alt="Mail sent"
            width="100"
            style={{ display: "flex", margin: "0.75rem auto 1rem" }}
          />
        )}
        <h5>{result}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onHide(false)}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultModal;
