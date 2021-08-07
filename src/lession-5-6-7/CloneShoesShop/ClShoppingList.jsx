import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actUpdateQuantity,
  actRemoveSP,
} from "../../store/action/cloneShoesShopAction";
class ClShoppingList extends Component {
  render() {
    const { shoppingList, updateQuantity, removeSP } = this.props;
    return (
      <div className="container">
        {/* Modal */}
        <div
          className="modal fade "
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {shoppingList.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shoppingList.map((shoe, index) => {
                        const { id, name, image, price, quantity } = shoe;
                        return (
                          <tr key={index}>
                            <th>{id}</th>
                            <th>{name}</th>
                            <th>
                              <img src={image} width="60px" alt="" />
                            </th>
                            <th>{price}</th>
                            <th>
                              <button
                                className="btn btn-success"
                                onClick={() => {
                                  updateQuantity(id, true);
                                }}
                              >
                                +
                              </button>
                              {quantity}
                              <button
                                className="btn btn-danger "
                                onClick={() => {
                                  updateQuantity(id, false);
                                }}
                              >
                                -
                              </button>
                            </th>
                            <th>{price * quantity}</th>
                            <th>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  removeSP(id);
                                }}
                              >
                                REMOVE
                              </button>
                            </th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <div>Không có gì</div>
                )}
                {/* khi k có sp nào thì k hiện total price */}
                {shoppingList.length > 0 && (
                  <div className="text-right">
                    <span>Total Price:</span>{" "}
                    <span>
                      {shoppingList.reduce((total, currentValue) => {
                        return (total +=
                          currentValue.price * currentValue.quantity);
                      }, 0)}
                      $
                    </span>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-danger">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// kết nối dữ liệu từ store chuyển thành props của component
const mapStateToProps = (state) => {
  return {
    shoppingList: state.cloneShoesShopReducer.shoppingList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuantity: (id, type) => {
      dispatch(actUpdateQuantity(id, type));
    },
    removeSP: (id) => {
      dispatch(actRemoveSP(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClShoppingList);
