import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import EditUser from '../components/EditUser';
import Profile from '../components/Profile';
import PublicProfile from '../components/PublicProfile';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppBreadcrumb from '../components/AppBreadcrumb';
import { startSetUsers, listenToConfigChanges } from '../actions/users';
import ViewProfile from '../components/ViewProfile';
import ViewLoginProfile from '../components/ViewLoginProfile';
import HowItWorks from '../common-components/HowItWorks';
import AppFeedback from '../common-components/AppFeedback';
import AboutUs from '../common-components/AboutUs';
import UserView from '../common-components/UserView';
import OurGola from '../common-components/OurGoal';


export const history = createHistory();

const TjAppRouter = (props) => {

  props.startSetUsers();
  props.listenToConfigChanges();
  return (
  <Router history={history}>
    <div>
    <Header isPrivate={props.isAuthenticated} />
    <div className = "page-content-style">

      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/home" component={HomePage} exact={true} />
        <Route path="/profile" component={Profile} />
        <Route path="/viewLoginProfile" component={ViewLoginProfile} />
        <Route path="/home/:id" component={ViewProfile} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
      <OurGola />
          <UserView />
      <AboutUs />
      <Footer/>
    </div>
  </Router>
);
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});
const mapDispatchToProps = (dispatch) => ({
  startSetUsers: () => dispatch(startSetUsers()),
    listenToConfigChanges: () => dispatch(listenToConfigChanges())
});
export default connect(mapStateToProps, mapDispatchToProps)(TjAppRouter);
