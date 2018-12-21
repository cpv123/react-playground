import React from 'react';
import { shallow } from 'enzyme';
import ComplexComponent from '../ComplexComponent';

describe('The ComplexComponent component', () => {

    it('renders as expected', () => {
        const wrapper = shallow(
            <ComplexComponent heading="Test heading" /> // Provide the 'heading' prop only as the others are injected
        ).dive().dive().dive().dive();  // "one dive per HOC"
        
        expect(wrapper).toMatchSnapshot();
    });
    
});