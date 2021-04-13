import React, { Component, Fragment } from 'react';
import "./Login.css";



const Login = () => {
return (
    <React.Fragment>
    <div className="Login">
        <p> Login to access the full dashbord </p>
    <form>
        <label htmlFor="email"> Email: </label> 
        <input type="email" id = "email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" id= "password" />
        <button>OK</button>
    </form>
    </div>
    </React.Fragment>
)
}

export default Login
