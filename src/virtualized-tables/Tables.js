import React from 'react';
import { lifecycle, compose, withState, withHandlers } from 'recompose';
import axios from 'axios';
import MuiTableComponent from './MuiTable';
import VirtualizedTableComponent from './VirtualizedTable';
import TableEnhancer from './table-enhancer';

const styles = {
    root: {
        display: 'flex',
    },
};

// Tables enhanced to include header, and account for data loading
const EnhancedMuiTable = TableEnhancer("Mui-Virtualized-Table")(MuiTableComponent);
const EnhancedVirtualizedTable = TableEnhancer("Virtualized-Table")(VirtualizedTableComponent);

const Tables = ({ data }) => (
    <div style={styles.root}>

        <EnhancedMuiTable data={data} />

        <EnhancedVirtualizedTable data={data} />

    </div>
);

export default compose(
    withState('data', 'setData', []),
    withHandlers({
        updateData: ({ setData }) => fetchedData => setData(fetchedData)
    }),
    lifecycle({
        componentDidMount() {
            axios.get('http://localhost:5000/shops')
                .then((data) => this.props.updateData(data.data))
        }
    })
)(Tables);
