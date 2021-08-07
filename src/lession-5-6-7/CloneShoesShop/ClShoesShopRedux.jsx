import React, { Component } from "react";
import ClShoppingList from "./ClShoppingList";
import ClProductList from "./ClProductList";
import ClDataJson from "./data.json";
import { connect } from "react-redux";

class ClShoesShopRedux extends Component {
  
  
  render() {
    const { lengthSPL } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-7 text-right">
            <h2>SHOES SHOP</h2>
          </div>
          <div className="col-5 text-right">
            <button
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#modelId"
            >
              Shopping List ({lengthSPL})
            </button>
          </div>
        </div>
        <ClShoppingList
        />
        <ClProductList
          ClDataJson={ClDataJson}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lengthSPL: state.cloneShoesShopReducer.shoppingList.length,
  };
};

export default connect(mapStateToProps)(ClShoesShopRedux);
