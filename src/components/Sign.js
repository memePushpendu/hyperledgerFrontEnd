import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from './auth';
import { doSignOut } from './auth';
import * as routes from '../routes';

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
  </div>

const SignOutButton = () => (<button onClick={doSignOut}>Sign Out</button>)


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    doSignInWithEmailAndPassword(email, password)
      .then(User => {
        console.log(User)
        this.setState(() => ({ ...INITIAL_STATE }));
        // history.push(routes.HOME);
      })
      .catch(error => {
        console.log(error)
        this.setState(byPropKey('error', error));
      });
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        <SignOutButton/>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};