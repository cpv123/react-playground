import React from 'react';
import PropTypes from 'prop-types';
import { compose, withContext, withProps, setDisplayName } from 'recompose';
import { ChildOne } from './Children';

// Parent component which provides the context
const Provider = ({ store }) => (
    <ChildOne />
);

const withCusomHoc = () => compose(
  setDisplayName('WithCustomHoc'),
  withProps(() => {
    return { first: 'value' }
  })
)

const enhance = compose(
  withCusomHoc(),
  withProps({
    store: {
      data: [1, 2, 3],
      isAdmin: true
    }
  }),
  withContext(
    { store: PropTypes.object },
    (props) => ({ store: props.store })
  )
)

export default enhance(Provider);