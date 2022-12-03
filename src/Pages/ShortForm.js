import React, { useReducer } from 'react';

const ShortForm = () => {
    const initialState = 0
    const reducer = (state, action) => {
        if (action.type === 'INCIMENT') {
            return state + action.payload
        } else if (action.type === 'DECREMENT') {
            return state - action.payload
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='w-60 h-32 flex flex-col justify-center border border-indigo-500/75 mx-auto mt-52 content-center'>

            <h1 className='font-bold text-center text-indigo-500/75 mb-5'>{state}</h1>
            <div className='mx-auto'>
                <button onClick={() => dispatch({ type: 'INCIMENT', payload: 5 })} className='bg-indigo-500/75 text-white p-2 text-xs rounded-md'>Increment</button>
                <button onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })} className='ml-5 bg-indigo-500/75 text-white p-2 text-xs rounded-md'>Decrement</button>
            </div>
        </div>


    );
};

export default ShortForm;