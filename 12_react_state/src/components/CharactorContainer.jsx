import React from "react";
import { useState } from "react";
import CharactorInfo from "./CharactorInfo";

export default function CharactorContainer() {
  // characters -> 배열. 각 요소들은 객체
  //               사용자의 데이터가 담긴 객체의 배열
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "뽀로로",
      age: "7",
      nickName: "사고뭉치",
    },
    {
      id: 2,
      name: "루피",
      age: "5",
      nickName: "공주님",
    },
    {
      id: 3,
      name: "크롱",
      age: "4",
      nickName: "장난꾸러기",
    },
  ]);
  // selectedCharactor state 선언
  // 선택된 캐릭터 정보가 객체로 저장할 예정, 지금은 null값임
  // 하지만 조건 중에서 선택된 캐릭터가 없을 때 charactorInfo 컴포넌트를 렌더링 하지 말라는 조건이 있어서
  // 초기값을 null로 주어 해당 state로 조건부 렌더링까지 할 수 있도록 작성 (null이면 false)
  const [selectedCharactor, setselectedCharactor] = useState(null);
  // handleClick 함수 (인자: 선택된 버튼의 name값)
  const handleClick = (name) => {
    const selected = characters.find((charactor) => charactor.name === name);
    console.log(selected);
    setselectedCharactor(selected);
  };
  // charactors 배열에서 인자로 받은 name의 값과 동일한 요소를 selectedCharator state에 저장

  return (
    <div>
      <h2>실습 3 -뽀로로,루피,크롱</h2>
      {/* charators 배열 순회하며 버튼 렌더링 하기 */}
      {characters.map((charactor) => (
        // 원래 있던 돔와 버츄얼돔을 비교하기 위해서는 key가 꼭필요하다!
        // key는 유니크한 값이어야 한다.
        <button key={charactor.id} onClick={() => handleClick(charactor.name)}>
          {charactor.name}
        </button>
      ))}

      {/* 선택된 캐릭터 정보를 props로 전달하기 */}
      {/* selectedCharactor state 값이 없는 경우 charactorInfo 컴포넌트 렌더링 x */}
      {/* charactorData -> key값 (charactorInfo) */}
      {/* null이면 false이므로 아래 식이 실행되지 않고 true면 실행 */}
      {selectedCharactor && <CharactorInfo charactorData={selectedCharactor} />}
    </div>
  );
}
