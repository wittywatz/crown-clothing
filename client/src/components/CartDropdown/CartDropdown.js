import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import { selectCartItems } from '../../redux/reducers/cart/CartSelectors';
import { withRouter } from 'react-router-dom';
import { cartDisplay } from '../../redux/actions';
import { currentUser } from '../../redux/reducers/user/userSelector';
const CartDropdown = ({ currentUser, item, history, cartDisplay }) => {
  const handleClick = () => {
    if (!currentUser) {
      return history.push('/signin');
    }
    history.push('/checkout');
    cartDisplay();
  };

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
      <CustomButton onClick={handleClick}>Go to Checkout</CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  item: selectCartItems,
  currentUser,
});

export default withRouter(
  connect(mapStateToProps, { cartDisplay })(CartDropdown)
);
