import React from 'react';
import {connect} from "react-redux";

function Screen(props) {
    const {result, tries} = props;
    let str = '';
      for (let i=0; i < tries.length; i++)
            str+='*';
    return <div className={"Screen " + result.color}>
              <h2>{result.text}</h2>
              <h2>{str}</h2>
    </div>
}

const mapStateToProps = state => {
    return {
        tries: state.tries,
        result: state.result
    }
};

export default connect(mapStateToProps)(Screen);