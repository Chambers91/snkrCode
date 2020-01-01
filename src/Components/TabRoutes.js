import React from 'react';
import Task from '../Pages/Task';
import Profile from '../Pages/Profile';
import Proxies from '../Pages/Proxies';
import Billing from '../Pages/Billing';
import Settings from '../Pages/Settings';
import LandingPage from '../Pages/LandingPage';
import { Switch, Route } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/billing' component={Billing} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/proxies' component={Proxies} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/task' component={Task} />
      </Switch>
    </div>
  );
};

export default Main;
