import { FETCH_COLLECTIONS } from '../actions/types';
const INITIAL_STATE = {
  collections: null,
};
export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};
