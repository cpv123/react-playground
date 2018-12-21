import React from 'react';
import { 
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    withStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    button: {
        margin: theme.spacing.unit, 
    },
});

export function Component({ classes, children }) {
    return (
        <div className={classes.root}>
            <ExpansionPanel>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                        Expansion Panel Title
                    </Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    {children}
                    <Button 
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={() => console.log('You clicked a well styled button')}
                    >
                        Click Me
                    </Button>
                </ExpansionPanelDetails>

            </ExpansionPanel>
        </div>
    );
}

const ComponentWithStyles = withStyles(styles)(Component);

export default ComponentWithStyles;
