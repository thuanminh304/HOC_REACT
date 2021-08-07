import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ChildComponent extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };
  render() {
    const { name, age } = this.props;

    console.log(this.props.name, this.props.age);
    return (
      <div className="col-4" style={{ paddingBottom: "30px" }}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{age}</h4>
            <p className="card-text">{name}</p>
          </div>
        </div>
      </div>
    );
  }
}
