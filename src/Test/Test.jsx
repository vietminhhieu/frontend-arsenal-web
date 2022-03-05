import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <ClipLoader color={"#F50057"} loading={loading} size={150} />
      ) : (
        <h2>Home Page</h2>
      )}
    </div>
  );
};

export default Loading;
