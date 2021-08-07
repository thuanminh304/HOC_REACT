import React, { Component } from "react";
import './ExternalStyles.css'
import classes from './StylingWithModule.module.css'

export default class DemoStylingComponent extends Component {
  render() {
    // c1:  style là objec {}
    const styles = {
      color: "yellow",
      backgroundColor: "red",
      fontSize: "20px",
    };
    console.log(classes);
    return (
      <div>
        {/* c1: inline style */}
        <h1 style={styles}>Demo inline style</h1>

        {/* c2:external style (file riêng) */}
        <h1 className="heading">Demo external style</h1>

        {/* c3: style with module */}

        <h1 className={classes.redBackground}>Demo module style</h1>

      </div>
    );
  }
}
