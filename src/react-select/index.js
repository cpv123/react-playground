import React from 'react';
import IntegrationReactSelect from './MuiSelect';
import PureSelect from './PureSelect';
import { increasedLengthSuggestions } from './options';
import EnhancedSelect from './reaxios-select/EnhancedSelect';

import Reaxios from './reaxios-select/Reaxios';
import { CircularProgress } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: 50,
    },
    performanceContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    selectContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    heading: {
        marginBottom: 20,
    },
};

function SelectContainer() {
    return (
        <div style={styles.root}>
            <div style={styles.performanceContainer}>
                <div style={styles.selectContainer}>
                    <span style={styles.heading}>Keydown event handler takes approx. 350ms.</span>
                    <IntegrationReactSelect options={increasedLengthSuggestions} />
                </div>
                
                <div style={styles.selectContainer}>
                    <span style={styles.heading}>Keydown event handler takes approx. 75ms.</span>
                    <PureSelect options={increasedLengthSuggestions} />
                </div>
            </div>

            <div style={{ width: '30%' }}>
                <EnhancedSelect 
                    placeholder="Pick a shop..."  
                />
            </div>

            <div>
                <Reaxios url="http://localhost:5000/shops">
                    {
                        ({ error, isLoading, data }) => {
                            if (data && data.length) {
                                const options = data.map(item => ({
                                    value: item._id,
                                    label: item.name,
                                }))
                                return <PureSelect options={options} />
                            } else {
                                return <CircularProgress />
                            }
                        }
                    }
                </Reaxios>
            </div>
        </div>
    );
}

export default SelectContainer;