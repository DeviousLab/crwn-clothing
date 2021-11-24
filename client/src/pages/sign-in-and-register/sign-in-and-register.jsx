import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import { SignInAndRegisterContainer } from './sign-in-and-register.styles';

const SignInAndRegister = () => (
    <SignInAndRegisterContainer>
        <SignIn />
        <SignUp />
    </SignInAndRegisterContainer>
)

export default SignInAndRegister;