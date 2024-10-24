import React from 'react';
import Home from './Components/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home /></Route>            
          </Switch>
        </BrowserRouter>
    </div>
    </Provider>
    ); 
}

export default App;
