import React from 'react';
import '../Product/Product.css'

const Product = (props) => {
    const { name, price, ratings, seller, img } = props.product
    return (
        <div className='main-container'>
            <div className='product-container'>
                <div className='product'>
                    <img src={img} alt="Product image" />
                    <div className='product-text'>
                        <h6 className='product-name'>{name}</h6>
                        <span className='product-price'>Price : {price}</span>
                        <div className='paragraph-tag'>
                            <p className='product-p'>Manufacturer : {seller}</p>
                            <p className='product-p'>Rating : {ratings}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='cart-button'>Add to Cart</button>
        </div>
    );
};

export default Product;