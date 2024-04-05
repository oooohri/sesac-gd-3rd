import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PraProps2 extends Component {
  render() {
    return (
      <>
        <h1>실습 2</h1>
        <div class="intro">이번주 베스트셀러</div>
        <div class="pic">사진</div>
        <div class="title">{this.props.title} </div>
        <div class="author">{this.props.author} </div>
        <div class="price">{this.props.price} </div>
        <div class="type">{this.props.type} </div>
      </>
    );
  }
}
PraProps2.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
};
