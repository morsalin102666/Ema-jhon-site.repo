import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import '../Shop/Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    return (
        <div className='shop-container'>

            <div className='proudcts-container'>
                {
                    products.map(product => <Product
                        key = {product.id}
                        product = {product}
                    ></Product>)
                }
            </div>

            <div className='card-container'>
                <div className='card-items'>
                    <h2 className='order'>Order Summary</h2>
                    <div>
                        <p className='card-item'>Selected Items: 6</p>
                        <p className='card-item'>Total Price: $1140</p>
                        <p className='card-item'>Total Shipping Charge: $5</p>
                        <p className='card-item'>Tax: $114</p>
                        <p className='grand-totla'>Grand Total: $1559</p>
                    </div>
                    <button className='button-clear'>Clear Cart</button><br></br>
                    <button className='button-order'>Review Order</button>
                </div>
            </div>

        </div>
    );
};
import '../Shop/Shop.css'
export default Shop;