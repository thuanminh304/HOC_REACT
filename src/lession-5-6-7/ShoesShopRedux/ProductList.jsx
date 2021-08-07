import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    
    const { productListJson } = this.props;
    return (
      <div className="row">
        {productListJson.map((shoesItem, index) => {
          return (
            <ProductItem
              key={index}
              shoesItem={shoesItem}
            />
          );
        })}
      </div>
    );
  }
}
