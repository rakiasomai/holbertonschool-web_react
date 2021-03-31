import React, { Fragment } from 'react';
import './App.css';
import logo from "../assets/holberton_logo.jpg";
import { getFooterCopy, getFullYear } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className='App'>
        <Header />
        <Login />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
