import React from 'react';
import Select from 'react-select';

function PureSelect(props) {
    return (
        <Select options={props.options} />
    );
}

export default PureSelect;