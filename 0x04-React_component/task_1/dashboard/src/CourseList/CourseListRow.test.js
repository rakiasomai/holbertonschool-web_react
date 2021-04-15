import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CourseListRow from './CourseListRow';

configure({adapter: new Adapter()});


it('shouled the componet renders one cell with colspan =2 when the textFirstCell does not exist', () => {
    const props = {
        isHeader: true,
        textFirstCell: "sting",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    expect(wrapper.contains(<tr><th colSpan={2}>{props.textFirstCell}</th></tr>)).equal(true);
});

it('shouled the componet renders 2 cells when textSecondCell is prensent', () => {
    const props = {
        isHeader: true,
        textFirstCell: "sting",
        textSecondCell: "string",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    expect(wrapper.contains(<tr><th>{props.textFirstCell}</th><th>{props.textSecondCell}</th></tr>)).equal(true);
});

it('shouled the componet renders correctly 2 td elements within tr element', () =>{
    const props = {
        isHeader: false,
        textFirstCell: "sting",
        textSecondCell: "string",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    expect(wrapper.contains(<tr><td>{props.textFirstCell}</td><td>{props.textSecondCell}</td></tr>)).equal(true);
});


