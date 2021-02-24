import { combineReducers } from 'redux';
import { cartDisplayReducer } from './cartDisplayReducer';
import currentUser from './userReducer';

export default combineReducers({
  user: currentUser,
  cartDisplay: cartDisplayReducer,
});
