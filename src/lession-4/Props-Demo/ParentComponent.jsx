import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  render() {
    //   component con nhận props thông qua object props vs con trỏ this
    return (
      <div className="container">
        parent
        {/* 
        -props: có thể hiểu như là thuộc tính của elements{component
        - Được truyền thì component cha{parent} sang component con{child}
        -có dạng key=value} */}
        <div className="row">
          <ChildComponent name="Thuan" age={5} />
          <ChildComponent name="HIen" age={6} />
          <ChildComponent name="Thuan" age={5} />
          <ChildComponent name="HIen" age={6} />
          <ChildComponent name="Thuan" age={5} />
          <ChildComponent name="HIen" age={6} />
        </div>
      </div>
    );
  }
}
