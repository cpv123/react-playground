import React from 'react';
import Select from 'react-select';
import useReaxios from './useReaxios';

function SelectUsingReaxios() {

    const dataLoadingProps = useReaxios('http://localhost:5000/shops', formatFn);
    const { response, isLoading, error } = dataLoadingProps;

    return (
        <Select
            isLoading={isLoading}
            options={response}
            error={error}
        />
    );
}

export default SelectUsingReaxios;

function formatData(rawData, value, label) {
    return rawData.map(item => ({
        value: item[value],
        label: item[label],
    }))
}

const formatFn = {
    fn: formatData,
    args: ['_id', 'name'],
};
