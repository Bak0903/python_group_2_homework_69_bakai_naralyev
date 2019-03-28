import React, { Component } from 'react';
import './Calc.css';

class Calc extends Component {
  render() {
    return (
      <div className="Calc">
          <div className="Screen"></div>
          <div className="Buttons">
              <button>7</button> <button>8</button> <button>9</button> <button>/</button>
              <button>4</button> <button>5</button> <button>6</button> <button>x</button>
              <button>1</button> <button>2</button> <button>3</button> <button>-</button>
              <button>del</button> <button>0</button> <button>=</button> <button>+</button>

          </div>
      </div>
    );
  }
}

export default Calc;
