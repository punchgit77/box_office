import React from "react";
import { Switch, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Home from './pages/Home';
// eslint-disable-next-line no-unused-vars
import Starred from './pages/Starred';


function App() {
  return (
  
    <Switch>
       
       <Route exact path="/Home">

            <Home/>

       </Route>
       
       <Route exact path="/Starred">
         
              <Starred/>

       </Route>
       
       <Route>
         
             Page 404 not found

       </Route>

    </Switch>
  
      );
}

export default App;
