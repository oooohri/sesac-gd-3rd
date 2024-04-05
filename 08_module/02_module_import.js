// packagejs 수정 필요 -> package.jsondptj "type" : "module"로 수정

// * 02_module01.js 사용
import { flowers, getFlower, getFlowersLength } from "./02_module01.js";
console.log(flowers); // [ 'cherry blossom', 'rose', 'tulip' ]
// 바로 호출만해도 cosole.log찍음 (원래 메소드에 있는 구문이므로)
getFlowersLength(); // 3
console.log(getFlower(0)); // cherry blossom
console.log(getFlower(10)); // x

// 한번에 export 한 변수, 함수 등을 가져오는 방법 (*사용)
// 메모리 효율, 처리속도가 좋지 않아 잘 사용하지 않는 방법임.
import * as flower from "./02_module01.js";
console.log(flower);

// -----------------------------------------------------------------------------------
// 02_module02.js 사용
import { animals, addAnimal, showAnimals } from "./02_module02.js";
showAnimals();
addAnimal("bear");
console.log(animals);

// -----------------------------------------------------------------------------------
// 03_module.js 사용
// ! 리액트에서 자주사용
// import sayStatus from "./03_module.js";
// sayStatus("sleepy");

// 한번에 내보낸 sayStatus2 사용
import sayStatus2 from "./03_module.js";
sayStatus2("sleepy");
sayStatus2("boring");
