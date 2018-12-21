import React from 'react';
import { shallow } from 'enzyme';
import ComponentWithStyles from '../ComponentWithStyles';

describe('The ComponentWithStyles component', () => {

    it('renders as expected', () => {
        const wrapper = shallow(<ComponentWithStyles />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders children passed in', () => {
        const wrapper = shallow(
            <ComponentWithStyles>
                <span>Click the button below!</span>
            </ComponentWithStyles>
        );
        expect(wrapper.find('span')).toHaveLength(1);
    })

});