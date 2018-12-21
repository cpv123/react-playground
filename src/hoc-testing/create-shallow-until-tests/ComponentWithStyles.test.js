import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import ComponentWithStyles from '../ComponentWithStyles';

const shallow = createShallow({ untilSelector: 'ComponentWithStyles' });

describe('The ComponentWithStyles component', () => {

    it('renders as expected', () => {
        // shallow() is now our own function defined using createShallow above
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
    });

})
