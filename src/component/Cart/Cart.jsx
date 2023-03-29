import React from 'react';
import '../Cart/Cact.css'

const Cart = (props) => {
    return (
        <div>
            <div className='card-container'>
                <div className='card-items'>
                    <h2 className='order'>Order Summary</h2>
                    <div>
                        <p className='card-item'>Selected Items: {props.cart.length}</p>
                        <p className='card-item'>Total Price: $1140</p>
                        <p className='card-item'>Total Shipping Charge: $5</p>
                        <p className='card-item'>Tax: $114</p>
                        <p className='grand-totla'>Grand Total: $1559</p>
                    </div>
                    <button className='button-clear'>
                        Clear Cart
                        <span className='card-icon'><i class="fa-regular fa-trash-can"></i></span>
                    </button><br></br>
                    <button className='button-order'>
                        Review Order
                        <span className='card-icon'><i class="fa-sharp fa-solid fa-arrow-right"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;