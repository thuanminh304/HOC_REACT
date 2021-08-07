import React, { Component } from "react";

export default class Button extends Component {
  render() {
    //   nhận nội dung giữa 2 thẻ đóng mở của componetn bằng this.props.children === giống như innerHTML
    return <button className="btn btn-success">{this.props.children}</button>;
  }
}
