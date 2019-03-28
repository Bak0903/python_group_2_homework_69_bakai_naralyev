import React, { Component } from 'react';
import {connect} from "react-redux";

class Buttons extends Component {
    render () {
        const {actionChoose, actionDelete, actionEnterNumber} = this.props;
        return <div className="Buttons">
                  <button onClick={() => actionChoose('7')}>7</button>
                  <button onClick={() => actionChoose('8')}>8</button>
                  <button onClick={() => actionChoose('9')}>9</button>
                  <button onClick={() => actionChoose('4')}>4</button>
                  <button onClick={() => actionChoose('5')}>5</button>
                  <button onClick={() => actionChoose('6')}>6</button>
                  <button onClick={() => actionChoose('1')}>1</button>
                  <button onClick={() => actionChoose('2')}>2</button>
                  <button onClick={() => actionChoose('3')}>3</button>
                  <button onClick={actionDelete}>del</button>
                  <button onClick={() => actionChoose('0')}>0</button>
                  <button onClick={actionEnterNumber}>Enter</button>
              </div>
    }
}


const mapDispatchToProps = dispatch => {
    return {
        actionChoose: (amount) => dispatch({type: 'CHOOSE', amount}),
        actionDelete: () => dispatch({type: 'DELETE'}),
        actionEnterNumber: () => dispatch({type: 'ENTER'})
    };
};


export default connect(null, mapDispatchToProps)(Buttons);