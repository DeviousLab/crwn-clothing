import React from 'react';

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
                    <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                    <label htmlFor="email">Email</label>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                    <label htmlFor="password">Password</label>

                    <input type="submit" value="Sign in" />
                </form>
            </div>
        )
    }
}

export default SignIn;