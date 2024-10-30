import React from 'react';
import Grid from './components/Grid';
import { GridProvider } from './context/GridContext';

function App() {
  return (
    <GridProvider>
      <Grid />
    </GridProvider>
  );
}

export default App;