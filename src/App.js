import React from 'react';
import Navi from './components/navi/Navi';
import Dashboard from '../src/components/root/Dashboard'

function App() {
  return (
    <div className="App">
     <Navi/>
     <Dashboard/>
    </div>
  );
}

export default App;
