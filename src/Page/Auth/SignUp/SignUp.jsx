import React, { useState } from "react";
import "./SignUp.css";
import SignUpHeader from "./components/SignUpHeader";
import SignUpMain from "./components/SignUpMain";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="sign-up">
      {/* HEADER  */}
      <SignUpHeader />

      {/* MAIN */}
      <SignUpMain isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
}

export default SignUp;
