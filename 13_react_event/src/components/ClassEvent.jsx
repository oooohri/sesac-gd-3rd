import { Component } from "react";

export default class ClassEvent extends Component {
  constructor(props) {
    super(props);
    // handleClick 이라는 함수의 this를 함수 자체의 this가 아닌
    // 클래스 자체를 의미하는 this로 바인딩(묶어줌)
    // handleClick함수를 this에 영구적으로 바인딩하여 어디서 호출하든지 간에 항상 올바른 this를 참조하도록 한다.
    // 이렇게 바인딩된 함수를 이벤트 핸들러로 안전하게 사용가능!
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    msg: "여러분의 웃는 얼굴이 보고싶어요",
  };

  // 함수 선언문을 사용해 메서드를 정의
  // 함수 내부의 this는 클래스의 this와 다른 자체적인 this가 됨
  // -> 생성자 함수 내부에서 this를 원하는 것으로 바인딩했음
  handleClick() {
    this.setState({ msg: "웃어주세요!" });
  }

  render() {
    return (
      <>
        <h2>클래스형 컴포넌트에서 이벤트</h2>
        <div>{this.state.msg}</div>
        <button onClick={this.handleClick}>변경!</button>
        <input
          type="text"
          onChange={(e) => {
            console.log(e);
            console.log(e.target.value);
          }}
        />
      </>
    );
  }
}
