import React from 'react';
import PropTypes from 'prop-types';
import { compose, getContext } from 'recompose';

// Ignores props from context
export const ChildOne = () => (
    <ChildTwo />
);

// Ignores props from context
const ChildTwo = () => (
    <ChildThreeWithContext />
);

// This component wants the props so subscribes to the context from Provider
const ChildThree = ({ context }) => (
    <span>{context}</span>
);

const ChildThreeWithContext = compose(
    getContext({ context: PropTypes.string })
)(ChildThree)