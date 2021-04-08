import React, { Fragment } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';

function App({isLoggedIn}) {
  return (
    <Fragment>
      <div className='App'>
        <div className='Notif-h'>
      <Notifications />
        <Header />
        </div>
        <div>
          {isLoggedIn === false && <Login />}
          {isLoggedIn === true && <CourseList />}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
