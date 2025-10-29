 // ===== Hero Background Slideshow =====
const heroSection = document.querySelector('.hero');
const heroImages = [
  'images/bg1forhomepage.png',
  'images/bgforhome2.png',
  'images/bgforhome4.jpeg',
  'images/bgimageforhome5.jpg'
];
heroImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

let currentIndex = 0;

// Function to update the background image
function updateHeroBackground() {
  heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % heroImages.length;
}

// Initial image load
updateHeroBackground();

// Change image every 2.5 seconds
setInterval(updateHeroBackground, 4000);

// ===== Scroll-to-Top Button Logic (optional) =====
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Flipbook Menu Logic =====
const spreads = [
  ["non-veg-starters", "tandoori-veg-starters"],
  ["tandoori-non-veg", "soups"],
  ["noodles-dessert", "breads"],
  ["ice-creams-single", "ice-creams-two"],
  ["ice-creams-three", "milkshakes"],
  ["falooda-lassi", "mocktails"],
  ["juices-kheer", "soda-pops"]
];


const menuData = {
  "non-veg-starters": [
    { name: "Prawn Chilly", price: "₹350" },
    { name: "Prawn 65", price: "₹350" },
    { name: "Prawn Manchuria", price: "₹350" },
    { name: "Prawn Roasts", price: "₹350" },
    { name: "Prawn Fry", price: "₹350" },
    { name: "Fish B/L Fry", price: "₹300" },
    { name: "Fish B/L Chilly", price: "₹300" },
    { name: "Fish B/L Roasts", price: "₹300" },
    { name: "Fish B/L Manchuria", price: "₹340" }
  ],
  "tandoori-veg-starters": [
    { name: "Gobi Tikka", price: "₹270" },
    { name: "Tandoori Gobi", price: "₹280" },
    { name: "Paneer Tikka", price: "₹360" }
  ],
  "tandoori-non-veg": [
    { name: "Tandoori Chicken (Full)", price: "₹560" },
    { name: "Tandoori Chicken (Half)", price: "₹300" },
    { name: "Tangdi Kebab", price: "₹300" },
    { name: "Tangdi Kebab (Full)", price: "₹560" },
    { name: "Tangdi Kebab (Half)", price: "₹300" },
    { name: "Chicken Tikka", price: "₹370" },
    { name: "Malai Tikka", price: "₹370" },
    { name: "Fish Tikka", price: "₹380" },
    { name: "Prawn Tikka", price: "₹380" }
  ],
  "soups": [
    { name: "Tomato Soup", price: "₹150" },
    { name: "Mixed Veg Soup", price: "₹160" },
    { name: "Hot & Sour Soup", price: "₹160" },
    { name: "Manchow Soup", price: "₹150" },
    { name: "Sweet Corn Soup", price: "₹150" },
    { name: "Lemon Corrinder", price: "₹150" },
    { name: "Clear Soup", price: "₹150" },
    { name: "Noodles Soup", price: "₹160" },
    { name: "Mushroom Soup", price: "₹150" },
    { name: "Chicken Kheema Soup", price: "₹180" },
    { name: "Mutton Bone Soup", price: "₹200" },
    { name: "Mutton Hot & Saur", price: "₹220" },
    { name: "Mutton Kheema Soup", price: "₹220" }
  ],
  "noodles-dessert": [
    { name: "Egg Noodles", price: "₹210" },
    { name: "Chicken Noodles", price: "₹250" },
    { name: "Schezwan Egg Noodles", price: "₹220" },
    { name: "Schezwan Chicken Noodles", price: "₹260" },
    { name: "Veg Noodles", price: "₹180" },
    { name: "Baby Corn Noodles", price: "₹220" },
    { name: "Gobi Noodles", price: "₹200" },
    { name: "Mushroom Noodles", price: "₹220" },
    { name: "Paneer Noodles", price: "₹290" },
    { name: "Schezwan Veg Noodles", price: "₹200" },
    { name: "Semiya Kheer", price: "₹180" }
  ],
  "breads": [
    { name: "Pulka", price: "₹13" },
    { name: "Butter Pulka", price: "₹20" },
    { name: "Plain Naan", price: "₹80" },
    { name: "Butter Naan", price: "₹90" },
    { name: "Garlic Naan", price: "₹100" },
    { name: "Garlic Butter Naan", price: "₹110" },
    { name: "Tandoori Roti", price: "₹70" },
    { name: "Tandoori Butter Roti", price: "₹80" },
    { name: "Plain Parota", price: "₹80" },
    { name: "Butter Parota", price: "₹90" },
    { name: "Aloo Parota", price: "₹100" },
    { name: "Paneer Parota", price: "₹130" },
    { name: "Butter Kulcha", price: "₹100" },
    { name: "Stuffed Kulcha", price: "₹100" },
    { name: "Plain Kulcha", price: "₹95" }
  ],
  "ice-creams-single": [
    { name: "Anjeer Badam", price: "₹160" },
    { name: "Black Current", price: "₹150" },
    { name: "Butterscotch", price: "₹140" },
    { name: "Belgium Dark Chocolate", price: "₹160" },
    { name: "Chocolate", price: "₹140" },
    { name: "Caramelnuts", price: "₹160" },
    { name: "Choco Roco", price: "₹160" },
    { name: "Dry Fruit Temptation", price: "₹160" },
    { name: "Fruit Ninja", price: "₹150" },
    { name: "Green Pista", price: "₹140" },
    { name: "Honeymoon Delight", price: "₹160" },
    { name: "Honey Almond", price: "₹160" },
    { name: "Mango", price: "₹130" },
    { name: "Pina Chikki", price: "₹150" },
    { name: "Strawberry", price: "₹120" },
    { name: "Vanilla", price: "₹110" }
  ],
  "ice-creams-two": [
    { name: "Crunchy Oreo", price: "₹240" },
    { name: "Death by Chocolate", price: "₹280" },
    { name: "Strawberry Cracker", price: "₹250" },
    { name: "Eye Candy", price: "₹250" },
    { name: "Ferrero Rocher", price: "₹300" },
    { name: "Rich Chocolate Brownie", price: "₹310" }
  ],
  "ice-creams-three": [
    { name: "Apple Split", price: "₹310" },
    { name: "Honey Moon Spl", price: "₹320" },
    { name: "The Wall of China", price: "₹310" },
    { name: "Kiwi Pineapple", price: "₹340" },
    { name: "Black Current Spl", price: "₹360" }
  ],
  "milkshakes": [
    { name: "Vanilla Caramel Shake", price: "₹160 / ₹190" },
    { name: "Chocolate Shake", price: "₹160 / ₹190" },
    { name: "Mango Shake", price: "₹160 / ₹190" },
    { name: "Strawberry Shake", price: "₹160 / ₹190" },
    { name: "Butter Scotch Shake", price: "₹160 / ₹190" },
    { name: "Green Pista Shake", price: "₹160 / ₹190" },
    { name: "Kit Kat Shake", price: "₹180 / ₹210" },
    { name: "Oreo Milk Shake", price: "₹180 / ₹210" },
    { name: "Snickers Bar Shake", price: "₹180 / ₹210" },
    { name: "Ferrero Rocher Shake", price: "₹200 / ₹230" },
    { name: "Dry Fruit Shake", price: "₹200 / ₹230" },
    { name: "Black Current Shake", price: "₹200 / ₹230" },
    { name: "Caramel Nuts Shake", price: "₹220 / ₹250" },
    { name: "Anjeer Badam Shake", price: "₹220 / ₹250" },
    { name: "Fruit Ninja Shake", price: "₹230 / ₹270" }
  ],
  "falooda-lassi": [
    { name: "Strawberry Falooda", price: "₹210" },
    { name: "Mango Falooda", price: "₹210" },
    { name: "Butter Scotch Falooda", price: "₹240" },
    { name: "Green Pista Falooda", price: "₹240" },
    { name: "Dry Fruit Falooda", price: "₹250" },
    { name: "Royal Falooda", price: "₹250" },
    { name: "Butter Milk", price: "₹50" },
    { name: "Plain Lassi", price: "₹100" },
    { name: "Strawberry Lassi", price: "₹120" },
    { name: "Mango Lassi", price: "₹120" }
  ],
  "mocktails": [
    { name: "Fruit Punch", price: "₹200" },
    { name: "Pineapple Mint Twist", price: "₹160" },
    { name: "Summer Paradise", price: "₹160" },
    { name: "Strawberry Mojito", price: "₹160" },
    { name: "Green Apple Mojito", price: "₹160" },
    { name: "Virgin Mojito", price: "₹150" }
  ],
  "juices-kheer": [
    { name: "Black Grape Juice", price: "₹80" },
    { name: "Banana Juice", price: "₹80" },
    { name: "Watermelon Juice", price: "₹80" },
    { name: "Musk Melon Juice", price: "₹80" },
    { name: "Pineapple Juice", price: "₹80" },
    { name: "Apple Juice", price: "₹90" },
    { name: "Pomegranate Juice", price: "₹120" },
    { name: "Kiwi Juice", price: "₹110" },
    { name: "Mixed Dry Fruit Juice", price: "₹150" },
    { name: "Badam Kheer", price: "₹110" },
    { name: "Badam Kheer with Ice", price: "₹180" }
  ],
  "soda-pops": [
    { name: "Lychee Pop", price: "₹150" },
    { name: "Green Apple Pop", price: "₹150" },
    { name: "Strawberry Pop", price: "₹150" },
    { name: "Mango Pop", price: "₹150" },
    { name: "Coca-Cola Pop", price: "₹150" }
  ]
};

let currentSpread = 0;
// ===== Render a Single Page =====
function renderPage(pageId, containerId) {
  const items = menuData[pageId];
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (!items) return;

  const title = document.createElement("div");
  title.className = "category-title";
  title.textContent = pageId.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  container.appendChild(title);

  const ul = document.createElement("ul");
  items.forEach(item => {
    const li = document.createElement("li");
    li.id = "item-" + item.name.toLowerCase().replace(/\s+/g, "-");
    li.textContent = `${item.name} – ${item.price}`;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

// ===== Render Both Pages in the Spread =====
function renderSpread() {
  const [leftId, rightId] = spreads[currentSpread];
  renderPage(leftId, "leftPage");
  renderPage(rightId, "rightPage");
}

// ===== Flipbook Controls =====
function openBook() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("menuWrapper").style.display = "block";
  document.getElementById("menuControls").style.display = "flex";
  document.getElementById("closeBookBtn").style.display = "inline-block";
  currentSpread = 0;
  renderSpread();
}

function closeBook() {
  document.getElementById("menuWrapper").style.display = "none";
  document.getElementById("menuControls").style.display = "none";
  document.getElementById("closeBookBtn").style.display = "none";
  document.getElementById("welcomeScreen").style.display = "flex";
}

function nextSpread() {
  if (currentSpread < spreads.length - 1) {
    currentSpread++;
    renderSpread();
  }
}

function prevSpread() {
  if (currentSpread > 0) {
    currentSpread--;
    renderSpread();
  }
}

function openPage(pageName) {
  const spreadIndex = spreads.findIndex(spread => spread.includes(pageName));
  if (spreadIndex !== -1) {
    currentSpread = spreadIndex;
    renderSpread();
  }
}

// ===== Search Logic =====
function searchMenu() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const itemId = "item-" + query.replace(/\s+/g, "-");
  const itemElement = document.getElementById(itemId);

  // Case 1: Exact item match
  if (itemElement) {
    let foundPage = null;
    for (const [left, right] of spreads) {
      const leftItems = menuData[left]?.map(i => i.name.toLowerCase());
      const rightItems = menuData[right]?.map(i => i.name.toLowerCase());
      if (leftItems?.includes(query)) foundPage = left;
      if (rightItems?.includes(query)) foundPage = right;
      if (foundPage) break;
    }

    if (foundPage) {
      openPage(foundPage);
      document.querySelectorAll("li").forEach(el => el.classList.remove("highlight"));
      itemElement.classList.add("highlight");
      itemElement.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
  }

  // Case 2: Category match
  const categoryMatch = Object.keys(menuData).find(
    category => category.toLowerCase() === query
  );
  if (categoryMatch) {
    openPage(categoryMatch);
    return;
  }

  // Not found
  alert("Item or category not found in the menu.");
}

// ===== Auto-Open Menu on Page Load =====
window.onload = function() {
  document.getElementById("welcomeScreen").style.display = "flex";
  document.getElementById("menuWrapper").style.display = "none";
  document.getElementById("menuControls").style.display = "none";
  document.getElementById("closeBookBtn").style.display = "none";
};
const openBtn = document.getElementById("openFeatures");
const closeBtn = document.getElementById("closeFeatures");
const features = document.getElementById("features");

openBtn.addEventListener("click", () => {
  features.classList.remove("hidden");
  features.classList.add("open");
  openBtn.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  features.classList.remove("open");
  setTimeout(() => {
    features.classList.add("hidden");
    openBtn.classList.remove("hidden");
  }, 800); // Match transition duration
});



