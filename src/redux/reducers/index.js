import { combineReducers } from 'redux';
import currentUser from './userReducer';

export default combineReducers({
  user: currentUser,
});
