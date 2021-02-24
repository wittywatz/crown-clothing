// import { auth, createUserProfileDocument } from '../../firebase/Firebase';
import {
  ADD_ITEM_TO_CART,
  CART_DISPLAY_REDUCER,
  DECREASE_CART_ITEM,
  FETCH_USER,
  REMOVE_CART_ITEM,
} from './types';
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
export const removeCartItem = (item) => ({
  type: REMOVE_CART_ITEM,
  payload: item,
});
export const DecreaseItem = (item) => ({
  type: DECREASE_CART_ITEM,
  payload: item,
});
