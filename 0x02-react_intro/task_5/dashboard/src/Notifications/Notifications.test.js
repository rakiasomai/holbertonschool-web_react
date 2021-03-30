import React from "react";
import { shallow } from "enzyme";
import  Notifications  from "./Notifications";

it("shouled renders notifications without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
});

it("should renders three lis items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li")).toHaveLength(3);
});

it("should renders a spesific string", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
});
