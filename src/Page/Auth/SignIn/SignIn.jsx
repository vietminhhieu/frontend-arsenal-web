import React, { useEffect } from "react";
import { useState } from "react";
import "./SignIn.css";
import SignInHeader from "./components/SignInHeader";
import SignInMain from "./components/SignInMain";

function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="sign-in">
      {/* HEADER */}
      <SignInHeader />

      {/* MAIN */}
      <SignInMain
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </div>
  );
}

export default SignIn;
