const { remote } = require("electron");
const main = remote.require("./main");

const productForm = document.getElementById("productForm");
const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const productDescription = document.getElementById("description");
const productsList = document.getElementById("products");
const btnEdit = document.getElementById("btn-edit");


$("#btn-click").click(function (e) { 
  e.preventDefault();
  console.log("hi there");
});;


let products = [];

productForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newProduct = {
    name: productName.value,
    price: productPrice.value,
    description: productDescription.value,
  };

  const result = await main.createProduct(newProduct);
  console.log(result);
});

function renderProduct(products) {
  productsList.innerHTML = "";
  products.forEach((product) => {
    productsList.innerHTML += `
      <div class="card card-body my-2 animate__animated animate__fadeInLeft">
          <h4 id= "product-id">Product Id : ${product.id}</h4>
          <h4>${product.name}</h4>
          <p>${product.name}</p>
          <p>${product.name}</p>

           <p>
            <button id="btn-delete" class="btn btn-danger"> Delete </button> 
              <button id="btn-edit" class= "btn-edit btn btn-secondary"> Edit </button>
          </p>
          
          
      </div>
    `;
  });
}


function updateProductFunction() {
  console.log("edit button clicked");
}

const getProducts = async () => {
  products = await main.getProducts();
  renderProduct(products);
  console.log("all product store here: " + JSON.stringify(products));
};

async function init() {
  await getProducts();
}

init();
