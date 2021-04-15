import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const NotificationItem = ({html, type, value}) => {
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
};

NotificationItem.defaultProps = {
    type: "default",
}

export default NotificationItem;
