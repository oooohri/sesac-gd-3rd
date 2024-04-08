import { Component } from "react";
export default class Classprac extends Component {
  state = {
    value: 0,
  };
  render() {
    let { value } = this.state;
    return (
      <>
        <h2> 클래스형 컴포넌트 실습 1 </h2>
        <button
          onClick={() => {
            this.setState({ value: value + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ value: value - 1 });
          }}
        >
          -1
        </button>
        <div>{value}</div>
      </>
    );
  }
}
