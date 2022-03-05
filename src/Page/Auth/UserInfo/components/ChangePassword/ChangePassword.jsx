import React, { useState } from "react";
import "./ChangePassword.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { Col } from "react-bootstrap";
import {
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";
import { axiosServices } from "../../../../../services/axiosServices";
import UpdateModal from "../UpdateModal";

const styleTextField = {
  marginBottom: "20px",
};

const useStyleTextField = makeStyles(() => ({
  //style chữ
  root: {
    "& > *": {
      fontSize: "1rem",
      padding: "0.125rem 0.5rem",
    },
  },
}));

const ChangePassword = () => {
  const { id } = useParams();
  // console.log("id", id);

  const classesTF = useStyleTextField();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    oldPW: false,
    newPW: false,
    retypePW: false,
  });
  const [modalShow, setModalShow] = useState(false);
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(true);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePasswordInDB = async (idUser, oldPassword, newPassword) => {
    const obj = {
      oldPassword,
      newPassword,
    };
    try {
      setIsLoading(true);

      const response = await axiosServices.changePW(idUser, obj);
      // console.log("response", response?.message);
      setResult(response?.message);
      setIsError(true);
    } catch (error) {
      console.log("error", error.response?.data?.message);
      setResult(error.response?.data?.message);
      setIsError(false);
    } finally {
      setIsLoading(false);
      setModalShow(true);
    }
  };

  return (
    <Col sx={12} sm={9} md={7} xxl={6} className="change-password_form">
      <h2>Thay đổi mật khẩu</h2>

      <Formik
        initialValues={{
          oldPassWord: "",
          newPassword: "",
          retypePassword: "",
        }}
        validationSchema={Yup.object({
          oldPassWord: Yup.string("Nhập email của bạn")
            .required("Bắt buộc")
            .max(32, "Mật khẩu cũ có tối đa 32 ký tự và nhiều hơn 8 ký tự")
            .min(8, "Mật khẩu cũ có từ 8 ký tự đến 32 ký tự"),
          newPassword: Yup.string("Nhập mật khẩu")
            .required("Bắt buộc")
            .max(32, "Mật khẩu mới có tối đa 32 ký tự và nhiều hơn 8 ký tự")
            .min(8, "Mật khẩu mới có từ 8 ký tự đến 32 ký tự"),
          retypePassword: Yup.string("Nhập lại mật khẩu")
            .required("Bắt buộc")
            .when("newPassword", {
              is: (val) => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf(
                [Yup.ref("newPassword")],
                "Hai mật khẩu cần giống nhau. Mới nhập lại mật khẩu"
              ),
            }),
        })}
        onSubmit={(values) => {
          changePasswordInDB(id, values.oldPassWord, values.newPassword);
        }}
      >
        {(formik) => (
          <form className="register__form-list" onSubmit={formik.handleSubmit}>
            <FormControl
              sx={{ m: 1, width: "25ch" }}
              className={classesTF.root}
              style={styleTextField}
              color="secondary"
            >
              <InputLabel
                htmlFor="standard-adornment-password"
                style={
                  formik.touched.oldPassWord &&
                  formik.errors.oldPassWord && { color: "#f44336" }
                }
              >
                Mật khẩu cũ
              </InputLabel>
              <Input
                type={showPassword.oldPW ? "text" : "password"}
                name="oldPassWord"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.oldPassWord}
                error={Boolean(
                  formik.touched.oldPassWord && formik.errors.oldPassWord
                )}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          oldPW: !showPassword.oldPW,
                        })
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword.oldPW ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {formik.touched.oldPassWord && (
                <span className="error-text">{formik.errors.oldPassWord}</span>
              )}
            </FormControl>

            <FormControl
              sx={{ m: 1, width: "25ch" }}
              className={classesTF.root}
              style={styleTextField}
              color="secondary"
            >
              <InputLabel
                htmlFor="standard-adornment-password"
                style={
                  formik.touched.newPassword &&
                  formik.errors.newPassword && { color: "#f44336" }
                }
              >
                Mật khẩu mới
              </InputLabel>
              <Input
                type={showPassword.newPW ? "text" : "password"}
                name="newPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
                error={Boolean(
                  formik.touched.newPassword && formik.errors.newPassword
                )}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          newPW: !showPassword.newPW,
                        })
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword.newPW ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {formik.touched.newPassword && (
                <span className="error-text">{formik.errors.newPassword}</span>
              )}
            </FormControl>

            <FormControl
              sx={{ m: 1, width: "25ch" }}
              className={classesTF.root}
              style={styleTextField}
              color="secondary"
            >
              <InputLabel
                htmlFor="standard-adornment-password"
                style={
                  formik.touched.retypePassword &&
                  formik.errors.retypePassword && { color: "#f44336" }
                }
              >
                Nhập lại mật khẩu mới
              </InputLabel>
              <Input
                type={showPassword.retypePW ? "text" : "password"}
                name="retypePassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.retypePassword}
                error={Boolean(
                  formik.touched.retypePassword && formik.errors.retypePassword
                )}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          retypePW: !showPassword.retypePW,
                        })
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      name="retypePW"
                    >
                      {showPassword.retypePW ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />

              {/* show helperText */}
              {formik.touched.retypePassword && (
                <span className="error-text">
                  {formik.errors.retypePassword}
                </span>
              )}
            </FormControl>

            <div className="sign-up__buttons">
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                style={{
                  padding: "8px 16px",
                  textTransform: "initial",
                }}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Thay đổi mật khẩu"}
              </Button>
            </div>
          </form>
        )}
      </Formik>

      <UpdateModal
        show={modalShow}
        onHide={setModalShow}
        result={result}
        isError={isError}
      />
    </Col>
  );
};

export default ChangePassword;
