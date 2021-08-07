import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { shoesItem, addToShoppingList } = this.props;
    return (
      <div className="col-4" style={{ paddingBottom: "30px" }}>
        <div className="card">
          <img className="card-img-top" src={shoesItem.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{shoesItem.name}</h4>
            <p className="card-text">{shoesItem.price} $</p>
            <button
              className="btn btn-success "
              onClick={() => addToShoppingList(shoesItem)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
