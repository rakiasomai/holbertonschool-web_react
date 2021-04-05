import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from "react";
import { shallow } from "enzyme";
import NotificationItem from './NotificationItem';
import { expect } from 'chai';
import Notifications from './Notifications'

const props = {
    type: "urgent",
	html: { __html: "<p>test</p>"},

}

it('shouled renders the component without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
});

it('shouled renders the correct html while passig type or value propos', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").childAt(0).html()).equal(
        '<li data-notification-type="default">New course available</li>')
});

it('shouled renders the correct html code while ppassing HTML props', () => {
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(wrapper.contains(<li data-notification-type={props.type} dangerouslySetInnerHTML={props.html} />)).to.equal(true);
});

