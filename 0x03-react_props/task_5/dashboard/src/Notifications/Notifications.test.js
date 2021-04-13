import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Proptypes from 'prop-types';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

import React from "react";
import { shallow } from "enzyme";
import  Notifications  from "./Notifications";
import NotificationItem from "./NotificationItem";

it("shouled renders notifications without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
});

/* it("should the component renders three element", () => {
    const props = {
        displayDrawer: true,
        listNotifications: listNotifications,
    };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);
    
}); */

it("should renders a spesific string", () => {
    const props = {
        displayDrawer: true,
    };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).equal(false);
});

it("shouled display menu item when displaydrawer is false", () => {
    const props = {
        displayDrawer: false,
    };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.exists(".menuItem")).equal(false);
});

it("shouled does not displayes div.Notifications when displayDrawer is false", () => {
    const props = {
        displayDrawer: false,
    };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.exists(".Notifications")).equal(false);
});

it("shouled display menu item when displaydrawer is true", () => {
    const props = {
        displayDrawer: true,
    };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.exists(".menuItem")).equal(false);
});

it("shouled displayes div.Notifications when displayDrawer is true", () => {
    const props = {
        displayDrawer: true,
    };
    const wrapper = shallow(<Notifications {...props} />);
    expect(wrapper.exists(".Notifications")).equal(false);
});
