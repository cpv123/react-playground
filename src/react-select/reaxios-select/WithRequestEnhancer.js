import React from 'react';
import Reaxios from './Reaxios';

export const WithRequestEnhancer = (url, value, name) => WrappedComponent => {
    return (
        class ReactAxiosRequest extends React.Component {
            render() {
                return (
                    <Reaxios url={url}>
                        {
                            ({ error, loading, result }) => {
                                const dataLoadingProps = {
                                    error,
                                    loading,
                                    results: result ? formatData(result.body, value, name) : undefined,
                                };
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
