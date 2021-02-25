import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/reducers/cart/CartSelectors';
import './Checkout.scss';

const CheckoutPage = ({ items, total }) => {
  const renderContent = () => {
    // console.log(items);
    if (!items.length) {
      return (
        <span className="checkout-empty">
          Your cart is empty, add some items
        </span>
      );
    }
    return items.map((item) => <CheckoutItem key={item.id} item={item} />);
  };
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {renderContent()}
      <div className="total">
        {items.length ? <span>Total: ${total}</span> : ''}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
