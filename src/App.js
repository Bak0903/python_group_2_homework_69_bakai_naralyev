import React, { Component } from 'react';
import './App.css';
import Calc from './containers/Calc/Calc';

class App extends Component {
    render() {
        return (
        <div className="App">
            <Calc/>
        </div>
        );
    }
}

export default App;
