import React, { Fragment } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const LoadingPageComponent = ({ loading }) => {
  return (
    <>
      <div
        style={{
          height: "675px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SyncLoader color={"#000"} loading={loading} size={30} />
      </div>
    </>
  );
};

export default LoadingPageComponent;
