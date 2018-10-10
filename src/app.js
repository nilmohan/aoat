import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TjAppRouter, { history } from './routers/TjAppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
//import 'normalize.css/normalize.css';
//import './styles/styles.scss';
//import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { startSetUsers } from './actions/users';
import { startAddUser, startFindUser } from './actions/loginUser';

//import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
//import './css/grid.css';
//import './css/extra.css';
import './css/cleanStyle.css';




const store = configureStore();


const jsx = (
  <Provider store={store}>
    <TjAppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    //Search user by login email id
    store.dispatch(startFindUser(user.email));

    //If user first time login then create new account
    if(store.getState().loginUser === null){
      store.dispatch(startAddUser({name:user.displayName, email: user.email}));
    }

    store.dispatch(startSetUsers()).then(() => {
      renderApp();
    if (history.location.pathname === '/') {
      history.push('/home');
    }
    });

  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
