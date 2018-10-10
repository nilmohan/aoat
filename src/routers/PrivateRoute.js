import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { startSetUsers } from '../actions/users';
import Footer from '../components/Footer';

export const PrivateRoute = ({isAuthenticated, component: Component, startSetUsers: startSetUsers, ...rest}) => {

    startSetUsers();
    return(
        <Route {...rest} component={(props) => (isAuthenticated ? (<div> <Header isPrivate="true" /> <Component {...props} /><Footer /> </div>) : ( <Redirect to="/" />))} />
);
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});


const mapDispatchToProps = (dispatch) => ({
    startSetUsers: () => dispatch(startSetUsers())
});
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
