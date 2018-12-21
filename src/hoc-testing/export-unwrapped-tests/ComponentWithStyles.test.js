import React from 'react';
import { shallow } from 'enzyme';
// Import the unwrapped/unwrapped component this time i.e. not the default export
import { Component } from '../ComponentWithStyles';

describe('the unwrapped component', () => {

    it('renders as expected', () => {
        // Mock the classes prop from withStyles, otherwise test cannot run
        const wrapper = shallow(<Component classes={{}} />);
        expect(wrapper).toMatchSnapshot()
    });

    it('renders children passed in', () => {
        const wrapper = shallow(
            <Component classes={{}}>
                <span>Click the button below!</span>
            </Component>
        );
        expect(wrapper.find('span')).toHaveLength(1);
    });

});