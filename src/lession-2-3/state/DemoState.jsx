import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    loggedIn: false,
  };
  

  login = () => {
    //k thể cập nhật trực tiếp state như bên dưới => k hoạt động
    // this.state.loggedIn = true;
    // dùng setState để update state và gọi lại hàm render()
    // setState() là hàm bất đồng bộ
    this.setState(
      {
        loggedIn: true,
      },
      () => {
        console.log(this.state.loggedIn);
      }
    );
  };

  render() {
    return (
      <div className="text-center">
        {this.state.loggedIn ? (
          <h1>Welcome</h1>
        ) : (
          <button className="btn btn-success onClick={this.login}">
            Login
          </button>
        )}
      </div>
    );
  }
}
