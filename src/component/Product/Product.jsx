import React from 'react';
import '../Product/Product.css'

const Product = (props) => {
    const { name, price, ratings, seller, img } = props.product;
    const eventHandeler = props.eventHandeler

    let productName;
    if (name.length === 17) {
        productName = name;
    }
    else {
        const names = name.slice(0, 17);
        productName = names;
    }

    return (
        <div className='main-container'>
            <div className='product-container'>
                <div className='product'>
                    <img src={img} alt="Product image" />
                    <div className='product-text'>
                        <h6 className='product-name'>{productName}</h6>
                        <span className='product-price'>Price : {price}</span>
                        <div className='paragraph-tag'>
                            <p className='product-p'>Manufacturer : {seller}</p>
                            <p className='product-p'>Rating : {ratings}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => eventHandeler(props.product)} className='cart-button'>
                Add to Cart
                <span className='card-icon'><i className="fa-sharp fa-solid fa-baby-carriage"></i></span>
            </button>
        </div>
    );
};

export default Product;