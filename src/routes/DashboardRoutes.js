import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChartScreen from '../templates/chart/ChartScreen';
import DashboardScreen from '../templates/dashboard/DashboardScreen';
import SurveyScreen from '../templates/survey/SurveyScreen';
import UsersScreen from '../templates/users/UsersScreen';

const DashboardRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={DashboardScreen} />
        <Route exact path="/survey" component={SurveyScreen} />
        <Route exact path="/charts" component={ChartScreen} />
        <Route exact path="/profile" component={UsersScreen} />
        <Route exact path="/users" component={UsersScreen} />
      </Switch>
    </div>
  );
};

export default DashboardRoutes;
