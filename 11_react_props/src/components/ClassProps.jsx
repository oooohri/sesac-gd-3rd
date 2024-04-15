import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    /*  this.props : 객체
        {
            drink : "아메리카노",
            payment : "카드";
        }
    */
    return (
      <>
        <h1>클래스형 컴포넌트에서의 props 사용</h1>
        <div>
          주문하신 음료는 {this.props.drink}이고, 결제는 {this.props.payment}{" "}
          맞으실까요?
        </div>
        <div>결제는 {this.props.price}원 입니다.</div>
      </>
    );
  }

  // 클래스형 컴포넌트에서 props 관련 속성을 추가하는 방법 1
  // static 키워드 사용해 컴포넌트 선언 내부에서 작성 (렌더 메소드 안에만 안들어가면 된다.)
  // price props가 undefinde라면 기본값으로 8500 사용
  static defaultProps = {
    price: 8500,
  };

  static propsTypes = {};
}

// 클래스형 컴포넌트에서 props 관련 속성을 추가하는 방법 2
// 클래스 컴포넌트 선언 밖에서 점 접근법으로 props 속성을 지정
// drink, payment props는 string / price props는 number로 타입 제한
ClassProps.propTypes = {
  drink: PropTypes.string,
  payment: PropTypes.string.isRequired, // payment props는 필수값으로 지정
  price: PropTypes.number,
};
