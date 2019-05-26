import React from 'react';
import ProgressBar from './ProgressBar';

const computePercentage = percentage => {
    const computedPercentage =
        percentage >= 100
        ? 100
        : percentage <= 0
        ? 0
        : percentage;

    return computedPercentage;
};

const computeColor = (colors, percentage) => {
    let color;
    if (typeof colors === "string") {
        color = colors;
    } else {
        const thresholds = Object.keys(colors);
        for (let threshold of thresholds) {
            if (percentage <= threshold) {
                color = colors[threshold];
                break;
            }
        }
    }

    return color;
}

function ProgressBarLogic({ percentage, colors }) {
    const percentageToUse = computePercentage(percentage);
    const colorToUse = computeColor(colors, percentageToUse);

    return <ProgressBar percentage={percentageToUse} color={colorToUse} />;
}

export default ProgressBarLogic;
