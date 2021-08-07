//import khởi tạo store redux
import { createStore, combineReducers } from "redux";
import shoesShopReducer from "./reducers/ShoesShopReducers";
import xucXacGameReducer from "./reducers/xucXacGameReducer";
import gameOanTuTiReducer from "./reducers/gameOanTuTiReducer";
//khởi tạo root reducer(quản lý các reducers con)
const rootReducer = combineReducers({
  xucXacGameReducer,
  shoesShopReducer,
  gameOanTuTiReducer,
});

// khởi tạo store(quản lý root reducer)
const store = createStore(
  rootReducer,
  //setup redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
