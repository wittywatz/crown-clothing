import { createSelector } from 'reselect';
import _ from 'lodash';

const shopSelector = (state) => state.shop;

export const shopCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = _.memoize((collectionUrlParam) =>
  createSelector(
    [shopCollections],
    (collections) => collections[collectionUrlParam]
  )
);
export const collectionsForPreview = createSelector(
  [shopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
