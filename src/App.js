import React from 'react';
import Home from './Components/Home';
import AddProject from './Components/AddProject';
import EditProject from './Components/EditProject';

import './App.css';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/add"><AddProject /></Route>   
            <Route exact path="/edit/:todoId" render={(props) => <EditProject {...props} />}></Route>  
          </Switch>
        </BrowserRouter>
    </div>
    ); 
}

export default App;
