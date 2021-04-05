import React, { Fragment } from 'react';


const NotificationItem = (props) => {
    return (
        <Fragment>
        <li dangerouslySetInnerHTML={props.html} data-notification-type={props.type} >
            {props.value}
        </li>
        </Fragment>
    );
};

export default NotificationItem;