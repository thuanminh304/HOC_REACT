import React, { Component } from "react";
import ClProductItem from "./ClProductItem";

export default class ClProductList extends Component {
  render() {
    const { ClDataJson,addToShoppingList } = this.props;
    return (
      <div className="container ">
        <div className="row ">
          {ClDataJson.map((shoesItem, index) => {
            return <ClProductItem shoesItem={shoesItem} key={index}
            addToShoppingList={addToShoppingList}/>;
          })}
        </div>
      </div>
    );
  }
}
