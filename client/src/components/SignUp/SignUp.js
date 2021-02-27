import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/Firebase';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

export class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, displayName, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('password mismatch');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            name="displayName"
            type="text"
            label="Display Name"
            value={this.state.displayName}
            required
          />
          <FormInput
            onChange={this.handleChange}
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            required
          />
          <FormInput
            onChange={this.handleChange}
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            required
          />
          <FormInput
            onChange={this.handleChange}
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={this.state.confirmPassword}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
