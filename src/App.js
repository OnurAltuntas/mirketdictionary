import React from 'react';
import Navi from './components/navi/Navi';
import Dashboard from '../src/components/root/Dashboard'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


function App() {
  return (
    <div className="App">
     <Navi/>
   
     <SignIn/>
     <SignUp/>
    </div>
  );
}

export default App;
