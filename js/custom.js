var productData = [{
  "id": 1,
  "name": "Coombes",
  "img": "images/living1.jpg",
  "category": "lounge",
  "price": "2,600",
},
{
  "id": 2,
  "name": "Keeve Set",
  "img": "images/living2.jpg",
  "category": "table &amp; chairs",
  "price": "590",
},
{
  "id": 3,
  "name": "Nille",
  "img": "images/living3.jpg",
  "category": "armchair",
  "price": "950",
},
{
  "id": 4,
  "name": "Momo",
  "img": "images/living4.jpg",
  "category": "shelves",
  "price": "890",
},
{
  "id": 5,
  "name": "Penemille",
  "img": "images/living5.jpg",
  "category": "lounge",
  "price": "120",
},
{
  "id": 6,
  "name": "Penemille",
  "img": "images/living6.jpg",
  "category": "lounge",
  "price": "120",
},
{
  "id": 7,
  "name": "Penemille",
  "img": "images/living7.jpg",
  "category": "lounge",
  "price": "120",
},
{
  "id": 8,
  "name": "Penemille",
  "img": "images/living8.jpg",
  "category": "lounge",
  "price": "120",
},
{
  "id": 9,
  "name": "Coombes",
  "img": "images/living1.jpg",
  "category": "lounge",
  "price": "2,600",
},
{
  "id": 10,
  "name": "Keeve Set",
  "img": "images/living2.jpg",
  "category": "table &amp; chairs",
  "price": "590",
},
{
  "id": 11,
  "name": "Nille",
  "img": "images/living3.jpg",
  "category": "armchair",
  "price": "950",
},
{
  "id": 12,
  "name": "Momo",
  "img": "images/living4.jpg",
  "category": "shelves",
  "price": "890",
},
{
  "id": 13,
  "name": "Penemille",
  "img": "images/living5.jpg",
  "category": "lounge",
  "price": "120",
},
{
  "id": 14,
  "name": "Penemille",
  "img": "images/living6.jpg",
  "category": "lounge",
  "price": "120",
},
{
  "id": 15,
  "name": "Penemille",
  "img": "images/living7.jpg",
  "category": "lounge",
  "price": "120",
},
{
  "id": 16,
  "name": "Penemille",
  "img": "images/living8.jpg",
  "category": "lounge",
  "price": "120",
},
]

var productHTML = productData.map(function (product) {
  return `
  <li class="item">
    <div class="product-img">
        <img src="${product.img}" class="w-100" alt="" />
    </div>
    <div class="product-description">
        <p class="product-name m-0">${product.name}</p>
        <p class="product-category d-flex justify-content-between m-0 text-uppercase">
            ${product.category}
            <span>$${product.price}</span></p>
        <div class="product-category d-flex justify-content-between align-items-center">
            <div class="star">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
            </div>
            <a href="#">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-plus"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z" />
                    <path fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z" />
                    <path fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
            </a>
        </div>
    </div>
  </li>
  `;
});

$('.bounded-product').append(productHTML);

const SELECTORS = {
  elements: document.querySelectorAll('.item'),
  paginationContainer: document.getElementById('pagination'),
  page: 1,
  per_page: 6,
  activeElements: []
}

const showPage = (p) => {
  let selected = [];
  //if (p === 1){
  // p = 0
  //}

  SELECTORS.elements.forEach(el => selected.push(el))

  selected = selected.splice((p - 1) * SELECTORS.per_page, SELECTORS.per_page)

  console.log(selected)

  SELECTORS.elements.forEach(el => el.style.display = "none")
  selected.forEach(el => el.style.display = "")
  showPagination()
}

const setPage = (p) => {
  SELECTORS.page = p
  showPage(p)
}

const nextPage = () => {
  const pages = Math.ceil(SELECTORS.elements.length / SELECTORS.per_page)
  if (SELECTORS.page < pages) {
    SELECTORS.page++
    showPage(SELECTORS.page)
  }
}
const prevPage = () => {

  if (SELECTORS.page > 1) {
    SELECTORS.page--
    showPage(SELECTORS.page)
  }
}

const showPagination = () => {
  const pages = Math.ceil(SELECTORS.elements.length / SELECTORS.per_page)
  SELECTORS.paginationContainer.innerHTML = ''
  SELECTORS.paginationContainer.innerHTML += `<span onclick="prevPage()"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></span>`
  for (let i = 0; i < pages; i++) {
    if (i + 1 === SELECTORS.page) {
      SELECTORS.paginationContainer.innerHTML += `<span class="active" onclick="setPage(${i + 1})">${i + 1}</span>`
    } else {
      SELECTORS.paginationContainer.innerHTML += `<span onclick="setPage(${i + 1})">${i + 1}</span>`
    }

  }
  SELECTORS.paginationContainer.innerHTML += `<span onclick="nextPage()"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></span>`
}

showPage(SELECTORS.page)