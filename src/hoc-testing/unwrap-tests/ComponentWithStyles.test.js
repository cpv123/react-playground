import React from 'react';
import { shallow } from 'enzyme';
import { unwrap } from '@material-ui/core/test-utils';
import ComponentWithStyles from '../ComponentWithStyles';

const UnstyledComponent = unwrap(ComponentWithStyles);

describe('The ComponentWithStyles component', () => {

    it('renders as expected', () => {
        // Mock the classes prop from withStyles, otherwise test cannot run
        const wrapper = shallow(<UnstyledComponent classes={{}} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders children passed in', () => {
        const wrapper = shallow(
            <UnstyledComponent classes={{}}>
                <span>Click the button below!</span>
            </UnstyledComponent>
        );
        expect(wrapper.find('span')).toHaveLength(1);
    });

});