import { createSelector } from 'reselect';

const userSelect = (state) => state.user;

export const currentUser = createSelector(
  [userSelect],
  (user) => user.currentUser
);
