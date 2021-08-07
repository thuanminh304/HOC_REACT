import {
  ADD_TO_SHOPPING_LIST,
  UPDATE_QUANTITY,
  REMOVE_SP,
} from "../constants/cloneShoesShopConst";

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
export const actRemoveSP = (id) => {
  return {
    type: REMOVE_SP,
    payload: { id },
  };
};
