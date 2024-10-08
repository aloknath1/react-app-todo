import React from 'react';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home /></Route>            
          </Switch>
        </BrowserRouter>
    </div>
    ); 
}

export default App;
