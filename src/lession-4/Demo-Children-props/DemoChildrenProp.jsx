import React, { Component } from "react";
import Button from "./Button";

export default class DemoChildrenProp extends Component {
  render() {
    return (
      <div>
        {/* truyền children props bằng cách truyền nội dung vào 2 thẻ đóng mở của component */}
        <Button>See more</Button>
        <Button>Sign up</Button>
        <Button>Sign in</Button>
        <Button>Add to cart</Button>
      </div>
    );
  }
}
