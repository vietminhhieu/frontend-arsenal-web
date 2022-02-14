import React, { useEffect, useState } from "react";
import "./SignUp.css";
import SignUpHeader from "./components/SignUpHeader";
import SignUpMain from "./components/SignUpMain";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // const logger = () => {
  //   console.log("Haha");
  // };

  // useEffect(() => {
  //   logger();
  // }, []);

  return (
    <div className="sign-up">
      {/* HEADER  */}
      <SignUpHeader />

      {/* MAIN */}
      <SignUpMain
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </div>
  );
}

export default SignUp;
