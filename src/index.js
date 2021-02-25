import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import reducers from './redux/reducers';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //For redux dev tools'
const middlewares = [thunk, logger];
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
