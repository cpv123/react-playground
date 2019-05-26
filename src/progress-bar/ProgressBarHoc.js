import React from 'react';

/**
 * 
 * HOC to handle the logic.
 */
const wrapper = Component => props => {
    const computedPercentage =
        props.percentage >= 100
        ? 100
        : props.percentage <= 0
        ? 0
        : props.percentage;

    let color;
    if (typeof props.colors === "string") {
        color = props.colors;
    } else {
        const thresholds = Object.keys(props.colors);
        for (let threshold of thresholds) {
            if (computedPercentage <= threshold) {
                color = props.colors[threshold];
                break;
            }
        }
    }
    return <Component percentage={computedPercentage} color={color} />;
};

export default wrapper;