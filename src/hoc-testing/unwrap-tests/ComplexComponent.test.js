import React from 'react';
import { shallow } from 'enzyme';
import { unwrap } from '@material-ui/core/test-utils';
import ComplexComponent from '../ComplexComponent';

const UnwrappedComponent = unwrap(ComplexComponent);

describe('The ComplexCompnent component', () => {

    it('renders as expected', () => {
        // We aren't required to provide props
        const mockProps = {
            // classes: {},
            // heading: "Test heading",
            // incrementButtonTitle: jest.fn(),
            // buttonTitle: 0,
        };
        const wrapper = shallow(<UnwrappedComponent {...mockProps} />);
        expect(wrapper).toMatchSnapshot();
    });

});