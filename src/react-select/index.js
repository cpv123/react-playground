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
    selectGroup: {
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
        
            <div style={styles.selectGroup}>
                <div style={styles.selectContainer}>
                    <span style={styles.heading}>Keydown event handler takes approx. 350ms.</span>
                    <IntegrationReactSelect options={increasedLengthSuggestions} />
                </div>
                
                <div style={styles.selectContainer}>
                    <span style={styles.heading}>Keydown event handler takes approx. 75ms.</span>
                    <PureSelect options={increasedLengthSuggestions} />
                </div>
            </div>

            <div style={styles.selectGroup}>
                <div style={{
                    ...styles.selectContainer,
                    width: '40%',
                }}>
                    <span style={styles.heading}>Select wrapped with Reaxios HOC.</span>
                    <EnhancedSelect placeholder="Pick a shop..." />
                </div>

                <div style={{
                    ...styles.selectContainer,
                    width: '40%'
                }}>
                    <span style={styles.heading}>Select manaually wrapped by Reaxios.</span>
                    <Reaxios url="http://localhost:5000/shops">
                        {
                            ({ response, isLoading, error }) => {
                                if (response && response.length) {
                                    const options = response.map(item => ({
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

        </div>
    );
}

export default SelectContainer;