import React from 'react';
import './Notifications.css';
import {getLatesNotification} from "../utils/utils";
import close_icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem.js"
import PropTypes from 'prop-types';

const Notifications = ({displayDrawer}) => {
    return (
        <div className="The Component">
        <div className="menuItem">
            Your notifications
        </div>
        
        {displayDrawer && (
            <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value= "New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent"
					html={{__html: getLatesNotification()}} />
            </ul>
            <button
                style={{
					    color: '#3a3a3a',
						fontWeight: 'bold',
						background: 'none',
						border: 'none',
						fontSize: '20px',
						position: 'absolute',
						right: '30px',
						top: '40px',
						cursor: 'pointer',
						outline: 'none',
				}}
             aria-label="Close" 
            onClick={(e) => {
                console.log('Close button has been clicked');
            }} >
                <img src={close_icon} alt="close-icon" />
            </button>
        </div>
        )}
        </div>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    displayDrawer: false,
};

export default Notifications;