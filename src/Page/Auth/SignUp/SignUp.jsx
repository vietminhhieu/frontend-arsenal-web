import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import routerName from "../../../Router/RouterName";
import { makeStyles } from "@material-ui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { AxiosClient } from "../../../services/API/axiosConnection";
import api from "../../../common/constants/api";
import { axiosServices } from "../../../services/axiosServices";

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
function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const logger = () => {
    console.log("Haha");
  };

  useEffect(() => {
    logger();
  }, []);

  //TODO: 1st: get dataform of backend
  async function getDataForm({
    firstName,
    lastName,
    email,
    password,
    retypePassword,
  }) {
    const obj = {
      firstName,
      lastName,
      email,
      password,
      retypePassword,
    };
    try {
      console.log(firstName, lastName, email, password, retypePassword);
      setIsLoading(true);
      const response = await axiosServices.register(obj);
      // console.log(response);
      res = response.data.message;
    } catch (error) {
      // console.log(error.response.data);
      res = error.response.data.message;
    } finally {
      setIsLoading(false);
      alert(res);
    }
  }

  //2nd: setup axios to post request

  //3rd: add loading for better UI/UX

  const history = useHistory();
  const handleClick = (location) => {
    history.push(location);
  };

  const classesTF = useStyleTextField();

  return (
    <div className="sign-up">
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
            Home
          </Button>
        </div>

        <div className="right-header">
          <Button
            onClick={() => handleClick(routerName.LOGIN)}
            variant="contained"
            style={{
              textTransform: "initial",
              backgroundColor: "#fff",
              padding: "2px 10px",
              marginLeft: "1rem",
            }}
          >
            Login
          </Button>
        </div>
      </header>

      <div className="sign-up__contents">
        <img
          className="sign-up__img"
          src="./image/authentication/signUp.svg"
          alt="Sign Up"
        />
        <div className="sign-up__auth">
          <h2>Create your account</h2>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              retypePassword: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string("Enter first name").required("Required"),
              lastName: Yup.string("Enter last name").required("Required"),
              email: Yup.string("Enter your email")
                .required("Required")
                .email("Invalid email address"),
              password: Yup.string("Enter password")
                .required("Required")
                .max(32, "Must be 32 characters and more than 8 characters")
                .min(8, "Must be 8 characters to 32 character"),
              retypePassword: Yup.string("Enter retype password")
                .required("Required")
                .when("password", {
                  is: (val) => (val && val.length > 0 ? true : false),
                  then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
                  ),
                }),
            })}
            onSubmit={(values, { setSubmitting }) => {
              getDataForm(values);
            }}
          >
            {(formik) => (
              <form className="form-list" onSubmit={formik.handleSubmit}>
                <div className="form-item__name">
                  <TextField
                    className={classesTF.root}
                    style={styleFirstNameTF}
                    color="secondary"
                    label="First name"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                  <TextField
                    className={classesTF.root}
                    style={styleLastNameTF}
                    color="secondary"
                    label="Last name"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
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

                <TextField
                  className={classesTF.root}
                  style={styleTextField}
                  color="secondary"
                  type="password"
                  label="Password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />

                <TextField
                  className={classesTF.root}
                  style={styleTextField}
                  color="secondary"
                  type="password"
                  label="Retype password"
                  name="retypePassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.retypePassword}
                  error={
                    formik.touched.retypePassword &&
                    Boolean(formik.errors.retypePassword)
                  }
                  helperText={
                    formik.touched.retypePassword &&
                    formik.errors.retypePassword
                  }
                />

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
                  >
                    Create Account
                  </Button>
                </div>
              </form>
            )}
          </Formik>

          <div className="clear"></div>
          <div className="sign-up__footer">
            <div className="info__footer">
              Already have an account?
              <Link className="sign-in__link" to={routerName.SIGN_IN}>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
