import { useState } from "react";

export default function Prac4() {
  // 현재 입력되어 있는 사용자의 데이터
  // 서버에서 받아왔다는 전제 하에 작성되어 있음
  // data state는 유저의 id, user, email을 포함하고 있는 객체의 "배열"
  const [data, setData] = useState([
    { id: 1, user: "장원영", email: "wonyoung@gmail.com" },
    { id: 2, user: "안유진", email: "yujin@gmail.com" },
  ]);

  // input창의 기본값 설정 (빈값)
  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  // data.length = 2 (장원영,안유진)
  // 다음 아이디 키값은 3부터 시작이므로 다음 아이디의 기본 값은 +1된 값이다.
  const [nextId, setNextId] = useState(data.length + 1); // useState(3)

  // input에 변경사항이 있을 때 호출되는 함수
  // 실행시 입력한 값인 input의 value로 업데이트한다.
  // e : event객체 -> react synthetic event객체
  // e.target : 현재 이벤트가 발생한 요소 -> input
  // e.target.value : 현재 이벤트가 발생한 input 요소의 value 속성값
  // ex) div는 value가 없으므로 값이 안나온다!
  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  // 클릭이벤트 함수 (값등록)
  // 1. 새로운 데이터를 추가 2. input 2개 초기화 3. nextid
  const eventClick = () => {
    // 새로운 데이터를 기존 데이터 배열에 추가
    // 방법 1. concat()
    // 참고) concat(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // const nextData = data.concat({
    //   id: nextId,
    //   user: inputUser,
    //   email: inputEmail,
    // });

    // 방법2. ...연산자 사용
    // nextData는 새로 업데이트 될 데이터
    // 원래 data state의 값을 spread 연산자를 사용해 객체 각각을 불러내고,
    // 가장 마지막에 새로 입력받은 user의 정보를 객체 형태로 추가하고 있음
    const nextData = [
      ...data,
      {
        id: nextId,
        user: inputUser,
        email: inputEmail,
      },
    ];

    // 사용자가 입력한 값의 id값을 업데이트
    // 다음 사용자의 아이디값으로 들어가야 하는데, id는 고유해야 하므로 1증가한값으로 넣어줄것이기 때문
    setNextId(nextId + 1);
    // 변경된 데이터 배열을 data상태에 저장
    // 새로 추가된 데이터가 가장 마지막에 더해짐
    // 컴포넌트 리렌더링 되면서 브라우저에 추가된 데이터도 함께 렌더링
    setData(nextData);
    // setInputUser와 setInputEmail을 통해 inputUser, inputEmail state의 값을 빈 문자열로 업데이트
    // -> 현재 inputUser와 inputEmail은 각 input의 value로 연결
    // 각 state가 빈 문자열이 되면 해당 input도 빈 문자열로 바뀜
    // input을 초기화시켜 사용자가 다음 데이터를 입력하기 편하게 만듬
    setInputUser("");
    setInputEmail("");
  };

  // emailInput에 onKeyDown 속성으로 연결되어 있는 함수
  // 해당 input에 focus된 상태로 키보드가 눌려있는 순간 실행
  // 즉, 엔터 누르면 유저가 등록한 값이 업데이트 된다.
  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      eventClick();
    }
  };
  // 모든 사용자를 보여주는 h2 요소에 onDoubleClick으로 연결되어 있는 함수
  // h2 요소에 더블 클릭 발생 시 호출
  // 현재 data state에서 매개변수로 받은 id와 같지 않은 요소만 배열로 저장해서 data state를 업데이트
  const onRemoveData = (id) => {
    // filter() : 배열을 돌면서 각 요소에 조건에 만족하는 요소만 모아 배열로 반환
    // 매개변수로 받은 id값과 data state 배열의 모든 요소들을 순회하면서 id값이 같지 않은 요소만 모아서 배열로 반환하고,
    // 반환된 새 배열을 NextData 변수에 저장
    const NextData = data.filter((data) => data.id !== id);
    // 반환된 NextData 배열의 값으로 data state의 값을 업데이트
    setData(NextData);
  };
  // data state를 순회하면서 h2 요소에 각 값을 보여주고, onDoubleClick 속성으로
  // OnRemoveData 함수를 호출하며 현재 사용되고 있는 요소의 id값을 매개변수로 넘겨주고 있음
  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => onRemoveData(data.id)}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      {/* 사용자의 이름을 입력받는 input */}
      {/* value속성으로 inputUser state를 갖고 있음 */}
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
      />

      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
      />

      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
}
