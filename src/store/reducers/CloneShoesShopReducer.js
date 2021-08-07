import {
  ADD_TO_SHOPPING_LIST,
  UPDATE_QUANTITY,
  REMOVE_SP,
} from "../constants/cloneShoesShopConst";

const inittialState = {
  shoppingList: [],
};

const cloneShoesShopReducer = (state = inittialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_SHOPPING_LIST: {
      //copy mảng mới
      const shoppingListUpdate = [...state.shoppingList];
      const newShoe = {
        ...payload,
        quantity: 1,
      };
      //kiểm tra sp trùng
      const index = shoppingListUpdate.findIndex(
        (item) => item.id === payload.id
      );
      if (index === -1) {
        shoppingListUpdate.push(newShoe);
      } else {
        //đã tồn tại
        shoppingListUpdate[index].quantity += 1;
      }
      //cập nhật lại state;
      return { ...state, shoppingList: shoppingListUpdate };
    }
    case UPDATE_QUANTITY: {
      const {id,type}=payload
      const shoppingListUpdate = [...state.shoppingList];
      const index = shoppingListUpdate.findIndex((item) => {
        return item.id === id;
      });
      if (type) {
        shoppingListUpdate[index].quantity += 1;
      } else {
        if (shoppingListUpdate[index].quantity > 1) {
          shoppingListUpdate[index].quantity -= 1;
        }
      }

      //cập nhật lại state
      return { ...state, shoppingList: shoppingListUpdate };
    }
    case REMOVE_SP: {
      const shoppingListUpdate = [...state.shoppingList];
      const index = shoppingListUpdate.findIndex((item) => {
        return item.id === payload.id;
      });
      if (index !== -1) {
        shoppingListUpdate.splice(index, 1);
      }

      //cập nhật state
      return { ...state, shoppingList: shoppingListUpdate };
    }
    default:
      return state;
  }
};

export default cloneShoesShopReducer;
