import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthProvider from '../auth/AuthContext';

import LandingScreen from '../templates/landig/LandingScreen';
import AuthRoutes from './AuthRoutes';
import DashboardRoutes from './DashboardRoutes';

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingScreen} />
            <Route path="/auth" component={AuthRoutes} />
            <Route path="/dashboard" component={DashboardRoutes} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
