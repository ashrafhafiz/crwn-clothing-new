import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// > myObject = {a:1, b:2, c:3}                       will return: {a: 1, b: 2, c: 3}
// > Object.keys(myObject)                            will return: (3) ["a", "b", "c"]
// > Object.keys(myObject).map(key=>myObject[key])    will return: (3) [1, 2, 3]
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionIdParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionIdParam]
  );
