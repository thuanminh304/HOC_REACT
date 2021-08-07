import {ADD_TO_SHOPPING_LIST,UPDATE_QUANTITY,REMOVE_FROM_SHOPPING_LIST} from "../constants/shoesShopConst"

const inittialState = {
  shoppingList: [],
};

const shoesShopReducer = (state = inittialState, action) => {
  // if(action.type === "ADD_TO_SHOPPING_LIST"){
  //   console.log(action.type);
  // }
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_SHOPPING_LIST: {
      // copy ra mảng mới để xử lý
      const shoppingListUpdate = [...state.shoppingList];
      //bổ sung thuộc tính quantity
      const newShoe = {
        ...payload,
        quantity: 1,
      };
      //kiểm tra sp đã tồn tại trong giỏ hàng chưa
      const index = shoppingListUpdate.findIndex(
        (item) => item.id === payload.id
      );

      if (index === -1) {
        //chưa tồn tại trong mảng
        shoppingListUpdate.push(newShoe);
      } else {
        //đã tồn tại rồi
        shoppingListUpdate[index].quantity += 1;
      }
      //

      // trả về state mới

      return { ...state, shoppingList: shoppingListUpdate };
    }
    case UPDATE_QUANTITY: {
      const { id, type } = payload;
      //action true tăng fasle giảm
      const shoppingListUpdate = [...state.shoppingList];
      //tìm vị trí phần tử cần nhập nhật số lượng
      const index = shoppingListUpdate.findIndex((item) => item.id === id);
      if (type) {
        shoppingListUpdate[index].quantity += 1;
      } else {
        if (shoppingListUpdate[index].quantity > 1) {
          shoppingListUpdate[index].quantity -= 1;
        }
      }
      // trả về state mới
      return { ...state, shoppingList: shoppingListUpdate };
    }
    case REMOVE_FROM_SHOPPING_LIST: {
      const { id } = payload;
      const shoppingListUpdate = [...state.shoppingList];
      //tìm vị trí sp cần xóa
      const index = shoppingListUpdate.findIndex((item) => item.id === id);
      if (index !== -1) {
        shoppingListUpdate.splice(index, 1);
      }
      //trả về state mới

      return { ...state, shoppingList: shoppingListUpdate };
    }
    default:
      return state;
  }
};
export default shoesShopReducer;
