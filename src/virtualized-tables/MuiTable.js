import React from 'react';
import MuiTable from 'mui-virtualized-table';

const MuiTableComponent = ({ data }) => (
    <MuiTable 
        width={500} 
        style={{ backgroundColor: 'white' }} 
        data={data}
        columns={[{ name: 'name', header: "Name" }, { name: 'location', header: "Location" }]}
        includeHeaders
        onCellClick={() => console.log('clicked')}
        resizable
    />
);

export default MuiTableComponent;