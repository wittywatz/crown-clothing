import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/Firebase';
import './Header.scss';
const Header = (props) => {
  // console.log(props.currentUser);
  const renderContent = () => {
    if (!props.currentUser) {
      console.log('here');
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
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.user);
  return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps)(Header);
