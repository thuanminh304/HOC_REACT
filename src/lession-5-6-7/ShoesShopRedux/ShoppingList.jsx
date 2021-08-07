import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actUpdateQuantity,
  actRemoveFromShoppingList,
} from "../../store/action/shoesShopAction";
class ShoppingList extends Component {
  render() {
    const { shoppingList, updateQuantity, removeFromShoppingList } = this.props;
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="shoppinglist"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Shopping List</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              {/* body */}
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
                      {shoppingList.map((shoe, idx) => {
                        const { id, name, image, price, quantity } = shoe;
                        return (
                          <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                              <img src={image} width="45px" alt="" />
                            </td>
                            <td>{price}$</td>
                            <td>
                              <button
                                className="btn btn-success"
                                onClick={() => {
                                  updateQuantity(id, true);
                                }}
                              >
                                +
                              </button>{" "}
                              {quantity}{" "}
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  updateQuantity(id, false);
                                }}
                              >
                                -
                              </button>
                            </td>
                            <td>{price * quantity}$</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  removeFromShoppingList(id);
                                }}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center my-4">không có gì ở đây</div>
                )}
                {shoppingList.length > 0 && (
                  <div className="text-right">
                    <span className="font-weight-bold"> Total Payment:</span>{" "}
                    <span>
                      {shoppingList.reduce((total, currentValue) => {
                        // tính tổng tiền thanh toán
                        return (total +=
                          currentValue.price * currentValue.quantity);
                      }, 0)}
                      $
                    </span>
                  </div>
                )}
              </div>
              {/* end body */}
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
    shoppingList: state.shoesShopReducer.shoppingList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //khởi tạo action gồm type và payload
    updateQuantity: (id, type) => {
      dispatch(actUpdateQuantity(id, type));
    },
    removeFromShoppingList: (id) => {
      dispatch(actRemoveFromShoppingList(id));
    },
  };
};
// connect(high order function): kết nối react component
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
