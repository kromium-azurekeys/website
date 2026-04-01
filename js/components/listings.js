/* ============================================================
   COMPONENT — LISTINGS
   Cards now link to individual property pages
============================================================ */

(function () {
  const grid        = document.getElementById('listingsGrid');
  const filterBtns  = document.querySelectorAll('.listings__filter');
  let currentFilter = 'all';

  function buildCard(p) {
    const badgeHTML = p.badge
      ? `<span class="property-card__badge">${p.badge}</span>`
      : '';

    return `
      <a href="properties/property.html?id=${p.id}"
         class="property-card reveal"
         data-market="${p.market}"
         data-id="${p.id}"
         style="text-decoration:none;">
        <div class="property-card__image-wrap">
          <img src="${p.image}" alt="${p.alt}" loading="lazy" />
          ${badgeHTML}
          <span class="property-card__market">${_marketLabel(p.market)}</span>
        </div>
        <div class="property-card__body">
          <p class="property-card__price">${p.price}</p>
          <h3 class="property-card__name">${p.name}</h3>
          <p class="property-card__location">${p.location}</p>
          <p class="property-card__type-pill">${p.type || 'Property'}</p>
          <div class="property-card__features">
            <span class="property-card__feature">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 9v11h7v-7h4v7h7V9L12 3z"/></svg>
              ${p.beds} Bed
            </span>
            <span class="property-card__feature">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12h16M4 12a8 8 0 0 1 16 0M4 12v6h16v-6"/></svg>
              ${p.baths} Bath
            </span>
            <span class="property-card__feature">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              ${p.sqft} ft²
            </span>
          </div>
          <div class="property-card__cta">View Property →</div>
        </div>
      </a>
    `;
  }

  function _marketLabel(key) {
    return { jamaica: 'Jamaica', bahamas: 'Bahamas', cayman: 'Cayman Islands' }[key] || key;
  }

  function renderCards() {
    if (!window.LISTINGS_DATA) return;
    grid.innerHTML = window.LISTINGS_DATA.map(buildCard).join('');
    initReveal();
  }

  function applyFilter(market) {
    currentFilter = market;
    const cards = grid.querySelectorAll('.property-card');
    cards.forEach(card => {
      const visible = market === 'all' || card.dataset.market === market;
      card.classList.toggle('hidden', !visible);
    });
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === market);
      btn.setAttribute('aria-selected', btn.dataset.filter === market ? 'true' : 'false');
    });
  }

  filterBtns.forEach(btn => btn.addEventListener('click', () => applyFilter(btn.dataset.filter)));

  function initReveal() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.property-card').forEach(el => obs.observe(el));
  }

  renderCards();
})();
