import { FlareSharp } from '@material-ui/icons';
import React, {createContext, useReducer} from 'react';
export const Store = createContext();

function reducer(state, action){
    switch (action.type){
    default:
        return state;
    }
}

const initialState = {
    cart: { loading: true }, 
    order: null,
}

export function StoreProvider(props){
    const[state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch};
    return <Store.Provider value = { value }> {props.children} </Store.Provider>;
}