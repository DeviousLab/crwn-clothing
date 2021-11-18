import React from "react";
import { connect } from "react-redux";

import { clearItem, addItem, removeItem } from "../../redux/cart/cart.actions";

import './checkout-item.scss'

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="product" />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <button className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</button>
                <span className="value">{quantity}</span>
                <button className="arrow" onClick={() => addItem(cartItem)}>&#10095;</button>
            </div>
            <span className="price">${price}</span>
            <button className="remove-button" onClick={() => clearItem(cartItem)}>
                <span>&#10005;</span>
            </button>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)