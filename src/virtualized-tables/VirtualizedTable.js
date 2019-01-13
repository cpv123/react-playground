import React, { Component } from 'react';
import { AutoSizer, Column, Table } from 'react-virtualized';
import { TableCell } from '@material-ui/core';
import 'react-virtualized/styles.css';

class VirtualizedTableComponent extends Component {

    headerRenderer = ({ label }) => (
        <TableCell component="div">
            {label}
        </TableCell>
    )

    render() {
        const { data } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowCount={data.length}
                        rowGetter={({ index }) => data[index]}
                        rowHeight={50}
                    >
                        {
                            columns.map(column => {
                                return (
                                    <Column
                                        key={column.dataKey}
                                        label={column.label}
                                        width={300}
                                        dataKey={column.dataKey}
                                        flexGrow={1}
                                    />
                                );
                            })
                        }
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

export default VirtualizedTableComponent;

const columns = [
    {
        label: "Name",
        dataKey: "name",
    },
    {
        label: "Location",
        dataKey: "location",
    }
];