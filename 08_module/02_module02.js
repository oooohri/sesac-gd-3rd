// es6
// 한번에 export 시키기

export const animals = ["cat", "dog", "rabbit"];

export function showAnimals() {
  animals.forEach((ani) => console.log(ani));
}
// 한개만 추가 가능
export const addAnimal = (newAni) => {
  // animals 배열에 인자로 전달받은 newAni를 추가한 후
  animals.push(newAni);
  // 해당 배열을 반환하는 함수 만들기
  return animals;
};
// // ? 여러개 추가 하려 할때
// export const addAnimalAll = (...newAni)
