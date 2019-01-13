import React from 'react';
import { Typography, CircularProgress } from '@material-ui/core';

const styles = {
    tableContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        marginBottom: 20,
    },
};

const TableEnhancer = title => BaseComponent => props => (
    <div style={styles.tableContainer}>
        <header style={styles.header}>
            <Typography variant="button">
                {title}
            </Typography>
        </header>
        {
            !props.data.length ? <CircularProgress /> : <BaseComponent {...props} />
        }
    </div>
);

export default TableEnhancer;