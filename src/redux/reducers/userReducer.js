import { FETCH_USER } from '../actions/types';

const INITIAL_STATE = {
  currentUser: null,
};

const currentUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
export default currentUser;
