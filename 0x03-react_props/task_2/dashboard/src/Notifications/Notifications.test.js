import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from "react";
import { shallow } from "enzyme";
import  Notifications  from "./Notifications";
import NotificationItem from "./NotificationItem";

it("shouled renders notifications without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
});

it("should the component renders three element", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
});

it("should renders a spesific string", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
});


