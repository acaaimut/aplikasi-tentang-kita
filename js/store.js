/**
 * Tentang Kita - Shared Store & Ordering State Manager
 * Cabang: Jl. Slamet Riyadi No. 284, Solo (Surakarta)
 * Pemilik: Kak Aca (Founder & Head Artisan Baker)
 */

const CAFE_INFO = {
  name: "Tentang Kita",
  tagline: "Artisan Kopi & Patisserie",
  owner: "Kak Aca",
  ownerRole: "Founder & Head Artisan Baker",
  address: "Jl. Slamet Riyadi No. 284, Sriwedari, Laweyan, Solo (Surakarta), Jawa Tengah 57141",
  shortAddress: "Jl. Slamet Riyadi No. 284, Solo",
  city: "Surakarta (Solo)",
  hours: "Setiap Hari: 08.00 - 23.00 WIB",
  phone: "+62 813-2890-7766",
  email: "halo@tentangkitasolo.cafe",
  instagram: "@tentangkita.solo"
};

// Menu Catalog Standar Solo (Bervariasi: Kopi, Makanan Berat, Roti & Pastry, Teh, Cemilan)
const DEFAULT_MENU_CATALOG = [
  // --- KOPI SIGNATURE ---
  {
    id: 'kopi-caramel-macchiato',
    name: 'Caramel Macchiato Solo',
    category: 'kopi',
    categoryLabel: 'Kopi Signature ☕',
    badge: 'Favorit Tamu ✨',
    rating: 4.9,
    reviews: 340,
    price: 22000,
    available: true,
    desc: 'Espresso arabika medium roast, sirup vanila lembut, susu segar creamy, dan lelehan saus karamel legit.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUNDZvN77vH9i62bbZUC9RTAbSLMFXznUYzS5qN5I6YirhqcNWfXBFkqE0UeOY0KbLnY07AlTDvPtQvcpM7UdhHRGqj-Ae2UgN6Q5v8tvKoTyHgTsEc0gcX6X84KC_20GgN7swdeqO71-3V_OfJIHrDXKeQR6doRLTkWENej8vFgY-fwH7Abtv50tN7JyTThAVGsEeeoWpjh7mgaAOQZc-jxwOM4LxGbOP60104U8mFCNZZeV6NpBBQw',
    isFavorite: true
  },
  {
    id: 'kopi-susu-aren-solo',
    name: 'Kopi Susu Aren Solo',
    category: 'kopi',
    categoryLabel: 'Kopi Signature ☕',
    badge: 'Khas Solo 🌸',
    rating: 5.0,
    reviews: 512,
    price: 18000,
    available: true,
    desc: 'Perpaduan espresso arabika Gayo x robusta Dampit, susu murni segar, dan sirup gula aren Solo otentik.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgPQFe3kunJLGTyuKRZvjAC45quMl86XkjJRIqcXMh1-nDFGphz-Pwl2FGtLItfdx-hL1jLFGssE5E5vAbYt_i9xY2qDYVgOLVDInb6ip23FQXD-VqZTPOlVT8w0ZsE_SNJau3y3oaq054CDLYIFVpN1zMNf92jMKwwryJIqoIzZyqZhl7N0oBIGYplGRw5WjJPyWohZJeAN9qGukV8mhi4z2Pi3iPycQs-o1hPr9XwhKHOe1sDm_TwA',
    isFavorite: true
  },
  {
    id: 'kopi-klepon-latte',
    name: 'Klepon Aren Latte',
    category: 'kopi',
    categoryLabel: 'Kopi Signature ☕',
    badge: 'Kreasi Kak Aca',
    rating: 4.8,
    reviews: 180,
    price: 20000,
    available: true,
    desc: 'Espresso dipadu ekstrak daun pandan wangi, sari kelapa lembut, dan gula aren karamel gurih manis.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8j9YxcDUSyZoyL8TR9vYj9IlzihRlgZ2roRHMfLsWjSXyhvfvC7MYFEUJobX5gTg2IVIW6eH_Km9jsge0cS1RMlTXV1u2yZGbcJKFHOAPrBLFVIvJz1oyMVK_skqeqnDgHyAZRwH7Q4rqpPxMvnV_4wcu1PRkNQGcC5FZ8qr8AGKxu62Pmo82MHfVqx8Lez0AOutlH2RytMXAyZlEnX3ZbjvKLN4StfA-0Et8dXju5yFz_qxCAqKodA',
    isFavorite: false
  },
  {
    id: 'kopi-coldbrew-peach',
    name: 'Cold Brew Peach Blossom',
    category: 'kopi',
    categoryLabel: 'Kopi Signature ☕',
    badge: 'Segar & Dingin',
    rating: 4.7,
    reviews: 115,
    price: 22000,
    available: true,
    desc: 'Kopi seduh dingin selama 16 jam dengan irisan buah persik segar dan aroma wangi bunga krisan.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9Mf8rts7513RUqdsxTSNDz4DTp03p-y122L0EYLARwAYWWCCV1v1tplR7Ugo-m_CdNRE_Yuynb7cQGIq62SZTzAqYhuAcQM7FcpQrn6UyrUfXuxqaF7u4b4_yF74CmQrppH6xqT1W-ePkud2aGX1E9_NKGjen-zM1VnVP82_NRD0OyAVeYuPLF8kvdox_Gk9iwHex4EuJGZLKrhASNUsudwnd4lH5_8ZCUL7TCf_ufuSJb5myWB5rlA',
    isFavorite: true
  },

  // --- MAKANAN BERAT (MAIN COURSE) ---
  {
    id: 'makan-selat-solo-premium',
    name: 'Selat Solo Daging Sapi Premium',
    category: 'makanan',
    categoryLabel: 'Makanan Berat 🍛',
    badge: 'Resep Otentik Solo ⭐',
    rating: 5.0,
    reviews: 430,
    price: 32000,
    available: true,
    desc: 'Daging has dalam empuk masak bumbu semur Solo, kuah segar manis gurih, rolade, telur, buncis, kentang renyah, & saus mustard Jawa.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    isFavorite: true
  },
  {
    id: 'makan-nasgor-kecombrang',
    name: 'Nasi Goreng Kecombrang Solo',
    category: 'makanan',
    categoryLabel: 'Makanan Berat 🍛',
    badge: 'Chef Recommendation',
    rating: 4.9,
    reviews: 298,
    price: 26000,
    available: true,
    desc: 'Nasi goreng harum bunga kecombrang dengan suwiran ayam kampung, telur mata sapi, acar segar, dan kerupuk udang renyah.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80',
    isFavorite: true
  },
  {
    id: 'makan-gyudon-beef-bowl',
    name: 'Beef Gyudon Sambal Matah Bowl',
    category: 'makanan',
    categoryLabel: 'Makanan Berat 🍛',
    badge: 'Pilihan Gurih',
    rating: 4.8,
    reviews: 210,
    price: 30000,
    available: true,
    desc: 'Irisan daging sapi US shortplate saus teriyaki gurih manis disajikan di atas nasi hangat dengan telur onsen lembut & sambal matah.',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80',
    isFavorite: false
  },
  {
    id: 'makan-carbonara-smoked-beef',
    name: 'Spaghetti Creamy Carbonara',
    category: 'makanan',
    categoryLabel: 'Makanan Berat 🍛',
    badge: 'Comfort Food',
    rating: 4.8,
    reviews: 175,
    price: 28000,
    available: true,
    desc: 'Spaghetti al dente dengan saus krim keju parmesan gurih lembut, potongan smoked beef melimpah, dan garlic bread panggang.',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80',
    isFavorite: false
  },
  {
    id: 'makan-ayam-bakar-madu',
    name: 'Nasi Ayam Bakar Madu Solo',
    category: 'makanan',
    categoryLabel: 'Makanan Berat 🍛',
    badge: 'Manis Gurih Nikmat',
    rating: 4.9,
    reviews: 260,
    price: 27000,
    available: true,
    desc: 'Paha ayam bakar bumbu madu rempah khas Solo, sambal korek pedas segar, tahu tempe goreng, dan lalapan segar timun kemangi.',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80',
    isFavorite: true
  },

  // --- ROTI & ARTISAN PASTRY ---
  {
    id: 'roti-srikaya-panggang-solo',
    name: 'Roti Srikaya Solo Panggang',
    category: 'roti',
    categoryLabel: 'Roti & Pastry 🥐',
    badge: 'Oleh-Oleh Khas Kak Aca 🍞',
    rating: 5.0,
    reviews: 480,
    price: 16000,
    available: true,
    desc: 'Roti bun lembut dipanggang harum mentega dengan olesan selai srikaya daun pandan suji asli resep Kak Aca yang legit dan wangi.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    isFavorite: true
  },
  {
    id: 'roti-butter-croissant',
    name: 'Butter Croissant Emas',
    category: 'roti',
    categoryLabel: 'Roti & Pastry 🥐',
    badge: 'Fresh Oven Tiap Pagi',
    rating: 4.9,
    reviews: 390,
    price: 18000,
    available: true,
    desc: 'Croissant klasik Prancis berlapis mentega Lurpak premium, renyah di luar, empuk berongga harum di dalam.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARQsvElntXAwMZJmeTmwO_5Xyn2P5rQO0FhLCKlYZR9oZliiNt9kJ-8j75p1foOk11qdmuOi9_PpLj0e7y1MyryWCcQnrx28VkRj6OFzTxroraIigusrhBDdgGSIzJSIZwLr8XaJ3zW4vLuFfcUkDYm2OL018SEu1mzCOfPGrDy-fC0YBUXJlVc7VVaXL5rXkMs3q8o9jjU0rJAqsOyuP12KGBmAfYVsrFYvqXFzgH1FMOCKCSZc7t2g',
    isFavorite: true
  },
  {
    id: 'roti-pain-au-chocolat',
    name: 'Pain au Chocolat Belgia',
    category: 'roti',
    categoryLabel: 'Roti & Pastry 🥐',
    badge: 'Cokelat Lumer 🍫',
    rating: 4.9,
    reviews: 270,
    price: 20000,
    available: true,
    desc: 'Pastry renyah berlapis dengan isian double batons dark chocolate couverture Belgia yang meleleh hangat saat digigit.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80',
    isFavorite: true
  },
  {
    id: 'roti-cinnamon-roll',
    name: 'Cinnamon Roll Cream Cheese',
    category: 'roti',
    categoryLabel: 'Roti & Pastry 🥐',
    badge: 'Aroma Kayu Manis',
    rating: 4.8,
    reviews: 245,
    price: 19000,
    available: true,
    desc: 'Roti gulung kayu manis lembut berserat empuk, disiram lelehan cream cheese vanilla bourbon yang manis gurih seimbang.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjElVq0LgoWQ11oHZTAxqvvXDCXXfGtchCRhZiDNiqBSUpWijVeTAlwhjbrse3m0qdseeYFaj7Lfrb_zoL2n-ng7lq4DtHpcUR4AIiVQs85yuAx2ekbGffykKMfyfHK-15xWkXiok-pBG6YNxTZWkb_G64lFRHlY198Q7IqQ4jVs7lZdm36EtVwt6cWdtPYt00n0ZxW6h_6vRz3N0RbKvSLROlkXpMCx5fCQyDdzSjOKX2Tf0WwZYxcg',
    isFavorite: false
  },
  {
    id: 'roti-sisir-butter-solo',
    name: 'Roti Sisir Butter Keju Solo',
    category: 'roti',
    categoryLabel: 'Roti & Pastry 🥐',
    badge: 'Nostalgia Jadul',
    rating: 4.9,
    reviews: 310,
    price: 15000,
    available: true,
    desc: 'Roti sisir legendaris lembut beraroma butter cream manis vanila dengan taburan keju cheddar parut melimpah.',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80',
    isFavorite: true
  },

  // --- NON-KOPI & TEH BUNGA ---
  {
    id: 'teh-pink-velvet',
    name: 'Pink Velvet Strawberry Latte',
    category: 'teh',
    categoryLabel: 'Non-Kopi & Teh 🌸',
    badge: 'Favorit Cantik 🍓',
    rating: 4.9,
    reviews: 280,
    price: 20000,
    available: true,
    desc: 'Stroberi segar berpadu dengan bubuk red velvet lembut, susu oat krimi, dan sentuhan kelopak mawar kering.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDzECxdEmMlIDoCBHeh9lk_5TrBJMLTUYk1uqkTwIrsQYL4k6TfI7jS69wcoLLxsAL68Aykwu_E0SErHSd2lnLHxgFrxH9d-Ij_Bv24dZnB0hHSPLWKZFe2-BDTTleGfGeLf00wGMAlL3a1NyNU5AjqmXHnD0nRodRxFWucd_WGTmbNaFVWuWjEiiOnC6a_AddaPlwDxpehOZwuipuI6CBQ4mUspB2YpE0GR8ABoRNaVX9yOmJNIXEmA',
    isFavorite: false
  },
  {
    id: 'teh-wedang-djuwita',
    name: 'Wedang Djuwita Solo (Artisan Rempah)',
    category: 'teh',
    categoryLabel: 'Non-Kopi & Teh 🌸',
    badge: 'Hangat Tradisional 🍵',
    rating: 5.0,
    reviews: 195,
    price: 16000,
    available: true,
    desc: 'Seduhan jahe emprit bakar, batang serai, cengkeh, kayu manis, perasan jeruk nipis, dan gula batu khas keraton Solo.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    isFavorite: true
  },

  // --- CEMILAN ---
  {
    id: 'cemilan-churros-cokelat',
    name: 'Churros Cokelat Lumer',
    category: 'cemilan',
    categoryLabel: 'Cemilan Manis 🍰',
    badge: 'Camilan Santai',
    rating: 4.8,
    reviews: 160,
    price: 17000,
    available: true,
    desc: '5 batang churros renyah keemasan berbalut gula kayu manis dengan cocolan saus dark chocolate hangat.',
    image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&w=600&q=80',
    isFavorite: false
  }
];

const DEFAULT_INITIAL_CART = [
  {
    id: 'kopi-caramel-macchiato',
    name: 'Caramel Macchiato Solo',
    category: 'kopi',
    size: 'Medium (M)',
    temp: 'Dingin (Ice)',
    sweetness: 'Less Sweet (70%)',
    addon: 'Oat Milk (+Rp 4.000)',
    price: 26000,
    qty: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUNDZvN77vH9i62bbZUC9RTAbSLMFXznUYzS5qN5I6YirhqcNWfXBFkqE0UeOY0KbLnY07AlTDvPtQvcpM7UdhHRGqj-Ae2UgN6Q5v8tvKoTyHgTsEc0gcX6X84KC_20GgN7swdeqO71-3V_OfJIHrDXKeQR6doRLTkWENej8vFgY-fwH7Abtv50tN7JyTThAVGsEeeoWpjh7mgaAOQZc-jxwOM4LxGbOP60104U8mFCNZZeV6NpBBQw'
  },
  {
    id: 'roti-srikaya-panggang-solo',
    name: 'Roti Srikaya Solo Panggang',
    category: 'roti',
    size: '1 Porsi (2 Pcs)',
    temp: 'Hangat Dipanggang',
    sweetness: 'Normal',
    addon: 'Extra Selai Srikaya Kak Aca',
    price: 16000,
    qty: 1,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
  }
];

const DEFAULT_ORDER = {
  orderId: '#TK-88294',
  token: 'TK-88',
  date: '26 Oktober 2026',
  time: '14:15 WIB',
  fulfillMethod: 'dinein', // 'pickup' | 'dinein'
  tableNumber: 'Meja 08',
  notes: 'Es batu sedikit saja, sedotan ramah lingkungan.',
  paymentMethod: 'ewallet',
  stage: 2, // 1: Diterima, 2: Menyiapkan, 3: Siap, 4: Diambil
  items: DEFAULT_INITIAL_CART,
  subtotal: 42000,
  voucherCode: 'SOLORAYA',
  discount: 5000,
  serviceFee: 2000,
  total: 39000,
  customerName: 'Pelanggan Meja 08',
  branch: 'Slamet Riyadi Solo'
};

const DEFAULT_VOUCHERS = [
  { code: 'SOLORAYA', discount: 5000, desc: 'Diskon Spesial Wong Solo' },
  { code: 'CEWEKKUE', discount: 10000, desc: 'Diskon 20% Pembelian Pertama' },
  { code: 'ACASOLO', discount: 7000, desc: 'Promo Traktiran Kak Aca' }
];

const DEFAULT_CHAT_MESSAGES = [
  {
    sender: 'barista',
    name: 'Kak Aca (Owner & Barista)',
    text: 'Halo kak! Sugeng rawuh di Tentang Kita Slamet Riyadi Solo 🌸 Pesananmu sudah masuk antrean bar. Ada catatan khusus untuk racikannya?',
    time: '14:16 WIB'
  }
];

const TentangKitaStore = {
  // Cafe Info
  getCafeInfo() {
    return CAFE_INFO;
  },

  // Format number to Rupiah string
  formatRupiah(num) {
    return 'Rp ' + Number(num || 0).toLocaleString('id-ID');
  },

  // Menu Catalog (Interactive & Controlled by Admin)
  getMenuCatalog() {
    try {
      const stored = localStorage.getItem('tentang_kita_menu_catalog');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error(e);
    }
    this.saveMenuCatalog(DEFAULT_MENU_CATALOG);
    return [...DEFAULT_MENU_CATALOG];
  },

  saveMenuCatalog(catalog) {
    try {
      localStorage.setItem('tentang_kita_menu_catalog', JSON.stringify(catalog));
    } catch (e) {
      console.error(e);
    }
  },

  updateMenuItem(id, updates) {
    const catalog = this.getMenuCatalog();
    const idx = catalog.findIndex(item => item.id === id);
    if (idx > -1) {
      catalog[idx] = { ...catalog[idx], ...updates };
      this.saveMenuCatalog(catalog);
      this.showToast(`Menu "${catalog[idx].name}" berhasil diperbarui! ✨`);
      return true;
    }
    return false;
  },

  toggleMenuAvailability(id) {
    const catalog = this.getMenuCatalog();
    const idx = catalog.findIndex(item => item.id === id);
    if (idx > -1) {
      catalog[idx].available = !catalog[idx].available;
      this.saveMenuCatalog(catalog);
      const statusText = catalog[idx].available ? 'Tersedia' : 'Habis (Sold Out)';
      this.showToast(`Status menu "${catalog[idx].name}" diubah menjadi: ${statusText}`);
      return catalog[idx].available;
    }
    return false;
  },

  addMenuItem(newItem) {
    const catalog = this.getMenuCatalog();
    const item = {
      id: 'menu-' + Date.now(),
      name: newItem.name || 'Menu Baru Solo',
      category: newItem.category || 'makanan',
      categoryLabel: newItem.categoryLabel || 'Menu Spesial',
      badge: newItem.badge || 'Baru di Solo 🌸',
      rating: 5.0,
      reviews: 1,
      price: Number(newItem.price) || 20000,
      available: true,
      desc: newItem.desc || 'Racikan istimewa dibuat fresh oleh tim dapur Kak Aca.',
      image: newItem.image || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      isFavorite: false
    };
    catalog.unshift(item);
    this.saveMenuCatalog(catalog);
    this.showToast(`Menu baru "${item.name}" berhasil ditambahkan ke katalog Solo!`);
    return item;
  },

  deleteMenuItem(id) {
    let catalog = this.getMenuCatalog();
    const item = catalog.find(i => i.id === id);
    catalog = catalog.filter(i => i.id !== id);
    this.saveMenuCatalog(catalog);
    if (item) {
      this.showToast(`Menu "${item.name}" berhasil dihapus.`);
    }
  },

  // Get Cart items
  getCart() {
    try {
      const stored = localStorage.getItem('tentang_kita_cart');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error(e);
    }
    this.saveCart(DEFAULT_INITIAL_CART);
    return [...DEFAULT_INITIAL_CART];
  },

  // Save Cart items
  saveCart(cart) {
    try {
      localStorage.setItem('tentang_kita_cart', JSON.stringify(cart));
      this.updateHeaderBadges();
    } catch (e) {
      console.error(e);
    }
  },

  // Add Item to Cart
  addToCart(newItem, quantity = 1) {
    const cart = this.getCart();
    const qtyToAdd = Number(quantity) || 1;

    const existingIndex = cart.findIndex(item => 
      item.name === newItem.name &&
      item.size === (newItem.size || 'Regular') &&
      item.temp === (newItem.temp || 'Normal')
    );

    if (existingIndex > -1) {
      cart[existingIndex].qty += qtyToAdd;
    } else {
      cart.push({
        id: newItem.id || 'item-' + Date.now(),
        name: newItem.name,
        category: newItem.category || 'menu',
        size: newItem.size || 'Reguler Cup',
        temp: newItem.temp || 'Dingin (Ice)',
        sweetness: newItem.sweetness || 'Normal',
        addon: newItem.addon || '',
        price: Number(newItem.price) || 20000,
        qty: qtyToAdd,
        image: newItem.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUNDZvN77vH9i62bbZUC9RTAbSLMFXznUYzS5qN5I6YirhqcNWfXBFkqE0UeOY0KbLnY07AlTDvPtQvcpM7UdhHRGqj-Ae2UgN6Q5v8tvKoTyHgTsEc0gcX6X84KC_20GgN7swdeqO71-3V_OfJIHrDXKeQR6doRLTkWENej8vFgY-fwH7Abtv50tN7JyTThAVGsEeeoWpjh7mgaAOQZc-jxwOM4LxGbOP60104U8mFCNZZeV6NpBBQw'
      });
    }

    this.saveCart(cart);
    this.showToast(`${newItem.name} ditambahkan ke pesanan! (${qtyToAdd}x) 🌸`);
    return cart;
  },

  // Update Item Quantity
  updateCartQty(index, delta) {
    const cart = this.getCart();
    if (cart[index]) {
      cart[index].qty += delta;
      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }
      this.saveCart(cart);
    }
    return cart;
  },

  // Remove Item from Cart
  removeFromCart(index) {
    const cart = this.getCart();
    if (cart[index]) {
      const removed = cart.splice(index, 1);
      this.saveCart(cart);
      if (removed[0]) {
        this.showToast(`${removed[0].name} dihapus dari pesanan.`);
      }
    }
    return cart;
  },

  // Clear Cart
  clearCart() {
    this.saveCart([]);
  },

  // Calculate Subtotal
  calculateSubtotal(cart) {
    const items = cart || this.getCart();
    return items.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
  },

  // Voucher Management
  getVouchers() {
    try {
      const stored = localStorage.getItem('tentang_kita_vouchers_list');
      if (stored) return JSON.parse(stored);
    } catch(e) {}
    localStorage.setItem('tentang_kita_vouchers_list', JSON.stringify(DEFAULT_VOUCHERS));
    return DEFAULT_VOUCHERS;
  },

  getAppliedVoucher() {
    try {
      const stored = localStorage.getItem('tentang_kita_voucher');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}
    return { code: 'SOLORAYA', discount: 5000, desc: 'Diskon Spesial Wong Solo' };
  },

  applyVoucher(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (!cleanCode) {
      return { success: false, message: 'Masukkan kode voucher terlebih dahulu.' };
    }

    const vouchers = this.getVouchers();
    const found = vouchers.find(v => v.code === cleanCode);

    if (found) {
      localStorage.setItem('tentang_kita_voucher', JSON.stringify(found));
      this.showToast(`Voucher '${found.code}' dipasang! Hemat ${this.formatRupiah(found.discount)} ✨`);
      return { success: true, voucher: found };
    } else {
      return { success: false, message: 'Kode voucher tidak valid di cabang Solo.' };
    }
  },

  removeVoucher() {
    localStorage.removeItem('tentang_kita_voucher');
    this.showToast('Voucher promo telah dihapus.');
  },

  // Order Details & Persistence
  getActiveOrder() {
    try {
      const stored = localStorage.getItem('tentang_kita_active_order');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}
    localStorage.setItem('tentang_kita_active_order', JSON.stringify(DEFAULT_ORDER));
    return DEFAULT_ORDER;
  },

  saveOrder(orderData) {
    const current = this.getActiveOrder();
    const finalOrder = {
      ...current,
      ...orderData
    };
    try {
      localStorage.setItem('tentang_kita_active_order', JSON.stringify(finalOrder));
      
      // Also append to order history for Admin
      const history = this.getAllOrders();
      const existingIdx = history.findIndex(o => o.orderId === finalOrder.orderId);
      if (existingIdx > -1) {
        history[existingIdx] = finalOrder;
      } else {
        history.unshift(finalOrder);
      }
      localStorage.setItem('tentang_kita_orders_history', JSON.stringify(history));
    } catch (e) {}
    return finalOrder;
  },

  getAllOrders() {
    try {
      const stored = localStorage.getItem('tentang_kita_orders_history');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}
    const initial = [DEFAULT_ORDER];
    localStorage.setItem('tentang_kita_orders_history', JSON.stringify(initial));
    return initial;
  },

  updateOrderStatus(orderId, newStage) {
    const orders = this.getAllOrders();
    const idx = orders.findIndex(o => o.orderId === orderId);
    if (idx > -1) {
      orders[idx].stage = newStage;
      localStorage.setItem('tentang_kita_orders_history', JSON.stringify(orders));
      
      // If this is the active order, update it too
      const active = this.getActiveOrder();
      if (active.orderId === orderId) {
        active.stage = newStage;
        localStorage.setItem('tentang_kita_active_order', JSON.stringify(active));
      }

      const stageLabels = ['', 'Pesanan Diterima', 'Sedang Diseduh/Dimasak', 'Pesanan Siap Diambil', 'Pesanan Selesai'];
      this.showToast(`Status ${orderId} diubah ke: ${stageLabels[newStage] || newStage}`);
      return true;
    }
    return false;
  },

  // Place Order from Current Cart
  createOrderFromCart({ fulfillMethod, tableNumber, notes, paymentMethod, customerName }) {
    const cart = this.getCart();
    const subtotal = this.calculateSubtotal(cart);
    const voucher = this.getAppliedVoucher();
    const discount = voucher ? Math.min(voucher.discount, subtotal) : 0;
    const serviceFee = subtotal > 0 ? 2000 : 0;
    const total = Math.max(0, subtotal - discount + serviceFee);

    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const dateStr = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} WIB`;

    const randomNum = Math.floor(1000 + Math.random() * 90000);
    const orderId = `#TK-${randomNum}`;
    const token = `TK-${String(randomNum).slice(0, 2)}`;

    const newOrder = {
      orderId,
      token,
      date: dateStr,
      time: timeStr,
      fulfillMethod: fulfillMethod || 'dinein',
      tableNumber: tableNumber || 'Meja 08',
      notes: notes || '',
      paymentMethod: paymentMethod || 'ewallet',
      customerName: customerName || (fulfillMethod === 'dinein' ? `Tamu ${tableNumber}` : 'Pelanggan Takeaway'),
      stage: 1, // Diterima
      items: [...cart],
      subtotal,
      voucherCode: voucher ? voucher.code : null,
      discount,
      serviceFee,
      total,
      branch: 'Slamet Riyadi Solo'
    };

    this.saveOrder(newOrder);
    return newOrder;
  },

  // Live Chat Between Customer and Barista (Kak Aca)
  getChatMessages() {
    try {
      const stored = localStorage.getItem('tentang_kita_chat_messages');
      if (stored) return JSON.parse(stored);
    } catch(e) {}
    localStorage.setItem('tentang_kita_chat_messages', JSON.stringify(DEFAULT_CHAT_MESSAGES));
    return DEFAULT_CHAT_MESSAGES;
  },

  addChatMessage(sender, text, senderName) {
    const messages = this.getChatMessages();
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} WIB`;

    const newMsg = {
      sender, // 'customer' or 'barista'
      name: senderName || (sender === 'customer' ? 'Pelanggan' : 'Kak Aca (Owner)'),
      text,
      time: timeStr
    };
    messages.push(newMsg);
    localStorage.setItem('tentang_kita_chat_messages', JSON.stringify(messages));
    return messages;
  },

  // Update Header Cart Badge
  updateHeaderBadges() {
    const cart = this.getCart();
    const totalCount = cart.reduce((c, i) => c + Number(i.qty || 1), 0);
    const subtotal = this.calculateSubtotal(cart);

    const badgeEls = document.querySelectorAll('#headerCartBadge, .cart-count-badge');
    badgeEls.forEach(el => {
      el.textContent = totalCount;
    });

    const totalEls = document.querySelectorAll('#headerCartTotal, .cart-total-badge');
    totalEls.forEach(el => {
      el.textContent = this.formatRupiah(subtotal);
    });
  },

  // Toast Notification
  showToast(message) {
    let toast = document.getElementById('globalAppToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalAppToast';
      toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-primary text-on-primary px-6 py-3 rounded-full shadow-[0_8px_24px_rgba(50,25,23,0.3)] flex items-center gap-3 opacity-0 pointer-events-none transition-all duration-300 font-medium text-sm border border-secondary/30';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <span class="material-symbols-outlined text-secondary-container text-[20px]">check_circle</span>
      <span>${message}</span>
    `;

    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    }, 2800);
  }
};

// Initialize header badge on script load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    TentangKitaStore.updateHeaderBadges();
  });
}
