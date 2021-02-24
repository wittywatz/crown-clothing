import { createSelector } from 'reselect';
//Input Selector
const selectCart = (state) => state.cartDisplay;

export const selectCartItems = createSelector(
  [selectCart],
  (cartDisplay) => cartDisplay.addItem
);
export const hiddenCart = createSelector(
  [selectCart],
  (cartDisplay) => cartDisplay.hidden
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((accQuantity, item) => accQuantity + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce(
    (accQuantity, item) => accQuantity + item.quantity * item.price,
    0
  )
);
