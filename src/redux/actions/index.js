// import { auth, createUserProfileDocument } from '../../firebase/Firebase';
import { ADD_ITEM_TO_CART, CART_DISPLAY_REDUCER, FETCH_USER } from './types';
//USERS
export const fetchUser = (user) => ({
  type: FETCH_USER,
  payload: user,
});
//CART
export const cartDisplay = () => {
  return { type: CART_DISPLAY_REDUCER };
};
export const addCartItem = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});
