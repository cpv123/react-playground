import React from 'react';
import Reaxios from './Reaxios';

export const WithRequestEnhancer = (url, value, name) => WrappedComponent => {
    return (
        class ReactAxiosRequest extends React.Component {
            render() {
                return (
                    <Reaxios url={url}>
                        {
                            ({ response, isLoading, error }) => {
                                const dataLoadingProps = {
                                    response: response ? formatData(response, value, name) : undefined,
                                    isLoading,
                                    error,
                                };
                                console.log(response, isLoading, error)
                                return <WrappedComponent {...this.props} {...dataLoadingProps} />
                            }
                        }
                    </Reaxios>
                )
            }
        }
    )
}

function formatData(rawData, value, label) {
    return rawData.map(item => ({
        value: item[value],
        label: item[label],
    }))
}
