import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../firebase/Firebase';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import LoginRegisterPage from '../pages/LoginRegisterPage/LoginRegisterPage';
import ShopPage from '../pages/ShopPage/ShopPage';
import CheckoutPage from '../pages/Checkout/CheckoutPage';

import { fetchUser } from '../redux/actions';
import { currentUser } from '../redux/reducers/user/userSelector';

class App extends Component {
  // state = { currentUser: null };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // console.log(userRef);
        userRef.onSnapshot((snapshot) => {
          // console.log(snapshot.data());
          this.props.fetchUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        this.props.fetchUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" exact component={ShopPage} />
            <Route
              path="/signin"
              exact
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <LoginRegisterPage />
                )
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser,
});

export default connect(mapStateToProps, { fetchUser })(App);
