// 제품 데이터값들을 화면에 뿌리기 위한 함수
// 밑에 fetchProducts()가 작동되지 않으면 화면에 뿌려지지 않는다. 
function displayProduct(products) {
  const productsListEL = document.querySelector("#product-list");
  productsListEL.innerHTML = ""; // 상품 목록 초기화

  // 각각의 요소를 product로 별명지음.
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <p>상품 이름 ${product.name}, 가격 : ${product.price}원 </p> 
    `;

    productsListEL.append(div);
  });
}

// 상품 데이터(json mock)를 가져오는 함수
function fetchProducts() {
  // api아니고 json 파일을 따로 생성했는데 그걸 가져옴.
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      // 화면에 데이터값 뿌림
      displayProduct(data);
    })
    .catch((err) => console.log("상품 데이터를 불러오는데 실패했습니다."));
}

fetchProducts();

