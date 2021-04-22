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
	},
	urgentNotifi: {
		color: 'red',
	},
});


export default NotificationItem;
