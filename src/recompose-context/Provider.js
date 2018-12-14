import React from 'react';
import PropTypes from 'prop-types';
import { compose, withContext, withProps } from 'recompose';
import { ChildOne } from './Children';

function Provider({ context }) {
    return (
        <ChildOne />
    )
}

export default compose(
    withProps({ context: "Test context string" }),
    withContext(
        { context: PropTypes.string },
        (props) => ({ context: props.context })
    )
)(Provider);