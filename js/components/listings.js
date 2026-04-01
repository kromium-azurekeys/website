/* ============================================================
   COMPONENT — LISTINGS
============================================================ */

(function () {
  const grid         = document.getElementById('listingsGrid');
  const filterBtns   = document.querySelectorAll('.listings__filter');
  let currentFilter  = 'all';

  // ---- Build a single property card ----
  function buildCard(p) {
    const badgeHTML = p.badge
      ? `<span class="property-card__badge">${p.badge}</span>`
      : '';

    return `
      <article class="property-card reveal" data-market="${p.market}" data-id="${p.id}">
        <div class="property-card__image-wrap" data-lightbox="${p.id}">
          <img src="${p.image}" alt="${p.alt}" loading="lazy" />
          ${badgeHTML}
          <span class="property-card__market">${_marketLabel(p.market)}</span>
        </div>
        <div class="property-card__body">
          <p class="property-card__price">${p.price}</p>
          <h3 class="property-card__name">${p.name}</h3>
          <p class="property-card__location">${p.location}</p>
          <div class="property-card__features">
            <span class="property-card__feature">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 9v11h7v-7h4v7h7V9L12 3z"/>
              </svg>
              ${p.beds} Bed
            </span>
            <span class="property-card__feature">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M4 12h16M4 12a8 8 0 0 1 16 0M4 12v6h16v-6"/>
              </svg>
              ${p.baths} Bath
            </span>
            <span class="property-card__feature">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
              </svg>
              ${p.sqft} ft²
            </span>
          </div>
        </div>
      </article>
    `;
  }

  function _marketLabel(key) {
    const map = { jamaica: 'Jamaica', bahamas: 'Bahamas', cayman: 'Cayman Islands' };
    return map[key] || key;
  }

  // ---- Render all cards ----
  function renderCards() {
    if (!window.LISTINGS_DATA) return;
    grid.innerHTML = window.LISTINGS_DATA.map(buildCard).join('');
    initReveal();
    initLightboxTriggers();
  }

  // ---- Filter ----
  function applyFilter(market) {
    currentFilter = market;
    const cards = grid.querySelectorAll('.property-card');

    cards.forEach(card => {
      const cardMarket = card.dataset.market;
      const visible = market === 'all' || cardMarket === market;
      card.classList.toggle('hidden', !visible);
    });

    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === market);
      btn.setAttribute('aria-selected', btn.dataset.filter === market ? 'true' : 'false');
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  // ---- Scroll reveal ----
  function initReveal() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.property-card').forEach(el => observer.observe(el));
  }

  // ---- Lightbox triggers ----
  function initLightboxTriggers() {
    grid.querySelectorAll('[data-lightbox]').forEach(wrap => {
      wrap.addEventListener('click', () => {
        const id = wrap.dataset.lightbox;
        if (window.Lightbox) window.Lightbox.open(id);
      });
    });
  }

  // Init
  renderCards();
})();
