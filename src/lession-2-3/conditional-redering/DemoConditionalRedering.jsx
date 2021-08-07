import React, { Component } from "react";

export default class DemoConditionalRedering extends Component {
  loggedIn = true;
  username = "thuận";

  checkLogin = () => {
    if (this.loggedIn) {
      return <h1>Welcome {this.username} to this web</h1>;
    }
    return <button className="btn btn-danger">Login</button>;
  };

  render() {
    return (
      <div>
        {this.checkLogin()}

        {/* cách 2 dùng điều kiện if else trong class react */}
        {this.loggedIn ? (
          <h1>Welcome {this.username} to this web</h1>
        ) : (
          <button className="btn btn-danger">Login</button>
        )}

        {/*  cách 3 dùng && để check tất cả đều đúng */}
        {this.loggedIn && <h1>Welcome {this.username} to this web</h1>}
        {!this.loggedIn && <button className="btn btn-danger">Login</button>}
      </div>
    );
  }
}
