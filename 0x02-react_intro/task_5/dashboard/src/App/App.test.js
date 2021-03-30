import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("should renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists());
});


it("should renders a div withe the class App-header", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".App-header")).toHaveLength(1);
});

it("should renders a div withe the class App-body", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".App-body")).toHaveLength(1);
});

it("should renders a div withe the class App-footer", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".App-footer")).toHaveLength(1);
});
