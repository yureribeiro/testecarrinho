const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100
  },
  {
    id: 2,
    name: "Product 2",
    price: 200
  },
  {
    id: 3,
    name: "Product 3",
    price: 300
  }
]

const carrinho = []

const renderProducts = () => {
  // pegando a div product do html
  const productsContainer = document.getElementById("products")

  products.forEach(item => {
    // criando novos elementos html
    const product = document.createElement("div");
    const productName = document.createElement("h3")
    const productPrice = document.createElement("p")
    const productButton = document.createElement("button")
    productButton.addEventListener("click", () => addProductCarrinho(item.id))   // função para adiconar o ao carrinho
    // adicionando classes
    product.classList.add("product")
    productName.classList.add("name")
    productPrice.classList.add("price")
    productButton.classList.add("buy-button")
    // adicionando o dados aos elementos
    productName.textContent = item.name
    productPrice.textContent = item.price
    productButton.textContent = "Comprar"
    // adicionando o elemento html ao elemento pai
    product.appendChild(productName)
    product.appendChild(productPrice)
    product.appendChild(productButton)
    // adicionando o container product lá na div do html
    productsContainer.appendChild(product)
  })
}
// ja chamo a função pra renderizar os produtos logo de inicio
renderProducts()


// função para abrir o carrinho de compras apenas alterando o css
const renderCarrinho = (item) => {
  const carrinho = document.getElementById("checkout")
  carrinho.classList.remove("carrinho");
  carrinho.classList.add("carrinhoOpen");

  // criar novamente os elementos do carrinho
  const product = document.createElement("div")
  const productName = document.createElement("h3")
  const productPrice = document.createElement("p")
  const productButtonRemove = document.createElement("button")

  product.classList.add("productCarrinho")
  productName.classList.add("nameProductCarrinho")
  productPrice.classList.add("priceProductCarrinho")
  productButtonRemove.classList.add("removeProductCarrinho")

  productName.textContent = item.name
  productPrice.textContent = item.price
  productButtonRemove.textContent = "Remover"

  product.appendChild(productName)
  product.appendChild(productPrice)
  product.appendChild(productButtonRemove)

  carrinho.appendChild(product)

  somarCarrinho()
}

const FecharCarrinho = () => {
  const carrinho = document.getElementById("checkout")
  carrinho.classList.remove("carrinhoOpen");
  carrinho.classList.add("carrinho");
}

const removeProductCarrinho = (id) => {
  try {
    const index = carrinho.findIndex(item => item.id === id)
    carrinho.splice(index, 1)
    renderCarrinho();
    console.log(carrinho)
  } catch (error) {
    console.log(error)
  }
}

// função para adicionar ao carrinho (vou passar para cada butão dos produtos)
const addProductCarrinho = (id) => {
  try {
    const product = products.find(item => item.id === id)
    carrinho.push(product)
    renderCarrinho(product);
    console.log(carrinho)
  } catch (error) {
    console.log(error)
  }

  // adicionar a função abaixo em "render products" :
  // productButton.addEventListener("click", () => addProductCarrinho(item.id))
}


const somarCarrinho = () => {
  let total = 0
  carrinho.forEach(item => {
    total += item.price
  })
  document.getElementById("total").textContent = total
}