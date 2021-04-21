import React, { Component, Fragment } from 'react';
import { StyleSheet, css} from 'aphrodite';



const Login = () => {
return (
    <React.Fragment>
    <div className={css(styles.login)}>
        <p> Login to access the full dashbord </p>
    <form>
        <label htmlFor="email"> Email: </label> 
        <input className={css(styles.loginBody)} type="email" id = "email" />
        <label htmlFor="password"> Password: </label>
        <input className={css(styles.loginBody)} type="password" id= "password" />
        <button className={css(styles.button)}>OK</button>
    </form>
    </div>
    </React.Fragment>
)
}

const styles = StyleSheet.create({
    login: {
        margin: '48px 0 0 32px',
        textAlign: 'left',
        fontSize: '16px'
    },

    loginBody: {
        maxWidth: '90%',
        margin: '0 auto',
        
    },
    
    button: {
        marginLeft: '10px',
        height: '20px'
    }
});

export default Login
