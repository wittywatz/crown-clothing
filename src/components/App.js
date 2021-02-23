import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { auth } from '../firebase/Firebase';

import HomePage from '../pages/HomePage/HomePage';
import LoginRegisterPage from '../pages/LoginRegisterPage/LoginRegisterPage';
import ShopPage from '../pages/ShopPage/ShopPage';

import './App.css';
import Header from './Header/Header';

class App extends Component {
  state = { currentUser: null };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" exact component={ShopPage} />
            <Route path="/signin" exact component={LoginRegisterPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
