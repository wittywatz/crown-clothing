import { ADD_ITEM_TO_CART, CART_DISPLAY_REDUCER } from '../actions/types';
import { addItemToCart } from './cart/cartUtility';

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
    default:
      return state;
  }
};
