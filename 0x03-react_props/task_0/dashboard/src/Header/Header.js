import React from 'react';
import logo from "../assets/holberton_logo.jpg"

const Header = () => { 
    return (
        <div className="App-header">
        {<img src={logo} alt=""/>}
        <h1> School dashbord </h1>
      </div>
    )
}

export default Header;
