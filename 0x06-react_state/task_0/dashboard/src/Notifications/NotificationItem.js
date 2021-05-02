import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;
    let li = (type === 'urgent') ? styles.urgentNotifi : styles.notifi;

    if (html === undefined)
      return (
        
        <li className={css(li)} data-notification-type={type} onClick={() => markAsRead(id)}>
          {value}
        </li>
      );
    else
      return (
        <li className={css(li)} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      );
  }
}


NotificationItem.propTypes = {
    id: PropTypes.number,
    html: PropTypes.shape({__html: PropTypes.string}),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: () => {}
};

const styles = StyleSheet.create({
	notifi: {
		color: 'blue',
    padding: '10px 8px',
		'@media (max-width: 900px)': {
			width: '100%',
			fontSize: '20px',
			borderBottom: '1px solid black',
		},
	},
	urgentNotifi: {
		color: 'red',
    padding: '10px 8px',
		'@media (max-width: 900px)': {
			width: '100%',
			fontSize: '20px',
			borderBottom: '1px solid black',
		},
	},
});


export default NotificationItem;
