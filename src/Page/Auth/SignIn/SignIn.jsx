import {
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import routerName from "../../../Router/RouterName";
import "./SignIn.css";
import { makeStyles } from "@material-ui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { AxiosClient } from "../../../services/API/axiosConnection";
import api from "../../../common/constants/api";
import { axiosServices } from "../../../services/axiosServices";

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
  width: "18rem",
};

function SignIn() {
  // bien hien thi dang ket noi backend

  let result = "";
  const [isLoaing, setIsLoaing] = useState(false);

  //Sử dụng useHistory xử lý để khi click vào button không reload lại trang
  const history = useHistory();
  const handleClick = (location) => {
    history.push(location);
  };

  const classesTF = useStyleTextField();
  const classesCB = useStyleCheckBox();

  const setMessageReturn = (message, success) =>
    success ? "Login successfully" : message;

  async function handleSubmitForm(email, password) {
    const obj = {
      email,
      password,
    };
    try {
      setIsLoaing(true);
      const response = await axiosServices.login(obj);
      console.log(response);
      result = setMessageReturn("", response.success);
      const tokenWhenLoginSuccess = response.data.loginToken;
      localStorage.setItem(
        "login-token",
        JSON.stringify(tokenWhenLoginSuccess)
      );
    } catch (error) {
      console.log(error.response?.data);

      result = setMessageReturn(
        error.response.data.message,
        error.response.data.success
      );
    } finally {
      setIsLoaing(false);
      alert(result);
    }
  }

  return (
    <div className="sign-in">
      <header>
        <div className="left-header">
          <img
            className="arsenal-logo"
            src="./image/authentication/logo.svg"
            alt="Arsenal Logo"
          />
          <Button
            onClick={() => handleClick(routerName.HOME)}
            variant="contained"
            style={{
              textTransform: "initial",
              backgroundColor: "#fff",
              padding: "0 10px",
            }}
          >
            {/* Cho thẻ Link ở đây */}
            Home
          </Button>
        </div>

        <div className="right-header">
          <Button
            onClick={() => handleClick(routerName.SIGNUP)}
            variant="contained"
            color="secondary"
            style={{
              textTransform: "initial",
              padding: "2px 10px",
            }}
          >
            Create Account
          </Button>
        </div>
      </header>

      <div className="sign-in__contents">
        <img
          className="sign-in__img"
          src="./image/authentication/signIn.svg"
          alt=""
        />

        <div className="sign-in__auth">
          <h2>Login</h2>

          <Formik
            initialValues={{ email: "", password: "", checkBox: false }}
            validationSchema={Yup.object({
              email: Yup.string("Enter your email")
                .required("Required")
                .email("Invalid email address"),
              password: Yup.string("Enter password")
                .required("Required")
                .max(32, "Must be 32 characters and more than 8 characters")
                .min(8, "Must be 8 characters to 32 character"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmitForm(values.email, values.password);
            }}
          >
            {(formik) => (
              <form className="form-list" onSubmit={formik.handleSubmit}>
                <TextField
                  style={styleTextField}
                  className={classesTF.root}
                  color="secondary"
                  label="Your email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  style={styleTextField}
                  className={classesTF.root}
                  color="secondary"
                  label="Password"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />

                <Link
                  className="forgot-password__link"
                  to={routerName.PASSWORD_RECOVERY}
                >
                  Forgot your password
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
                    label="Remember me"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ padding: "8px 16px", textTransform: "initial" }}
                    type="submit"
                    disabled={isLoaing}
                  >
                    {isLoaing ? "Loading" : "Log in"}
                  </Button>
                </div>
              </form>
            )}
          </Formik>
          <div className="sign-in__footer">
            <div className="footer__info">
              Don’t have an account?
              <Link className="sign-up__link" to={routerName.SIGN_UP}>
                Create one now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
