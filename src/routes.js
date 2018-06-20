import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MenuAppBar from './components/profile';
import WrappedNormalLoginForm from './components/register';
import SignInForm from './components/Sign';
import SignUpForm from './components/Signup';
import Asset from './Components/asset';
import User from './Components/user';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/profile' component={MenuAppBar} />
            <Route path='/register' component={WrappedNormalLoginForm} />
            <Route path='/SignIn' component={SignInForm} />
            <Route path='/Signup' component={SignUpForm} />
            <Route path='/asset' component={Asset} />
            <Route path='/user' component={User} />
        </Switch>
    </BrowserRouter>
);
export default Routes;
