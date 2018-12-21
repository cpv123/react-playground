import React from 'react';
import ComponentWithStyles from './ComponentWithStyles';
import ComplexComponentWithHocs from './ComplexComponent';
import { Typography } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: 30,
    },
};

function Hocs() {
    return (
        <div style={styles.root}>
            <div>
                <Typography variant="h4" gutterBottom>Styled Component</Typography>
                <Typography variant="body2">{styledComponentText}</Typography>
                <br />
                <ComponentWithStyles />
            </div>

            <div>
                <Typography variant="h4" gutterBottom>Complex Component</Typography>
                <Typography variant="body2">{complexComponentText}</Typography>
                <br />
                <ComplexComponentWithHocs heading="Click button to increment counter" />
            </div>
        </div>
    );
}

const styledComponentText = "withStyles(BaseComponent)";
const complexComponentText = "withStyles(withState(withHandlers(onlyUpdateForKeys(BaseComponent))))";

export default Hocs;
