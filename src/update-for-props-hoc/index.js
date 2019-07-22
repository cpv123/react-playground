import React, { useState } from 'react'
import withUpdateForProps from './withUpdateForProps'

const ComponentToWrap = ({ counter1, counter2 }) => (
    <p>{counter1} {counter2}</p>
)

const WrappedComponent = withUpdateForProps(['counter1'])(ComponentToWrap)

function WithUpdateForPropsTest() {
    const [state, setState] = useState({
        counter1: 0, 
        counter2: 0, 
    })

    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={() => setState({
                ...state,
                counter1: state.counter1 + 1
            })}>Will change</button>
            <button onClick={() => setState({
                ...state,
                counter2: state.counter2 + 1,
            })}>Won't change</button>
            
            <WrappedComponent
                counter1={state.counter1}
                counter2={state.counter2}
            />

            <code>Will change button controls counter 1, and won't change button controls counter 2</code><br />
            <code>WrappedComponent = withUpdateForProps(['counter1'])(ComponentToWrap)</code>
        </div>
    )
}

export default WithUpdateForPropsTest
