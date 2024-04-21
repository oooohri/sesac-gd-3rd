import { Component } from "react";

export default class ClassState extends Component {
  // * 처음 클래스형 컴포넌트가 나왔을 때 state를 사용한 방법
  // constructor(props) {
  //   super(props); // Components 클래스에서 props를 상속

  //   this.state = {
  //     banana: "바나나",
  //   };
  // }

  // * 현재 클래스형 컴포넌트에서 state를 사용하는 방법
  // constructor 생성자 함수를 작성하는 대신 state만 바로 작성
  // constructor 생성자 함수를 작성하지 않으면 constructor(props) {super(props);}가 자동으로 실행됨
  state = {
    banana: "바나나", // banana라는 state를 선언. 해당 state의 값으로 "바나나"를 저장
  };
  render() {
    const { banana } = this.state;
    // this.state에 있는 값인 banana를 추출해서 새로운 상수값을 만든다.
    // 구조 분해 할당 사용할때, 객체안에 실제로 존재하는 이름을 사용해야 한다.
    return (
      <>
        <h2>클래스형 컴포넌트에서 state 사용하기</h2>
        <button onClick={() => this.setState({ banana: "banana" })}>
          영어로 변경
        </button>
        <div>{banana}</div>
      </>
    );
  }
}
