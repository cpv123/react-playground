import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * 
 * The 'dumb' progress bar component. 
 */
function ProgressBar({ percentage, color }) {
    return (
        <div className="container">
            <div
                className="inner"
                style={{ width: `${percentage}%`, backgroundColor: color }}
            />
        </div>
    );
}

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string,
};

ProgressBar.defaultProps = {
    color: 'blue',
};

export default ProgressBar;