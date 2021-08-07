import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  fullName = "Van Minh Thuan";
  birthYear = 1996;
  renderStudent = () => {
    const student = {
      fullName: "Dieu Hien",
      age: 18,
      className: "BC12",
    };
    const { fullName, age, className } = student;

    return (
        <div>
            <p>Name:{fullName}</p>
            <p>Age:{age}</p>
            <p>ClassName:{className}</p>
        </div>
    )
  };
  render() {
    return (
      <div>
        <p>
          This is {this.fullName}, {2021 - this.birthYear} years old
        </p>
        {this.renderStudent()}
      </div>
    );
  }
}
