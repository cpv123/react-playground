import React from 'react';
import Reaxios from './Reaxios';

const WithRequestEnhancer = (url, value, label) => BaseComponent => props => (
    <Reaxios url={url}>
        {
            ({ response, isLoading, error }) => {

                const dataLoadingProps = {
                    response: response ? formatData(response, value, label) : undefined,
                    isLoading,
                    error,
                };

                return <BaseComponent {...dataLoadingProps} {...props} />
            }
        }
    </Reaxios>
)

function formatData(rawData, value, label) {
    return rawData.map(item => ({
        value: item[value],
        label: item[label],
    }))
}
    
export default WithRequestEnhancer;
