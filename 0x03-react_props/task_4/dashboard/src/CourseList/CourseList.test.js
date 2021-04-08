import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

configure({adapter: new Adapter()});

it("shouled renders CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
});

it("shouled renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(5);
});

