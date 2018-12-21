import React from 'react';
import { shallow } from 'enzyme';
import ComplexComponent from '../ComplexComponent';

describe('The ComplexComponent component', () => {

    it('renders as expected', () => {
        const wrapper = shallow(<ComplexComponent />);
        expect(wrapper).toMatchSnapshot();
    });

});