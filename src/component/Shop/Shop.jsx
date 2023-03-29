import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../Shop/Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    function eventHandeler(product){
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>

            <div className='proudcts-container'>
                {
                    products.map(product => <Product
                        key = {product.id}
                        product = {product}
                        eventHandeler = {eventHandeler}
                    ></Product>)
                }
            </div>

            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};
import '../Shop/Shop.css'
export default Shop;