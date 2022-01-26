import React, { useReducer } from 'react';
const initialState = 0;
const reducer = (state, action) => {
    if (action.type == "INCREMENT") {
        return state + 1;
    }
    if (action.type == "DECRIMENT") {
        return state - 1;
    }
    return state;
}

function UseReduser() {
    // const [count, setCont] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState);
    return <>
        <div className='container'>
            <h2>{state}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECRIMENT' })}>Decriment</button>
        </div>

    </>;
}

export default UseReduser;
