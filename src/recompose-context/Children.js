import React from 'react';
import PropTypes from 'prop-types';
import { compose, getContext } from 'recompose';

export function ChildOne() {
    return (
        <ChildTwo />
    );
}

function ChildTwo() {
    return (
        <ChildThreeWithContext />
    );
}

function ChildThree({ context }) {
    return (
        <span>{context}</span>
    );
}

const ChildThreeWithContext = compose(
    getContext({ context: PropTypes.string })
)(ChildThree)