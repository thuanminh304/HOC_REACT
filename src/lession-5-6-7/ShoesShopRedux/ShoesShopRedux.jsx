import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import ProductList from "./ProductList";
import productListJson from "./data.json";
import { connect } from "react-redux";

class ShoesShopRedux extends Component {
  render() {
    const { lengthSPL } = this.props;
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
              Shopping List({lengthSPL})
            </button>
          </div>
        </div>
        <ShoppingList />
        <ProductList productListJson={productListJson} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lengthSPL: state.shoesShopReducer.shoppingList.length,
  };
};

export default connect(mapStateToProps)(ShoesShopRedux);
