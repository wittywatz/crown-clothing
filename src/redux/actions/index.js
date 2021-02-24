// import { auth, createUserProfileDocument } from '../../firebase/Firebase';
import { FETCH_USER } from './types';

export const fetchUser = (user) => ({
  type: FETCH_USER,
  payload: user,
});
