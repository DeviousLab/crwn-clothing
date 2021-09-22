import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import './sign-in-and-register.scss'

const SignInAndRegister = () => (
    <div className="sign-in-and-register">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndRegister;