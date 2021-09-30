import React from "react";
import { connect } from "react-redux";

import { removeItem } from "../../redux/cart/cart.actions";

import './checkout-item.scss'

const CheckoutItem = ({ cartItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="product" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>
                <span>&#10005;</span>
            </div>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)