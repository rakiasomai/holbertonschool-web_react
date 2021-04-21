import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom.js';
import BodySection from './BodySection.js';
import { StyleSheetTestUtils } from 'aphrodite';


configure({
	adapter: new Adapter()
});

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it("shouled renders the 'BodySection' Component correctly", () => {
    let props = {
        title: 'title',
        children: React.createElement('p', 'test child'),
    };

    let wrapper = shallow(
        <BodySectionWithMarginBottom {...props} />
    );

    expect(wrapper.containsAllMatchingElements([
        <div className="BodySectionWithMargin">
            <BodySection {...props} />
        </div>
    ])).to.equal(false);
});