import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingScreen from '../templates/landig/LandingScreen';
import LoginScreen from '../templates/login/LoginScreen';
import RegisterScreen from '../templates/register/RegisterScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
          <Route path="/dashboard" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
