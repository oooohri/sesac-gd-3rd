import FunProps from "./components/FunProps";
import ClassProps from "./components/ClassProps";
import PraProps from "./components/PraProps";
import FunPrac from "./components/FunPrac";
import ClassPrac from "./components/ClassPrac";
import "../src/App.css";
// ----------------------------------------------------------
import ProductItem from "./components/ProductItem";
import ProductContainer from "./components/ProductContainer";
function App() {
  const sayHi = () => {
    alert("안냥");
  };
  const products = [
    {
      id: 1,
      name: "노트북",
      price: 1000000,
      image: "./img/laptop.jpg",
      description: "고성능 노트북입니다.",
    },
    {
      id: 2,
      name: "스마트폰",
      price: 800000,
      image: "./img/smartphone.jpg",
      description: "최신 스마트폰입니다.",
    },
    {
      id: 3,
      name: "유선키보드",
      price: 20000,
      image: "./img/keyboard.jpg",
      description: "유선 키보드입니다.",
    },
    {
      id: 4,
      name: "블루투스 키보드",
      price: 30000,
      image: "./img/bluetooth-keyboard.jpg",
      description: "사용이 편리한 무선 키보드입니다.",
    },
    {
      id: 5,
      name: "기계식 키보드",
      price: 180000,
      image: "./img/mechanical-keyboard.jpg",
      description: "소리가 매력적인 기계식 키보드입니다.",
    },
    {
      id: 6,
      name: "마우스",
      price: 50000,
      image: "./img/mouse.jpg",
      description: "편리한 이용이 가능한 마우스입니다.",
    },
    {
      id: 7,
      name: "게이밍 마우스",
      price: 80000,
      image: "./img/gaming-mouse.jpg",
      description: "게이밍용 마우스입니다.",
    },
    {
      id: 8,
      name: "32인치 모니터",
      price: 300000,
      image: "./img/monitor-32.jpg",
      description: "32인치의 모니터입니다.",
    },
    {
      id: 9,
      name: "20인치 모니터",
      price: 180000,
      image: "./img/monitor-20.jpg",
      description: "20인치의 키보드입니다.",
    },
  ];

  return (
    <div className="App">
      {/* ------------------------- 함수형 컴포넌트 ------------------------- */}
      {/* <FunProps weather="sunny" feeling="happy" /> */}

      {/* defaultProps 사용 */}
      {/* <FunProps /> */}

      {/* PropTypes 사용 */}
      {/* props로 전달하는 값이 문자열인 경우에는 ""(따옴표)로 감싸 전달 */}
      {/* 이외의 데이터타입은 {}(중괄호)로 감싸 전달 */}
      {/* <FunProps weather={true} feeling="exciting" /> */}

      {/* 문자열 전달 */}
      {/* props.children */}
      {/* <FunProps name="장원영">예쁘다</FunProps> */}
      {/* 함수 전달 */}
      {/* <FunProps>{sayHi}</FunProps> */}
      {/* 요소 전달 */}
      {/* <FunProps>
        <div>안녕안녕</div>
        <div>자니?</div>
      </FunProps> */}

      {/* ------------------------- 클래스형 컴포넌트 ------------------------- */}
      {/* class 컴포넌트에서의 props사용 */}
      {/* <ClassProps drink="아메리카노" payment="카드" price={4000} /> */}

      {/* default props 사용 */}
      {/* <ClassProps drink="아인슈페너" payment="현금" /> */}

      {/* propTypes 사용 */}
      {/* <ClassProps drink={15000} payment="현금"></ClassProps> */}

      {/* isRequired 사용 */}
      {/* <ClassProps drink="레몬에이드"></ClassProps> */}

      {/* 실습1 - 좋아하는 음식 */}
      {/* <PraProps></PraProps> */}

      {/* 실습2 - 함수형 */}
      {/* <FunPrac
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      ></FunPrac> */}
      {/* 실습3 - 클래스형 */}
      {/* <ClassPrac></ClassPrac> */}

      {/* -------------------------------------------------------- */}
      {/* 연습 */}
      {/* {products.map((prod) => (
        <ProductItem prodData={prod} key={prod.id} />
      ))} */}
      {/* 연습 develop */}
      <ProductContainer products={products} />
    </div>
  );
}

export default App;
