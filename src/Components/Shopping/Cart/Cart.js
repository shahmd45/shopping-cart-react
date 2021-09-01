import React from 'react'
import CartItem from './CartItem'

const Cart = ({ cartList }) => {
    const totalPrice = cartList.reduce((count, item) => {
        return count + (item.quantity * item.price)
    }, 0)

    return (
        <div className='cart'>
            <div className='panel'>
                {cartList.length === 0 && (
                    <div className='empty__cart'>
                        <p> Cart is Empty </p>
                    </div>
                )}
                <CartItem />
                <div className='total__cart'>
                    <p><strong>Total: <span>${totalPrice}</span></strong></p>
                </div>
            </div>
        </div>
    )
}

export default Cart
