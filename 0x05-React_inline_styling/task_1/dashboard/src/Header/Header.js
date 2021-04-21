import React from 'react';
import logo from "../assets/holberton_logo.jpg"
import { StyleSheet, css} from 'aphrodite';

const Header = () => { 
    return (
        <div className={css(styles.appHeader)}>
        <img src={logo} alt="logo"/>
        <h1 className={css(styles.appH1)}> School dashbord </h1>
      </div>
    )
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    borderBottom: '3px solid var(--holberton-red)'
  },

  appH1: {
    margin: 'auto auto auto 0',
    color: `var(--holberton-red)`,
  }

});

export default Header;
