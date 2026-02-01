const products = [
  { name: "Phone", price: 20000, category: "electronics" },
  { name: "Laptop", price: 60000, category: "electronics" },
  { name: "T-Shirt", price: 800, category: "clothing" },
  { name: "Jeans", price: 1500, category: "clothing" }
];

let displayProducts = [...products];

function renderProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h4>${p.name}</h4><p>₹${p.price}</p>`;
    container.appendChild(div);
  });
}

function sortProducts() {
  const value = document.getElementById("sort").value;

  if (value === "low") {
    displayProducts.sort((a, b) => a.price - b.price);
  } else if (value === "high") {
    displayProducts.sort((a, b) => b.price - a.price);
  }

  renderProducts(displayProducts);
}

function filterProducts() {
  const value = document.getElementById("filter").value;

  if (value === "all") {
    displayProducts = [...products];
  } else {
    displayProducts = products.filter(p => p.category === value);
  }

  renderProducts(displayProducts);
}

renderProducts(displayProducts);
