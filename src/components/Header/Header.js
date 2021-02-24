import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/Firebase';
import './Header.scss';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { currentUser } from '../../redux/reducers/user/userSelector';
import { hiddenCart } from '../../redux/reducers/cart/CartSelectors';
const Header = (props) => {
  // console.log(props.currentUser);
  const renderContent = () => {
    if (!props.currentUser) {
      // console.log('here');
      return (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      );
    }
    return (
      <div className="option" onClick={() => auth.signOut()}>
        SIGN OUT
      </div>
    );
  };
  const renderCartDisplay = () => {
    if (props.hidden) {
      return;
    }
    return <CartDropdown />;
  };
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {renderContent()}
        <CartIcon />
      </div>
      {renderCartDisplay()}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  // console.log(state.user);
  currentUser,
  hidden: hiddenCart,
});
//Create Structured Selector Can be used.
export default connect(mapStateToProps)(Header);
