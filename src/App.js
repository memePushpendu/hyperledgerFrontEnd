import React, { Component } from 'react';
import {MenuAppBar} from './components/profile';
import {WrappedNormalLoginForm} from './components/register';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';

var firebase;

class App extends Component {
  constructor(){
    super();
  }
  render() {

    return (
      <div className="App">
     <Routes></Routes>
      </div>
      
    );
  }
}

export default App;

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
// } from 'react-router-dom';

// import Navigation from './Navigation';
// import SignUpPage from './components/Signup';
// import {MenuAppBar} from './components/profile';
// import {WrappedNormalLoginForm} from './components/register';
// import logo from './logo.svg';
// import './App.css';
// import Routes from './routes';

// const App = () =>
//   <Router>
//     <div>
//       <Navigation />

//       <hr/>

//       <Route
//         exact path={routes.SIGN_UP}
//         component={() => <SignUpPage />}
//       />
//       <Route
//         exact path={routes.SIGN_IN}
//         component={() => <SignInPage />}
//       />
//       {/* <Route
//         exact path={routes.PASSWORD_FORGET}
//         component={() => <PasswordForgetPage />}
//       />
//       <Route
//         exact path={routes.HOME}
//         component={() => <HomePage />}
//       />
//       <Route
//         exact path={routes.ACCOUNT}
//         component={() => <AccountPage />}
//       /> */}
//     </div>
//   </Router>

// export default App;
