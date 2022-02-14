import {
  Button,
  makeStyles,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Formik } from "formik";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
import { axiosServices } from "../../../../services/axiosServices";
import ResultModal from "../../components/ResultModal";
import PWRecoveryHeader from "../components/PWRecoveryHeader";

const styleTextField = {
  width: "60%",
  marginTop: "1rem",
};

const useStyleTextField = makeStyles(() => ({
  //style chữ
  root: {
    "& > *": {
      fontSize: "14px",
      padding: "2px 40px ",
    },
  },
}));

const NewPW = () => {
  let history = useHistory();

  const { token } = useParams();
  // console.log("token: ", token);

  const classesTF = useStyleTextField();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [result, setResult] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function getDataForm(passwordFromNewPWForm) {
    console.log("passwordFromNewPWForm: ", passwordFromNewPWForm);

    try {
      setIsLoading(true);
      const response = await axiosServices.forgetPW_confirm(token, {
        password: passwordFromNewPWForm,
      });
      // console.log("response", response?.message);
      // res = response?.message;
      setResult(response?.message);
    } catch (error) {
      // console.log("error", error.response?.data?.message);
      // res = error.response?.data?.message;
      setResult(error.response?.data?.message);
    } finally {
      setIsLoading(false);
      // setModalShow(true);
    }
  }

  console.log("res", result);
  //THAY ĐỔI MẬT KHẨU THÀNH CÔNG
  if (result === "Bạn đã thay đổi mật khẩu thành công")
    history.push(`/password-recovery/new-password/${token}/success`);

  return (
    <div className="pw-recovery">
      <PWRecoveryHeader />

      <div className="pw-recovery__contents">
        <h2 className="content__title">Khôi phục tài khoản</h2>
        <img
          className="content__img"
          src="https://res.cloudinary.com/duitozhul/image/upload/v1644592595/Smartphone_Web_Frontend/Authentication/newPassword.svg"
          alt="Password Recovery"
        />
        <h1 className="content__info">
          Đặt lại tài khoản và vẫn sử dụng cùng địa chỉ email
        </h1>
        <h3 className="content__desc">
          Hãy nhập mật khẩu mới cho tài khoản của bạn
        </h3>
        <Formik
          initialValues={{ password: "", retypePassword: "" }}
          validationSchema={Yup.object({
            password: Yup.string("Nhập mật khẩu")
              .required("Bắt buộc")
              .max(32, "Mật khẩu có tối đa 32 ký tự và nhiều hơn 8 ký tự")
              .min(8, "Mật khẩu có từ 8 ký tự đến 32 ký tự"),
            retypePassword: Yup.string("Nhập lại mật khẩu")
              .required("Bắt buộc")
              .when("password", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Hai mật khẩu cần giống nhau. Mới nhập lại mật khẩu"
                ),
              }),
          })}
          onSubmit={(values) => {
            getDataForm(values.password);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div className="email__input d-flex" style={{ flexWrap: "wrap" }}>
                <FormControl
                  sx={{ m: 1, width: "25ch" }}
                  className={classesTF.root}
                  style={styleTextField}
                  color="secondary"
                >
                  <InputLabel
                    htmlFor="standard-adornment-password"
                    style={
                      formik.touched.password &&
                      formik.errors.password && { color: "#f44336" }
                    }
                  >
                    Mật khẩu
                  </InputLabel>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={Boolean(
                      formik.touched.password && formik.errors.password
                    )}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />

                  {/* for some reason Mui input component doesnt support helpertext so we need to create new element */}
                  {/* if you really want to use the helpertext read document on FormHelperText config with defaultProps as in browser */}
                  {formik.touched.password && (
                    <span className="error-text">{formik.errors.password}</span>
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
                      formik.touched.password &&
                      formik.errors.password && { color: "#f44336" }
                    }
                  >
                    Nhập lại mật khẩu
                  </InputLabel>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="retypePassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.retypePassword}
                    error={Boolean(
                      formik.touched.retypePassword &&
                        formik.errors.retypePassword
                    )}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
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
              </div>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  marginTop: "4rem",
                  marginBottom: "2rem",
                  textTransform: "initial",
                }}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Khôi phục tài khoản"}
              </Button>
            </form>
          )}
        </Formik>
        <ResultModal show={modalShow} onHide={setModalShow} result={result} />
      </div>
    </div>
  );
};

export default NewPW;
