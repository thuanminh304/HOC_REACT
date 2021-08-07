import {ADD_TO_SHOPPING_LIST,UPDATE_QUANTITY,REMOVE_FROM_SHOPPING_LIST} from "../constants/shoesShopConst"
// import * from "../constants/shoesShopConst"


export const actAddToShoppingList = (shoesItem) => {
  return {
    type: ADD_TO_SHOPPING_LIST,
    payload: shoesItem,
  };
};

export const actUpdateQuantity = (id, type) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, type },
  };
};

export const actRemoveFromShoppingList = (id) => {
  return {
    type: REMOVE_FROM_SHOPPING_LIST,
    payload: { id },
  };
};
