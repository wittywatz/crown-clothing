import { createSelector } from 'reselect';
import _ from 'lodash';

const shopSelector = (state) => state.shop;

export const shopCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = _.memoize((collectionUrlParam) =>
  createSelector([shopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);
export const collectionsForPreview = createSelector(
  [shopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
