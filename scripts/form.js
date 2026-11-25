const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productSelect = document.querySelector("#product");
if (productSelect) {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

const reviewCounter = document.querySelector("#reviewCounter");
if (reviewCounter) {
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count += 1;
  localStorage.setItem("reviewCount", count);
  reviewCounter.textContent = count;
}

const yearEl = document.querySelector("#currentyear");
const modEl = document.querySelector("#lastModified");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
if (modEl) {
  modEl.textContent = `Last Modification: ${document.lastModified}`;
}
