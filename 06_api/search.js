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
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      // 화면에 데이터값 뿌림
      displayProduct(data);
    })
    .catch((err) => console.log("상품 데이터를 불러오는데 실패했습니다."));
}

fetchProducts();

// 유틸화 - 함수 분리해서 필요할 때마다 사용
