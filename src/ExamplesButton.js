import React from 'react';
import { Button, Popover, MenuItem } from '@material-ui/core';
import { withState } from 'recompose';
import { Link } from 'react-router-dom';

function ExamplesButton({ anchorEl, updateAnchorEl, routes, title }) {
  const open = !!anchorEl;
  return (
		<div style={{ padding: 50 }}>
			<Button
				variant="contained"
				color="primary"
				aria-owns={open ? "examples-popover" : undefined}
				aria-haspopup="true"
				onClick={event => updateAnchorEl(event.currentTarget)}
			>
				{title}
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
				{Object.keys(routes).map(key => {
					if (routes[key].visible) {
						return (
							<MenuItem key={key}>
								<Link to={routes[key].path}>{key}</Link>
							</MenuItem>
						);
					}
					return null
				})}
			</Popover>
		</div>
	)
}

export default withState("anchorEl", "updateAnchorEl", null)(ExamplesButton);
