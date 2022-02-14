import React from "react";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { ArrowRightAlt, Visibility, VisibilityOff } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import routerName from "../../../../Router/RouterName";
import { makeStyles } from "@material-ui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { axiosServices } from "../../../../services/axiosServices";
import { useState } from "react";
import ResultModal from "../../components/ResultModal";

const useStyleTextField = makeStyles(() => ({
  //style chữ
  root: {
    "& > *": {
      fontSize: "12px",
      padding: "2px 8px",
    },
  },
}));

const useStyleCheckBox = makeStyles(() => ({
  //style chữ
  root: {
    "& > *": {
      fontSize: "12px",
      color: "#333333B3",
    },
  },
}));

const styleTextField = {
  marginBottom: "20px",
};

let res = "";
const SignInMain = ({
  isLoading,
  setIsLoading,
  showPassword,
  setShowPassword,
}) => {
  const classesTF = useStyleTextField();
  const classesCB = useStyleCheckBox();

  const [modalShow, setModalShow] = useState(false);
  const [isError, setIsError] = useState(true);

  let history = useHistory();

  const setMessageReturn = (message, success) =>
    success ? "Đăng nhập thành công" : message;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function handleSubmitForm(email, password) {
    const getDataFromLoginForm = {
      email,
      password,
    };
    try {
      setIsLoading(true);
      const response = await axiosServices.login(getDataFromLoginForm);
      // console.log("response success: ", response.success);
      res = setMessageReturn("", response.success);
      // console.log('response.data.loginToken', response.data.loginToken)
      const tokenWhenLoginSuccess = response.data.loginToken;
      localStorage.setItem(
        "login-token",
        JSON.stringify(tokenWhenLoginSuccess)
      );
      // console.log("response.data.user", response.data.user);
      const userDataWhenLoginSuccess = response.data.user;
      localStorage.setItem(
        "user-data",
        JSON.stringify(userDataWhenLoginSuccess)
      );

      setIsError(true);
    } catch (error) {
      // console.log("error.response.data.message: ", error.response?.data?.message);
      // console.log('error.response.data.success: ', error.response.data.success)
      res = setMessageReturn(
        error.response.data.message,
        error.response.data.success
      );
      setIsError(false);
    } finally {
      setIsLoading(false);
      if (res === "Đăng nhập thành công") {
        history.push(routerName.HOME);
      } else {
        setModalShow(true);
      }
    }
  }

  return (
    <div className="sign-in__contents">
      <img
        className="sign-in__img"
        src="https://res.cloudinary.com/duitozhul/image/upload/v1644592931/Smartphone_Web_Frontend/Authentication/login.svg"
        alt=""
      />

      <div className="sign-in__auth">
        <h2>Đăng nhập</h2>

        <Formik
          initialValues={{ email: "", password: "", checkBox: false }}
          validationSchema={Yup.object({
            email: Yup.string("Nhập email của bạn")
              .required("Bắt buộc")
              .email("Không tồn tại địa chỉ email"),
            password: Yup.string("Nhập mật khẩu")
              .required("Bắt buộc")
              .max(32, "Mật khẩu có tối đa 32 ký tự và nhiều hơn 8 ký tự")
              .min(8, "Mật khẩu có từ 8 ký tự đến 32 ký tự"),
          })}
          onSubmit={(values) => {
            handleSubmitForm(values.email, values.password);
          }}
        >
          {(formik) => (
            <form className="login__form-list" onSubmit={formik.handleSubmit}>
              <TextField
                style={styleTextField}
                className={classesTF.root}
                color="secondary"
                label="Email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
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

                {/* helperText */}
                {formik.touched.password && (
                  <span className="error-text">{formik.errors.password}</span>
                )}
              </FormControl>

              <Link
                className="forgot-password__link"
                to={routerName.PWRECOVERY}
              >
                Quên mật khẩu
              </Link>

              <div className="sign-in__button">
                <FormControlLabel
                  className={classesCB.root}
                  control={
                    <Checkbox
                      size="small"
                      onChange={formik.handleChange}
                      checked={formik.values.checkBox}
                      name="checkBox"
                    />
                  }
                  label="Nhớ mật khẩu"
                />
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ padding: "8px 16px", textTransform: "initial" }}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Đăng nhập"}
                </Button>
              </div>
            </form>
          )}
        </Formik>

        <ResultModal
          show={modalShow}
          onHide={setModalShow}
          result={res}
          isError={isError}
        />

        <div className="sign-in__footer">
          <div className="footer__info">
            Bạn chưa có tài khoản?
            <Link className="sign-up__link" to={routerName.SIGNUP}>
              Tạo ngay tài khoản
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInMain;
