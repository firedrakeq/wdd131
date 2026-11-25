const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://churchofjesuschrist.org"
  },
  // 3 Additional Temples
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschrist.org"
  },
  {
    templeName: "Colonia Juárez Chihuahua Mexico",
    location: "Colonia Juárez, Chihuahua, Mexico",
    dedicated: "1999, March, 6",
    area: 6800,
    imageUrl: "https://churchofjesuschrist.org"
  }
];

const container = document.querySelector(".res-grid");
const pageTitle = document.querySelector("#page-title");

function createTempleCard(filteredTemples) {
  container.innerHTML = "";
  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");
    card.className = "temple-card";

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    `;

    container.appendChild(card);
  });
}

// Initial render
createTempleCard(temples);

// Navigation Filter Event Listeners
const navLinks = document.querySelectorAll(".navigation a");

function setActiveLink(activeId) {
  navLinks.forEach((link) => link.classList.remove("active"));
  document.querySelector(`#${activeId}`).classList.add("active");
}

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  setActiveLink("home");
  pageTitle.textContent = "Home";
  createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  setActiveLink("old");
  pageTitle.textContent = "Old (Before 1900)";
  createTempleCard(temples.filter((t) => parseInt(t.dedicated.split(",")) < 1900));
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  setActiveLink("new");
  pageTitle.textContent = "New (After 2000)";
  createTempleCard(temples.filter((t) => parseInt(t.dedicated.split(",")) > 2000));
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  setActiveLink("large");
  pageTitle.textContent = "Large (> 90,000 sq ft)";
  createTempleCard(temples.filter((t) => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  setActiveLink("small");
  pageTitle.textContent = "Small (< 10,000 sq ft)";
  createTempleCard(temples.filter((t) => t.area < 10000));
});

// Hamburger Menu Toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Footer Dates
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
