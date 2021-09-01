import React, { useContext } from 'react'
import ProductList from './ProductList'
import Cart from '../Cart/Cart'
import { GlobalContext } from '../../../Context/GlobalContext'

function Product() {
    const [state, dispatch] = useContext(GlobalContext);
    const totalCount = state.cart.reduce((count, item) => {
        return count + item.quantity
    }, 0)
    
    return (
        <div className='container Product'>
            <div className='row ProductListContainer'>
                <div className='col-sm-8 ProductList'>
                    <h4>Available Products</h4>
                    <ul className='product-list'>
                        {state.ProductData.map(product => {
                            return (
                                <ProductList
                                    key={product.id}
                                    product={product}
                                    dispatch={dispatch}
                                />
                            )
                        })}
                    </ul>
                </div>
                <div className='col-sm-4 Summary'>
                    <h4> Cart Items({totalCount}) </h4>
                    <Cart cartList={state.cart} />
                </div>
            </div>
        </div>
    )
}

export default Product
