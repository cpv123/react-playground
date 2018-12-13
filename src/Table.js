import React from 'react';
import { lifecycle, compose, withState, withHandlers } from 'recompose';
import MuiTable from 'mui-virtualized-table';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

function Table({ data, sortData }) {
    return (
        <div>
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
)(Table);
