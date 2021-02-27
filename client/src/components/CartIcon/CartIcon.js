import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Shoppingicon } from '../../assets/shopping-bag.svg';
import { cartDisplay } from '../../redux/actions';
import { selectCartItemsCount } from '../../redux/reducers/cart/CartSelectors';
import './CartIcon.scss';

const CartIcon = ({ cartDisplay, quantity }) => {
  return (
    <div className="cart-icon" onClick={cartDisplay}>
      <Shoppingicon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemsCount,
});

export default connect(mapStateToProps, { cartDisplay })(CartIcon);
