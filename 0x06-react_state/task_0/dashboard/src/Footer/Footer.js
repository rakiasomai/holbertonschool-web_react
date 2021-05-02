import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const Footer = () => {
    return (
        <div className={css(styles.appFooter)}>
        <p className={css(styles.appFP)}> Copyright {getFullYear()} - {getFooterCopy(true)} </p>
      </div>
    )
}

const styles = StyleSheet.create({
  appFooter: {
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%'
  },

  appFP: {
    borderTop: '4px solid #e0003c',
    padding: '16px 0',
    fontSize: '16px',
    fontStyle: 'italic'
  }
});

export default Footer;