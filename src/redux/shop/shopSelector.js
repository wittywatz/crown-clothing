import { createSelector } from 'reselect';
import _ from 'lodash';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const shopSelector = (state) => state.shop;

export const shopCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = _.memoize((collectionUrlParam) =>
  createSelector([shopCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
