import React, { useReducer } from 'react';
import { GlobalContext } from './GlobalContext';
import ProductData from '../Data/ProductData'

const initialState = {
    productCount: 0,
    ProductData: ProductData,
    cart: []
}

const addToCart = (state, product) => {
    const updateCart = [...state.cart];
    const updateItemIndex = updateCart.findIndex(item => item.id === product.id);
    if (updateItemIndex < 0) {
        updateCart.push({ ...product, quantity: 1 });
    } else {
        const updateItem = { ...updateCart[updateItemIndex] };
        updateItem.quantity++;
        updateCart[updateItemIndex] = updateItem;
    }
    return updateCart;
}

const removeItemFromCart = (state, productId) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity--;

    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem
    }

    return updatedCart;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD ITEM':
            const cart = addToCart(state, action.payload);
            return {
                ...state,
                cart
            }
        case 'REMOVE ITEM':
            const updatedCart = removeItemFromCart(state, action.payload)
            return {
                ...state,
                cart: updatedCart
            }
        case 'DELETE ITEM':
            const updateCart = state.cart.filter(item => item.id !== action.payload)
            return {
                ...state,
                cart: updateCart
            }
        default:
            return state;
    }
}

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {props.children}
        </GlobalContext.Provider>
    )
}