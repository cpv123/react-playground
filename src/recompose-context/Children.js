import React from 'react';
import PropTypes from 'prop-types';
import { compose, getContext } from 'recompose';
import withStore from './withStore';

// Ignores props from context.
export const ChildOne = () => (
    <ChildTwo />
);

// Ignores props from context.
const ChildTwo = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ChildThreeWithContext />
        <ChildFourWithContext text="Testing normal props"/>
    </div>
);

// This component wants the props so subscribes to the context from Provider.
// However, this takes the entire store as a prop - what if we only want part of the store?
const ChildThree = ({ store }) => (
    <span>User is admin: {`${store.isAdmin}`}</span>
);

const ChildThreeWithContext = compose(
    getContext({ store: PropTypes.object })
)(ChildThree)

const ChildFour = props => {
    console.log('props are ', props)
    return <span>Amount of data is {`${props.data.length}`}</span>;
}

const mapStoreToProps = store => ({
    data: store.data,
})

// This component wants only certain props from the store - 
// those defined in mapStoreToProps.
const ChildFourWithContext = withStore(mapStoreToProps)(ChildFour);