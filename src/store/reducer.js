const initialState = {
    string: '1234',
    tries: '',
    result: {
        text: 'Type code',
        color: 'white'
    }
};


const reducer = (state = initialState, action) => {

    const success = {color: 'green', text: 'Access Granted'};
    const tryAgain = {color: 'red', text: 'Try again'};
    switch (action.type) {
        case 'CHOOSE':
            console.log('privet');
            if (state.tries.length < 4)
                return {...state, tries: state.tries + action.amount};
            else return state;
        case 'DELETE':
            return {...state, tries: state.tries.substring(0, state.tries.length - 1)};
        case 'ENTER':
            console.log(state);
            if (state.string === state.tries)
                return {...state, result: success};
            else return {...state, result: tryAgain};
        default:
            console.log(state);
            return state;
    }
};

export default reducer;
