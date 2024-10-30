import React, { createContext, useState, useContext } from 'react';

const GridContext = createContext();

export function useGrid() {
    return useContext(GridContext);
}

// Provider component to wrap the app and share state
export function GridProvider({ children }) {
    const [gridState, setGridState] = useState([false, false, false, false]);

    function toggleCell(index) {
        const newGridState = [...gridState];
        newGridState[index] = !newGridState[index];
        setGridState(newGridState);
    }

    return (
        <GridContext.Provider value={{ gridState, toggleCell }}>
            {children}
        </GridContext.Provider>
    );
}