import React from 'react';
import Select from 'react-select';
import WithRequestEnhancer from './WithRequestEnhancer';

function LoadDataSelect(props) {

    let errorProps = {};
    if (props.error) {
        errorProps.noOptionsMessage = () => "Unable to load resource"
    }

    return (
        <Select
            isLoading={props.isLoading}
            options={props.response}
            {...props}
            {...errorProps}
        />
    );
}

const EnhancedSelect = WithRequestEnhancer('http://localhost:5000/shops', '_id', 'name')(LoadDataSelect);

export default EnhancedSelect;