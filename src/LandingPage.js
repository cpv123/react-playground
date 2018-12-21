import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { compose, withState, withHandlers } from 'recompose';
import { Link } from 'react-router-dom';

const examples = {
    "Redux Saga": "/saga",
    "Render Props": "/render-props",
    "Recompose Context": "/context",
    "React Select": "/select",
    "Virtualized Table": "/table",
    "Styled Component": "/styled-components",
    "HOC Testing": "/hoc-testing",
};

function LandingPage({ anchorE1, toggleMenu }) {
    const open = !!anchorE1;
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                aria-owns={open ? "examples-menu" : undefined}
                aria-haspopup="true"
                onClick={() => toggleMenu()}
            >
                See examples
            </Button>
            <Menu 
                id="exmaples=menu" 
                anchorE1={anchorE1}
                open={open}
                onClose={() => toggleMenu()}
            >
                {
                    Object.keys(examples).map(key => (
                        <MenuItem key={key}>
                            <Link to={examples[key]}>{key}</Link>
                        </MenuItem>
                    ))
                }
            </Menu>
        </div>
    )
}

export default compose(
    withState("anchorE1", "updateAnchorE1", null),
    withHandlers({
        toggleMenu: ({ anchorE1, updateAnchorE1 }) => () => {
            updateAnchorE1(anchorE1 => !anchorE1)
        }
    }),
)(LandingPage);
