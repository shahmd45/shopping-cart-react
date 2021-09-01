import React from 'react';

const ProductList = ({ product, dispatch }) => {
    const { name, image, price, id } = product

    return (
        <li className='product-list__item'>
            <div className='product__thumbnail'>
                <img src={image} alt={`Product-${id}`} />
                <div className='caption'>
                    <div className='product__caption'>
                        <h4>{name}</h4>
                    </div>
                    <div className='button__wrap'>
                        <p>$ {price}</p>
                        <button onClick={() => dispatch({ type: 'ADD ITEM', payload: product })}> Add to Cart</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductList
