import React from "react";
import { useDispatch } from "react-redux";

import { clearItem, addItem, removeItem } from "../../redux/cart/cart.actions";

import './checkout-item.scss'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const clearItemClickHandler = (item) => dispatch(clearItem(item));
    const addItemClickHandler = (item) => dispatch(addItem(item));
    const removeItemClickHandler = (item) => dispatch(removeItem(item));

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="product" />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <button className="arrow" onClick={removeItemClickHandler(cartItem)}>&#10094;</button>
                <span className="value">{quantity}</span>
                <button className="arrow" onClick={addItemClickHandler(cartItem)}>&#10095;</button>
            </div>
            <span className="price">${price}</span>
            <button className="remove-button" onClick={clearItemClickHandler(cartItem)}>
                <span>&#10005;</span>
            </button>
        </div>
    )
};


export default CheckoutItem;