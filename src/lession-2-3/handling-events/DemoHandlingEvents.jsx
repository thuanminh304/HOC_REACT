import React, { Component } from "react";

export default class DemoHandlingEvents extends Component {
  //hàm k tham số
  greeting = () => {
    alert("Welcome to my channel");
  };
  //hàm có tham số
  subcribes = (name) => {
    alert(`Thank you ${name} for subcribing !`);
  };

  render() {
    return (
      <div>
        <button onClick={this.greeting} className="btn btn-info mb-3">
          Click me
        </button>
        <br />
        <button
          onClick={() => this.subcribes("Thuận")}
          className="btn btn-success"
        >
          Subcribes
        </button>
      </div>
    );
  }
}
