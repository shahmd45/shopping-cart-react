import React, { useContext } from 'react'
import { GlobalContext } from '../../../Context/GlobalContext'

function CartItem() {
    const [state, dispatch] = useContext(GlobalContext)

    return (
        <>
            {state.cart.length > 0 && state.cart.map(item => (
                <div className='cart__item' key={item.id}>
                    <div className='contents'>
                        <button
                            className='cancel__button'
                            onClick={() => dispatch({ type: 'DELETE ITEM', payload: item.id })}
                        >
                            X
                        </button>
                        <p className='content__title'>{item.name}</p>
                    </div>
                    <div className='content__quantity'>
                        <button
                            className='sub__button'
                            onClick={() => dispatch({ type: 'REMOVE ITEM', payload: item.id })}
                        >
                            -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                            className='add__button'
                            onClick={() => dispatch({ type: 'ADD ITEM', payload: item })}
                        >
                            +
                        </button>
                    </div>
                    <div className='price'>${item.quantity * item.price}</div>
                </div>
            ))}
        </>
    )
}

export default CartItem
