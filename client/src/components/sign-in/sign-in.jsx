import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.scss';

const SignIn = () => {
    const dispatch = useDispatch();
    const googleSignInStartClickHandler = () => dispatch(googleSignInStart());
    const emailSignInStartHandler = (email, password) =>
        dispatch(emailSignInStart({ email, password }));

    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = userCredentials;

        emailSignInStartHandler(email, password);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="sign-in">
            <h2>I have an account</h2>
            <span>Sign in with your details</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={email} handleChange={handleChange} label="Email" required />
                <FormInput type="password" name="password" value={password} handleChange={handleChange} label="Password" required />
                <div className="buttons">
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStartClickHandler} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;