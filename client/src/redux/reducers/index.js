import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from '../directory/directoryReducer';
import { shopReducer } from '../shop/shopReducer';
import { cartDisplayReducer } from './cartDisplayReducer';
import currentUser from './userReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartDisplay'],
};
const rootReducer = combineReducers({
  user: currentUser,
  cartDisplay: cartDisplayReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
export default persistReducer(persistConfig, rootReducer);

//You need to whitelist what you intend to remain on display even after session refresh
