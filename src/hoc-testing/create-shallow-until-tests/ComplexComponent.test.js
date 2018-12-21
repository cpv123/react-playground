import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ComplexComponent from '../ComplexComponent';

const shallow = createShallow({ untilSelector: 'ComplexComponent' });

describe('The ComplexComponent component', () => {

    it('renders as expected', () => {
        // shallow() is now our own function defined using createShallow above
        const wrapper = shallow(<ComplexComponent heading="Test heading" />);   // Provide the 'heading' prop only as the others are injected
        expect(wrapper).toMatchSnapshot();
    });

})
