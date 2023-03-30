import React from 'react';
import '../Cart/Cact.css'

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let itemQuantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        totalPrice = product.price + totalPrice
        totalShipping = product.shipping + totalShipping
        itemQuantity = product.quantity + itemQuantity;
        console.log(product)
    }

    const tax = totalPrice / 100 * 7;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='shop-cart'>
            <div className='card-container'>
                <div className='card-items'>
                    <h2 className='order'>Order Summary</h2>
                    <div>
                        <p className='card-item'>Selected Items: {itemQuantity}</p>
                        <p className='card-item'>Total Price: ${totalPrice}</p>
                        <p className='card-item'>Total Shipping Charge: ${totalShipping}</p>
                        <p className='card-item'>Tax: ${tax.toFixed(2)}</p>
                        <p className='grand-totla'>Grand Total: ${grandTotal.toFixed(2)}</p>
                    </div>
                    <button className='button-clear'>
                        Clear Cart
                        <span className='card-icon'><i className="fa-regular fa-trash-can"></i></span>
                    </button><br></br>
                    <button className='button-order'>
                        Review Order
                        <span className='card-icon'><i className="fa-sharp fa-solid fa-arrow-right"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;