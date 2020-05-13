import React from 'react';
import Navi from './components/navi/Navi';
import {Route,Switch} from "react-router-dom"
import Dashboard from '../src/components/root/Dashboard'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NotFound from './components/common/NotFound';



function App() {
  return (
    <div className="App">
     <Navi/>
     <Switch>
     <Route path ="/" exact component={Dashboard} />
     <Route path ="/signin" exact component={SignIn} />
     <Route path ="/SignUp" exact component={SignUp} />
     <Route  exact component={NotFound} />
   </Switch>
     
    </div>
  );
}

export default App;
