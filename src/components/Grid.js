import React from 'react';
import GridCell from './GridCell';
import { useGrid } from '../context/GridContext';

function Grid() {
    const { gridState } = useGrid();

    const onCount = gridState.filter((cell) => cell).length;

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Count: {onCount}</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 100px)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {gridState.map((_, index) => (
                    <GridCell key={index} index={index} />
                ))}
            </div>
        </div>
    );
}

export default Grid;