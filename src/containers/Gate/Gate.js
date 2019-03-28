import React, { Component } from 'react';
import './Gate.css';
import Screen from '../../components/Screen/Screen';
import Buttons from '../../components/Buttons/Buttons';



class Gate extends Component {
  render() {
      return (
      <div className="Calc">
          <Screen/>
          <Buttons/>
      </div>
    );
  }
}


export default Gate;
