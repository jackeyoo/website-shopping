const products = [
  {
    id: "morning-tea",
    name: "ชาสมุนไพรเช้าใส",
    category: "wellness",
    price: 290,
    oldPrice: 350,
    badge: "ขายดี",
    rating: "4.9",
    reviews: 128,
    tone: "sage",
    description: "กลิ่นหอมสดชื่น ดื่มง่าย เหมาะกับช่วงเช้าหรือพักเบรกระหว่างวัน",
  },
  {
    id: "body-serum",
    name: "เซรั่มบำรุงผิวกาย",
    category: "beauty",
    price: 490,
    oldPrice: 590,
    badge: "ใหม่",
    rating: "4.8",
    reviews: 96,
    tone: "coral",
    description: "เนื้อบางเบา ซึมไว ใช้ได้ทุกวันหลังอาบน้ำโดยไม่เหนียวเหนอะหนะ",
  },
  {
    id: "fresh-bottle",
    name: "ขวดน้ำพกพา Fresh Day",
    category: "home",
    price: 360,
    oldPrice: 420,
    badge: "พร้อมส่ง",
    rating: "4.7",
    reviews: 74,
    tone: "blue",
    description: "ขนาดพอดีกระเป๋า ฝาปิดแน่น ใช้ซ้ำได้ เหมาะกับวันทำงานและเดินทาง",
  },
  {
    id: "home-aroma",
    name: "สเปรย์หอมปรับอากาศ",
    category: "home",
    price: 250,
    oldPrice: 310,
    badge: "คุ้มค่า",
    rating: "4.8",
    reviews: 83,
    tone: "amber",
    description: "กลิ่นสะอาดนุ่มนวล ใช้กับห้องทำงาน ห้องนอน หรือมุมพักผ่อน",
  },
  {
    id: "skin-balm",
    name: "บาล์มบำรุงผิวแห้ง",
    category: "beauty",
    price: 320,
    oldPrice: 390,
    badge: "แนะนำ",
    rating: "4.9",
    reviews: 142,
    tone: "rose",
    description: "พกง่าย ทาเฉพาะจุดได้ทั้งมือ ข้อศอก และผิวที่ต้องการความชุ่มชื้น",
  },
  {
    id: "gift-set",
    name: "ชุดของขวัญดูแลตัวเอง",
    category: "gift",
    price: 890,
    oldPrice: 1050,
    badge: "ของขวัญ",
    rating: "5.0",
    reviews: 61,
    tone: "charcoal",
    description: "รวมสินค้าขายดีในแพ็กเดียว เหมาะสำหรับลูกค้าองค์กรหรือคนพิเศษ",
  },
];

const categoryLabels = {
  all: "ทั้งหมด",
  wellness: "สุขภาพ",
  beauty: "ผิวกาย",
  home: "บ้าน",
  gift: "ของขวัญ",
};

const state = {
  activeCategory: "all",
  query: "",
  cart: loadCart(),
  promoApplied: window.localStorage.getItem("sabaai-promo") === "WELCOME10",
};

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const subtotalText = document.querySelector("#subtotalText");
const discountText = document.querySelector("#discountText");
const shippingText = document.querySelector("#shippingText");
const totalText = document.querySelector("#totalText");
const checkoutButton = document.querySelector("#checkoutButton");
const checkoutForm = document.querySelector("#checkout");
const promoForm = document.querySelector("#promoForm");
const promoCode = document.querySelector("#promoCode");
const cartPanel = document.querySelector("#cartPanel");
const cartToggle = document.querySelector("#cartToggle");
const closeCart = document.querySelector("#closeCart");
const cartBackdrop = document.querySelector("#cartBackdrop");
const toast = document.querySelector("#toast");
const orderModal = document.querySelector("#orderModal");
const closeModal = document.querySelector("#closeModal");
const finishModal = document.querySelector("#finishModal");
const orderDetails = document.querySelector("#orderDetails");

const money = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  maximumFractionDigits: 0,
});

function loadCart() {
  try {
    return JSON.parse(window.localStorage.getItem("sabaai-cart")) || {};
  } catch {
    return {};
  }
}

function saveCart() {
  window.localStorage.setItem("sabaai-cart", JSON.stringify(state.cart));
}

function getCartLines() {
  return Object.entries(state.cart)
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);
}

function getTotals() {
  const subtotal = getCartLines().reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = state.promoApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal === 0 || subtotal >= 1200 ? 0 : 60;
  return {
    subtotal,
    discount,
    shipping,
    total: Math.max(0, subtotal - discount + shipping),
  };
}

function renderProducts() {
  const term = state.query.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      state.activeCategory === "all" || product.category === state.activeCategory;
    const matchesSearch =
      !term ||
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      categoryLabels[product.category].toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  resultCount.textContent = `${filteredProducts.length} รายการ`;

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <p>ไม่พบสินค้าที่ตรงกับการค้นหา</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-art tone-${product.tone}" aria-hidden="true">
            <span class="pack pack-main"></span>
            <span class="pack pack-side"></span>
          </div>
          <div class="product-info">
            <div class="product-meta">
              <span class="badge">${product.badge}</span>
              <span>${product.rating} (${product.reviews})</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="card-footer">
              <span class="price-stack">
                <strong>${money.format(product.price)}</strong>
                <span>${money.format(product.oldPrice)}</span>
              </span>
              <button class="add-button" type="button" data-add="${product.id}">เพิ่ม</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCart() {
  const lines = getCartLines();
  const itemCount = lines.reduce((sum, item) => sum + item.quantity, 0);
  const totals = getTotals();

  cartCount.textContent = itemCount;
  checkoutButton.disabled = itemCount === 0;
  subtotalText.textContent = money.format(totals.subtotal);
  discountText.textContent = totals.discount ? `-${money.format(totals.discount)}` : money.format(0);
  shippingText.textContent = totals.shipping ? money.format(totals.shipping) : "ฟรี";
  totalText.textContent = money.format(totals.total);

  if (!lines.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        ตะกร้ายังว่าง เลือกสินค้าที่ต้องการแล้วรายการจะสรุปให้ที่นี่
      </div>
    `;
    return;
  }

  cartItems.innerHTML = lines
    .map(
      (item) => `
        <div class="cart-item">
          <div>
            <h3>${item.name}</h3>
            <p>${money.format(item.price)} × ${item.quantity}</p>
          </div>
          <div class="item-actions" aria-label="จัดการ ${item.name}">
            <button class="qty-button" type="button" data-dec="${item.id}" aria-label="ลดจำนวน ${item.name}">−</button>
            <strong>${item.quantity}</strong>
            <button class="qty-button" type="button" data-inc="${item.id}" aria-label="เพิ่มจำนวน ${item.name}">+</button>
            <button class="qty-button remove-button" type="button" data-remove="${item.id}" aria-label="ลบ ${item.name}">×</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function addToCart(productId) {
  state.cart[productId] = (state.cart[productId] || 0) + 1;
  saveCart();
  renderCart();

  const product = products.find((item) => item.id === productId);
  showToast(`เพิ่ม ${product.name} แล้ว`);
}

function updateCart(productId, nextQuantity) {
  if (nextQuantity <= 0) {
    delete state.cart[productId];
  } else {
    state.cart[productId] = nextQuantity;
  }

  saveCart();
  renderCart();
}

function openCart() {
  if (!window.matchMedia("(max-width: 1050px)").matches) {
    checkoutForm.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  cartPanel.classList.add("is-open");
  cartBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCartPanel() {
  cartPanel.classList.remove("is-open");
  cartBackdrop.hidden = true;
  document.body.style.overflow = "";
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  addToCart(button.dataset.add);

  if (window.matchMedia("(max-width: 1050px)").matches) {
    openCart();
  }
});

cartItems.addEventListener("click", (event) => {
  const inc = event.target.closest("[data-inc]");
  const dec = event.target.closest("[data-dec]");
  const remove = event.target.closest("[data-remove]");

  if (inc) {
    updateCart(inc.dataset.inc, (state.cart[inc.dataset.inc] || 0) + 1);
  }

  if (dec) {
    updateCart(dec.dataset.dec, (state.cart[dec.dataset.dec] || 0) - 1);
  }

  if (remove) {
    updateCart(remove.dataset.remove, 0);
  }
});

document.querySelectorAll(".category-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeCategory = button.dataset.category;
    document
      .querySelectorAll(".category-tab")
      .forEach((tab) => tab.classList.toggle("is-active", tab === button));
    renderProducts();
  });
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  renderProducts();
});

promoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = promoCode.value.trim().toUpperCase();

  if (code === "WELCOME10") {
    state.promoApplied = true;
    window.localStorage.setItem("sabaai-promo", "WELCOME10");
    renderCart();
    showToast("ใช้โค้ด WELCOME10 แล้ว");
    return;
  }

  showToast("โค้ดส่วนลดไม่ถูกต้อง");
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const lines = getCartLines();
  if (!lines.length) {
    showToast("กรุณาเลือกสินค้าอย่างน้อย 1 รายการ");
    return;
  }

  const formData = new FormData(checkoutForm);
  const totals = getTotals();
  const orderNo = `SM${Date.now().toString().slice(-7)}`;
  const itemSummary = lines.map((item) => `${item.name} × ${item.quantity}`).join("<br />");

  orderDetails.innerHTML = `
    <p><strong>เลขที่คำสั่งซื้อ:</strong> ${orderNo}</p>
    <p><strong>ผู้รับ:</strong> ${formData.get("customerName")} (${formData.get("phone")})</p>
    <p><strong>รายการ:</strong><br />${itemSummary}</p>
    <p><strong>ยอดรวม:</strong> ${money.format(totals.total)} | <strong>ชำระเงิน:</strong> ${formData.get("payment")}</p>
  `;

  state.cart = {};
  saveCart();
  renderCart();
  checkoutForm.reset();
  closeCartPanel();
  orderModal.showModal();
});

cartToggle.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartPanel);
cartBackdrop.addEventListener("click", closeCartPanel);

closeModal.addEventListener("click", () => orderModal.close());
finishModal.addEventListener("click", () => orderModal.close());

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCartPanel();
  }
});

window.addEventListener("resize", () => {
  if (!window.matchMedia("(max-width: 1050px)").matches) {
    closeCartPanel();
  }
});

renderProducts();
renderCart();
