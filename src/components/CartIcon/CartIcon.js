import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Shoppingicon } from '../../assets/shopping-bag.svg';
import { cartDisplay } from '../../redux/actions';
import './CartIcon.scss';

const CartIcon = ({ cartDisplay }) => {
  return (
    <div className="cart-icon" onClick={cartDisplay}>
      <Shoppingicon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
export default connect(null, { cartDisplay })(CartIcon);
