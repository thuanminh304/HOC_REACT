import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import ProductList from "./ProductList";
import productListJson from "./data.json";

export default class ShoesShop extends Component {
  state = {
    shoppingList: [],
  };

  addToShoppingList = (shoe) => {
    //copy ra mảng mới để xử lý
    const shoppingListUpdate = [...this.state.shoppingList];
    //bổ sung thuộc tính quantity
    const newShoe = {
      ...shoe,
      quantity: 1,
    };
    //kiểm tra sp đã tồn tại trong giỏ hàng chưa
    const index = shoppingListUpdate.findIndex((item) => item.id === shoe.id);

    if (index === -1) {
      //chưa tồn tại trong mảng
      shoppingListUpdate.push(newShoe);
    } else {
      //đã tồn tại rồi
      shoppingListUpdate[index].quantity += 1;
    }
    //

    shoppingListUpdate.push(newShoe);
    //câp nhật lại state
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };

  updateQuantity = (id, action) => {
    //action true tăng fasle giảm
    const shoppingListUpdate = [...this.state.shoppingList];
    //tìm vị trí phần tử cần nhập nhật số lượng
    const index = shoppingListUpdate.findIndex((item) => id);
    if (action) {
      shoppingListUpdate[index].quantity += 1;
    } else {
      if (shoppingListUpdate[index].quantity > 1) {
        shoppingListUpdate[index].quantity -= 1;
      }
    }
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };
  removeFromShoppingList = (id) => {
    const shoppingListUpdate = [...this.state.shoppingList];
    //tìm vị trí sp cần xóa
    const index = shoppingListUpdate.findIndex((item) => item.id === id);
    if (index !== -1) {
      shoppingListUpdate.splice(index, 1);
    }
    //cập nhật state
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };
  render() {
    const { shoppingList } = this.state;
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-7 text-right">
            <h2>Shoes Shop</h2>
          </div>
          <div className="col-5 text-right">
            <button
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#shoppinglist"
            >
              Shopping List ({shoppingList.length})
            </button>
          </div>
        </div>
        <ShoppingList
          shoppingList={shoppingList}
          updateQuantity={this.updateQuantity}
          removeFromShoppingList={this.removeFromShoppingList}
        />
        <ProductList
          productListJson={productListJson}
          addToShoppingList={this.addToShoppingList}
        />
      </div>
    );
  }
}
