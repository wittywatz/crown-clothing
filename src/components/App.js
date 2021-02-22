import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
