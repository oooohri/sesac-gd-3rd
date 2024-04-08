import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ClassPrac extends Component {
  valid = () => {
    console.log("콘솔 띄우기 성공!");
  };

  render() {
    return (
      <>
        <h1>실습3</h1>
        <div>{this.props.text}</div>
        <button onClick={this.valid}>버튼</button>
      </>
    );
  }

  static defaultProps = {
    text: "이건 기본 text props 입니다.",
  };
}
ClassPrac.propTypes = {
  text: PropTypes.string.isRequired,
};
