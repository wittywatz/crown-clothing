import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import { selectCartItems } from '../../redux/reducers/cart/CartSelectors';
import { withRouter } from 'react-router-dom';
import { cartDisplay } from '../../redux/actions';
const CartDropdown = ({ item, history, cartDisplay }) => {
  const renderContent = () => {
    if (!item.length) {
      return <span className="empty-message">Your cart is empty</span>;
    }
    return item.map((item) => {
      return <CartItem key={item.id} item={item} />;
    });
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderContent()}</div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          cartDisplay();
        }}
      >
        Go to Checkout
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  item: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { cartDisplay })(CartDropdown)
);
