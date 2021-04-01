import React from 'react';
import './Notifications.css';
import {getLatesNotification} from "../utils/utils";
import close_icon from "../assets/close-icon.png";

const Notifications = () => {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-notification-type="default">New course available</li>
                <li data-notification-type="urgent">New resume available</li>
                <li data-notification-type="urgent"
					dangerouslySetInnerHTML={{__html: getLatesNotification()}}>
				</li>
            </ul>
            <button
                style={{
					color: '#3a3a3a',
					fontWeight: 'bold',
					background: 'none',
					border: 'none',
					fontSize: '15px',
					position: 'absolute',
					right: '80px',
					top: '10px',
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
    );
}

export default Notifications;