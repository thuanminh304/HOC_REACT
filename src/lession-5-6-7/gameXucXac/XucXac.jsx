import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  render() {
    const { mangXucXac } = this.props;
    return (
      <div>
        {mangXucXac.map((xucXac, idx) => {
          return <img key={idx} src={xucXac.hinhAnh} width="40px" alt="" />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.xucXacGameReducer.mangXucXac,
  };
};
export default connect(mapStateToProps)(XucXac);
