import React from 'react';
import { connect } from 'react-redux';
import { addCartItem, DecreaseItem, removeCartItem } from '../../redux/actions';
import './CheckoutItem.scss';
const CheckoutItem = ({ item, removeCartItem, addCartItem, DecreaseItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => DecreaseItem(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addCartItem(item)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span onClick={() => removeCartItem(item)} className="remove-button">
        &#10006;
      </span>
    </div>
  );
};

export default connect(null, { removeCartItem, addCartItem, DecreaseItem })(
  CheckoutItem
);
