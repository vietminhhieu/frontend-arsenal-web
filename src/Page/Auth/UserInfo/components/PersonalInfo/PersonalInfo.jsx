import React, { Fragment, useEffect } from "react";
import "./PersonalInfo.scss";
import { Col, Row, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosServices } from "../../../../../services/axiosServices";
import { useState } from "react";
import UpdateModal from "../UpdateModal";

const sexRadioArr = [
  { value: "Nam", label: "Nam" },
  { value: "Nữ", label: "Nữ" },
  { value: "Giới tính khác", label: "Giới tính khác" },
];

const PersonalInfo = () => {
  const { id } = useParams();
  // console.log("id", id);

  let userDataInLocalStorage = JSON.parse(localStorage.getItem("user-data"));
  // console.log("userDataInLocalStorage", userDataInLocalStorage);
  let {
    avatar,
    firstName,
    lastName,
    sex,
    dateBirth,
    phoneNumber,
    houseNumber,
    wards,
    district,
    city,
  } = userDataInLocalStorage;

  const addressArr = [
    { label: "Địa chỉ:" },
    { label: "Số nhà:", value: houseNumber, name: "houseNumber" },
    { label: "Xã/Phường:", value: wards, name: "wards" },
    { label: "Huyện/Quận:", value: district, name: "district" },
    { label: "Tỉnh/Thành phố:", value: city, name: "city" },
  ];

  const [personalInfo, setPersonalInfo] = useState({
    avatarFromUseState: avatar,
    firstNameFromUseState: firstName,
    lastNameFromUseState: lastName,
    sexFromUseState: sex,
    dateBirthFromUseState: dateBirth,
    phoneNumberFromUseState: phoneNumber,
    houseNumberFromUseState: houseNumber,
    wardsFromUseState: wards,
    districtFromUseState: district,
    cityFromUseState: city,
  });
  // console.log("personalInfo", personalInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(true);

  const updateUserInDB = async (idUser) => {
    const obj = {
      avatar: personalInfo.avatarFromUseState,
      firstName: personalInfo.firstNameFromUseState,
      lastName: personalInfo.lastNameFromUseState,
      sex: personalInfo.sexFromUseState,
      dateBirth: personalInfo.dateBirthFromUseState,
      phoneNumber: personalInfo.phoneNumberFromUseState,
      houseNumber: personalInfo.houseNumberFromUseState,
      wards: personalInfo.wardsFromUseState,
      district: personalInfo.districtFromUseState,
      city: personalInfo.cityFromUseState,
    };
    try {
      setIsLoading(true);
      const response = await axiosServices.updateUser(idUser, obj);
      // console.log("message", response?.message);
      setResult(response?.message);
      setIsError(true);
      const dataFromDB = response?.data?.user;
      // console.log("dataFromDB", dataFromDB);

      //update CSDL sau khi sửa từ trang /user/information/:id
      localStorage.setItem("user-data", JSON.stringify(dataFromDB));
    } catch (error) {
      // console.log("error", error?.response?.message);
      setResult(error.response?.data?.message);
      setIsError(false);
    } finally {
      setIsLoading(false);
      setModalShow(true);
    }
  };

  const handleSubmitPersonalInfoForm = (e) => {
    e.preventDefault();
    updateUserInDB(id);
  };

  useEffect(() => {
    // updateUserInDB(id);
  }, []);

  return (
    <Col sx={12} sm={10} md={8} xxl={7} className="personal-info_form">
      <Form>
        <h3>Thông tin cá nhân</h3>

        <Form.Group className="mb-3 mt-4">
          <Row className="mb-3 mt-2">
            <Col xs={4} className="pi-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>
                Họ và tên:
              </Form.Label>
            </Col>
            <Col xs={3}>
              <Form.Control
                type="text"
                name="firstNameField"
                defaultValue={firstName}
                onChange={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    firstNameFromUseState: e.target.value,
                  })
                }
              />
            </Col>
            <Col xs={5}>
              <Form.Control
                type="text"
                defaultValue={lastName}
                name="lastNameField"
                onChange={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    lastNameFromUseState: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          <Row className="mb-3 mt-2">
            <Col xs={4} className="pi-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>
                Giới tính:
              </Form.Label>
            </Col>

            <Col xs={8} className="pi-radio d-flex">
              {sexRadioArr.map((item, index) => {
                if (item.label === sex) {
                  return (
                    <Fragment key={index}>
                      <Form.Check
                        type="radio"
                        value={item.value}
                        name="gender"
                        defaultChecked={true}
                        onClick={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            sexFromUseState: e.target.value,
                          })
                        }
                      />
                      <span>{item.label}</span>
                    </Fragment>
                  );
                } else {
                  return (
                    <Fragment key={index}>
                      <Form.Check
                        type="radio"
                        value={item.value}
                        name="gender"
                        onClick={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            sexFromUseState: e.target.value,
                          })
                        }
                      />
                      <span>{item.label}</span>
                    </Fragment>
                  );
                }
              })}
            </Col>
          </Row>

          <Row className="mb-3 mt-2">
            <Col xs={4} className="pi-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>
                Ngày sinh:
              </Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control
                type="date"
                placeholder=""
                name="dateBirthField"
                defaultValue={dateBirth}
                onChange={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    dateBirthFromUseState: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          <Row className="mb-3 mt-2">
            <Col xs={4} className="pi-label">
              <Form.Label style={{ marginTop: "0.5rem" }}>
                Số điện thoại:{" "}
              </Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                placeholder=""
                maxLength={10}
                name="phoneNumberField"
                defaultValue={phoneNumber}
                onChange={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    phoneNumberFromUseState: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          <Row className="mb-3 mt-2">
            {addressArr.map((item, index) => {
              if (item.label === "Địa chỉ:") {
                return (
                  <Col xs={12} className="pi-label" key={index}>
                    <Form.Label style={{ marginTop: "0.5rem" }}>
                      {item.label}
                    </Form.Label>
                  </Col>
                );
              } else {
                return (
                  <Fragment key={index}>
                    <Col xs={4} className="pi-label">
                      <Form.Label style={{ marginTop: "0.5rem" }}>
                        {item.label}
                      </Form.Label>
                    </Col>
                    <Col xs={8}>
                      <Form.Control
                        type="text"
                        placeholder=""
                        defaultValue={item.value}
                        name={item.name + "FromUseState"}
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Fragment>
                );
              }
            })}
          </Row>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={isLoading}
          onClick={(e) => handleSubmitPersonalInfoForm(e)}
        >
          {isLoading ? "Loading..." : "Xác nhận"}
        </Button>
      </Form>

      <UpdateModal
        show={modalShow}
        onHide={setModalShow}
        result={result}
        isError={isError}
      />
    </Col>
  );
};

export default PersonalInfo;
