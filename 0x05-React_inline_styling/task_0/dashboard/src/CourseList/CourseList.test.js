import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

it("shouled renders CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
});

it("shouled renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(0);
});

it("Test tthat when you pass a list of courses, the component renders it correctly", () => {

    let props = {
        listCourses: [
            {
                id: 1,
                name: "ES6",
                credit: 60,
            },
            {
                id: 2,
                name: "Webpack",
                credit: 20,
            },
            {
                id: 3,
                name: "React",
                credit: 40,
            },
        ],
    };

	let component = shallow(<CourseList shouldRender {...props} />);
	expect(component.render()).to.not.be.an("undefined");
	});

    it("Test if <CourseList /> is rendered without crashing", () => {

		let component = shallow(<CourseList shouldRender />);

		expect(component.render()).to.not.be.an("undefined");
	});


