import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actiontypes } from '../state/productStates/productActionTypes';
import { initialState, productReducer } from '../state/productStates/productReducer';

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState)
    console.log(state);
    useEffect(() => {
        dispatch({ type: actiontypes.FETCHING_START })
        fetch('data.json')
            .then(res => res.json())
            .then((data) =>
                dispatch({ type: actiontypes.FETCHING_SUCCESS, payload: data })
            )
            .catch(() => dispatch({ type: actiontypes.FETCHING_ERROR }))
    }, [])
    const value = {
        state, dispatch
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};
export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context
}
export default ProductProvider;