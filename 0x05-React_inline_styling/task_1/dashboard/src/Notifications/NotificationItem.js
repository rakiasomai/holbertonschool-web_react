import React, { Component } from "react";
import PropTypes from "prop-types";
import './Notifications.css';

class NotificationItem extends React.PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;

    if (html === undefined)
      return (
        
        <li data-notification-type={type} onClick={() => markAsRead(id)}>
          {value}
        </li>
      );
    else
      return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
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

export default NotificationItem;
