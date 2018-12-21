import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, withStyles  } from '@material-ui/core';
import { compose, withState, withHandlers, onlyUpdateForKeys } from 'recompose';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

export function ComplexComponent({ 
    classes, 
    heading, 
    incrementButtonTitle, 
    buttonTitle 
}) {
    return (
        <div className={classes.root}>
            <Typography>{heading}</Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={incrementButtonTitle}
            >
                {buttonTitle}
            </Button>
        </div>
    );
}

ComplexComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    heading: PropTypes.string.isRequired,
    incrementButtonTitle: PropTypes.func.isRequired,
    buttonTitle: PropTypes.number.isRequired,
};

const ComplexComponentWithHocs = compose(
    withStyles(styles),
    withState('buttonTitle', 'setButtonTitle', 0),
    withHandlers({
        incrementButtonTitle: ({ buttonTitle, setButtonTitle }) => () => {
            setButtonTitle(buttonTitle => buttonTitle + 1)
        }
    }),
    onlyUpdateForKeys([ "buttonTitle" ])
)(ComplexComponent);

export default ComplexComponentWithHocs;