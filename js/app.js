/**
 * SENJA COFFEE - Self Order Application Prototype
 * Interactive Logic, Screen Transitions, Customization Engine,
 * Cart & Checkout, Real-time Barista Order Tracking Simulation.
 */

// ==========================================
// 1. DATASET PRODUK & MENU COFFEE SHOP
// ==========================================
const MENU_DATA = [
  {
    id: 'prod-1',
    name: 'Caramel Macchiato',
    category: 'kopi',
    price: 28000,
    rating: 4.9,
    reviews: '1.2k',
    tag: 'Best Seller',
    isFavorite: true,
    image: 'assets/images/caramel_macchiato.jpg',
    description: 'Kombinasi harmonis double espresso arabika segar, susu steamed lembut, sirup vanilla bourbon, dan lelehan saus karamel keemasan yang manis legit.',
    sizes: [
      { id: 's', label: 'Small', oz: '8 oz', extraPrice: 0 },
      { id: 'm', label: 'Medium', oz: '12 oz', extraPrice: 4000 },
      { id: 'l', label: 'Large', oz: '16 oz', extraPrice: 8000 }
    ],
    temperatures: ['cold', 'hot'],
    hasIceLevel: true,
    addons: [
      { id: 'extra-shot', name: 'Extra Espresso Shot', price: 5000 },
      { id: 'oat-milk', name: 'Ganti Oat Milk (Plant-based)', price: 6000 },
      { id: 'caramel-sauce', name: 'Extra Drizzle Karamel', price: 3000 },
      { id: 'whipped-cream', name: 'Whipped Cream Dingin', price: 4000 }
    ]
  },
  {
    id: 'prod-2',
    name: 'Artisan Cafe Latte',
    category: 'kopi',
    price: 26000,
    rating: 4.8,
    reviews: '920',
    tag: 'Barista Choice',
    isFavorite: true,
    image: 'assets/images/hot_latte.jpg',
    description: 'Espresso double shot dengan microfoam susu segar bertekstur sutra dan hiasan latte art rosetta. Kelembutan klasik yang menghangatkan suasana.',
    sizes: [
      { id: 's', label: 'Small', oz: '8 oz', extraPrice: 0 },
      { id: 'm', label: 'Medium', oz: '12 oz', extraPrice: 4000 },
      { id: 'l', label: 'Large', oz: '16 oz', extraPrice: 8000 }
    ],
    temperatures: ['hot', 'cold'],
    hasIceLevel: true,
    addons: [
      { id: 'extra-shot', name: 'Extra Espresso Shot', price: 5000 },
      { id: 'oat-milk', name: 'Ganti Oat Milk', price: 6000 },
      { id: 'vanilla-syrup', name: 'Vanilla Syrup Hint', price: 4000 }
    ]
  },
  {
    id: 'prod-3',
    name: 'Iced Matcha Green Tea',
    category: 'teh',
    price: 30000,
    rating: 4.9,
    reviews: '850',
    tag: 'Favorit',
    isFavorite: true,
    image: 'assets/images/matcha_latte.jpg',
    description: 'Matcha ceremonial grade asli Uji, Kyoto yang dikocok tradisional dengan chasen bambu, dipadukan susu dingin lembut dan busa cold foam hijau segar.',
    sizes: [
      { id: 's', label: 'Small', oz: '8 oz', extraPrice: 0 },
      { id: 'm', label: 'Medium', oz: '12 oz', extraPrice: 4000 },
      { id: 'l', label: 'Large', oz: '16 oz', extraPrice: 8000 }
    ],
    temperatures: ['cold', 'hot'],
    hasIceLevel: true,
    addons: [
      { id: 'oat-milk', name: 'Ganti Oat Milk', price: 6000 },
      { id: 'extra-matcha', name: 'Double Matcha Powder', price: 5000 },
      { id: 'red-bean', name: 'Topping Red Bean Manis', price: 4000 }
    ]
  },
  {
    id: 'prod-4',
    name: 'Sparkling Peach Tea',
    category: 'teh',
    price: 24000,
    rating: 4.7,
    reviews: '530',
    tag: 'Segar',
    isFavorite: false,
    image: 'assets/images/peach_tea.jpg',
    description: 'Seduhan black tea premium dengan pure buah peach manis, bulir irisan peach segar, sentuhan soda berbuih, dan aroma daun mint organik.',
    sizes: [
      { id: 's', label: 'Small', oz: '12 oz', extraPrice: 0 },
      { id: 'l', label: 'Large', oz: '16 oz', extraPrice: 5000 }
    ],
    temperatures: ['cold'],
    hasIceLevel: true,
    addons: [
      { id: 'extra-peach', name: 'Ekstra Irisan Peach', price: 5000 },
      { id: 'nata-de-coco', name: 'Topping Nata de Coco', price: 3000 },
      { id: 'chia-seeds', name: 'Chia Seeds Sehat', price: 3000 }
    ]
  },
  {
    id: 'prod-5',
    name: 'Golden Butter Croissant',
    category: 'pastry',
    price: 22000,
    rating: 4.9,
    reviews: '970',
    tag: 'Fresh Baked',
    isFavorite: true,
    image: 'assets/images/croissant.jpg',
    description: 'Croissant khas Paris yang dipanggang segar setiap pagi dengan 100% mentega New Zealand. Tekstur luar renyah berlapis dengan aroma butter wangi semerbak.',
    sizes: [
      { id: 'std', label: '1 Pcs Reguler', oz: 'Porsi Standar', extraPrice: 0 },
      { id: 'pair', label: 'Paket 2 Pcs', oz: 'Hemat 10%', extraPrice: 18000 }
    ],
    temperatures: ['hot'],
    hasIceLevel: false,
    addons: [
      { id: 'jam-strawberry', name: 'Selai Strawberry Homemade', price: 4000 },
      { id: 'butter-spread', name: 'Extra Butter Block', price: 3000 },
      { id: 'melted-cheese', name: 'Lelehan Keju Cheddar', price: 5000 }
    ]
  },
  {
    id: 'prod-6',
    name: 'Truffle Parmesan Fries',
    category: 'cemilan',
    price: 27000,
    rating: 4.8,
    reviews: '640',
    tag: 'Gurih',
    isFavorite: false,
    image: 'assets/images/truffle_fries.jpg',
    description: 'Potongan kentang pilihan digoreng renyah keemasan, disiram aroma minyak truffle putih mewah, parutan keju parmesan berlimpah, dan saus garlic aioli.',
    sizes: [
      { id: 'reg', label: 'Porsi Reguler', oz: '150 gr', extraPrice: 0 },
      { id: 'jumbo', label: 'Porsi Jumbo', oz: '250 gr', extraPrice: 10000 }
    ],
    temperatures: ['hot'],
    hasIceLevel: false,
    addons: [
      { id: 'extra-aioli', name: 'Extra Saus Garlic Aioli', price: 4000 },
      { id: 'parmesan-extra', name: 'Extra Keju Parmesan', price: 5000 },
      { id: 'chili-flake', name: 'Bubuk Cabai Pedas', price: 2000 }
    ]
  }
];

// ==========================================
// 2. STATE MANAGEMENT APLIKASI
// ==========================================
const AppState = {
  activeScreen: 'home',
  selectedCategory: 'all',
  searchQuery: '',
  cart: [],
  activeCustomization: null,
  appliedPromo: null,
  orderType: 'dine-in', // 'dine-in' or 'takeaway'
  tableNumber: '08',
  selectedPayment: 'qris', // 'qris' or 'cash'
  
  // Real-time tracking state
  activeOrder: null,
  trackingTimer: null,
  trackingStage: 1, // 1: Diterima, 2: Menyiapkan, 3: Siap, 4: Diambil
  isSimulationRunning: false,
  
  // Riwayat
  orderHistory: [
    {
      id: 'KS-8120',
      date: 'Kemarin, 15:30',
      items: '1x Caramel Macchiato (M), 1x Butter Croissant',
      total: 54000,
      status: 'Selesai'
    }
  ]
};

// ==========================================
// 3. SOUND SYNTHESIZER (WEB AUDIO API)
// ==========================================
function playChime(type = 'success') {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } else if (type === 'stage-advance') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.setValueAtTime(554.37, audioCtx.currentTime + 0.1);
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.5);
    }
  } catch (e) {
    // Audio might be blocked until user gesture, safely ignore
  }
}

// ==========================================
// 4. SCREEN NAVIGATION CONTROLLER
// ==========================================
function switchScreen(targetScreenId) {
  AppState.activeScreen = targetScreenId;

  // Update screens visibility
  const allScreens = document.querySelectorAll('.screen');
  allScreens.forEach(sc => {
    sc.classList.remove('active');
  });

  const targetEl = document.getElementById(`screen-${targetScreenId}`);
  if (targetEl) {
    targetEl.classList.add('active');
    targetEl.scrollTop = 0;
  }

  // Update Bottom Nav active states
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === targetScreenId);
  });

  // Screen specific re-renders
  if (targetScreenId === 'cart') {
    renderCartScreen();
  } else if (targetScreenId === 'tracking') {
    renderTrackingScreen();
  } else if (targetScreenId === 'history') {
    renderHistoryScreen();
  }

  updateFloatingCart();
  updateCartBadge();
}

// ==========================================
// 5. TOAST NOTIFICATIONS
// ==========================================
let toastTimer = null;
function showToast(message, icon = '✓') {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toastIcon.textContent = icon;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Format Rupiah
function formatRupiah(num) {
  return 'Rp ' + Number(num).toLocaleString('id-ID');
}

// Live Time for Smartphone Status Bar
function startLiveClock() {
  const timeEl = document.getElementById('phone-live-time');
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    if (timeEl) timeEl.textContent = `${hours}:${mins}`;
  }
  updateTime();
  setInterval(updateTime, 30000);
}

// ==========================================
// 6. SCREEN 1: HOME & EXPLORE MENU
// ==========================================
function renderHomeMenu() {
  const favContainer = document.getElementById('favorites-carousel');
  const gridContainer = document.getElementById('menu-grid');
  const emptyState = document.getElementById('empty-search-state');

  if (!favContainer || !gridContainer) return;

  // Filter items
  const query = AppState.searchQuery.toLowerCase().trim();
  const category = AppState.selectedCategory;

  const filteredItems = MENU_DATA.filter(item => {
    const matchCategory = (category === 'all' || item.category === category);
    const matchSearch = item.name.toLowerCase().includes(query) ||
                        item.description.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  // Render Favorites (Best Sellers)
  const favorites = MENU_DATA.filter(i => i.isFavorite);
  favContainer.innerHTML = favorites.map(item => `
    <div class="favorite-card" onclick="openProductDetail('${item.id}')">
      <div class="card-media">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <span class="badge-rating">★ ${item.rating}</span>
        <span class="badge-tag">${item.tag}</span>
      </div>
      <div class="card-content">
        <h4 class="card-title">${item.name}</h4>
        <p class="card-desc">${item.description}</p>
        <div class="card-footer">
          <span class="card-price">${formatRupiah(item.price)}</span>
          <button class="btn-quick-add" onclick="event.stopPropagation(); openProductDetail('${item.id}')" title="Kustomisasi & Pesan">
            +
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Render Main Menu Grid
  if (filteredItems.length === 0) {
    gridContainer.innerHTML = '';
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
    gridContainer.innerHTML = filteredItems.map(item => `
      <div class="menu-item-card" onclick="openProductDetail('${item.id}')">
        <div class="card-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <span class="badge-rating">★ ${item.rating}</span>
        </div>
        <div class="card-content">
          <h4 class="card-title">${item.name}</h4>
          <p class="card-desc">${item.description}</p>
          <div class="card-footer">
            <span class="card-price">${formatRupiah(item.price)}</span>
            <button class="btn-quick-add" onclick="event.stopPropagation(); openProductDetail('${item.id}')" title="Pesan">
              +
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ==========================================
// 7. SCREEN 2: DETAIL PRODUK & KUSTOMISASI
// ==========================================
function openProductDetail(productId) {
  const product = MENU_DATA.find(p => p.id === productId);
  if (!product) return;

  // Initialize customization state with defaults
  AppState.activeCustomization = {
    productId: product.id,
    basePrice: product.price,
    selectedSize: product.sizes[0].id,
    selectedTemp: product.temperatures[0],
    selectedSweetness: '100%',
    selectedIce: product.hasIceLevel ? 'normal' : null,
    selectedAddons: [],
    notes: '',
    quantity: 1
  };

  renderProductDetailScreen(product);
  switchScreen('detail');
}

function renderProductDetailScreen(product) {
  const cust = AppState.activeCustomization;

  // Header and visuals
  document.getElementById('detail-hero-img').src = product.image;
  document.getElementById('detail-hero-img').alt = product.name;
  document.getElementById('detail-title').textContent = product.name;
  document.getElementById('detail-rating-text').textContent = `★ ${product.rating} (${product.reviews} ulasan)`;
  document.getElementById('detail-description').textContent = product.description;

  // Size Options
  const sizeGrid = document.getElementById('detail-sizes-grid');
  sizeGrid.innerHTML = product.sizes.map(size => `
    <div class="size-option-card ${cust.selectedSize === size.id ? 'active' : ''}" onclick="selectCustomSize('${size.id}')">
      <div class="size-cup-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
          <line x1="6" y1="2" x2="6" y2="4"></line>
          <line x1="10" y1="2" x2="10" y2="4"></line>
          <line x1="14" y1="2" x2="14" y2="4"></line>
        </svg>
      </div>
      <span class="size-name">${size.label}</span>
      <span class="size-oz">${size.oz}</span>
      <span class="size-add-price">${size.extraPrice === 0 ? 'Standar' : '+ ' + formatRupiah(size.extraPrice)}</span>
    </div>
  `).join('');

  // Temperature Options
  const tempSection = document.getElementById('detail-temp-section');
  const tempGrid = document.getElementById('detail-temp-grid');
  if (product.temperatures.length > 1) {
    tempSection.style.display = 'block';
    tempGrid.innerHTML = `
      <div class="temp-card ${cust.selectedTemp === 'cold' ? 'active' : ''}" data-temp="ice" onclick="selectCustomTemp('cold')">
        <div class="temp-icon">🧊</div>
        <div>
          <div class="temp-title">Dingin (Iced)</div>
          <div class="temp-sub">Segar & Menyegarkan</div>
        </div>
      </div>
      <div class="temp-card ${cust.selectedTemp === 'hot' ? 'active' : ''}" data-temp="hot" onclick="selectCustomTemp('hot')">
        <div class="temp-icon">🔥</div>
        <div>
          <div class="temp-title">Hangat (Hot)</div>
          <div class="temp-sub">Nyaman & Nikmat</div>
        </div>
      </div>
    `;
  } else {
    tempSection.style.display = 'none';
  }

  // Ice Level options (Only relevant if cold)
  const iceSection = document.getElementById('detail-ice-section');
  if (cust.selectedTemp === 'cold' && product.hasIceLevel) {
    iceSection.style.display = 'block';
    renderIceLevelControl();
  } else {
    iceSection.style.display = 'none';
  }

  // Sugar Level options
  const sugarSection = document.getElementById('detail-sugar-section');
  if (product.category === 'kopi' || product.category === 'teh') {
    sugarSection.style.display = 'block';
    renderSugarLevelControl();
  } else {
    sugarSection.style.display = 'none';
  }

  // Addons Section
  const addonsSection = document.getElementById('detail-addons-section');
  const addonsList = document.getElementById('detail-addons-list');
  if (product.addons && product.addons.length > 0) {
    addonsSection.style.display = 'block';
    addonsList.innerHTML = product.addons.map(addon => {
      const isSelected = cust.selectedAddons.includes(addon.id);
      return `
        <div class="addon-item ${isSelected ? 'selected' : ''}" onclick="toggleAddon('${addon.id}')">
          <div class="addon-left">
            <div class="custom-checkbox">${isSelected ? '✓' : ''}</div>
            <span class="addon-title">${addon.name}</span>
          </div>
          <span class="addon-price">+ ${formatRupiah(addon.price)}</span>
        </div>
      `;
    }).join('');
  } else {
    addonsSection.style.display = 'none';
  }

  // Notes
  const notesEl = document.getElementById('detail-notes-input');
  if (notesEl) notesEl.value = cust.notes;

  updateCustomizationTotal();
}

function selectCustomSize(sizeId) {
  AppState.activeCustomization.selectedSize = sizeId;
  const product = MENU_DATA.find(p => p.id === AppState.activeCustomization.productId);
  renderProductDetailScreen(product);
}

function selectCustomTemp(temp) {
  AppState.activeCustomization.selectedTemp = temp;
  const product = MENU_DATA.find(p => p.id === AppState.activeCustomization.productId);
  renderProductDetailScreen(product);
}

function selectSugarLevel(level) {
  AppState.activeCustomization.selectedSweetness = level;
  renderSugarLevelControl();
}

function renderSugarLevelControl() {
  const levels = ['100%', '70%', '30%', '0%'];
  const labels = ['Normal (100%)', 'Less (70%)', 'Low (30%)', 'Tanpa Gula (0%)'];
  const container = document.getElementById('detail-sugar-control');
  if (!container) return;

  container.innerHTML = levels.map((lvl, idx) => `
    <div class="segmented-item ${AppState.activeCustomization.selectedSweetness === lvl ? 'active' : ''}" onclick="selectSugarLevel('${lvl}')">
      ${lvl}
    </div>
  `).join('');
}

function selectIceLevel(level) {
  AppState.activeCustomization.selectedIce = level;
  renderIceLevelControl();
}

function renderIceLevelControl() {
  const levels = ['normal', 'less', 'extra'];
  const labels = ['Normal Es', 'Sedikit Es', 'Ekstra Es'];
  const container = document.getElementById('detail-ice-control');
  if (!container) return;

  container.innerHTML = levels.map((lvl, idx) => `
    <div class="segmented-item ${AppState.activeCustomization.selectedIce === lvl ? 'active' : ''}" onclick="selectIceLevel('${lvl}')">
      ${labels[idx]}
    </div>
  `).join('');
}

function toggleAddon(addonId) {
  const list = AppState.activeCustomization.selectedAddons;
  const index = list.indexOf(addonId);
  if (index > -1) {
    list.splice(index, 1);
  } else {
    list.push(addonId);
  }
  const product = MENU_DATA.find(p => p.id === AppState.activeCustomization.productId);
  renderProductDetailScreen(product);
}

function changeDetailQty(delta) {
  const cust = AppState.activeCustomization;
  const newQty = cust.quantity + delta;
  if (newQty >= 1 && newQty <= 20) {
    cust.quantity = newQty;
    document.getElementById('detail-qty-number').textContent = cust.quantity;
    updateCustomizationTotal();
  }
}

function calculateCustomItemUnitPrice(product, cust) {
  let unit = product.price;

  // Size extra
  const sizeObj = product.sizes.find(s => s.id === cust.selectedSize);
  if (sizeObj) unit += sizeObj.extraPrice;

  // Addons
  if (cust.selectedAddons && cust.selectedAddons.length > 0) {
    cust.selectedAddons.forEach(addonId => {
      const addonObj = product.addons.find(a => a.id === addonId);
      if (addonObj) unit += addonObj.price;
    });
  }

  return unit;
}

function updateCustomizationTotal() {
  const cust = AppState.activeCustomization;
  const product = MENU_DATA.find(p => p.id === cust.productId);
  if (!product) return;

  const unitPrice = calculateCustomItemUnitPrice(product, cust);
  const totalPrice = unitPrice * cust.quantity;

  document.getElementById('detail-qty-number').textContent = cust.quantity;
  document.getElementById('detail-total-price-text').textContent = formatRupiah(totalPrice);
}

// Add Item to Cart with Animation
function submitAddToCart() {
  const cust = AppState.activeCustomization;
  const product = MENU_DATA.find(p => p.id === cust.productId);
  if (!product) return;

  // Notes
  const notesEl = document.getElementById('detail-notes-input');
  cust.notes = notesEl ? notesEl.value.trim() : '';

  const unitPrice = calculateCustomItemUnitPrice(product, cust);

  // Construct label summary for options
  const sizeObj = product.sizes.find(s => s.id === cust.selectedSize);
  const tempLabel = cust.selectedTemp === 'cold' ? 'Dingin' : 'Hangat';
  const sugarLabel = `Gula ${cust.selectedSweetness}`;
  const iceLabel = (cust.selectedTemp === 'cold' && cust.selectedIce) ? 
    (cust.selectedIce === 'normal' ? 'Normal Es' : cust.selectedIce === 'less' ? 'Sedikit Es' : 'Ekstra Es') : null;

  const addonNames = cust.selectedAddons.map(id => {
    const a = product.addons.find(x => x.id === id);
    return a ? a.name : '';
  }).filter(Boolean);

  const cartItem = {
    cartId: 'cart-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    productId: product.id,
    name: product.name,
    image: product.image,
    sizeLabel: sizeObj ? sizeObj.label : 'Reguler',
    tempLabel: tempLabel,
    sugarLabel: sugarLabel,
    iceLabel: iceLabel,
    addons: addonNames,
    notes: cust.notes,
    unitPrice: unitPrice,
    quantity: cust.quantity
  };

  AppState.cart.push(cartItem);
  playChime('success');
  showToast(`"${product.name}" berhasil dimasukkan ke keranjang!`, '🛒');

  // Return to home with floating cart visible
  switchScreen('home');
}

// ==========================================
// 8. SCREEN 3: RINGKASAN PESANAN & CHECKOUT
// ==========================================
function renderCartScreen() {
  const container = document.getElementById('cart-items-container');
  const emptyView = document.getElementById('empty-cart-view');
  const checkoutFooter = document.getElementById('checkout-sticky-footer');
  const itemsSection = document.getElementById('cart-active-section');

  if (AppState.cart.length === 0) {
    container.innerHTML = '';
    emptyView.style.display = 'block';
    if (itemsSection) itemsSection.style.display = 'none';
    if (checkoutFooter) checkoutFooter.style.display = 'none';
    return;
  }

  emptyView.style.display = 'none';
  if (itemsSection) itemsSection.style.display = 'block';
  if (checkoutFooter) checkoutFooter.style.display = 'flex';

  container.innerHTML = AppState.cart.map(item => {
    const optionsText = [
      item.sizeLabel,
      item.tempLabel,
      item.sugarLabel,
      item.iceLabel,
      ...item.addons
    ].filter(Boolean).join(' • ');

    return `
      <div class="cart-item-card">
        <img class="cart-item-thumb" src="${item.image}" alt="${item.name}" />
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <p class="cart-item-options">${optionsText}</p>
          ${item.notes ? `<p class="cart-item-options" style="color:var(--accent-gold); font-style:italic;">"${item.notes}"</p>` : ''}
          <div class="cart-item-bottom">
            <span class="cart-item-total">${formatRupiah(item.unitPrice * item.quantity)}</span>
            <div class="cart-item-actions">
              <div class="cart-item-qty">
                <button class="cart-qty-btn" onclick="updateCartItemQty('${item.cartId}', -1)">-</button>
                <span class="cart-qty-num">${item.quantity}</span>
                <button class="cart-qty-btn" onclick="updateCartItemQty('${item.cartId}', 1)">+</button>
              </div>
              <button class="cart-item-delete" onclick="removeCartItem('${item.cartId}')" title="Hapus">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateBillCalculation();
}

function updateCartItemQty(cartId, delta) {
  const item = AppState.cart.find(c => c.cartId === cartId);
  if (!item) return;

  const newQty = item.quantity + delta;
  if (newQty <= 0) {
    removeCartItem(cartId);
  } else {
    item.quantity = newQty;
    renderCartScreen();
    updateFloatingCart();
    updateCartBadge();
  }
}

function removeCartItem(cartId) {
  AppState.cart = AppState.cart.filter(c => c.cartId !== cartId);
  renderCartScreen();
  updateFloatingCart();
  updateCartBadge();
  showToast('Item dihapus dari keranjang', '🗑️');
}

function setOrderType(type) {
  AppState.orderType = type;
  document.getElementById('btn-order-dinein').classList.toggle('active', type === 'dine-in');
  document.getElementById('btn-order-takeaway').classList.toggle('active', type === 'takeaway');
  
  const tableBox = document.getElementById('table-number-box');
  if (tableBox) {
    tableBox.style.display = type === 'dine-in' ? 'flex' : 'none';
  }
}

function setPaymentMethod(method) {
  AppState.selectedPayment = method;
  document.querySelectorAll('.payment-option-row').forEach(row => {
    row.classList.toggle('selected', row.dataset.method === method);
  });
}

function applyVoucherCode(codeToApply) {
  const inputEl = document.getElementById('voucher-input');
  const code = (codeToApply || (inputEl ? inputEl.value : '')).trim().toUpperCase();

  if (code === 'TENTANGKITA' || code === 'SENJAHEMAT') {
    AppState.appliedPromo = {
      code: 'TENTANGKITA',
      type: 'percent',
      value: 0.2, // 20%
      desc: 'Diskon 20% (Promo Spesial Tentang Kita)'
    };
    showToast('Voucher TENTANGKITA berhasil digunakan! Diskon 20%', '🎉');
  } else if (code === 'FIRSTBREW') {
    AppState.appliedPromo = {
      code: 'FIRSTBREW',
      type: 'fixed',
      value: 10000,
      desc: 'Potongan Rp 10.000 (First Brew)'
    };
    showToast('Voucher FIRSTBREW terpasang! Diskon Rp 10.000', '🎉');
  } else {
    showToast('Kode voucher tidak valid atau telah berakhir.', '⚠️');
    return;
  }

  if (inputEl) inputEl.value = code;
  updateBillCalculation();
}

function updateBillCalculation() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  
  // Promo calculation
  let discountAmount = 0;
  if (AppState.appliedPromo) {
    if (AppState.appliedPromo.type === 'percent') {
      discountAmount = Math.round(subtotal * AppState.appliedPromo.value);
    } else {
      discountAmount = AppState.appliedPromo.value;
    }
    if (discountAmount > subtotal) discountAmount = subtotal;
  }

  const serviceFee = subtotal > 0 ? 2000 : 0;
  const taxPB1 = Math.round((subtotal - discountAmount) * 0.1); // Pajak 10%
  const grandTotal = Math.max(0, subtotal - discountAmount + serviceFee + taxPB1);

  // Update DOM elements
  document.getElementById('bill-subtotal').textContent = formatRupiah(subtotal);
  
  const discountRow = document.getElementById('bill-discount-row');
  const discountVal = document.getElementById('bill-discount-val');
  if (discountAmount > 0) {
    discountRow.style.display = 'flex';
    discountVal.textContent = '- ' + formatRupiah(discountAmount);
  } else {
    discountRow.style.display = 'none';
  }

  document.getElementById('bill-service-fee').textContent = formatRupiah(serviceFee);
  document.getElementById('bill-tax').textContent = formatRupiah(taxPB1);
  document.getElementById('bill-grand-total').textContent = formatRupiah(grandTotal);
  document.getElementById('footer-total-amount').textContent = formatRupiah(grandTotal);

  return { subtotal, discountAmount, serviceFee, taxPB1, grandTotal };
}

// Proceed to Checkout / Payment Confirmation
function proceedCheckout() {
  if (AppState.cart.length === 0) {
    showToast('Keranjang Anda masih kosong!', '⚠️');
    return;
  }

  const { grandTotal } = updateBillCalculation();

  if (AppState.selectedPayment === 'qris') {
    // Show QRIS modal for realistic scanning experience
    document.getElementById('qris-modal-amount').textContent = formatRupiah(grandTotal);
    document.getElementById('qris-modal').classList.add('show');
  } else {
    // Cash on Counter, directly confirm
    completeOrderProcess();
  }
}

function confirmQRISPayment() {
  document.getElementById('qris-modal').classList.remove('show');
  completeOrderProcess();
}

function cancelQRISPayment() {
  document.getElementById('qris-modal').classList.remove('show');
}

function completeOrderProcess() {
  const { grandTotal } = updateBillCalculation();
  const queueNo = 'A-' + Math.floor(10 + Math.random() * 89);
  const orderId = 'TK-' + Math.floor(1000 + Math.random() * 9000);

  // Create Active Order Object
  AppState.activeOrder = {
    orderId: orderId,
    queueNo: queueNo,
    time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    type: AppState.orderType === 'dine-in' ? `Dine-In (Meja #${AppState.tableNumber})` : 'Takeaway (Bawa Pulang)',
    paymentMethod: AppState.selectedPayment === 'qris' ? 'QRIS (Lunas)' : 'Tunai di Kasir',
    items: [...AppState.cart],
    total: grandTotal,
    stage: 1 // Start at Stage 1: Diterima
  };

  // Add to History
  AppState.orderHistory.unshift({
    id: orderId,
    date: 'Hari ini, ' + AppState.activeOrder.time,
    items: AppState.cart.map(i => `${i.quantity}x ${i.name}`).join(', '),
    total: grandTotal,
    status: 'Diproses'
  });

  // Empty Cart
  AppState.cart = [];
  AppState.appliedPromo = null;

  // Switch to Screen 4 (Order Tracking)
  switchScreen('tracking');
  startOrderTrackingSimulation();
  playChime('stage-advance');
  showToast(`Pesanan #${orderId} Diterima Barista!`, '☕');
}

// ==========================================
// 9. SCREEN 4: PELACAKAN STATUS REAL-TIME
// ==========================================
const STAGE_DETAILS = [
  {
    step: 1,
    title: 'Diterima',
    desc: 'Pesanan masuk ke sistem barista & antrean kasir',
    baristaMsg: 'Pesanan Anda sudah masuk dalam antrean barista kami.',
    progressPct: 15
  },
  {
    step: 2,
    title: 'Menyiapkan',
    desc: 'Pesanan sedang diracik dengan teliti oleh barista',
    baristaMsg: 'Barista Budi sedang menggiling biji kopi dan steaming susu...',
    progressPct: 50
  },
  {
    step: 3,
    title: 'Siap',
    desc: 'Pesanan sudah selesai dibuat, siap diambil di counter',
    baristaMsg: 'Pesanan telah siap di Counter Pengambilan #01!',
    progressPct: 85
  },
  {
    step: 4,
    title: 'Diambil',
    desc: 'Pesanan diserahkan ke pelanggan. Selamat menikmati!',
    baristaMsg: 'Terima kasih telah memesan di Kedai Kopi Tentang Kita!',
    progressPct: 100
  }
];

function renderTrackingScreen() {
  const order = AppState.activeOrder;
  if (!order) {
    // If no active order, show dummy default order
    AppState.activeOrder = {
      orderId: 'TK-8924',
      queueNo: 'A-24',
      time: '10:25',
      type: 'Dine-In (Meja #08)',
      paymentMethod: 'QRIS (Lunas)',
      items: [
        { name: 'Caramel Macchiato', quantity: 1, unitPrice: 32000, sizeLabel: 'Medium' },
        { name: 'Golden Butter Croissant', quantity: 1, unitPrice: 22000, sizeLabel: '1 Pcs' }
      ],
      total: 56200,
      stage: AppState.trackingStage || 1
    };
  }

  const currentOrder = AppState.activeOrder;
  const stage = currentOrder.stage;

  // Header and Ticket
  document.getElementById('tracking-order-id').textContent = currentOrder.orderId;
  document.getElementById('ticket-queue-number').textContent = currentOrder.queueNo;
  document.getElementById('ticket-order-type').textContent = currentOrder.type;
  document.getElementById('ticket-barcode-text').textContent = `||| | |||| | ${currentOrder.orderId} || |||`;

  // Update ETA based on stage
  const etaEl = document.getElementById('ticket-eta-pill');
  if (stage === 1) etaEl.textContent = '⏱️ Estimasi: 8 - 12 Menit';
  else if (stage === 2) etaEl.textContent = '⏱️ Estimasi: 4 - 6 Menit';
  else if (stage === 3) etaEl.textContent = '✨ Siap Diambil Sekarang!';
  else etaEl.textContent = '✅ Pesanan Selesai';

  // Update Barista Activity Card
  const stageInfo = STAGE_DETAILS[stage - 1];
  document.getElementById('barista-live-msg').textContent = stageInfo.baristaMsg;

  // Update 4-Stage Timeline Nodes
  for (let s = 1; s <= 4; s++) {
    const stepEl = document.getElementById(`timeline-step-${s}`);
    if (!stepEl) continue;

    stepEl.classList.remove('completed', 'active', 'pending');
    if (s < stage) {
      stepEl.classList.add('completed');
    } else if (s === stage) {
      stepEl.classList.add('active');
    } else {
      stepEl.classList.add('pending');
    }
  }

  // Update Timeline Progress Line Height
  const progressLine = document.getElementById('timeline-progress-line');
  if (progressLine) {
    progressLine.style.height = `${stageInfo.progressPct}%`;
  }

  // Render Accordion Ordered Items Summary
  const accordionBody = document.getElementById('tracking-items-accordion');
  if (accordionBody) {
    accordionBody.innerHTML = currentOrder.items.map(it => `
      <div class="accordion-item-row">
        <span>${it.quantity}x ${it.name} (${it.sizeLabel || 'Reguler'})</span>
        <span>${formatRupiah(it.unitPrice * it.quantity)}</span>
      </div>
    `).join('') + `
      <div class="accordion-item-row" style="font-weight:700; color:var(--text-main); border-top:1px dashed var(--border-subtle); padding-top:6px; margin-top:4px;">
        <span>Total (${currentOrder.paymentMethod})</span>
        <span style="color:var(--primary);">${formatRupiah(currentOrder.total)}</span>
      </div>
    `;
  }
}

// Barista Simulation Engine
function startOrderTrackingSimulation() {
  clearInterval(AppState.trackingTimer);
  AppState.isSimulationRunning = true;
  updateSimButtonsUI();

  AppState.trackingTimer = setInterval(() => {
    if (AppState.activeOrder && AppState.activeOrder.stage < 4) {
      AppState.activeOrder.stage += 1;
      AppState.trackingStage = AppState.activeOrder.stage;
      playChime('stage-advance');
      renderTrackingScreen();

      if (AppState.activeOrder.stage === 3) {
        showToast('Pesanan Anda SIAP diambil di Counter!', '🔔');
      } else if (AppState.activeOrder.stage === 4) {
        showToast('Pesanan telah diterima. Selamat Menikmati!', '✨');
        clearInterval(AppState.trackingTimer);
        AppState.isSimulationRunning = false;
        updateSimButtonsUI();
      }
    } else {
      clearInterval(AppState.trackingTimer);
      AppState.isSimulationRunning = false;
      updateSimButtonsUI();
    }
  }, 9000); // Advances stage every 9 seconds
}

function manualAdvanceSimulation() {
  if (AppState.activeOrder && AppState.activeOrder.stage < 4) {
    AppState.activeOrder.stage += 1;
    AppState.trackingStage = AppState.activeOrder.stage;
    playChime('stage-advance');
    renderTrackingScreen();
    showToast(`Status maju ke tahap ${AppState.activeOrder.stage}: ${STAGE_DETAILS[AppState.activeOrder.stage - 1].title}`, '⏩');
  } else {
    showToast('Pesanan sudah mencapai tahap akhir (Diambil)', 'ℹ️');
  }
}

function resetSimulation() {
  clearInterval(AppState.trackingTimer);
  AppState.isSimulationRunning = false;
  if (AppState.activeOrder) {
    AppState.activeOrder.stage = 1;
    AppState.trackingStage = 1;
  }
  renderTrackingScreen();
  updateSimButtonsUI();
  showToast('Simulasi status pesanan di-reset ke tahap 1 (Diterima)', '🔄');
}

function toggleAutoSimulation() {
  if (AppState.isSimulationRunning) {
    clearInterval(AppState.trackingTimer);
    AppState.isSimulationRunning = false;
    showToast('Simulasi otomatis dijeda.', '⏸️');
  } else {
    if (AppState.activeOrder && AppState.activeOrder.stage >= 4) {
      AppState.activeOrder.stage = 1;
    }
    startOrderTrackingSimulation();
    showToast('Simulasi real-time barista berjalan...', '▶️');
  }
  updateSimButtonsUI();
}

function updateSimButtonsUI() {
  const autoBtn = document.getElementById('btn-sim-auto');
  if (autoBtn) {
    autoBtn.textContent = AppState.isSimulationRunning ? '⏸️ Jeda Simulasi' : '▶️ Jalankan Otomatis';
  }
}

// ==========================================
// 10. SCREEN 5 & 6: RIWAYAT & PROFIL
// ==========================================
function renderHistoryScreen() {
  const container = document.getElementById('history-list-container');
  if (!container) return;

  container.innerHTML = AppState.orderHistory.map(ord => `
    <div class="history-card">
      <div class="history-top">
        <span class="history-id">#${ord.id} • ${ord.date}</span>
        <span class="history-status-badge">${ord.status}</span>
      </div>
      <p class="history-items-text">${ord.items}</p>
      <div class="history-bottom">
        <span class="history-price">${formatRupiah(ord.total)}</span>
        <button class="btn-reorder" onclick="reorderHistoryItem('${ord.id}')">Pesan Lagi</button>
      </div>
    </div>
  `).join('');
}

function reorderHistoryItem(orderId) {
  showToast('Item berhasil dimasukkan kembali ke pesanan!', '☕');
  switchScreen('home');
}

// ==========================================
// 11. FLOATING MINI CART & BADGES
// ==========================================
function updateFloatingCart() {
  const pill = document.getElementById('floating-cart-pill');
  if (!pill) return;

  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = AppState.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

  if (totalCount > 0 && AppState.activeScreen === 'home') {
    pill.classList.add('visible');
    document.getElementById('pill-count-bubble').textContent = `${totalCount} Item`;
    document.getElementById('pill-total-price').textContent = formatRupiah(totalPrice);
  } else {
    pill.classList.remove('visible');
  }
}

function updateCartBadge() {
  const badge = document.getElementById('nav-cart-badge');
  if (!badge) return;

  const count = AppState.cart.reduce((sum, i) => sum + i.quantity, 0);
  if (count > 0) {
    badge.textContent = count;
    badge.classList.add('has-items');
  } else {
    badge.textContent = '0';
    badge.classList.remove('has-items');
  }
}

// Toggle Desktop Frame Mode (Mockup vs Fullscreen)
function toggleDeviceFrame() {
  const container = document.getElementById('device-container');
  const toggleBtn = document.getElementById('view-mode-toggle-btn');
  if (!container || !toggleBtn) return;

  container.classList.toggle('mode-fullscreen');
  const isFullscreen = container.classList.contains('mode-fullscreen');
  toggleBtn.innerHTML = isFullscreen ? '📱 Mode Bingkai Mockup' : '🖥️ Mode Penuh Layar';
}

// ==========================================
// 12. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  startLiveClock();
  renderHomeMenu();
  updateCartBadge();
  updateFloatingCart();

  // Search input listeners
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear-btn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      if (searchClear) searchClear.style.display = AppState.searchQuery ? 'block' : 'none';
      renderHomeMenu();
    });
  }
  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      AppState.searchQuery = '';
      searchClear.style.display = 'none';
      renderHomeMenu();
    });
  }

  // Category pills filter
  const categoryPills = document.querySelectorAll('.category-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.selectedCategory = pill.dataset.category;
      renderHomeMenu();
    });
  });

  // Accordion toggle in tracking screen
  const accordionHeader = document.getElementById('tracking-accordion-head');
  const accordionBody = document.getElementById('tracking-items-accordion');
  if (accordionHeader && accordionBody) {
    accordionHeader.addEventListener('click', () => {
      const isHidden = accordionBody.style.display === 'none';
      accordionBody.style.display = isHidden ? 'flex' : 'none';
      document.getElementById('accordion-chevron').textContent = isHidden ? '▲' : '▼';
    });
  }
});
