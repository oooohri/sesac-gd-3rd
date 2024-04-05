import React, { Component } from "react";
import PropsTypes from "prop-types";

export default class PraProps extends Component {
  render() {
    console.log(this.props.food);
    return (
      <>
        <h1>실습 1</h1>
        <div style={{ color: "red" }}>
          제가 좋아하는 음식은 {this.props.food} 입니다.
        </div>
      </>
    );
  }
  static defaultProps = {
    food: "닭갈비",
  };
}
