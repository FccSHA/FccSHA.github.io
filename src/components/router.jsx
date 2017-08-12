// dependencies
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

// components

import AboutUs from '../pages/aboutUs';
import Contributors from '../pages/contributors';
import Achievements from '../pages/achievements';
import SideBar from '../pages/sideBar';

export const FccSha = () => (
  <Router>
    <div className="sha-main">
      <div className="sha-side-main">
        <SideBar />
      </div>
      <div className="sha-router-main">
        <Redirect from="/" to="about-us" />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contributors" component={Contributors} />
        <Route path="/achievements" component={Achievements} />
      </div>
    </div>
  </Router>
);
