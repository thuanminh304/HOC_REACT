import React, { Component } from "react";
import { connect } from "react-redux";
import {actAddToShoppingList} from "../../store/action/cloneShoesShopAction"


class ClProductItem extends Component {
  render() {
    const { shoesItem, addToShoppingList } = this.props;
    return (
      <div className="text-center col-4 ">
        <img src={shoesItem.image} width="200px" alt="abc" />
        <h2>{shoesItem.name}</h2>
        <p>{shoesItem.price}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            addToShoppingList(shoesItem);
          }}
        >
          Add to cart
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToShoppingList: (shoesItem) => {
      dispatch(actAddToShoppingList(shoesItem));
    },
  };
};
export default connect(null, mapDispatchToProps)(ClProductItem);
