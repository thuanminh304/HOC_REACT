import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinGame extends Component {
  render() {
    const { taiXiu, soBanThang, tongSoBanChoi } = this.props;
    return (
      <div className="mt-5">
        <h1>
          BẠN CHỌN:{" "}
          <span className="text-danger">{taiXiu ? "TÀI" : "XỈU"}</span>
        </h1>
        <h1>
          Số bàn thắng: <span className="text-success">{soBanThang}</span>
        </h1>
        <h1>
          Tổng số bàn chơi:{" "}
          <span className="text-primary">{tongSoBanChoi}</span>
        </h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taiXiu: state.xucXacGameReducer.taiXiu,
    soBanThang: state.xucXacGameReducer.soBanThang,
    tongSoBanChoi: state.xucXacGameReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps)(ThongTinGame);
