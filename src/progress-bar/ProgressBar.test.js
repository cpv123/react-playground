import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('The ProgressBar component', () => {
    test('it renders two divs', () => {
        const mockProps = {
            percentage: 20,
        };
        const wrapper = shallow(<ProgressBar {...mockProps} />);
        expect(wrapper.find('div').length).toBe(2);
    });

    test('it sets the correct width', () => {
        const mockProps = {
            percentage: 20,
        };
        const wrapper = shallow(<ProgressBar {...mockProps} />);
        expect(wrapper.props('style').width).toBe('20%');
    });

    test('the default background color', () => {
        const mockProps = {
            percentage: 20
        };
        const wrapper = shallow(<ProgressBar {...mockProps} />);
        expect(wrapper.props('style').backgroundColor).toBe('blue');
    })
})