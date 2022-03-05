import React from "react";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { ArrowRightAlt, Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";
import routerName from "../../../../Router/RouterName";
import { makeStyles } from "@material-ui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { axiosServices } from "../../../../services/axiosServices";
import { useState } from "react";
import ResultModal from "../../components/ResultModal";

const styleTextField = {
  marginBottom: "20px",
};

const styleFirstNameTF = {
  marginBottom: "20px",
  width: "48%",
  marginRight: "2%",
};

const styleLastNameTF = {
  marginBottom: "20px",
  width: "48%",
  marginLeft: "2%",
};

const useStyleTextField = makeStyles(() => ({
  //style chữ
  root: {
    "& > *": {
      fontSize: "12px",
      padding: "2px 8px",
    },
  },
}));

let res = "";
const SignUpMain = ({ isLoading, setIsLoading }) => {
  const [modalShow, setModalShow] = useState(false);
  const [isError, setIsError] = useState(true);
  const [showPassword, setShowPassword] = useState({
    pass: false,
    retypePass: false,
  });

  const classesTF = useStyleTextField();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //TODO: 1st: get dataform of backend
  async function getDataForm({
    firstName,
    lastName,
    email,
    password,
    retypePassword,
  }) {
    const dataFromRegisterForm = {
      firstName,
      lastName,
      email,
      password,
      retypePassword,
    };
    try {
      // console.log(firstName, lastName, email, password, retypePassword);
      setIsLoading(true);
      const response = await axiosServices.register_unConfirm(
        dataFromRegisterForm
      );
      // console.log("response", response);
      res = response?.message;
      setIsError(true);
      // console.log("isError", isError);
    } catch (error) {
      // console.log("error", error.response.data);
      res = error.response?.data?.message;
      setIsError(false);
      // console.log("isError", isError);
    } finally {
      setIsLoading(false);
      setModalShow(true);
    }
  }

  //2nd: setup axios to post request

  //3rd: add loading for better UI/UX

  return (
    <div className="sign-up__contents">
      <img
        className="sign-up__img"
        src="https://res.cloudinary.com/duitozhul/image/upload/v1644592493/Smartphone_Web_Frontend/Authentication/register.svg"
        alt="Sign Up"
      />
      <div className="sign-up__auth">
        <h2>Tạo tài khoản của bạn</h2>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            retypePassword: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string("Nhập họ").required("Bắt buộc"),
            lastName: Yup.string("Nhập tên").required("Bắt buộc"),
            email: Yup.string("Nhập email của bạn")
              .required("Bắt buộc")
              .email("Không tồn tại địa chỉ email"),
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
            getDataForm(values);
          }}
        >
          {(formik) => (
            <form
              className="register__form-list"
              onSubmit={formik.handleSubmit}
            >
              <div className="form-item__name">
                <TextField
                  className={classesTF.root}
                  style={styleFirstNameTF}
                  color="secondary"
                  label="Họ"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                <TextField
                  className={classesTF.root}
                  style={styleLastNameTF}
                  color="secondary"
                  label="Tên"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </div>

              <TextField
                className={classesTF.root}
                style={styleTextField}
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
                  type={showPassword.pass ? "text" : "password"}
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
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            pass: !showPassword.pass,
                          })
                        }
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword.pass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
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
                  type={showPassword.retypePass ? "text" : "password"}
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
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            retypePass: !showPassword.retypePass,
                          })
                        }
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword.retypePass ? (
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
                  endIcon={<ArrowRightAlt />}
                  variant="contained"
                  color="secondary"
                  type="submit"
                  style={{
                    padding: "8px 16px",
                    textTransform: "initial",
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Tạo tài khoản"}
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

        <div className="clear"></div>
        <div className="sign-up__footer">
          <div className="info__footer">
            Bạn đã có tài khoản?
            <Link className="sign-in__link" to={routerName.LOGIN}>
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpMain;
