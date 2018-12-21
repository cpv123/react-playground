import React from 'react';
import { lifecycle, compose, withState, withHandlers } from 'recompose';
import MuiTable from 'mui-virtualized-table';
import axios from 'axios';
import { CircularProgress, Typography } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
    },
    tableContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        marginBottom: 20,
    },
};

// TODO - use a branch HOC for loading

function Tables({ data, sortData }) {
    return (
        <div style={styles.root}>
            <div style={styles.tableContainer}>
                <header style={styles.header}>
                    <Typography variant="button">
                        Mui-Virtualized-Table
                    </Typography>
                </header>
                { !data.length ? <CircularProgress /> : (
                    <MuiTable 
                        width={500} 
                        style={{ backgroundColor: 'white' }} 
                        data={data}
                        columns={[{ name: 'name', header: "Name" }, { name: 'location', header: "Location" }]}
                        includeHeaders
                        onCellClick={() => console.log('clicked')}
                        resizable
                    />
                ) }
            </div>
            <div style={styles.tableContainer}>
                <header>
                    <Typography variant="button">
                        React-Virtualized
                    </Typography>
                </header>
            </div>
        </div>
    )
};

export default compose(
    withState('data', 'setData', []),
    withHandlers({
        updateData: ({ setData }) => (fetchedData) => {
            setData(fetchedData)
        },
    }),
    lifecycle({
        componentDidMount() {
            axios.get('http://localhost:5000/shops')
                .then((data) => this.props.updateData(data.data))
        }
    })
)(Tables);
