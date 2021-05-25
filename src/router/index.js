import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Explore, Home, Login, NotFound, Profile, User } from '../pages';

export default function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/explore" component={Explore} />
        <Route path="/profile" component={Profile} />
        <Route path="/user/:username" component={User} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
