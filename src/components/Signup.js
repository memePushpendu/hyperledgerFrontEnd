import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {doCreateUserWithEmailAndPassword} from './auth';
import * as routes from '../routes';

const SignUpPage = () =>
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>

  const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
onSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
          console.log(authUser)
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        console.log(error)
        this.setState(byPropKey('error', error));
      });
  
  }
  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;
  
      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    return (
        <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
         <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default SignUpPage;

export {
  SignUpForm,
};