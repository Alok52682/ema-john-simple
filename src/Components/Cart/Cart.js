import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import './Cart.css'


const Cart = (props) => {
    const { cart, setUpdate } = props;

    let total = 0;
    let shippingPrice = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shippingPrice = shippingPrice + product.shipping;

    }

    const handelClear = () => {
        deleteShoppingCart()
        setUpdate(true);
    }


    const tax = total * 0.1;
    const grandTotal = total + shippingPrice + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Item : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shippingPrice}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h3>Grand Total : ${grandTotal}</h3>
            <button onClick={() => handelClear()} className='btn-clear'>
                <p>Add to cart  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></p>
            </button>
        </div>

    );
};

export default Cart;