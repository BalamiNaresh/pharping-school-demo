// Pharping Secondary School – Events page logic

document.addEventListener('DOMContentLoaded', () => {
  const categoriesEl = document.getElementById('event-categories');
  const gallerySection = document.getElementById('event-gallery');
  const galleryGrid = document.getElementById('event-gallery-grid');
  const galleryTitle = document.getElementById('gallery-category-title');
  const galleryCount = document.getElementById('gallery-event-count');
  const backBtn = document.getElementById('gallery-back-btn');
  const modal = document.getElementById('event-modal');
  const modalBackdrop = document.getElementById('event-modal-backdrop');
  const modalClose = document.getElementById('event-modal-close');

  if (!categoriesEl || typeof EVENT_CATEGORIES === 'undefined') return;

  let activeCategoryId = null;

  function getCategory(id) {
    return EVENT_CATEGORIES.find((c) => c.id === id);
  }

  function getEventsByCategory(categoryId) {
    return EVENTS.filter((e) => e.categoryId === categoryId);
  }

  function renderCategories() {
    categoriesEl.innerHTML = EVENT_CATEGORIES.map(
      (cat) => `
      <button
        type="button"
        class="event-category-card card-hover reveal visible text-left bg-white border border-gray-100 rounded-2xl p-6 shadow-sm w-full"
        data-category-id="${cat.id}"
        aria-pressed="false"
      >
        <div class="text-4xl mb-3">${cat.icon}</div>
        <h3 class="font-heading font-semibold text-xl text-primary mb-2">${cat.name}</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-3">${cat.description}</p>
        <span class="text-accent text-sm font-semibold">
          View ${getEventsByCategory(cat.id).length} events →
        </span>
      </button>
    `
    ).join('');

    categoriesEl.querySelectorAll('.event-category-card').forEach((btn) => {
      btn.addEventListener('click', () => selectCategory(btn.dataset.categoryId));
    });
  }

  function setActiveCategoryUI(categoryId) {
    categoriesEl.querySelectorAll('.event-category-card').forEach((btn) => {
      const isActive = btn.dataset.categoryId === categoryId;
      btn.classList.toggle('event-category-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function renderGallery(events, category) {
    if (!galleryGrid || !category) return;

    galleryTitle.textContent = category.name;
    galleryCount.textContent =
      events.length === 1 ? '1 event' : `${events.length} events`;

    if (events.length === 0) {
      galleryGrid.innerHTML =
        '<p class="col-span-full text-center text-gray-500 py-12">No events in this category yet.</p>';
      return;
    }

    galleryGrid.innerHTML = events
      .map(
        (event) => `
      <article
        class="event-gallery-card gallery-img card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer reveal visible"
        data-event-id="${event.id}"
        tabindex="0"
        role="button"
        aria-label="View details: ${event.title}"
      >
        <div class="aspect-video overflow-hidden bg-gray-100">
          <img
            src="${event.image}"
            alt="${event.title}"
            class="w-full h-full object-cover transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div class="p-4">
          <h3 class="font-heading font-semibold text-lg text-gray-800 hover:text-primary transition-colors">
            ${event.title}
          </h3>
          <p class="text-gray-400 text-sm mt-1">${event.date}</p>
        </div>
      </article>
    `
      )
      .join('');

    galleryGrid.querySelectorAll('.event-gallery-card').forEach((card) => {
      card.addEventListener('click', () => openModal(card.dataset.eventId));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card.dataset.eventId);
        }
      });
    });
  }

  function selectCategory(categoryId) {
    activeCategoryId = categoryId;
    const category = getCategory(categoryId);
    const events = getEventsByCategory(categoryId);

    setActiveCategoryUI(categoryId);
    renderGallery(events, category);

    gallerySection.classList.remove('hidden');
    gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showCategories() {
    activeCategoryId = null;
    setActiveCategoryUI(null);
    gallerySection.classList.add('hidden');
    document.getElementById('event-categories-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function openModal(eventId) {
    const event = EVENTS.find((e) => e.id === eventId);
    if (!event || !modal) return;

    const category = getCategory(event.categoryId);

    document.getElementById('modal-image').src = event.image;
    document.getElementById('modal-image').alt = event.title;
    document.getElementById('modal-title').textContent = event.title;
    document.getElementById('modal-category').textContent = category?.name || '';
    document.getElementById('modal-date').textContent = event.date;
    document.getElementById('modal-location').textContent = event.location;
    document.getElementById('modal-description').textContent = event.description;

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalClose?.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  backBtn?.addEventListener('click', showCategories);
  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  renderCategories();

  // Deep-link support: ?cat=sports
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  if (catParam && getCategory(catParam)) {
    selectCategory(catParam);
  }
});
