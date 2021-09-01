import React, { useContext } from 'react';
import { GlobalContext } from '../Context/Context'

function Counter() {
    const [state, dispatch] = useContext(GlobalContext)
    return (
        <div>
            <h2>Count={state.count}</h2>
            <button onClick={() => dispatch({type: 'INCREMENT', payload: 1}) }>INCREMENT</button>
            <button onClick={() => dispatch({type: 'DECREMENT', payload: 1}) }>DECREMENT</button>
            <button onClick={() => dispatch({type: 'RESET'}) }>RESET</button>
        </div>
    )
}

export default Counter
