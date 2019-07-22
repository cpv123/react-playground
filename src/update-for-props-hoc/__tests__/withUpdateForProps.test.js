import React from 'react'
import { mount } from 'enzyme'
import withUpdateForProps from '../withUpdateForProps'

describe('withUpdateForProps', () =>{
// eslint-disable-next-line react/prop-types
    const TestComponent = ({ prop1, prop2, prop3 }) => (
        <p>{prop1} {prop2} {prop3}</p>
    )

    let wrapper
    let mockProps
    beforeEach(() => {
        mockProps = {
            prop1: "First prop",
            prop2: "Second prop",
            prop3: "Third prop",
            prop4: "Fourth prop",
        }
        const EnhancedComponent = withUpdateForProps(['prop1', 'prop3'])(TestComponent)
        wrapper = mount(<EnhancedComponent {...mockProps} />)
    })

    describe('the rendered output', () => {
        test('renders the component passed in with props', () => {
            expect(wrapper.find('TestComponent').props()).toEqual(mockProps)
        })
    })

    describe('controlling the shouldComponentUpdate method', () => {
        describe('when it should update', () => {
            describe('when a single prop have changed', () => {
                test('updates', () => {
                    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
                        ...mockProps,
                        prop1: "New first prop"
                    })
                    expect(shouldUpdate).toBe(true)
                })
            })

            describe('when multiple props have changed', () => {
                test('updates', () => {
                    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
                        ...mockProps,
                        prop1: "New first prop",
                        prop2: "New second prop",
                        prop3: "New third prop",
                    })
                    expect(shouldUpdate).toBe(true)
                })
            })

            describe('when invalid arguments have been provided', () => {
                const EnhancedComponent = withUpdateForProps('invalid')(TestComponent)
                wrapper = mount(<EnhancedComponent {...mockProps} />)

                test('updates', () => {
                    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
                        ...mockProps,
                        prop1: "New first prop"
                    })
                    expect(shouldUpdate).toBe(true)
                })
            })
        })
        
        describe('when it should not update', () => {
            describe('when a single prop has changed', () => {
                test('does not update', () => {
                    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
                        ...mockProps,
                        prop2: "New second prop",
                    })
                    expect(shouldUpdate).toBe(false)
                })
            })
            
            describe('when multiple props have changed', () => {
                test('does not update', () => {
                    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
                        ...mockProps,
                        prop2: "New second prop",
                        prop4: "New fourth prop",
                    })
                    expect(shouldUpdate).toBe(false)
                })
            })
        })
    })
})