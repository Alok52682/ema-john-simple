import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, price, ratings, seller, id } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings}</small></p>
            </div>
            <button onClick={() => props.handel(props.product)} className='btn-cart'>
                <p>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>
        </div>
    );
};

export default Product;