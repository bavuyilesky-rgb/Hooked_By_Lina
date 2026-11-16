// Complete Catalog of Handcrafted Garments
const PRODUCTS = [
  {
    id: 1,
    title: "Obsidian Wave Crochet Bucket Hat",
    price: 140,
    badge: "MADE TO ORDER",
    fiberSub: "PURE WOOL · HAND-CROCHET",
    statusText: "7 Days Craft",
    statusIcon: "clock",
    category: "Hats & Beanies",
    craftHours: 14,
    origin: "Hand-crocheted in Mthatha",
    stitchType: "OBSIDIAN WAVE BRIM STITCH",
    blend: "100% Certified Eastern Cape Pure Merino Wool with natural undyed wave border.",
    gaugeLabel: "Mid-Lace (5mm)",
    gaugeLevel: 2,
    image: "src/bucket_hat.jpeg"
  },
  {
    id: 2,
    title: "Slouchy",
    price: 170,
    badge: "READY TO DISPATCH",
    fiberSub: "FOREST WOOL · BONE BUTTONS",
    statusText: "In Studio Stock",
    statusIcon: "check-circle-2",
    category: "Hats & Beanies",
    craftHours: 16,
    origin: "Hand-crocheted in Nieu-Bethesda",
    stitchType: "RIBBED CROWN · CARVED BONE BUTTONS",
    blend: "85% Forest Botanical Dyed Karoo Merino & hand-carved ethically sourced bone buttons.",
    gaugeLabel: "Chunky (6mm)",
    gaugeLevel: 3,
    image: "src/buttons.jpeg"
  },
  {
    id: 3,
    title: "Astral Star Striped Beanie",
    price: 190,
    badge: "MADE TO ORDER",
    fiberSub: "COBALT & SKY · SOFT YARN",
    statusText: "5 Days Craft",
    statusIcon: "clock",
    category: "Hats & Beanies",
    craftHours: 15,
    origin: "Hand-crocheted in Mthatha",
    stitchType: "ASTRAL CROWN INTARSIA STITCH",
    blend: "100% Soft Combed Cape Cotton & Kid Mohair blend in Cobalt, Sky, and Chalk White.",
    gaugeLabel: "Airy Structural (4.5mm)",
    gaugeLevel: 2,
    image: "src/light_blue.jpeg"
  },
  {
    id: 4,
    title: "Aura Outfite",
    price: 800,
    badge: "READY TO DISPATCH",
    fiberSub: "SOFT YARN",
    statusText: "4 Units Left",
    statusIcon: "package",
    category: "Tops & Camisoles",
    craftHours: 38,
    origin: "Hand-crocheted in Mthatha",
    stitchType: "TWO-PIECE ARTISAN SHELL & SKIRT",
    blend: "80% Brushed Karoo Mohair & 20% Organic Wet-Spun Cotton in Rose Clay & Slate.",
    gaugeLabel: "Chunky Cable (6.5mm)",
    gaugeLevel: 3,
    image: "src/WhatsApp Image 2026-11-13 at 22.59.59.jpeg"
  },
  {
    id: 5,
    title: "Granny Square Pattern Bag",
    price: 450,
    badge: "LIMITED KAROO DYE",
    fiberSub: "BOTANICAL CAPE FYNBOS",
    statusText: "Plant Extraction",
    statusIcon: "leaf",
    category: "Bags & Accessories",
    craftHours: 24,
    origin: "Hand-crocheted in Nieu-Bethesda",
    stitchType: "HERITAGE MEDALLION GRANNY SQUARE",
    blend: "100% Raw Unbleached Linen & Cape Fynbos Sage-Dipped Cotton Structural Cord.",
    gaugeLabel: "Airy Structural (4mm)",
    gaugeLevel: 2,
    image: "src/bag.jpg"
  },
  {
    id: 6,
    title: "Free Hand Pattern Scrunchie",
    price: 100,
    badge: "READY TO DISPATCH",
    fiberSub: "KID MOHAIR · FEATHERLIGHT",
    statusText: "Available in 3 Tones",
    statusIcon: "check-circle-2",
    category: "Bags & Accessories",
    craftHours: 4,
    origin: "Hand-crocheted in Mthatha",
    stitchType: "BOTANICAL RUFFLE WAVE",
    blend: "100% Zero-Waste Studio Offcut Kid Mohair & Wild Hibiscus Botanical Dye.",
    gaugeLabel: "Featherlace (2.5mm)",
    gaugeLevel: 1,
    image: "src/Quick-and-Easy-Crochet-Scrunchie-Free-Pattern-and-Video-Tutorial.jpg"
  },
  {
    id: 7,
    title: "The Aura Wavy Hat",
    price: 250,
    badge: "EDITION 2025",
    fiberSub: "KAROO KID MOHAIR & LINEN",
    statusText: "18 Craft Hours",
    statusIcon: "clock",
    category: "Hats & Beanies",
    craftHours: 18,
    origin: "Hand-crocheted in Nieu-Bethesda",
    stitchType: "CONTINUOUS WAVY BRIM STITCH",
    blend: "70% Certified South African Karoo Kid Mohair & 30% Organic French Wet-Spun Slub Linen.",
    gaugeLabel: "Mid-Lace (Gauge 7)",
    gaugeLevel: 2,
    image: "src/images.jpg"
  },
  {
    id: 8,
    title: "The Aura Hexagon Top",
    price: 300,
    badge: "MADE TO ORDER",
    fiberSub: "OATMEAL UNDYED & CEDAR",
    statusText: "14–21 Days Craft",
    statusIcon: "clock",
    category: "Tops & Camisoles",
    craftHours: 28,
    origin: "Artisan: Elena / Nandi (Mthatha)",
    stitchType: "OPENWORK HEXAGON LOOM WEAVE",
    blend: "65% Karoo Merino & 35% Cedar-Dyed Organic Cotton with breathable honeycomb drape.",
    gaugeLabel: "Chunky 6mm",
    gaugeLevel: 3,
    image: "src/_b_d_bd91a807-58999_0_13.jpg"
  },
  {
    id: 9,
    title: "Nico Three Colour Scarf",
    price: 170,
    badge: "READY TO DISPATCH",
    fiberSub: "100% GOTS CERTIFIED COTTON",
    statusText: "Guild Archive: Nieu-Bethesda",
    statusIcon: "check-circle-2",
    category: "Scarves",
    craftHours: 12,
    origin: "Guild Archive: Nieu-Bethesda",
    stitchType: "COLOURBLOCK FRINGE LACE",
    blend: "100% GOTS Certified Organic Cotton in Chalk White, Gray & Karoo Terracotta Orange.",
    gaugeLabel: "Fine Lace 2mm",
    gaugeLevel: 1,
    image: "src/huckleberryscarf.jpg"
  },
  {
    id: 10,
    title: "Huckle Berry Scarf",
    price: 150,
    badge: "READY TO DISPATCH",
    fiberSub: "MOHAIR & WOOL",
    statusText: "In Studio Stock",
    statusIcon: "check-circle-2",
    category: "Scarves",
    craftHours: 14,
    origin: "Hand-crocheted in Mthatha",
    stitchType: "OPEN BERRY CLUSTER STITCH",
    blend: "75% Kid Mohair & 25% Highland Wool dyed in warm coral berry tones.",
    gaugeLabel: "Mid-Lace (5mm)",
    gaugeLevel: 2,
    image: "src/scarf.jpg"
  }
];

// Application State (Saved & Bag start completely empty by default)
let currentTab = 'collection';
let previousTab = 'collection';
let activeCategory = 'all';
let activeAvailFilter = 'all';
let currentDetailProductId = 7;
let selectedDetailColor = 'Oatmeal Undyed & Cedar';
let selectedDetailSize = 'XL';
let wishlist = [];
let bag = [];
let endowmentAmount = 0;
let selectedGateway = 'Ozow Instant EFT';

// Render Collection Grid
function renderCollection() {
  const searchInputEl = document.getElementById('searchInput');
  const searchVal = searchInputEl ? searchInputEl.value.trim().toLowerCase() : '';
  const sortVal = document.getElementById('sortSelect').value;
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.classList.toggle('hidden', searchVal.length === 0);

  let filtered = PRODUCTS.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesAvail = activeAvailFilter === 'all' || item.badge === activeAvailFilter;
    const matchesSearch = !searchVal ||
      item.title.toLowerCase().includes(searchVal) ||
      item.fiberSub.toLowerCase().includes(searchVal) ||
      item.gaugeLabel.toLowerCase().includes(searchVal) ||
      item.badge.toLowerCase().includes(searchVal);
    return matchesCat && matchesAvail && matchesSearch;
  });

  if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortVal === 'hours-desc') filtered.sort((a, b) => b.craftHours - a.craftHours);

  const grid = document.getElementById('collectionGrid');
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-white rounded-2xl p-10 text-center border border-karoo-border space-y-3">
        <p class="font-editorial text-2xl text-karoo-ink">No matching handcrafts found</p>
        <p class="text-xs text-karoo-muted">Try clearing your search or exploring all Karoo Highland fibers.</p>
        <button onclick="resetFilters()" class="px-4 py-2 rounded-lg bg-karoo-primary text-white text-xs font-semibold">Show All Pieces</button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map((item, idx) => {
    const isSaved = wishlist.includes(item.id);
    const badgeWords = item.badge.split(' ');
    const line1 = badgeWords.slice(0, 2).join(' ');
    const line2 = badgeWords.slice(2).join(' ');

    return `
      <article
        style="animation-delay: ${idx * 45}ms"
        class="garment-card animate-fade-up bg-white rounded-2xl border border-karoo-border overflow-hidden flex flex-col justify-between shadow-2xs"
      >
        <div onclick="openProductDetail(${item.id})" class="relative aspect-[4/5] bg-stone-100 overflow-hidden cursor-pointer">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" loading="lazy" />

          <div class="absolute top-2.5 left-2.5 flex flex-col items-start gap-1 pointer-events-none">
            <span class="bg-karoo-panel/95 backdrop-blur-xs text-karoo-ink text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md shadow-2xs">
              ${line1}
            </span>
            ${line2 ? `
              <span class="bg-karoo-panel/95 backdrop-blur-xs text-karoo-ink text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md shadow-2xs">
                ${line2}
              </span>
            ` : ''}
          </div>

          <button
            onclick="event.stopPropagation(); toggleWishlist(${item.id})"
            class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-xs transition ${isSaved ? 'text-rose-600' : 'text-karoo-ink'}"
            title="Save to Wishlist"
          >
            <i data-lucide="heart" class="w-4 h-4 ${isSaved ? 'fill-current' : ''}"></i>
          </button>
        </div>

        <div class="p-3.5 sm:p-4 flex-grow flex flex-col justify-between space-y-3">
          <div onclick="openProductDetail(${item.id})" class="cursor-pointer space-y-1">
            <p class="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-karoo-muted line-clamp-1">
              ${item.fiberSub}
            </p>
            <h3 class="font-editorial text-base sm:text-lg font-semibold text-karoo-ink leading-snug line-clamp-2">
              ${item.title}
            </h3>
            <div class="flex items-center gap-1 text-[11px] text-karoo-muted pt-0.5">
              <i data-lucide="${item.statusIcon}" class="w-3 h-3 text-karoo-primary shrink-0"></i>
              <span class="truncate">${item.statusText}</span>
            </div>
          </div>

          <div class="pt-2 border-t border-karoo-border/60 flex items-center justify-between gap-2">
            <span class="font-bold text-sm sm:text-base text-karoo-ink">R${item.price}</span>
            <button
              onclick="addToBag(${item.id})"
              class="px-3 py-1.5 rounded-lg bg-karoo-primary hover:bg-karoo-primaryDark text-white text-xs font-semibold transition flex items-center gap-1 shadow-2xs"
            >
              <span>Bag</span>
              <span>+</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  lucide.createIcons();
}

// Category & Filter Controls
function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    const isMatch = btn.getAttribute('data-cat') === cat;
    btn.className = isMatch
      ? 'cat-pill shrink-0 px-5 py-2 rounded-full text-xs font-semibold bg-karoo-primary text-white shadow-xs transition'
      : 'cat-pill shrink-0 px-5 py-2 rounded-full text-xs font-semibold bg-white text-karoo-ink border border-karoo-border hover:bg-karoo-panel transition';
  });
  renderCollection();
}

function toggleGaugeFilter() {
  const box = document.getElementById('gaugeFilterBox');
  box.classList.toggle('hidden');
}

function setAvailabilityFilter(avail) {
  activeAvailFilter = avail;
  document.querySelectorAll('.avail-btn').forEach(btn => {
    const isMatch = btn.getAttribute('data-avail') === avail;
    btn.className = isMatch
      ? 'avail-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-karoo-primary text-white'
      : 'avail-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-karoo-bg text-karoo-ink hover:bg-karoo-panel';
  });
  document.getElementById('activeGaugeLabel').textContent =
    avail === 'all' ? 'Filter (Gauge & Fiber)' : `Filter: ${avail}`;
  renderCollection();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  renderCollection();
}

function resetFilters() {
  document.getElementById('searchInput').value = '';
  setCategory('all');
  setAvailabilityFilter('all');
}

function focusSearch() {
  switchTab('collection');
  setTimeout(() => {
    document.getElementById('searchInput').focus();
  }, 100);
}

// Open Product Detail View
function openProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[6];
  currentDetailProductId = product.id;

  document.getElementById('detailImage').src = product.image;
  document.getElementById('detailImage').alt = product.title;
  document.getElementById('detailCraftHours').textContent = `${product.craftHours} Craft Hours Invested`;
  document.getElementById('detailOriginBadge').textContent = product.origin;
  document.getElementById('detailStitchBadge').textContent = product.stitchType;
  document.getElementById('detailTitle').textContent = product.title;
  document.getElementById('detailPrice').textContent = `R ${product.price}`;
  document.getElementById('detailCommissionBtnPrice').textContent = `R ${product.price}`;
  document.getElementById('detailBlendText').textContent = product.blend;
  document.getElementById('detailGaugeLabel').textContent = product.gaugeLabel;

  document.getElementById('gaugeSeg1').className = `h-1.5 rounded-full ${product.gaugeLevel >= 1 ? 'bg-karoo-primary' : 'bg-karoo-border'}`;
  document.getElementById('gaugeSeg2').className = `h-1.5 rounded-full ${product.gaugeLevel >= 2 ? 'bg-karoo-primary' : 'bg-karoo-border'}`;
  document.getElementById('gaugeSeg3').className = `h-1.5 rounded-full ${product.gaugeLevel >= 3 ? 'bg-karoo-primary' : 'bg-karoo-border'}`;

  updateDetailWishlistButton();
  switchTab('detail');
}

function selectColorway(colorName, btnEl) {
  selectedDetailColor = colorName;
  document.getElementById('selectedColorName').textContent = colorName;
  document.querySelectorAll('.color-swatch').forEach(b => {
    b.classList.remove('ring-2', 'ring-offset-2', 'ring-karoo-primary');
  });
  btnEl.classList.add('ring-2', 'ring-offset-2', 'ring-karoo-primary');
}

function selectSize(size, btnEl) {
  selectedDetailSize = size;
  document.querySelectorAll('.size-btn').forEach(b => {
    b.className = 'size-btn py-2.5 rounded-lg border border-karoo-border bg-white text-xs font-semibold text-karoo-ink hover:bg-karoo-panel transition';
  });
  btnEl.className = 'size-btn py-2.5 rounded-lg border border-karoo-primary bg-karoo-primary text-xs font-semibold text-white shadow-xs transition';
}

function commissionCurrentGarment() {
  const product = PRODUCTS.find(p => p.id === currentDetailProductId);
  if (!product) return;

  const existing = bag.find(item => item.productId === product.id && item.colorAndSize.includes(selectedDetailSize));
  if (existing) {
    existing.qty += 1;
  } else {
    bag.push({
      productId: product.id,
      title: product.title,
      price: product.price,
      badge: product.badge === 'READY TO DISPATCH' ? 'Ready to Dispatch' : 'Made to Order',
      colorAndSize: `${selectedDetailColor} · Size ${selectedDetailSize}`,
      artisanNote: product.origin,
      customNote: "Custom crown & fit shaping included",
      loomGauge: product.gaugeLabel,
      qty: 1,
      image: product.image
    });
  }
  updateBagSystem();
  showToast(`Commissioned "${product.title}" (${selectedDetailSize}) to your Bag`);
}

// Add to Bag from Grid
function addToBag(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = bag.find(item => item.productId === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    bag.push({
      productId: product.id,
      title: product.title,
      price: product.price,
      badge: product.badge === 'READY TO DISPATCH' ? 'Ready to Dispatch' : 'Made to Order',
      colorAndSize: "Artisan Natural Tone · Standard Fit",
      artisanNote: product.origin,
      customNote: product.fiberSub,
      loomGauge: product.gaugeLabel,
      qty: 1,
      image: product.image
    });
  }
  updateBagSystem();
  showToast(`${product.title} added to your Handcrafted Bag`);
}

// Render Handcrafted Bag & Receipt
function updateBagSystem() {
  const totalItems = bag.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = bag.reduce((sum, item) => sum + item.price * item.qty, 0);
  const activeEndowment = totalItems > 0 ? endowmentAmount : 0;
  const grandTotal = subtotal + activeEndowment;

  // Header & Mobile Nav Badges (Hidden when 0)
  const bagBadge = document.getElementById('headerBagBadge');
  bagBadge.textContent = totalItems;
  bagBadge.classList.toggle('hidden', totalItems === 0);
  bagBadge.classList.toggle('flex', totalItems > 0);

  document.getElementById('mobBagDot').classList.toggle('hidden', totalItems === 0);
  document.getElementById('bagCountSubheader').textContent = `(${totalItems} ${totalItems === 1 ? 'GARMENT' : 'GARMENTS'})`;

  const container = document.getElementById('bagItemsContainer');
  if (bag.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl border border-karoo-border p-10 text-center space-y-3">
        <p class="font-editorial text-2xl text-karoo-ink">Your Handcrafted Bag is empty</p>
        <p class="text-xs text-karoo-muted">Explore our Karoo Highlands series to reserve an artisan loom.</p>
        <button onclick="switchTab('collection')" class="px-5 py-2.5 rounded-xl bg-karoo-primary text-white text-xs font-semibold uppercase tracking-wider">
          Explore Collection
        </button>
      </div>
    `;
  } else {
    container.innerHTML = bag.map((item, idx) => `
      <div class="bg-white rounded-2xl border border-karoo-border p-4 shadow-2xs space-y-3">
        <div class="flex gap-3.5 items-start">
          <img
            onclick="openProductDetail(${item.productId})"
            src="${item.image}"
            alt="${item.title}"
            class="w-20 h-24 sm:w-24 sm:h-28 rounded-xl object-cover shrink-0 cursor-pointer bg-stone-100"
          />
          <div class="flex-grow min-w-0">
            <div class="flex items-start justify-between gap-2">
              <span class="inline-block px-2.5 py-0.5 rounded-md bg-karoo-panel text-karoo-primaryDark text-[10px] font-bold">
                ${item.badge}
              </span>
              <button onclick="removeBagItem(${idx})" class="text-karoo-muted hover:text-karoo-ink p-0.5" title="Remove">
                <i data-lucide="x" class="w-4 h-4"></i>
              </button>
            </div>
            <h3 onclick="openProductDetail(${item.productId})" class="font-editorial text-lg font-semibold text-karoo-ink mt-1 cursor-pointer hover:text-karoo-primary">
              ${item.title}
            </h3>
            <p class="font-bold text-xs text-karoo-ink">R${item.price} ZAR</p>

            <div class="mt-2 p-2.5 rounded-lg bg-karoo-bg/70 border border-karoo-border/80 text-[11px] space-y-0.5 text-karoo-muted">
              <p class="text-karoo-ink font-medium">• ${item.colorAndSize}</p>
              <p>${item.artisanNote}</p>
              <p class="font-semibold text-karoo-ink">${item.customNote}</p>
            </div>
          </div>
        </div>

        <div class="pt-2.5 border-t border-karoo-border/70 flex items-center justify-between text-xs">
          <div class="flex items-center gap-3">
            <span class="text-[10px] uppercase tracking-wider text-karoo-muted font-semibold">LOOM GAUGE:</span>
            <span class="font-medium text-karoo-ink">${item.loomGauge}</span>
          </div>
          <div class="flex items-center border border-karoo-border rounded-lg bg-karoo-bg/50">
            <button onclick="changeBagQty(${idx}, -1)" class="px-2.5 py-1 text-karoo-ink hover:bg-karoo-panel rounded-l-lg font-bold">−</button>
            <span class="px-3 py-1 font-semibold text-karoo-ink">${item.qty}</span>
            <button onclick="changeBagQty(${idx}, 1)" class="px-2.5 py-1 text-karoo-ink hover:bg-karoo-panel rounded-r-lg font-bold">+</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  document.getElementById('receiptSubtotalLabel').textContent = `Subtotal (${totalItems} ${totalItems === 1 ? 'item' : 'items'})`;
  document.getElementById('receiptSubtotalValue').textContent = `R${subtotal}`;
  document.getElementById('receiptEndowmentValue').textContent = `R${activeEndowment}`;
  document.getElementById('receiptTotalValue').textContent = `R${grandTotal}`;
  document.getElementById('checkoutBtnTotal').textContent = `R${grandTotal}`;
  document.getElementById('modalTotalAmount').textContent = `R${grandTotal}`;

  lucide.createIcons();
}

function changeBagQty(index, delta) {
  bag[index].qty += delta;
  if (bag[index].qty <= 0) {
    bag.splice(index, 1);
  }
  updateBagSystem();
}

function removeBagItem(index) {
  bag.splice(index, 1);
  updateBagSystem();
}

function setEndowment(amount) {
  endowmentAmount = amount;
  document.querySelectorAll('.endow-btn').forEach(btn => {
    const isSelected = Number(btn.getAttribute('data-endow')) === amount;
    btn.className = isSelected
      ? 'endow-btn py-2 px-3 rounded-lg border border-karoo-primary bg-karoo-primary text-xs font-semibold text-white shadow-2xs transition'
      : 'endow-btn py-2 px-3 rounded-lg border border-karoo-border bg-white text-xs font-semibold text-karoo-ink hover:bg-karoo-panel transition';
  });
  updateBagSystem();
}

function selectGateway(gatewayName, btnEl) {
  selectedGateway = gatewayName;
  document.getElementById('modalGatewayName').textContent = gatewayName;
  document.querySelectorAll('.gateway-btn').forEach(btn => {
    btn.className = 'gateway-btn py-3 px-2 rounded-xl border border-karoo-border bg-white text-xs font-semibold text-karoo-ink hover:bg-karoo-panel transition';
  });
  btnEl.className = 'gateway-btn py-3 px-2 rounded-xl border-2 border-karoo-primary bg-white text-xs font-semibold text-karoo-ink shadow-2xs transition';
}

// Wishlist / Saved System
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast("Removed from Saved Pieces");
  } else {
    wishlist.push(productId);
    showToast("Saved to your Personal Archive");
  }

  const savedBadge = document.getElementById('headerSavedBadge');
  savedBadge.textContent = wishlist.length;
  savedBadge.classList.toggle('hidden', wishlist.length === 0);
  savedBadge.classList.toggle('flex', wishlist.length > 0);

  const homeHeart = document.getElementById('home-heart-1');
  if (homeHeart) {
    const is1Saved = wishlist.includes(1);
    homeHeart.className = `w-4 h-4 ${is1Saved ? 'text-rose-600 fill-current' : 'text-karoo-ink'}`;
  }

  renderCollection();
  renderSavedView();
  updateDetailWishlistButton();
}

function updateDetailWishlistButton() {
  const btn = document.getElementById('detailWishlistBtn');
  if (!btn) return;
  const isSaved = wishlist.includes(currentDetailProductId);
  btn.innerHTML = `<i data-lucide="heart" class="w-5 h-5 ${isSaved ? 'text-rose-600 fill-current' : 'text-karoo-ink'}"></i>`;
  lucide.createIcons();
}

function renderSavedView() {
  const grid = document.getElementById('savedGrid');
  const savedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  if (savedProducts.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-white rounded-2xl p-10 text-center border border-karoo-border space-y-3">
        <p class="font-editorial text-2xl text-karoo-ink">No saved garments yet</p>
        <p class="text-xs text-karoo-muted">Tap the heart icon on any handcrafted piece to curate your personal archive.</p>
        <button onclick="switchTab('collection')" class="px-4 py-2 rounded-lg bg-karoo-primary text-white text-xs font-semibold">Browse Collection</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = savedProducts.map(item => `
    <div class="bg-white rounded-2xl border border-karoo-border overflow-hidden flex flex-col justify-between garment-card">
      <div onclick="openProductDetail(${item.id})" class="relative aspect-[4/5] bg-stone-100 cursor-pointer">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" />
        <button onclick="event.stopPropagation(); toggleWishlist(${item.id})" class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white flex items-center justify-center text-rose-600 shadow">
          <i data-lucide="heart" class="w-4 h-4 fill-current"></i>
        </button>
      </div>
      <div class="p-4 space-y-2">
        <p class="text-[10px] uppercase tracking-wider text-karoo-muted">${item.fiberSub}</p>
        <h3 onclick="openProductDetail(${item.id})" class="font-editorial text-lg font-semibold text-karoo-ink cursor-pointer">${item.title}</h3>
        <div class="pt-2 border-t border-karoo-border flex items-center justify-between">
          <span class="font-bold text-sm">R${item.price}</span>
          <button onclick="addToBag(${item.id})" class="px-3 py-1.5 rounded-lg bg-karoo-primary text-white text-xs font-semibold">
            Move to Bag +
          </button>
        </div>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// View Navigation Controller (Updates Active Blue Menu State on Both Desktop & Mobile)
function switchTab(tabName, productId = null) {
  if (tabName === 'detail' && productId !== null) {
    openProductDetail(productId);
    return;
  }

  if (tabName !== currentTab) {
    previousTab = currentTab;
  }
  currentTab = tabName;

  const views = ['home', 'collection', 'detail', 'saved', 'bag'];
  views.forEach(v => {
    document.getElementById(`view-${v}`).classList.toggle('hidden', v !== tabName);
  });

  // Toggle Header Brand Name ("HOOKED BY LINA" on Bag view)
  const brandEl = document.getElementById('headerBrandTitle');
  brandEl.textContent = tabName === 'bag' ? "HOOKED BY LINA" : "HOOKED BY LINA";

  // Show Back Arrow on Product Detail View
  document.getElementById('backBtn').classList.toggle('hidden', tabName !== 'detail');

  // 1. Update Desktop Top Menu Active States
  const deskMap = {
    home: 'desk-nav-home',
    collection: 'desk-nav-collection',
    detail: 'desk-nav-atelier',
    saved: 'desk-nav-saved'
  };
  Object.entries(deskMap).forEach(([key, elId]) => {
    const deskBtn = document.getElementById(elId);
    if (deskBtn) {
      const isActive = (tabName === key);
      deskBtn.className = isActive
        ? 'text-karoo-primary font-semibold transition border-b-2 border-karoo-primary pb-0.5'
        : 'text-karoo-muted hover:text-karoo-ink transition';
    }
  });

  // 2. Update Bottom Mobile Nav Active States
  ['home', 'collection', 'saved', 'bag'].forEach(nav => {
    const mobBtn = document.getElementById(`mob-nav-${nav}`);
    if (mobBtn) {
      const isActive = (tabName === nav);
      mobBtn.className = isActive
        ? 'flex flex-col items-center gap-1 py-1 text-karoo-primary font-semibold transition'
        : 'flex flex-col items-center gap-1 py-1 text-karoo-muted transition';
    }
  });

  if (tabName === 'saved') renderSavedView();
  if (tabName === 'bag') updateBagSystem();

  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
}

function navigateBack() {
  switchTab(previousTab || 'collection');
}

// Accordions & Modals
function toggleAccordion(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById(`icon-${id}`);
  const isHidden = content.classList.contains('hidden');
  content.classList.toggle('hidden', !isHidden);
  icon.style.transform = isHidden ? 'rotate(45deg)' : 'rotate(0deg)';
}

function toggleMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  drawer.classList.toggle('hidden');
}

function toggleSizeGuideModal() {
  const modal = document.getElementById('sizeGuideModal');
  modal.classList.toggle('hidden');
  modal.classList.toggle('flex');
}

function openCheckoutModal() {
  if (bag.length === 0) {
    showToast("Please add a handcrafted garment to your bag first");
    return;
  }
  const modal = document.getElementById('checkoutModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function submitOrder(e) {
  e.preventDefault();
  closeCheckoutModal();
  bag = [];
  updateBagSystem();
  showToast("Artisan loom reserved! Dispatch confirmation sent via SMS.");
  setTimeout(() => switchTab('collection'), 1200);
}

// Toast Notification Helper
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMessage').textContent = msg;
  toast.classList.remove('hidden');
  toast.classList.add('flex');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, 3000);
}

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  renderCollection();
  renderSavedView();
  updateBagSystem();
  switchTab('collection');
  lucide.createIcons();
});