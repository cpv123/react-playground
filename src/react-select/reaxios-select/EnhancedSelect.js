import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { WithRequestEnhancer } from './WithRequestEnhancer';

function LoadDataSelect(props) {
    console.log(props)

    let errorProps = {};
    if (props.error) {
        errorProps.noOptionsMessage = () => "Unable to load resource"
    }

    return (
        <Select
            isLoading={props.loading}
            options={props.results}
            {...props}
            {...errorProps}
        />
    );
}

const EnhancedSelect = WithRequestEnhancer('http://localhost:5000/shops', '_id', 'name')(LoadDataSelect);

export default EnhancedSelect;