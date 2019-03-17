import React from 'react';
import PropTypes from 'prop-types';
import { compose, withContext, withProps } from 'recompose';
import { ChildOne } from './Children';

// Parent component which provides the context
const Provider = ({ store }) => (
    <ChildOne />
);

export default compose(
    // An example 'global store'.
    withProps({ 
        store: {
            data: [1, 2, 3],
            isAdmin: true,
        }
    }),
    withContext(
        { store: PropTypes.object },
        (props) => ({ store: props.store })
    )
)(Provider);