import React from 'react';
import "./Header.css";
import logo from "../assets/holberton_logo.jpg"

const Header = () => { 
    return (
        <div className="App-header">
        <img src={logo} alt="logo"
      className='App-logo'/>
        <h1> School dashbord </h1>
      </div>
    )
}

export default Header;
