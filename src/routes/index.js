import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';

export default function Routes() {
  return (
    // <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
    // </BrowserRouter>
  );
}
