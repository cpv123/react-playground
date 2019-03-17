import React from 'react';
import { Button, Popover, MenuItem } from '@material-ui/core';
import { withState } from 'recompose';
import { Link } from 'react-router-dom';

import { isEqual } from 'lodash';

import routesConfig from './routes-config';

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
                    Object.keys(routesConfig).map(key => {
                        if (routesConfig[key].visible) {
                            return (
                                <MenuItem key={key}>
                                    <Link to={routesConfig[key].path}>{key}</Link>
                                </MenuItem>
                            );
                        }
                    })
                }
            </Popover>
        </div>
    )
}

export default withState("anchorEl", "updateAnchorEl", null)(LandingPage);
