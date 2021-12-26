import { Button, makeStyles, TextField } from "@material-ui/core";
import { MailOutline } from "@material-ui/icons";
import { Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import routerName from "../../../Router/RouterName";
import "./PWRecovery.css";
import * as Yup from "yup";

const styleTextField = {
  width: "60%",
  marginTop: "4rem",
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

function PWRecovery() {
  //Sử dụng useHistory xử lý để khi click vào button không reload lại trang
  let history = useHistory();
  const handleButtonClick = (location) => {
    history.push(location);
  };

  const classesTF = useStyleTextField();

  return (
    <div className="pw-recovery">
      <header>
        <div className="left-header">
          <img
            className="arsenal-logo"
            src="./image/authentication/logo.svg"
            alt="Arsenal Logo"
          />

          <Button
            onClick={() => handleButtonClick(routerName.HOME)}
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
            onClick={() => handleButtonClick(routerName.SIGN_UP)}
            variant="contained"
            color="secondary"
            style={{
              textTransform: "initial",
              padding: "2px 10px",
            }}
          >
            Create Account
          </Button>

          <Button
            onClick={() => handleButtonClick(routerName.SIGN_IN)}
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

      <div className="pw-recovery__contents">
        <h2 className="content__title">Account Recovery</h2>
        <img
          className="content__img"
          src="./image/authentication/forgotPassword.svg"
          alt="Password Recovery"
        />
        <h1 className="content__info">Arsenal Account Email Address:</h1>
        <h3 className="content__desc">
          Please enter the email address of the account you wish to recover. If
          you cannot remember it, please leave the field blank.
        </h3>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required("Required")
              .email("Invalid email address"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div className="email__input">
                <MailOutline
                  style={{ position: "absolute", left: "128px", bottom: "5px" }}
                />
                <TextField
                  color="secondary"
                  label="Your email"
                  className={classesTF.root}
                  style={styleTextField}
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
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
              >
                Start
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default PWRecovery;
