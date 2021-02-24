import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/Firebase';
import './Header.scss';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
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
const mapStateToProps = (state) => {
  // console.log(state.user);
  return {
    currentUser: state.user.currentUser,
    hidden: state.cartDisplay.hidden,
  };
};

export default connect(mapStateToProps)(Header);
