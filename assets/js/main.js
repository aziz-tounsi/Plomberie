/**
 * PLOMB EXPERT - Modern Premium Site Script
 * Language persistence (Dutch default), Interactive Services Carousel,
 * Custom Glass Dropdown Menus, Belgian Postal Code Autocomplete,
 * Digit-Filtered Phone Input with Country Selector, WhatsApp Form Dispatch.
 */

// Translation Dictionary (Dutch default & French)
const translations = {
  nl: {
    "nav.slogan": "Comfort & Expertise",
    "nav.status": "Brussel & België 24/7",
    "hero.badge_flag": "Interventie heel België",
    "hero.title": "Loodgieterij & Verwarming 24/7",
    "hero.subtitle": "Snelle depannage voor lekken, ketelstoringen en ontstoppingen. Gecertificeerde loodgieters ter plaatse in 30 min.",
    "hero.call_btn": "Bellen : 0466 42 32 80",
    "hero.wa_btn": "Direct WhatsApp",

    "nav.home": "Startpagina",
    "nav.plumbing": "Loodgieterij & Lekken",
    "nav.heating": "Verwarming & Ketels",
    "nav.cooling": "Airco & Warmtepompen",
    "nav.devis": "Gratis Offerte",
    "nav.coverage": "Interventiegebied",
    "nav.contact": "Contact",
    "nav.call_now": "Nu bellen (+32 466 42 32 80)",

    "services.subtitle": "Onze Interventies",
    "services.title": "Services & Réalisations",
    "services.intro": "Kwalitatieve oplossingen voor loodgieterij en verwarming door erkende vakmensen.",

    "devis.tag": "Gratis Offerte",
    "devis.title": "Vraag uw Terugbelverzoek Aan binnen 5 Min",
    "devis.subtitle": "Vul dit snelformulier in of contacteer ons rechtstreeks via WhatsApp.",
    "devis.label_service": "Gewenste dienst *",
    "devis.label_location": "Postcode & Gemeente *",
    "devis.label_phone": "Telefoonnummer *",
    "devis.label_name": "Naam",
    "devis.label_details": "Details over het probleem",
    "devis.urgency_text": "Het betreft een dringende noodsituatie.",
    "devis.submit_btn": "Aanvraag verzenden",
    "devis.wa_direct_btn": "WhatsApp Direct"
  },
  fr: {
    "nav.slogan": "Confort & Expertise",
    "nav.status": "Bruxelles & Belgique 24/7",
    "hero.badge_flag": "Intervention toute la Belgique",
    "hero.title": "Dépannage Plomberie & Chauffage 24/7",
    "hero.subtitle": "Intervention express pour fuites, pannes de chaudière et débouchage. Techniciens certifiés chez vous en 30 minutes.",
    "hero.call_btn": "Appeler : 0466 42 32 80",
    "hero.wa_btn": "WhatsApp Direct",

    "nav.home": "Accueil",
    "nav.plumbing": "Plomberie & Fuites",
    "nav.heating": "Chauffage & Chaudières",
    "nav.cooling": "Climatisation",
    "nav.devis": "Devis Gratuit",
    "nav.coverage": "Zones d'intervention",
    "nav.contact": "Contact",
    "nav.call_now": "Appeler maintenant (+32 466 42 32 80)",

    "services.subtitle": "Nos Interventions",
    "services.title": "Services & Réalisations",
    "services.intro": "Solutions de plomberie et chauffage exécutées par nos experts agréés.",

    "devis.tag": "Devis Gratuit",
    "devis.title": "Demandez Votre Rappel sous 5 Minutes",
    "devis.subtitle": "Remplissez ce formulaire rapide ou contactez-nous directement sur WhatsApp.",
    "devis.label_service": "Service demandé *",
    "devis.label_location": "Code Postal & Commune *",
    "devis.label_phone": "Téléphone *",
    "devis.label_name": "Nom",
    "devis.label_details": "Précisions sur la panne",
    "devis.urgency_text": "Il s'agit d'une urgence inondation / panne totale.",
    "devis.submit_btn": "Envoyer la demande",
    "devis.wa_direct_btn": "WhatsApp Direct"
  }
};

// Default language: Dutch (nl)
let currentLang = localStorage.getItem('plomb_lang') || 'nl';

// Real Belgian Communes & Postal Codes
const belgianLocations = [
  "1000 Bruxelles / Brussel",
  "1030 Schaerbeek / Schaarbeek",
  "1040 Etterbeek",
  "1050 Ixelles / Elsene",
  "1060 Saint-Gilles / Sint-Gillis",
  "1070 Anderlecht",
  "1080 Molenbeek-Saint-Jean",
  "1090 Jette",
  "1140 Evere",
  "1150 Woluwe-Saint-Pierre",
  "1160 Auderghem",
  "1170 Watermael-Boitsfort",
  "1180 Uccle / Ukkel",
  "1190 Forest / Vorst",
  "1200 Woluwe-Saint-Lambert",
  "1300 Wavre",
  "1400 Nivelles",
  "1410 Waterloo",
  "1420 Braine-l'Alleud",
  "1500 Halle",
  "1800 Vilvoorde",
  "1930 Zaventem",
  "2000 Antwerpen",
  "2800 Mechelen",
  "3000 Leuven",
  "4000 Liège",
  "5000 Namur",
  "6000 Charleroi",
  "9000 Gent"
];

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initLanguageSwitcher();
  initMobileMenu();
  initCustomSelects();
  initPostalCodeAutocomplete();
  initPhoneInput();
  initServicesCarousel();
  initQuoteForm();
  initScrollIsland();
});

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('plomb_lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('bg-primary', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
    } else {
      btn.classList.remove('bg-primary', 'text-white');
      btn.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      setLanguage(e.target.dataset.lang);
    });
  });
}

// Mobile Hamburger Menu Handler (iOS Smooth Staggered Animation)
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      if (icon) {
        icon.style.transform = 'rotate(90deg)';
        setTimeout(() => {
          icon.textContent = 'close';
          icon.style.transform = 'rotate(0deg)';
        }, 120);
      }
      
      // iOS Staggered Items Slide-In
      const items = menu.querySelectorAll('a');
      items.forEach((item, idx) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-10px)';
        item.style.transition = `opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1) ${idx * 0.04}s, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.04}s`;
        requestAnimationFrame(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        });
      });
    } else {
      if (icon) {
        icon.style.transform = 'rotate(-90deg)';
        setTimeout(() => {
          icon.textContent = 'menu';
          icon.style.transform = 'rotate(0deg)';
        }, 120);
      }
      menu.classList.add('hidden');
    }
  });
}

// Custom Premium Dropdown Component (Rounded, sleek modern design replacing browser native selects)
function initCustomSelects() {
  const selectElements = document.querySelectorAll('select.custom-select-target');
  
  selectElements.forEach(select => {
    if (select.dataset.customized) return;
    select.dataset.customized = "true";
    select.style.display = 'none';

    const wrapper = document.createElement('div');
    const isPhoneCountry = select.id === 'phone-country';
    wrapper.className = `custom-select-wrapper ${isPhoneCountry ? 'phone-country-wrapper' : ''}`;

    const trigger = document.createElement('div');
    trigger.className = 'custom-select-trigger';

    const selectedOption = select.options[select.selectedIndex];
    const labelSpan = document.createElement('span');
    labelSpan.textContent = selectedOption ? selectedOption.textContent : select.placeholder || 'Sélectionner...';

    const arrowIcon = document.createElement('span');
    arrowIcon.className = 'material-symbols-outlined text-slate-400 text-base transition-transform duration-200';
    arrowIcon.textContent = 'expand_more';

    trigger.appendChild(labelSpan);
    trigger.appendChild(arrowIcon);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'custom-select-options';

    Array.from(select.options).forEach((opt, idx) => {
      if (idx === 0 && !opt.value && !isPhoneCountry) return; // Skip placeholder option for service select
      const optDiv = document.createElement('div');
      optDiv.className = `custom-option ${opt.selected ? 'selected' : ''}`;
      optDiv.textContent = opt.textContent;
      optDiv.dataset.value = opt.value;

      optDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        select.value = opt.value;
        labelSpan.textContent = opt.textContent;
        
        optionsContainer.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
        optDiv.classList.add('selected');

        wrapper.classList.remove('open');
        arrowIcon.style.transform = 'rotate(0deg)';

        // Dispatch change event to select element
        select.dispatchEvent(new Event('change'));
      });

      optionsContainer.appendChild(optDiv);
    });

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      // Close other open custom selects
      document.querySelectorAll('.custom-select-wrapper.open').forEach(w => {
        if (w !== wrapper) {
          w.classList.remove('open');
          const icon = w.querySelector('.material-symbols-outlined');
          if (icon) icon.style.transform = 'rotate(0deg)';
        }
      });

      const isOpen = wrapper.classList.toggle('open');
      arrowIcon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    wrapper.appendChild(trigger);
    wrapper.appendChild(optionsContainer);
    select.parentNode.insertBefore(wrapper, select);
  });

  // Global click outside listener to close dropdowns
  document.addEventListener('click', () => {
    document.querySelectorAll('.custom-select-wrapper.open').forEach(w => {
      w.classList.remove('open');
      const icon = w.querySelector('.material-symbols-outlined');
      if (icon) icon.style.transform = 'rotate(0deg)';
    });
  });
}

// Belgian Postal Code & Commune Autocomplete
function initPostalCodeAutocomplete() {
  const postalInput = document.getElementById('postal-code');
  if (!postalInput) return;

  const parent = postalInput.parentNode;
  parent.style.position = 'relative';

  const suggestionBox = document.createElement('div');
  suggestionBox.className = 'autocomplete-suggestions hidden';
  parent.appendChild(suggestionBox);

  postalInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    suggestionBox.innerHTML = '';

    if (!val || val.length < 1) {
      suggestionBox.classList.add('hidden');
      return;
    }

    const matches = belgianLocations.filter(loc => loc.toLowerCase().includes(val)).slice(0, 6);

    if (matches.length === 0) {
      suggestionBox.classList.add('hidden');
      return;
    }

    matches.forEach(loc => {
      const item = document.createElement('div');
      item.className = 'suggestion-item';
      item.textContent = loc;

      item.addEventListener('click', () => {
        postalInput.value = loc;
        suggestionBox.classList.add('hidden');
      });

      suggestionBox.appendChild(item);
    });

    suggestionBox.classList.remove('hidden');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (e.target !== postalInput && !suggestionBox.contains(e.target)) {
      suggestionBox.classList.add('hidden');
    }
  });
}

// Telephone Input Digit Filtering & Country Selector
function initPhoneInput() {
  const phoneInput = document.getElementById('phone-number');
  if (!phoneInput) return;

  // Strict Digits-Only Filter
  phoneInput.addEventListener('input', (e) => {
    // Keep only numbers
    const cleanVal = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = cleanVal;
  });

  // Handle Country Code Selector
  const countrySelect = document.getElementById('phone-country');
  if (countrySelect) {
    countrySelect.addEventListener('change', () => {
      phoneInput.focus();
    });
  }
}

// Interactive Services Carousel Slider
function initServicesCarousel() {
  const container = document.getElementById('services-carousel');
  if (!container) return;

  const slides = container.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const dotsContainer = document.getElementById('carousel-dots');

  if (!slides || slides.length === 0) return;

  let currentIndex = 0;
  let autoTimer = null;

  // Create dot indicators
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-primary w-7' : 'bg-slate-300 hover:bg-slate-400'}`;
      dot.setAttribute('aria-label', `Slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetAutoTimer();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.className = 'w-7 h-2.5 rounded-full bg-primary transition-all duration-300';
      } else {
        dot.className = 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-all duration-300';
      }
    });
  }

  function goToSlide(index) {
    slides[currentIndex].classList.add('hidden');
    slides[currentIndex].classList.remove('block');

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.remove('hidden');
    slides[currentIndex].classList.add('block');

    updateDots();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoTimer();
    });
  }

  // Swipe Gestures Support for Mobile
  let startX = 0;
  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) nextSlide();
      else prevSlide();
      resetAutoTimer();
    }
  }, { passive: true });

  function startAutoTimer() {
    autoTimer = setInterval(nextSlide, 5000);
  }

  function resetAutoTimer() {
    if (autoTimer) clearInterval(autoTimer);
    startAutoTimer();
  }

  startAutoTimer();
}

// Quote Form Handler with Automatic WhatsApp Dispatch
function initQuoteForm() {
  const form = document.getElementById('quote-form');
  const waDirectBtn = document.getElementById('send-wa-direct');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('client-name')?.value || 'Client';
      const problem = document.getElementById('problem-type')?.value || 'Dépannage Général';
      const location = document.getElementById('postal-code')?.value || 'Belgique';
      const countryCode = document.getElementById('phone-country')?.value || '+32';
      const phoneDigits = document.getElementById('phone-number')?.value || '';
      const fullPhone = `${countryCode} ${phoneDigits}`;
      const details = document.getElementById('details')?.value || '';
      const isUrgent = document.getElementById('urgency-flag')?.checked;

      alert(`✅ Bedankt / Merci ${name} !\nUw aanvraag voor "${problem}" in ${location} is verzonden.\nOnze technicus belt u op ${fullPhone} binnen 5 minuten.`);

      const textMsg = `Bonjour PLOMB EXPERT,\n\nDemande d'intervention en ligne :\n- Nom : ${name}\n- Service : ${problem}\n- Commune / Postcode : ${location}\n- Téléphone : ${fullPhone}\n- Urgence : ${isUrgent ? 'OUI (Prioritaire)' : 'Non'}\n- Détails : ${details}\n\nMerci.`;
      const encoded = encodeURIComponent(textMsg);
      window.open(`https://wa.me/32466423280?text=${encoded}`, '_blank');

      form.reset();
    });
  }

  if (waDirectBtn) {
    waDirectBtn.addEventListener('click', () => {
      const name = document.getElementById('client-name')?.value || 'Client';
      const problem = document.getElementById('problem-type')?.value || 'Urgence Plomberie / Chauffage';
      const location = document.getElementById('postal-code')?.value || 'Belgique';
      const countryCode = document.getElementById('phone-country')?.value || '+32';
      const phoneDigits = document.getElementById('phone-number')?.value || '';
      const fullPhone = `${countryCode} ${phoneDigits}`;
      const details = document.getElementById('details')?.value || '';
      const isUrgent = document.getElementById('urgency-flag')?.checked;

      const textMsg = `Bonjour PLOMB EXPERT,\n\nDemande WhatsApp Direct :\n- Nom : ${name}\n- Service : ${problem}\n- Commune / Postcode : ${location}\n- Téléphone : ${fullPhone}\n- Urgence : ${isUrgent ? 'OUI' : 'Non'}\n- Détails : ${details}\n\nMerci.`;

      const encoded = encodeURIComponent(textMsg);
      window.open(`https://wa.me/32466423280?text=${encoded}`, '_blank');
    });
  }
}

function initScrollIsland() {
  const island = document.getElementById('floating-island');
  if (!island) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      island.classList.remove('opacity-0', 'translate-y-10');
      island.classList.add('opacity-100', 'translate-y-0');
    } else {
      island.classList.add('opacity-0', 'translate-y-10');
      island.classList.remove('opacity-100', 'translate-y-0');
    }
  });
}
