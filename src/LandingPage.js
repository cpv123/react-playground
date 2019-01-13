import React from 'react';
import { Button, Popover, MenuItem } from '@material-ui/core';
import { withState } from 'recompose';
import { Link } from 'react-router-dom';

const examples = {
    "Redux Saga": "/saga",
    "Render Props": "/render-props",
    "Recompose Context": "/context",
    "React Select": "/select",
    "Virtualized Tables": "/tables",
    "Styled Component": "/styled-components",
    "HOC Testing": "/hoc-testing",
    "Routing": "/routing",
};

function LandingPage({ anchorEl, updateAnchorEl }) {

    const open = !!anchorEl;

    return (
        <div style={{ padding: 50 }}>
            <Button
                variant="contained"
                color="primary"
                aria-owns={open ? "examples-popover" : undefined}
                aria-haspopup="true"
                onClick={(event) => updateAnchorEl(event.currentTarget)}
            >
                See examples
            </Button>
            <Popover 
                id="examples-popover" 
                anchorEl={anchorEl}
                open={open}
                onClose={() => updateAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {
                    Object.keys(examples).map(key => (
                        <MenuItem key={key}>
                            <Link to={examples[key]}>{key}</Link>
                        </MenuItem>
                    ))
                }
            </Popover>
        </div>
    )
}

export default withState("anchorEl", "updateAnchorEl", null)(LandingPage);
