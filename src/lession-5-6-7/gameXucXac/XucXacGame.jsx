import React, { Component } from "react";
import ThongTinGame from "./ThongTinGame";
import XucXac from "./XucXac";
import "./StyleXXG.css";
import { connect } from "react-redux";
import { actChonTaiXiu, actDatCuoc } from "../../store/action/xucXacGameAction";

class XucXacGame extends Component {
  render() {
    const { taiXiu, chonTaiXiu, datCuoc } = this.props;
    return (
      <div className="game-container">
        <h1>GAME ĐỔ XÚC XẮC</h1>
        <div className="row">
          <div className="col-5">
            <button
              className={`btnTaiXiu ${taiXiu && "styleBtnTaiXiu"}`}
              onClick={() => {
                chonTaiXiu(true);
              }}
            >
              TÀI
            </button>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-center">
            <XucXac />
          </div>
          <div className="col-5">
            <button
              className={`btnTaiXiu ${!taiXiu && "styleBtnTaiXiu"}`}
              onClick={() => {
                chonTaiXiu(false);
              }}
            >
              XỈU
            </button>
          </div>
        </div>
        <ThongTinGame />
        <button
          className="mt-4 btn btn-success"
          onClick={() => {
            datCuoc();
          }}
        >
          ĐẶT CƯỢC
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  taiXiu: state.xucXacGameReducer.taiXiu,
});

const mapDispatchToProps = (dispatch) => ({
  chonTaiXiu: (taiXiu) => {
    dispatch(actChonTaiXiu(taiXiu));
  },
  datCuoc: () => {
    dispatch(actDatCuoc());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(XucXacGame);
