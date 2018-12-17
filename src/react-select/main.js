import React from 'react';
import IntegrationReactSelect from './MuiSelect';
import PureSelect from './Select';
import { increasedLengthSuggestions } from './options';

function SelectContainer() {
    return (
        <div style={{ margin: 50 }}>
            <span>Keydown event handler takes approx. 350ms.</span>
            <IntegrationReactSelect options={increasedLengthSuggestions} />
            
            <span>Keydown event handler takes approx. 75ms.</span>
            <PureSelect options={increasedLengthSuggestions} />
        </div>
    );
}

export default SelectContainer;