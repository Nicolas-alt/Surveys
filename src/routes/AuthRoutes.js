import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginScreen from '../templates/login/LoginScreen';
import RegisterScreen from '../templates/register/RegisterScreen';

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginScreen} />
      <Route exact path="/auth/register" component={RegisterScreen} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default AuthRoutes;
