import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Header from './Header';
import Footer from './Footer';
export const LoginPage = ({ startLogin }) => (
    <div>
      <Header isPrivate="false" />

      <Footer />
    <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
