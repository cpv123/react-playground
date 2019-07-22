import React from 'react'
import { mount } from 'enzyme';
import withUpdateForProps from '../withUpdateForProps';

it('updates when changing state or props', () => {
    const TestComponent = ({ prop1, prop2, prop3 }) => (
        <p>{prop1} {prop2} {prop3}</p>
    )
    const WrappedTestComponent = withUpdateForProps(['prop1'])(TestComponent)

    const wrapper = mount(
        <WrappedTestComponent
            prop1="First prop"
            prop2="Second prop"
            prop3="Third prop"
        />
    );

    const spy = jest.spyOn(WrappedTestComponent.prototype, 'shouldComponentUpdate')

    wrapper.setProps({
        prop1: "First prop",
        prop2: "Second prop",
        prop3: "Third prop",
    })

    expect(spy).toHaveBeenCalledTimes(1)

    jest.clearAllMocks();
});