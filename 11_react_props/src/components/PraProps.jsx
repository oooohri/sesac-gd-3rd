import React, { Component } from "react";
import PropsTypes from "prop-types";

export default class PraProps extends Component {
  render() {
    console.log(this.props.food);
    return (
      <>
        <h1>실습 1</h1>
        <div>
          제가 좋아하는 음식은
          <div style={{ color: "red" }}>{this.props.food}</div>
          입니다.
        </div>
      </>
    );
  }
  static defaultProps = {
    food: "닭갈비",
  };
}
