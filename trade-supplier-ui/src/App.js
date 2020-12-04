import React, { Component } from 'react';
import './App.css';
import Dashbaord from './components/containers/Dashboard';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/store';

const store = ConfigureStore();

class App extends Component{

  render(){
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <div className="App">
            <Dashbaord/>
          </div>
        </BrowserRouter>
      </Provider>
    );
    }
}

export default App;
