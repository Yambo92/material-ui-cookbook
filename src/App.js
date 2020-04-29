import React from 'react';
import { UnderstandingBreakpoints, FillingSpace, AbstractingContainersAndItems, FixedColumnLayout,ColumnDirection } from './Chapter01Grid'

function App() {
  return (
    <div className="App">
        <UnderstandingBreakpoints/>
        <FillingSpace justify="space-around" />
        <AbstractingContainersAndItems />
        <FixedColumnLayout width={4} />
        <ColumnDirection />
    </div>
  );
}

export default App;
