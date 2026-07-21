const products = [
  {
    id: "aura-watch-pro",
    image: "https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Aura Watch Pro",
    category: "wearable",
    price: 5490,
    oldPrice: 6990,
    badge: "ขายดี",
    rating: 4.9,
    reviews: 284,
    tone: "mint",
    stock: "พร้อมส่ง",
    description: "นาฬิกา smart health พร้อมโหมดออกกำลังกาย แบตอึด และหน้าจอสว่างกลางแจ้ง",
  },
  {
    id: "nova-buds-air",
    image: "https://images.pexels.com/photos/8380433/pexels-photo-8380433.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Nova Buds Air",
    category: "audio",
    price: 3290,
    oldPrice: 4290,
    badge: "ใหม่",
    rating: 4.8,
    reviews: 173,
    tone: "cyber",
    stock: "พร้อมส่ง",
    description: "หูฟังไร้สายตัดเสียงรบกวน เหมาะกับประชุม เดินทาง และฟังเพลงทั้งวัน",
  },
  {
    id: "volt-gan-100",
    image: "https://images.pexels.com/photos/914912/pexels-photo-914912.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Volt GaN 100W",
    category: "power",
    price: 2290,
    oldPrice: 2890,
    badge: "คุ้มค่า",
    rating: 4.7,
    reviews: 132,
    tone: "sun",
    stock: "พร้อมส่ง",
    description: "หัวชาร์จเร็ว 100W ขนาดเล็ก รองรับ notebook, tablet และมือถือพร้อมกัน",
  },
  {
    id: "halo-desk-lamp",
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Halo Desk Lamp",
    category: "desk",
    price: 1890,
    oldPrice: 2490,
    badge: "แนะนำ",
    rating: 4.8,
    reviews: 91,
    tone: "coral",
    stock: "เหลือน้อย",
    description: "โคมไฟโต๊ะทำงานปรับอุณหภูมิแสงได้ ลดแสงสะท้อนและชาร์จไร้สายในตัว",
  },
  {
    id: "home-hub-mini",
    image: "https://images.pexels.com/photos/1024697/pexels-photo-1024697.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Home Hub Mini",
    category: "smart-home",
    price: 2590,
    oldPrice: 3190,
    badge: "Smart Home",
    rating: 4.6,
    reviews: 88,
    tone: "violet",
    stock: "พร้อมส่ง",
    description: "ศูนย์ควบคุมอุปกรณ์บ้านอัจฉริยะขนาดเล็ก ตั้ง scene และสั่งงานด้วยเสียงได้",
  },
  {
    id: "orbit-mouse-pro",
    image: "https://images.pexels.com/photos/17821147/pexels-photo-17821147.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Orbit Mouse Pro",
    category: "desk",
    price: 1490,
    oldPrice: 1990,
    badge: "Office",
    rating: 4.7,
    reviews: 146,
    tone: "stone",
    stock: "พร้อมส่ง",
    description: "เมาส์ไร้สายจับถนัดมือ เงียบ แม่นยำ และสลับใช้งานได้หลายอุปกรณ์",
  },
  {
    id: "lumen-keyboard",
    image: "https://images.pexels.com/photos/671629/pexels-photo-671629.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Lumen Keyboard",
    category: "desk",
    price: 2990,
    oldPrice: 3690,
    badge: "Limited",
    rating: 4.9,
    reviews: 119,
    tone: "mint",
    stock: "พร้อมส่ง",
    description: "คีย์บอร์ด low profile ไฟ backlight นุ่มตา พิมพ์เงียบสำหรับโต๊ะทำงานจริงจัง",
  },
  {
    id: "travel-dock",
    image: "https://images.pexels.com/photos/4195404/pexels-photo-4195404.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Travel Dock 7-in-1",
    category: "power",
    price: 2690,
    oldPrice: 3290,
    badge: "Travel",
    rating: 4.8,
    reviews: 104,
    tone: "cyber",
    stock: "พร้อมส่ง",
    description: "USB-C dock สำหรับเดินทาง มี HDMI, card reader และชาร์จ passthrough ในชิ้นเดียว",
  },
];

const deals = [
  {
    id: "creator-desk-kit",
    name: "Creator Desk Kit",
    price: 6290,
    oldPrice: 8370,
    accent: "#4f7a72",
    badge: "Save 25%",
    itemIds: ["halo-desk-lamp", "orbit-mouse-pro", "lumen-keyboard"],
    description: "ชุดโต๊ะทำงานสำหรับพิมพ์นาน ประชุมบ่อย และจัดไฟให้พร้อมทำคอนเทนต์",
  },
  {
    id: "travel-power-kit",
    name: "Travel Power Kit",
    price: 4490,
    oldPrice: 5580,
    accent: "#2d4a7c",
    badge: "พร้อมเดินทาง",
    itemIds: ["volt-gan-100", "travel-dock"],
    description: "ชุดชาร์จเร็วและ dock สำหรับคนพก notebook ออกไปทำงานนอกสถานที่",
  },
  {
    id: "daily-smart-kit",
    name: "Daily Smart Kit",
    price: 9890,
    oldPrice: 12470,
    accent: "#ab7f3c",
    badge: "Best Bundle",
    itemIds: ["aura-watch-pro", "nova-buds-air", "home-hub-mini"],
    description: "รวม wearable, audio และ smart home สำหรับอัปเกรดชีวิตประจำวันแบบครบชุด",
  },
];

const categoryLabels = {
  all: "ทั้งหมด",
  wearable: "Wearable",
  audio: "Audio",
  power: "Power",
  desk: "Desk",
  "smart-home": "Smart Home",
};

const storageKey = "sabaai-tech-cart";
const promoKey = "sabaai-tech-promo";
const pageName = document.body.dataset.page || "home";

const state = {
  activeCategory: new URLSearchParams(window.location.search).get("category") || "all",
  query: "",
  sort: "featured",
  cart: loadCart(),
  promoApplied: window.localStorage.getItem(promoKey) === "WELCOME10",
};

const money = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  maximumFractionDigits: 0,
});

const allItems = [
  ...products.map((product) => ({ ...product, kind: "product" })),
  ...deals.map((deal) => ({
    ...deal,
    kind: "deal",
    category: "bundle",
    rating: 5,
    reviews: 40,
    tone: "stone",
    stock: "จัดชุด",
  })),
];

function loadCart() {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveCart() {
  window.localStorage.setItem(storageKey, JSON.stringify(state.cart));
}

function getItem(id) {
  return allItems.find((item) => item.id === id);
}

function getCartLines() {
  return Object.entries(state.cart)
    .map(([id, quantity]) => {
      const item = getItem(id);
      return item ? { ...item, quantity } : null;
    })
    .filter(Boolean);
}

function getTotals() {
  const subtotal = getCartLines().reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = state.promoApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal === 0 || subtotal >= 2500 ? 0 : 80;

  return {
    subtotal,
    discount,
    shipping,
    total: Math.max(0, subtotal - discount + shipping),
  };
}

function updateCartCount() {
  const countEl = document.querySelector("#cartCount");
  if (!countEl) return;
  countEl.textContent = getCartLines().reduce((sum, item) => sum + item.quantity, 0);
}

function setActiveNav() {
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.pageLink === pageName);
  });
}

function renderProductCard(product) {
  return `
    <article class="product-card" data-item-card data-tilt>
      <div class="product-art tone-${product.tone}">
        <img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" />
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span class="badge">${product.badge}</span>
          <span>${product.rating.toFixed(1)} (${product.reviews})</span>
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
  `;
}

function renderFeatured() {
  const target = document.querySelector("#featuredGrid");
  if (!target) return;

  target.innerHTML = products.slice(0, 4).map(renderProductCard).join("");
}

function getFilteredProducts() {
  const term = state.query.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = state.activeCategory === "all" || product.category === state.activeCategory;
    const matchesSearch =
      !term ||
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      categoryLabels[product.category].toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "price-low") return a.price - b.price;
    if (state.sort === "price-high") return b.price - a.price;
    if (state.sort === "rating") return b.rating - a.rating;
    return products.indexOf(a) - products.indexOf(b);
  });
}

function renderProducts() {
  const grid = document.querySelector("#productGrid");
  const count = document.querySelector("#resultCount");
  if (!grid) return;

  const filtered = getFilteredProducts();
  if (count) count.textContent = `${filtered.length} รายการ`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><p>ไม่พบสินค้าที่ตรงกับการค้นหา</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(renderProductCard).join("");
}

function renderDeals() {
  const target = document.querySelector("#dealGrid");
  if (!target) return;

  target.innerHTML = deals
    .map((deal) => {
      const items = deal.itemIds.map((id) => products.find((product) => product.id === id)).filter(Boolean);
      const stack = items.map((item) => `<span>${item.name}</span>`).join("");
      return `
        <article class="deal-card" style="--deal-accent: ${deal.accent}">
          <span class="badge">${deal.badge}</span>
          <h2>${deal.name}</h2>
          <p>${deal.description}</p>
          <div class="deal-stack">${stack}</div>
          <div class="deal-footer">
            <span class="price-stack">
              <strong>${money.format(deal.price)}</strong>
              <span>${money.format(deal.oldPrice)}</span>
            </span>
            <button class="add-button" type="button" data-add="${deal.id}">เพิ่มชุด</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSummary(target) {
  if (!target) return;
  const totals = getTotals();
  target.innerHTML = `
    <div><span>ค่าสินค้า</span><strong>${money.format(totals.subtotal)}</strong></div>
    <div><span>ส่วนลด</span><strong>${totals.discount ? `-${money.format(totals.discount)}` : money.format(0)}</strong></div>
    <div><span>ค่าส่ง</span><strong>${totals.shipping ? money.format(totals.shipping) : "ฟรี"}</strong></div>
    <div class="total-row"><span>ยอดรวม</span><strong>${money.format(totals.total)}</strong></div>
  `;
}

function renderCartLines(target, options = {}) {
  if (!target) return;
  const lines = getCartLines();

  if (!lines.length) {
    target.innerHTML = `
      <div class="empty-state">
        <p>ตะกร้ายังว่าง</p>
      </div>
    `;
    return;
  }

  target.innerHTML = lines
    .map(
      (item) => `
        <div class="cart-line">
          <div>
            <h3>${item.name}</h3>
            <p>${money.format(item.price)} × ${item.quantity} ${item.kind === "deal" ? "ชุด" : "ชิ้น"}</p>
          </div>
          <div class="cart-controls" aria-label="จัดการ ${item.name}">
            <button class="qty-button" type="button" data-dec="${item.id}" aria-label="ลดจำนวน ${item.name}">−</button>
            <strong>${item.quantity}</strong>
            <button class="qty-button" type="button" data-inc="${item.id}" aria-label="เพิ่มจำนวน ${item.name}">+</button>
            ${options.readOnly ? "" : `<button class="qty-button remove-button" type="button" data-remove="${item.id}" aria-label="ลบ ${item.name}">×</button>`}
          </div>
        </div>
      `,
    )
    .join("");
}

function renderCartPage() {
  renderCartLines(document.querySelector("#cartItemsPage"));
  renderSummary(document.querySelector("#cartSummary"));

  const checkoutLink = document.querySelector("#checkoutLink");
  const hasItems = getCartLines().length > 0;
  if (checkoutLink) {
    checkoutLink.classList.toggle("is-disabled", !hasItems);
    checkoutLink.setAttribute("aria-disabled", String(!hasItems));
  }

  const recommendations = document.querySelector("#cartRecommendations");
  if (recommendations) {
    recommendations.innerHTML = products.slice(1, 4).map(renderProductCard).join("");
  }
}

function renderCheckoutPage() {
  renderCartLines(document.querySelector("#checkoutItems"), { readOnly: true });
  renderSummary(document.querySelector("#checkoutSummary"));

  const button = document.querySelector("#placeOrderButton");
  if (button) button.disabled = getCartLines().length === 0;
}

function rerenderCartSurfaces() {
  updateCartCount();
  renderCartPage();
  renderCheckoutPage();
}

function addToCart(itemId, button) {
  const item = getItem(itemId);
  if (!item) return;

  state.cart[itemId] = (state.cart[itemId] || 0) + 1;
  saveCart();
  rerenderCartSurfaces();
  launchCartSpark(button);
  showToast(`เพิ่ม ${item.name} แล้ว`);
}

function updateCart(itemId, nextQuantity) {
  if (nextQuantity <= 0) {
    delete state.cart[itemId];
  } else {
    state.cart[itemId] = nextQuantity;
  }

  saveCart();
  rerenderCartSurfaces();
}

let toastTimer;
function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;

  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function launchCartSpark(button) {
  if (!button || !button.getBoundingClientRect || !document.body.animate) return;
  const chip = document.querySelector(".cart-chip");
  if (!chip) return;

  const from = button.getBoundingClientRect();
  const to = chip.getBoundingClientRect();
  const spark = document.createElement("span");
  spark.className = "cart-spark";
  spark.style.left = `${from.left + from.width / 2}px`;
  spark.style.top = `${from.top + from.height / 2}px`;
  document.body.appendChild(spark);

  spark
    .animate(
      [
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        {
          transform: `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(0.4)`,
          opacity: 0.2,
        },
      ],
      { duration: 560, easing: "cubic-bezier(.2,.8,.2,1)" },
    )
    .finished.finally(() => spark.remove());
}

function bindProductControls() {
  const searchInput = document.querySelector("#searchInput");
  const sortSelect = document.querySelector("#sortSelect");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value;
      renderProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      renderProducts();
    });
  }

  document.querySelectorAll(".category-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === state.activeCategory);
    button.addEventListener("click", () => {
      state.activeCategory = button.dataset.category;
      document
        .querySelectorAll(".category-tab")
        .forEach((tab) => tab.classList.toggle("is-active", tab.dataset.category === state.activeCategory));
      renderProducts();
    });
  });
}

function bindCartControls() {
  document.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    const inc = event.target.closest("[data-inc]");
    const dec = event.target.closest("[data-dec]");
    const remove = event.target.closest("[data-remove]");
    const disabledCheckout = event.target.closest(".checkout-button.is-disabled");

    if (add) {
      addToCart(add.dataset.add, add);
    }

    if (inc) {
      updateCart(inc.dataset.inc, (state.cart[inc.dataset.inc] || 0) + 1);
    }

    if (dec) {
      updateCart(dec.dataset.dec, (state.cart[dec.dataset.dec] || 0) - 1);
    }

    if (remove) {
      updateCart(remove.dataset.remove, 0);
    }

    if (disabledCheckout) {
      event.preventDefault();
      showToast("เลือกสินค้าก่อนเข้าสู่ Checkout");
    }
  });
}

function bindPromo() {
  const promoForm = document.querySelector("#promoForm");
  const promoCode = document.querySelector("#promoCode");
  if (!promoForm || !promoCode) return;

  promoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const code = promoCode.value.trim().toUpperCase();

    if (code === "WELCOME10") {
      state.promoApplied = true;
      window.localStorage.setItem(promoKey, "WELCOME10");
      rerenderCartSurfaces();
      showToast("ใช้โค้ด WELCOME10 แล้ว");
      return;
    }

    showToast("โค้ดส่วนลดไม่ถูกต้อง");
  });
}

function bindCheckout() {
  const form = document.querySelector("#checkoutForm");
  const modal = document.querySelector("#orderModal");
  const details = document.querySelector("#orderDetails");
  const close = document.querySelector("#closeModal");

  if (!form || !modal || !details) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const lines = getCartLines();
    if (!lines.length) {
      showToast("กรุณาเลือกสินค้าอย่างน้อย 1 รายการ");
      return;
    }

    const formData = new FormData(form);
    const totals = getTotals();
    const orderNo = `SM${Date.now().toString().slice(-7)}`;
    const itemSummary = lines.map((item) => `${item.name} × ${item.quantity}`).join("<br />");

    details.innerHTML = `
      <p><strong>เลขที่คำสั่งซื้อ:</strong> ${orderNo}</p>
      <p><strong>ผู้รับ:</strong> ${formData.get("customerName")} (${formData.get("phone")})</p>
      <p><strong>รายการ:</strong><br />${itemSummary}</p>
      <p><strong>ยอดรวม:</strong> ${money.format(totals.total)}</p>
      <p><strong>ชำระเงิน:</strong> ${formData.get("payment")} | <strong>จัดส่ง:</strong> ${formData.get("delivery")}</p>
    `;

    state.cart = {};
    saveCart();
    form.reset();
    rerenderCartSurfaces();
    modal.showModal();
  });

  if (close) {
    close.addEventListener("click", () => modal.close());
  }
}

function bindMobileMenu() {
  const toggle = document.querySelector("#menuToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => document.body.classList.remove("nav-open"));
  });
}

function initReveal() {
  const revealItems = document.querySelectorAll("[data-reveal]");
  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initTilt() {
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!isFinePointer || reduceMotion) return;

  let activeCard = null;

  document.addEventListener("pointermove", (event) => {
    const card = event.target.closest?.("[data-tilt]");

    if (card !== activeCard) {
      if (activeCard) {
        activeCard.style.setProperty("--tilt-x", "0deg");
        activeCard.style.setProperty("--tilt-y", "0deg");
      }
      activeCard = card || null;
    }

    if (!card) return;

    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-x", `${(py * -9).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${(px * 11).toFixed(2)}deg`);
  });

  document.addEventListener("pointerleave", () => {
    if (activeCard) {
      activeCard.style.setProperty("--tilt-x", "0deg");
      activeCard.style.setProperty("--tilt-y", "0deg");
      activeCard = null;
    }
  }, true);
}

function initHeroParallax() {
  const stage = document.querySelector("[data-hero-stage]");
  if (!stage) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const layers = stage.querySelectorAll("[data-depth]");
  if (reduceMotion || !layers.length) return;

  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.depth || 0);
      layer.style.transform = `translate3d(${(px * depth * -1).toFixed(1)}px, ${(py * depth * -1).toFixed(1)}px, 0) rotateX(${(py * depth * -0.4).toFixed(2)}deg) rotateY(${(px * depth * 0.5).toFixed(2)}deg)`;
    });
  });

  stage.addEventListener("pointerleave", () => {
    layers.forEach((layer) => {
      layer.style.transform = "translate3d(0, 0, 0) rotateX(0) rotateY(0)";
    });
  });
}

function initOrbitStage() {
  const stage = document.querySelector("#orbitStage");
  const ring = document.querySelector("#orbitRing");
  if (!stage || !ring) return;

  const items = products.slice(0, 8);
  const count = items.length;
  const radius = stage.clientWidth < 620 ? 190 : 300;

  ring.innerHTML = items
    .map((product, index) => {
      const angle = (360 / count) * index;
      return `
        <li class="orbit-item" style="--angle: ${angle}deg; --radius: ${radius}px;">
          <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" />
          <span class="orbit-item-name">${product.name}</span>
          <span class="orbit-item-price">${money.format(product.price)}</span>
        </li>
      `;
    })
    .join("");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    ring.style.animation = "none";
    ring.style.transform = "rotateY(0deg)";
    return;
  }

  let dragging = false;
  let lastX = 0;
  let rotation = 0;

  const readCurrentRotation = () => {
    const style = window.getComputedStyle(ring);
    const matrix = style.transform;
    if (matrix && matrix !== "none") {
      const match = matrix.match(/matrix3d\(([^)]+)\)/);
      if (match) {
        const values = match[1].split(",").map(Number);
        rotation = Math.atan2(values[8], values[0]) * (180 / Math.PI);
      }
    }
  };

  stage.addEventListener("pointerdown", (event) => {
    readCurrentRotation();
    dragging = true;
    lastX = event.clientX;
    ring.style.animationPlayState = "paused";
    stage.classList.add("is-dragging");
    stage.setPointerCapture(event.pointerId);
  });

  stage.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const delta = event.clientX - lastX;
    lastX = event.clientX;
    rotation += delta * 0.35;
    ring.style.transform = `rotateY(${rotation}deg)`;
  });

  const endDrag = () => {
    dragging = false;
    stage.classList.remove("is-dragging");
  };

  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);

  stage.addEventListener("mouseenter", () => {
    if (!dragging) ring.style.animationPlayState = "paused";
  });
  stage.addEventListener("mouseleave", () => {
    if (!dragging) ring.style.animationPlayState = "running";
  });
}

setActiveNav();
bindMobileMenu();
bindProductControls();
bindCartControls();
bindPromo();
bindCheckout();
renderFeatured();
renderProducts();
renderDeals();
rerenderCartSurfaces();
initReveal();
initTilt();
initHeroParallax();
initOrbitStage();
