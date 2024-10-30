import React from 'react';
import { useGrid } from '../context/GridContext';

function GridCell({ index }) {
    const { gridState, toggleCell } = useGrid();

    return (
        <div
            onClick={() => toggleCell(index)}
            style={{
                width: '100px',
                height: '100px',
                border: '1px solid grey',
                backgroundColor: gridState[index] ? 'black' : 'white',
                cursor: 'pointer',
            }}
        ></div>
    );
}

export default GridCell;