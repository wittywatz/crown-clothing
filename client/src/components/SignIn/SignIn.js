import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../../firebase/Firebase';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './Signin.scss';

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      this.setState({ email: '', password: '' });
    } catch (error) {
      alert('Please enter your correct details');
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={(event) => this.setState({ email: event.target.value })}
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            required
          />
          <FormInput
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
