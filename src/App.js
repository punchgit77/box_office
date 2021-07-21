import React from "react";
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import Home from './pages/Home';
// eslint-disable-next-line no-unused-vars
import Starred from './pages/Starred';
import Show from './pages/Show';

const theme={
     mainColors:{
          blue:'#2400ff',
          gray:'c6c6c6',
          dark:'#353535',
     },
};

function App() {
  return ( 
  <ThemeProvider theme={theme}> 
    <Switch>
       
       <Route exact path="/">

            <Home/>

       </Route>
       
       <Route exact path="/Home">

            <Home/>

       </Route>
       
       <Route exact path="/Starred">
         
              <Starred/>

       </Route>

       <Route exact path="/show/:id">
                 <Show/>
       </Route>
       
       <Route>
         
             Page 404 not found

       </Route>

    </Switch>
    </ThemeProvider>
  
      );
}

export default App;
