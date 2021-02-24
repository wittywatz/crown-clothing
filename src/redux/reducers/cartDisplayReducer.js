import {
  ADD_ITEM_TO_CART,
  CART_DISPLAY_REDUCER,
  DECREASE_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../actions/types';
import { addItemToCart, removeItemFromCart } from './cart/cartUtility';

const INITIAL_STATE = {
  hidden: true,
  addItem: [],
};

export const cartDisplayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_DISPLAY_REDUCER:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        addItem: addItemToCart(state.addItem, action.payload),
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        addItem: state.addItem.filter((item) => item.id !== action.payload.id),
      };
    case DECREASE_CART_ITEM:
      return {
        ...state,
        addItem: removeItemFromCart(state.addItem, action.payload),
      };
    default:
      return state;
  }
};
