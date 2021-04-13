import React, { Fragment } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatesNotification } from '../utils/utils';


function App({isLoggedIn}) {
  const listCourses = [
    {
      id: 1,
      name: 'ES6',
      credit: 60,
    },
    {
      id: 2,
      name: 'Webpack',
      credit: 20,
    },
    {
      id: 3,
      name: 'React',
      credit: 40
    }
  ];

  const listNotifications = [
    {
      id: 1,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available",
    },
    {
      id: 3,
      type: "urgent",
      html: { __html: getLatesNotification() },
    }
];
  return (
    <Fragment>
      <div className='App'>
        <div className='Notif-h'>
      <Notifications listNotifications={listNotifications} />
        <Header />
        </div>
        <div>
          {isLoggedIn === false && <Login />}
          {isLoggedIn === true && <CourseList listCourses={listCourses} />}
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
