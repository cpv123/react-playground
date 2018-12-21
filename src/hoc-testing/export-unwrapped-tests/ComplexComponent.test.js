import React from 'react';
import { shallow } from 'enzyme';
// Import the unwrapped component this time i.e. not the default export
import { ComplexComponent } from '../ComplexComponent';

describe('the unwrapped ComplexComponent', () => {

    it('renders as expected', () => {
        // We must provide all props, as we've imported the base component only
        const mockProps = {
            classes: {},
            heading: "Test heading",
            incrementButtonTitle: jest.fn(),
            buttonTitle: 0,
        };
        const wrapper = shallow(<ComplexComponent {...mockProps} />);
        expect(wrapper).toMatchSnapshot()
    });

});