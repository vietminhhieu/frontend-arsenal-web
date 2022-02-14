import { Button, makeStyles, TextField } from "@material-ui/core";
import { Formik } from "formik";
import React, { useState } from "react";
import "./PWRecovery.css";
import * as Yup from "yup";
import { axiosServices } from "../../../services/axiosServices";
import ResultModal from "../components/ResultModal";
import PWRecoveryHeader from "./components/PWRecoveryHeader";

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

let res = "";
function PWRecovery() {
  //Sử dụng useHistory xử lý để khi click vào button không reload lại trang

  const classesTF = useStyleTextField();

  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [isError, setIsError] = useState(true);

  async function getDataForm(email) {
    try {
      setIsLoading(true);
      const response = await axiosServices.forgetPW_unConfirm(email);
      // console.log("response", response.message);
      res = response?.message;
      setIsError(true);
    } catch (error) {
      // console.log("error", error.response.data.message);
      res = error.response?.data?.message;
      setIsError(false);
    } finally {
      setIsLoading(false);
      setModalShow(true);
    }
  }

  return (
    <div className="pw-recovery">
      <PWRecoveryHeader />

      <div className="pw-recovery__contents">
        <h2 className="content__title">Khôi phục tài khoản</h2>
        <img
          className="content__img"
          src="./image/authentication/forgotPassword.svg"
          alt="Password Recovery"
        />
        <h1 className="content__info">
          Gửi đến địa chỉ email của Hiếu Viết Store:{" "}
        </h1>
        <h3 className="content__desc">
          Hãy nhập địa chỉ email của tài khoản mà bạn muốn khôi phục
        </h3>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required("Bắt buộc")
              .email("Không tồn tài địa chỉ email"),
          })}
          onSubmit={(values) => {
            getDataForm(values);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div className="email__input">
                {/* <MailOutline
                  style={{ position: "absolute", left: "128px", bottom: "5px" }}
                /> */}

                <TextField
                  id="text-field"
                  color="secondary"
                  label="Email"
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
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Bắt đầu"}
              </Button>
            </form>
          )}
        </Formik>
        <ResultModal
          show={modalShow}
          onHide={setModalShow}
          result={res}
          isError={isError}
        />
      </div>
    </div>
  );
}

export default PWRecovery;
