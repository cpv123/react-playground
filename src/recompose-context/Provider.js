import React from 'react';
import PropTypes from 'prop-types';
import { compose, withContext, withProps } from 'recompose';
import { ChildOne } from './Children';

// Parent component which provides the context
const Provider = ({ context }) => (
    <ChildOne />
);

export default compose(
    withProps({ context: "Test context string" }),
    withContext(
        { context: PropTypes.string },
        (props) => ({ context: props.context })
    )
)(Provider);