import React from 'react';

import FormInput from '../form-input/form-input';

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I have an account</h2>
                <span>Sign in with your details</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required />
                    <input type="submit" value="Sign in" />
                </form>
            </div>
        )
    }
}

export default SignIn;