import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const NotificationItem = ({html, type, value, markAsRead}) => {
    if (html === undefined)
        return (
            <li data-notification-type={type} onClick={() => markAsRead(id) }>
                {value}
            </li>
    );
    else
        return (
            <Fragment>
            <li dangerouslySetInnerHTML={html} data-notification-type={type} >
                {value}
            </li>
            </Fragment>
        );
    };

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
