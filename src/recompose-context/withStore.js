import PropTypes from 'prop-types';
import { compose, getContext, mapProps } from "recompose";

// Recompose version of Redux's connect HOC.

const withStore = mapStoreToProps => compose(
    // Get the entire 'global store' from Context.
    getContext({ store: PropTypes.object }),
    // Grab just the part of the store you need (defined by mapStoreToProps).
    mapProps(({ store, ...rest }) => ({
        ...mapStoreToProps(store),
        ...rest,
    }))
);

export default withStore;

