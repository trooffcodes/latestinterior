/* ==========================================================================
   LATEST INTERIORS — 60FPS INTERACTIVE ENGINE (VANILLA ES6+)
   ========================================================================== */

(() => {
  'use strict';

  const ASSET_BASE = 'assets/';

  /* ------------------------------------------------------------------------
     1. PROJECT CATALOG SCHEMA
     ------------------------------------------------------------------------ */
  const FILTER_CATEGORIES = [
    'All',
    'Apartment Interiors',
    'Builder Floor Interiors',
    'Clinic Interiors',
    'Commercial Project',
    'Office Interiors',
    'Residential Project',
    'Salon Interiors',
    'Villa Interiors'
  ];

  const PROJECTS = [
    {
      id: 'defence-colony-residence',
      featured: true,
      index: '01',
      title: 'Defence Colony Residence',
      location: 'Defence Colony, South Delhi',
      area: '285 Sq. Yd.',
      typology: 'Luxury Builder Floor',
      formTypology: 'Builder floor interiors',
      classifications: ['Builder Floor Interiors', 'Residential Project'],
      highlights: 'Customised Furniture · Premium Finishes · Designer Lighting · Bespoke Living Room',
      narrative:
        'A 285 Sq. Yd. private builder floor in South Delhi anchored by monolithic stone surfaces, fluted timber joinery, and custom-fabricated seating. Layered architectural lighting transitions the living volume effortlessly from sun-drenched daytime hospitality to intimate evening calm.',
      cover: 'defence1.webp',
      gallery: ['defence1.webp', 'defence2.webp', 'defence3.webp', 'defence4.webp', 'defence5.webp', 'defence6.webp']
    },
    {
      id: 'sector-62-gurgaon-penthouse',
      featured: true,
      index: '02',
      title: 'Sector 62 Residence',
      location: 'Sector 62, Gurugram',
      area: '7,200 Sq. Ft.',
      typology: '5-Bedroom High-Rise Apartment',
      formTypology: 'Apartment interiors',
      classifications: ['Apartment Interiors', 'Residential Project'],
      highlights: 'Bespoke Furniture · Premium Finishes · Designer Lighting · Customised Interior Design',
      narrative:
        'Spanning 7,200 Sq. Ft. above the Gurugram skyline, this five-bedroom sky residence balances expansive entertaining galleries with hushed private suites. Tailored furniture silhouettes, honed marble planes, and sculptural luminaires frame uninterrupted horizon views.',
      cover: 'sector1.webp',
      gallery: ['sector1.webp', 'sector2.webp', 'sector3.webp', 'sector4.webp', 'sector5.webp', 'sector6.webp', 'sector7.webp']
    },
    {
      id: 'sector-137-noida-workspace',
      featured: true,
      index: '03',
      title: 'Sector 137 Workplace',
      location: 'Sector 137, Noida',
      area: '17,000 Sq. Ft.',
      typology: 'Corporate Headquarters',
      formTypology: 'Office interiors',
      classifications: ['Office Interiors', 'Commercial Project'],
      highlights: 'Smart Space Planning · Acoustic Detailing · Refined Lighting · Brand-Aligned Architecture',
      narrative:
        'Engineered across 17,000 Sq. Ft., this contemporary Noida workspace harmonizes executive poise with high-efficiency collaborative zones. Clean architectural sightlines, acoustic timber baffling, and circadian lighting elevate daily workplace focus.',
      cover: 'office1.webp',
      gallery: ['office1.webp', 'office2.webp', 'office3.webp', 'office4.webp', 'office5.webp', 'office6.webp']
    },
    {
      id: 'panchsheel-enclave-clinic',
      featured: true,
      index: '04',
      title: 'Panchsheel Dermatology Clinic',
      location: 'Panchsheel Enclave, New Delhi',
      area: '2,500 Sq. Ft. (3 Floors)',
      typology: 'Specialist Medical Sanctuary',
      formTypology: 'Clinic interiors',
      classifications: ['Clinic Interiors', 'Commercial Project'],
      highlights: 'Reception & Consultation Suites · Dedicated OT Area · Hygienic Luxury Lighting · Custom Joinery',
      narrative:
        'Distributed across three thoughtfully zoned levels, this South Delhi dermatology practice pairs sterile clinical precision with calm hospitality warmth. Seamless non-porous surfaces, custom medical cabinetry, and glare-free diffused lighting create an atmosphere of quiet reassurance.',
      cover: 'clinic1.webp',
      gallery: ['clinic1.webp', 'clinic2.webp', 'clinic3.webp', 'clinic4.webp', 'clinic5.webp', 'clinic6.webp', 'clinic7.webp']
    },
    {
      id: 'sainik-farm-villa',
      featured: false,
      index: '05',
      title: 'Sainik Farm Courtyard Villa',
      location: 'Sainik Farm, South Delhi',
      area: '12,500 Sq. Ft.',
      typology: 'Private Estate Villa',
      formTypology: 'Villa interiors',
      classifications: ['Villa Interiors', 'Residential Project'],
      highlights: 'Double-Height Atrium · Travertine & Teak Millwork · Courtyard Pavilion · Custom Brass Hardware',
      narrative:
        'Set within lush private grounds in South Delhi, this 12,500 Sq. Ft. villa weaves double-height gallery spaces around a sunlit central courtyard. Raw travertine walls, Burma teak louvers, and bespoke brass fixtures ground the residence in timeless materiality.',
      cover: 'villa1.webp',
      gallery: ['villa1.webp', 'villa2.webp', 'villa3.webp', 'villa4.webp', 'villa5.webp', 'villa6.webp']
    },
    {
      id: 'galleria-atelier-salon',
      featured: false,
      index: '06',
      title: 'Atelier Hair & Skin Studio',
      location: 'DLF Phase IV, Gurugram',
      area: '3,200 Sq. Ft.',
      typology: 'Flagship Beauty & Wellness Salon',
      formTypology: 'Salon Interiors',
      classifications: ['Salon Interiors', 'Commercial Project'],
      highlights: 'High-CRI Mirror Illumination · Terrazzo Wet Bar · Private Styling Cabins · Acoustic Lounge',
      narrative:
        'Conceived as a tactile sanctuary in Gurugram, this flagship salon replaces visual clutter with monolithic plaster curves and precision styling stations. High-CRI perimeter lighting and custom brushed-steel consoles transform routine grooming into an unhurried ritual.',
      cover: 'salon1.webp',
      gallery: ['salon1.webp', 'salon2.webp', 'salon3.webp', 'salon4.webp', 'salon5.webp', 'salon6.webp']
    },
    {
      id: 'vasant-vihar-triplex',
      featured: false,
      index: '07',
      title: 'Vasant Vihar Penthouse Suite',
      location: 'Vasant Vihar, New Delhi',
      area: '4,800 Sq. Ft.',
      typology: 'Custom Builder Floor & Penthouse',
      formTypology: 'Builder floor interiors',
      classifications: ['Builder Floor Interiors', 'Apartment Interiors', 'Residential Project'],
      highlights: 'Private Terrace Lounge · Fluted Walnut Panelling · Home Automation · Gallery Art Lighting',
      narrative:
        'Occupying the upper levels of a boutique Vasant Vihar address, this turnkey residence pairs warm walnut millwork with museum-grade illumination. Seamless pocket partitions allow the formal dining salon and terrace lounge to merge into a single entertaining floorplate.',
      cover: 'vasant1.webp',
      gallery: ['vasant1.webp', 'vasant2.webp', 'vasant3.webp', 'vasant4.webp', 'vasant5.webp']
    }
  ];

  /* ------------------------------------------------------------------------
     2. ARCHITECTURAL SVG FALLBACKS (INDEPENDENT BORDERLESS MONOGRAM)
     ------------------------------------------------------------------------ */
  const fallbackCache = new Map();

  function createSvgFallback(key, label = '', variant = 'dark') {
    const cacheKey = `${key}__${variant}`;
    if (fallbackCache.has(cacheKey)) return fallbackCache.get(cacheKey);

    let svg = '';
    if (key === 'logo_env.webp') {
      const ink = variant === 'light' ? '#F4F1EC' : '#171614';
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <text x="60" y="80" text-anchor="middle" font-family="Georgia, serif" font-size="64" letter-spacing="4" fill="${ink}">LI</text>
      </svg>`;
    } else if (key === 'hero-bg.webp') {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F4F1EC" stop-opacity="0"/><stop offset="40%" stop-color="#EAE5DC"/><stop offset="100%" stop-color="#DFD8CC"/></linearGradient>
        </defs>
        <rect y="300" width="1600" height="600" fill="url(#wall)"/>
        <rect x="220" y="340" width="260" height="390" fill="#F8F5F0" stroke="#CFC7BA" stroke-width="2"/>
        <rect x="1120" y="340" width="260" height="390" fill="#F8F5F0" stroke="#CFC7BA" stroke-width="2"/>
        <line x1="350" y1="340" x2="350" y2="730" stroke="#CFC7BA" stroke-width="1.5"/>
        <line x1="1250" y1="340" x2="1250" y2="730" stroke="#CFC7BA" stroke-width="1.5"/>
        <rect y="730" width="1600" height="170" fill="#D4CCC0"/>
      </svg>`;
    } else if (key === 'hero-mid.webp') {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
        <ellipse cx="800" cy="790" rx="430" ry="26" fill="#171614" opacity="0.12"/>
        <rect x="430" y="595" width="740" height="150" rx="22" fill="#E8E2D7" stroke="#C8BFAE" stroke-width="2"/>
        <rect x="465" y="655" width="670" height="82" rx="14" fill="#F2EDE4" stroke="#C8BFAE" stroke-width="1.5"/>
        <rect x="420" y="640" width="68" height="118" rx="14" fill="#DDD5C7" stroke="#C4BAA9" stroke-width="1.5"/>
        <rect x="1112" y="640" width="68" height="118" rx="14" fill="#DDD5C7" stroke="#C4BAA9" stroke-width="1.5"/>
        <rect x="470" y="756" width="18" height="34" fill="#3B352F"/>
        <rect x="1112" y="756" width="18" height="34" fill="#3B352F"/>
      </svg>`;
    } else if (key === 'hero-fg.webp') {
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
        <line x1="255" y1="440" x2="255" y2="835" stroke="#3B352F" stroke-width="4"/>
        <ellipse cx="255" cy="835" rx="46" ry="9" fill="#2A2622"/>
        <path d="M205 445 C205 405, 305 405, 305 445 Z" fill="#9E7B56" opacity="0.9"/>
        <ellipse cx="800" cy="848" rx="215" ry="18" fill="#171614" opacity="0.16"/>
        <rect x="655" y="758" width="290" height="22" rx="11" fill="#EFEAE1" stroke="#C9C0B1" stroke-width="1.5"/>
        <rect x="705" y="780" width="52" height="62" rx="4" fill="#DCD3C5"/>
        <rect x="843" y="780" width="52" height="62" rx="4" fill="#DCD3C5"/>
        <ellipse cx="1320" cy="836" rx="115" ry="14" fill="#171614" opacity="0.14"/>
        <path d="M1230 685 C1230 635, 1410 635, 1410 685 L1395 790 L1245 790 Z" fill="#8C6B4B"/>
        <line x1="1258" y1="790" x2="1248" y2="834" stroke="#2D2925" stroke-width="6"/>
        <line x1="1382" y1="790" x2="1392" y2="834" stroke="#2D2925" stroke-width="6"/>
      </svg>`;
    } else {
      const hash = Array.from(key).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
      const tones = [
        ['#EAE3D8', '#D3C7B6', '#9E7B56', '#3A3530'],
        ['#E4DDD2', '#C5B8A5', '#7F6852', '#262320'],
        ['#ECE7DF', '#D9CFC1', '#B09270', '#4A433C'],
        ['#E2DBD0', '#C9BBAE', '#8E7358', '#2E2A26']
      ][hash % 4];
      const safeLabel = (label || key.replace('.webp', '')).toUpperCase();
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="g${hash}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${tones[0]}"/>
            <stop offset="100%" stop-color="${tones[1]}"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#g${hash})"/>
        <rect x="90" y="90" width="440" height="530" fill="#F7F4EE" opacity="0.65"/>
        <line x1="310" y1="90" x2="310" y2="620" stroke="${tones[3]}" stroke-width="1.5" opacity="0.25"/>
        <rect x="610" y="160" width="490" height="460" fill="${tones[3]}" opacity="0.09"/>
        <circle cx="855" cy="285" r="78" fill="${tones[2]}" opacity="0.35"/>
        <rect x="190" y="545" width="820" height="125" rx="6" fill="#F5F1EA" stroke="${tones[3]}" stroke-opacity="0.18"/>
        <text x="90" y="752" font-family="sans-serif" font-size="14" letter-spacing="3" fill="${tones[3]}" opacity="0.65">${safeLabel}</text>
      </svg>`;
    }

    const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    fallbackCache.set(cacheKey, url);
    return url;
  }

  /* ------------------------------------------------------------------------
     3. SMART ASSET CACHE & TWO-STAGE PRELOADER
     ------------------------------------------------------------------------ */
  const resolvedUrls = new Map();
  const loadingPromises = new Map();

  function loadAsset(filename, label = '', fallbackVariant = 'dark') {
    const cacheKey = `${filename}__${fallbackVariant}`;
    if (resolvedUrls.has(cacheKey)) return Promise.resolve(resolvedUrls.get(cacheKey));
    if (loadingPromises.has(cacheKey)) return loadingPromises.get(cacheKey);

    const p = new Promise((resolve) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = async () => {
        if (img.decode) {
          try { await img.decode(); } catch (_) { /* noop */ }
        }
        resolvedUrls.set(cacheKey, img.src);
        resolve(img.src);
      };
      img.onerror = () => {
        const fb = createSvgFallback(filename, label, fallbackVariant);
        resolvedUrls.set(cacheKey, fb);
        resolve(fb);
      };
      img.src = ASSET_BASE + filename;
    });

    loadingPromises.set(cacheKey, p);
    return p;
  }

  function applyResolvedImage(imgEl, filename, label = '', fallbackVariant = 'dark') {
    if (!imgEl) return;
    const cacheKey = `${filename}__${fallbackVariant}`;
    if (resolvedUrls.has(cacheKey)) {
      imgEl.src = resolvedUrls.get(cacheKey);
      return;
    }
    imgEl.onerror = () => {
      imgEl.onerror = null;
      imgEl.src = createSvgFallback(filename, label, fallbackVariant);
    };
    loadAsset(filename, label, fallbackVariant).then((src) => {
      imgEl.src = src;
    });
  }

  /* ------------------------------------------------------------------------
     4. DOM REFERENCES & STATE
     ------------------------------------------------------------------------ */
  const preloaderEl = document.getElementById('preloader');
  const preloaderFill = document.getElementById('preloader-fill');
  const preloaderPercent = document.getElementById('preloader-percent');
  const siteHeader = document.getElementById('site-header');
  const stackDeckEl = document.getElementById('stack-deck');
  const featuredRunway = document.getElementById('featured-works');
  const featuredCounter = document.getElementById('featured-counter');

  const catalogOverlay = document.getElementById('all-projects-view');
  const catalogGridEl = document.getElementById('catalog-grid');
  const filterBarEl = document.getElementById('filter-bar');
  const catalogCountEl = document.getElementById('catalog-count');

  const detailOverlay = document.getElementById('project-detail-view');
  const detailHeroMedia = document.getElementById('detail-hero-media');
  const detailHeroImg = document.getElementById('detail-hero-img');

  const flipProxy = document.getElementById('flip-proxy');
  const flipProxyImg = document.getElementById('flip-proxy-img');

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

  let lenis = null;
  let activeOverlay = null; // null | 'catalog' | 'detail'
  let detailReturnTarget = 'main'; // 'main' | 'catalog'
  let activeOriginMediaEl = null;
  let activeProject = null;
  let activeFilter = 'All';
  let isAnimatingFlip = false;

  /* ------------------------------------------------------------------------
     5. RENDER FEATURED STACK CARDS & CATALOG
     ------------------------------------------------------------------------ */
  function renderFeaturedStack() {
    stackDeckEl.innerHTML = '';
    featuredProjects.forEach((project, idx) => {
      const card = document.createElement('article');
      card.className = 'stack-card';
      card.dataset.projectId = project.id;
      card.style.zIndex = String(idx + 1);
      card.style.transform = idx === 0 ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(110vw, 0, 0) scale(1)';

      card.innerHTML = `
        <div class="stack-card__haze" aria-hidden="true"></div>
        <div class="stack-card__media">
          <img alt="${project.title} — ${project.location}" />
          <span class="stack-card__badge">Explore Project &#8599;</span>
        </div>
        <div class="stack-card__body">
          <div class="stack-card__top">
            <span class="stack-card__index">${project.index}</span>
            <p class="stack-card__eyebrow">${project.location}</p>
            <h3 class="stack-card__title">${project.title}</h3>
            <p class="stack-card__desc">${project.narrative}</p>
          </div>
          <div class="stack-card__specs">
            <div><span class="card-spec__key">AREA</span><span class="card-spec__val">${project.area}</span></div>
            <div><span class="card-spec__key">TYPOLOGY</span><span class="card-spec__val">${project.typology}</span></div>
          </div>
        </div>
      `;

      const img = card.querySelector('.stack-card__media img');
      applyResolvedImage(img, project.cover, `${project.title} · Cover`);

      card.addEventListener('click', () => {
        const mediaEl = card.querySelector('.stack-card__media');
        openProjectDetail(project, mediaEl, 'main');
      });

      stackDeckEl.appendChild(card);
    });
  }

  function renderFilterBar() {
    filterBarEl.innerHTML = '';
    FILTER_CATEGORIES.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `filter-pill${cat === activeFilter ? ' is-active' : ''}`;
      btn.textContent = cat;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(cat === activeFilter));
      btn.addEventListener('click', () => {
        if (activeFilter === cat) return;
        activeFilter = cat;
        renderFilterBar();
        renderCatalogGrid();
      });
      filterBarEl.appendChild(btn);
    });
  }

  function renderCatalogGrid() {
    const filtered = activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.classifications.includes(activeFilter));

    catalogCountEl.textContent = `${String(filtered.length).padStart(2, '0')} Project${filtered.length === 1 ? '' : 's'}`;
    catalogGridEl.innerHTML = '';

    filtered.forEach((project, idx) => {
      const card = document.createElement('article');
      card.className = 'catalog-card';
      card.dataset.projectId = project.id;
      card.innerHTML = `
        <div class="catalog-card__media">
          <img alt="${project.title}" />
        </div>
        <div class="catalog-card__meta">
          <h3 class="catalog-card__title">${project.title}</h3>
          <span class="catalog-card__area">${project.area}</span>
        </div>
        <p class="catalog-card__sub">${project.location} &middot; ${project.typology}</p>
      `;

      const img = card.querySelector('.catalog-card__media img');
      applyResolvedImage(img, project.cover, `${project.title} · Cover`);

      card.addEventListener('click', () => {
        const mediaEl = card.querySelector('.catalog-card__media');
        openProjectDetail(project, mediaEl, 'catalog');
      });

      catalogGridEl.appendChild(card);

      setTimeout(() => {
        requestAnimationFrame(() => card.classList.add('is-visible'));
      }, Math.min(idx * 45, 280));
    });
  }

  /* ------------------------------------------------------------------------
     6. MOTION ENGINE: 3-PLANE HERO PARALLAX & SCROLL-DRIVEN STACKING
     ------------------------------------------------------------------------ */
  const heroBgLayer = document.querySelector('[data-parallax-layer="bg"]');
  const heroMidLayer = document.querySelector('[data-parallax-layer="mid"]');
  const heroFgLayer = document.querySelector('[data-parallax-layer="fg"]');

  const pointerTarget = { x: 0, y: 0 };
  const layerState = {
    bg:  { x: 0, y: 0, damp: 0.045, ampX: 12, ampY: 8,  scale: 1.04 },
    mid: { x: 0, y: 0, damp: 0.065, ampX: 26, ampY: 16, scale: 1.06 },
    fg:  { x: 0, y: 0, damp: 0.085, ampX: 44, ampY: 24, scale: 1.08 }
  };

  if (!isTouchDevice && !reducedMotion) {
    window.addEventListener('pointermove', (e) => {
      if (activeOverlay) return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      pointerTarget.x = -nx;
      pointerTarget.y = -ny;
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      pointerTarget.x = 0;
      pointerTarget.y = 0;
    });
  }

  function updateHeroParallax(scrollY) {
    if (reducedMotion) return;

    if (isTouchDevice) {
      const progress = Math.min(Math.max(scrollY / window.innerHeight, 0), 1.2);
      heroBgLayer.style.transform  = `translate3d(0, ${(-20 * progress).toFixed(2)}px, 0) scale(1.03)`;
      heroMidLayer.style.transform = `translate3d(0, ${(-45 * progress).toFixed(2)}px, 0) scale(1.05)`;
      heroFgLayer.style.transform  = `translate3d(0, ${(-75 * progress).toFixed(2)}px, 0) scale(1.07)`;
      return;
    }

    const layers = [
      [heroBgLayer, layerState.bg],
      [heroMidLayer, layerState.mid],
      [heroFgLayer, layerState.fg]
    ];

    for (const [el, s] of layers) {
      if (!el) continue;
      const tx = pointerTarget.x * s.ampX;
      const ty = pointerTarget.y * s.ampY;
      s.x += (tx - s.x) * s.damp;
      s.y += (ty - s.y) * s.damp;
      el.style.transform = `translate3d(${s.x.toFixed(2)}px, ${s.y.toFixed(2)}px, 0) scale(${s.scale})`;
    }
  }

  function easeArchitectural(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function updateFeaturedStack(scrollY) {
    const cards = stackDeckEl.children;
    if (!cards.length) return;

    const runwayTop = featuredRunway.offsetTop;
    const travelDist = featuredRunway.offsetHeight - window.innerHeight;
    if (travelDist <= 0) return;

    const p = Math.min(Math.max((scrollY - runwayTop) / travelDist, 0), 1);
    const segments = featuredProjects.length - 1;
    const segSize = 1 / segments;

    let activeTopIndex = 0;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const haze = card.querySelector('.stack-card__haze');

      if (i === 0) {
        const depth = Math.min(p / segSize, 3);
        const scale = 1 - depth * 0.04;
        const ty = -depth * 10;
        const opacity = depth > 2.2 ? Math.max(0.55, 1 - (depth - 2.2) * 0.5) : 1;
        card.style.transform = `translate3d(0, ${ty.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
        card.style.opacity = opacity.toFixed(3);
        haze.style.opacity = Math.min(depth * 0.11, 0.32).toFixed(3);
      } else {
        const entryStart = (i - 1) * segSize;
        const entryEnd = i * segSize;
        const localProgress = Math.min(Math.max((p - entryStart) / (entryEnd - entryStart), 0), 1);
        const easedIn = easeArchitectural(localProgress);

        if (localProgress >= 0.5) activeTopIndex = i;

        const translateX = (1 - easedIn) * 108;
        const depthAfter = Math.max(0, (p - entryEnd) / segSize);
        const scale = 1 - depthAfter * 0.04;
        const ty = i * 6 - depthAfter * 10;

        card.style.transform = `translate3d(${translateX.toFixed(2)}vw, ${ty.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
        card.style.opacity = '1';
        haze.style.opacity = Math.min(depthAfter * 0.12, 0.30).toFixed(3);
      }
    }

    for (let i = 0; i < cards.length; i++) {
      cards[i].style.pointerEvents = i <= activeTopIndex ? 'auto' : 'none';
    }
    featuredCounter.textContent = `${String(activeTopIndex + 1).padStart(2, '0')} / 0${featuredProjects.length}`;
  }

  /* ------------------------------------------------------------------------
     7. ZERO-DISTORTION GPU FLIP SHARED-ELEMENT ENGINE
     ------------------------------------------------------------------------ */
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateFlipFlight({ fromRect, toRect, imgSrc, duration = 620, startRadius = 12, endRadius = 2, onMidpoint, onComplete }) {
    // Static container set ONCE at destination rect; GPU transform handles 100% of motion
    flipProxy.style.left = `${toRect.left}px`;
    flipProxy.style.top = `${toRect.top}px`;
    flipProxy.style.width = `${toRect.width}px`;
    flipProxy.style.height = `${toRect.height}px`;
    flipProxy.style.borderRadius = `${endRadius}px`;
    flipProxyImg.src = imgSrc;
    flipProxy.style.display = 'block';

    const startTime = performance.now();
    let midpointFired = false;

    function step(now) {
      const raw = reducedMotion ? 1 : Math.min((now - startTime) / duration, 1);
      const u = easeOutQuart(raw);

      const curW = fromRect.width + (toRect.width - fromRect.width) * u;
      const curH = fromRect.height + (toRect.height - fromRect.height) * u;
      const curX = fromRect.left + (toRect.left - fromRect.left) * u;
      const curY = fromRect.top + (toRect.top - fromRect.top) * u;

      const boxSx = curW / toRect.width;
      const boxSy = curH / toRect.height;
      const dx = curX - toRect.left;
      const dy = curY - toRect.top;

      // Counter-scale inner image so aspect ratio stays 1:1 unstretched while filling cover
      const coverScale = Math.max(boxSx, boxSy);
      const imgSx = coverScale / boxSx;
      const imgSy = coverScale / boxSy;

      flipProxy.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0) scale(${boxSx.toFixed(5)}, ${boxSy.toFixed(5)})`;
      flipProxyImg.style.transform = `scale(${imgSx.toFixed(5)}, ${imgSy.toFixed(5)})`;
      flipProxy.style.borderRadius = `${(startRadius + (endRadius - startRadius) * u).toFixed(1)}px`;

      if (!midpointFired && raw >= 0.45) {
        midpointFired = true;
        if (onMidpoint) onMidpoint();
      }

      if (raw < 1) {
        requestAnimationFrame(step);
      } else {
        if (onComplete) onComplete();
      }
    }

    requestAnimationFrame(step);
  }

  function populateDetailView(project) {
    activeProject = project;
    document.getElementById('detail-bar-title').textContent = `${project.title} — ${project.location}`;
    document.getElementById('detail-index').textContent = project.index;
    document.getElementById('detail-eyebrow').textContent = `${project.location} · ${project.typology}`;
    document.getElementById('detail-title').textContent = project.title;
    document.getElementById('detail-narrative').textContent = project.narrative;
    document.getElementById('spec-area').textContent = project.area;
    document.getElementById('spec-location').textContent = project.location;
    document.getElementById('spec-typology').textContent = project.typology;
    document.getElementById('spec-elements').textContent = project.highlights;

    applyResolvedImage(detailHeroImg, project.cover, project.title);
    detailHeroImg.alt = `${project.title} Hero View`;

    const galleryEl = document.getElementById('detail-gallery');
    galleryEl.innerHTML = '';
    const remaining = project.gallery.slice(1);
    const pattern = ['wide', '7', '5', 'center', '6', '6'];

    remaining.forEach((filename, idx) => {
      const layout = pattern[idx % pattern.length];
      const fig = document.createElement('figure');
      fig.className = `gallery-plate gallery-plate--${layout}`;
      const img = document.createElement('img');
      img.alt = `${project.title} Architectural View ${idx + 2}`;
      img.loading = 'lazy';
      applyResolvedImage(img, filename, `${project.title} · Plate 0${idx + 2}`);
      fig.appendChild(img);
      galleryEl.appendChild(fig);
    });

    const curIdx = PROJECTS.findIndex((p) => p.id === project.id);
    const nextProj = PROJECTS[(curIdx + 1) % PROJECTS.length];
    document.getElementById('detail-next-label').textContent = `Next: ${nextProj.title}`;
    document.getElementById('detail-next-btn').onclick = () => {
      detailOverlay.scrollTo({ top: 0, behavior: 'smooth' });
      populateDetailView(nextProj);
    };
  }

  function openProjectDetail(project, sourceMediaEl, returnTarget) {
    if (isAnimatingFlip) return;
    isAnimatingFlip = true;
    activeOverlay = 'detail';
    detailReturnTarget = returnTarget;
    activeOriginMediaEl = sourceMediaEl;

    const sourceRect = sourceMediaEl.getBoundingClientRect();
    const sourceImgSrc = sourceMediaEl.querySelector('img').src;

    if (lenis) lenis.stop();
    document.body.classList.add('is-overlay-open');

    populateDetailView(project);

    detailHeroMedia.style.opacity = '0';
    detailOverlay.scrollTop = 0;
    detailOverlay.classList.remove('is-content-visible', 'is-backdrop-visible');
    detailOverlay.classList.add('is-active');
    detailOverlay.setAttribute('aria-hidden', 'false');

    const targetRect = detailHeroMedia.getBoundingClientRect();

    // Hide source image immediately during flight so it morphs cleanly from exact place
    sourceMediaEl.style.opacity = '0';
    detailOverlay.classList.add('is-backdrop-visible');

    animateFlipFlight({
      fromRect: sourceRect,
      toRect: targetRect,
      imgSrc: sourceImgSrc,
      duration: 620,
      startRadius: returnTarget === 'main' ? 12 : 4,
      endRadius: 2,
      onMidpoint: () => {
        detailOverlay.classList.add('is-content-visible');
      },
      onComplete: () => {
        detailHeroMedia.style.opacity = '1';
        flipProxy.style.display = 'none';
        isAnimatingFlip = false;
      }
    });
  }

  function closeProjectDetail() {
    if (isAnimatingFlip || activeOverlay !== 'detail') return;
    isAnimatingFlip = true;

    detailOverlay.classList.remove('is-content-visible');

    setTimeout(() => {
      detailOverlay.scrollTop = 0;
      const startRect = detailHeroMedia.getBoundingClientRect();

      // Match origin card even if user clicked "Next Project" inside detail view
      let targetMediaEl = activeOriginMediaEl;
      if (activeProject) {
        const container = detailReturnTarget === 'catalog' ? catalogGridEl : stackDeckEl;
        const matchedCard = container.querySelector(`[data-project-id="${activeProject.id}"]`);
        if (matchedCard) {
          const newOrigin = matchedCard.querySelector('.stack-card__media, .catalog-card__media');
          if (newOrigin && newOrigin !== activeOriginMediaEl) {
            if (activeOriginMediaEl) activeOriginMediaEl.style.opacity = '';
            targetMediaEl = newOrigin;
          }
        }
      }

      const endRect = targetMediaEl ? targetMediaEl.getBoundingClientRect() : null;
      const isVisibleRect = endRect && endRect.width > 0 && endRect.height > 0 &&
        endRect.bottom > 0 && endRect.top < window.innerHeight;

      if (isVisibleRect) {
        targetMediaEl.style.opacity = '0';
        detailHeroMedia.style.opacity = '0';
        detailOverlay.classList.remove('is-backdrop-visible');
        if (detailReturnTarget === 'main') {
          document.body.classList.remove('is-overlay-open');
        }

        animateFlipFlight({
          fromRect: startRect,
          toRect: endRect,
          imgSrc: detailHeroImg.src,
          duration: 540,
          startRadius: 2,
          endRadius: detailReturnTarget === 'main' ? 12 : 4,
          onComplete: () => {
            targetMediaEl.style.opacity = '';
            flipProxy.style.display = 'none';
            finalizeDetailClose();
          }
        });
      } else {
        detailOverlay.classList.remove('is-backdrop-visible');
        if (activeOriginMediaEl) activeOriginMediaEl.style.opacity = '';
        setTimeout(finalizeDetailClose, 300);
      }
    }, 180);
  }

  function finalizeDetailClose() {
    if (activeOriginMediaEl) activeOriginMediaEl.style.opacity = '';
    detailOverlay.classList.remove('is-active', 'is-backdrop-visible', 'is-content-visible');
    detailOverlay.setAttribute('aria-hidden', 'true');
    detailHeroMedia.style.opacity = '1';

    if (detailReturnTarget === 'catalog') {
      activeOverlay = 'catalog';
    } else {
      activeOverlay = null;
      document.body.classList.remove('is-overlay-open');
      if (lenis) lenis.start();
    }
    isAnimatingFlip = false;
  }

  function openAllProjects() {
    activeOverlay = 'catalog';
    if (lenis) lenis.stop();
    document.body.classList.add('is-overlay-open');
    renderFilterBar();
    renderCatalogGrid();
    catalogOverlay.scrollTop = 0;
    catalogOverlay.classList.add('is-active');
    catalogOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeAllProjects() {
    if (activeOverlay !== 'catalog') return;
    catalogOverlay.classList.remove('is-active');
    catalogOverlay.setAttribute('aria-hidden', 'true');
    activeOverlay = null;
    document.body.classList.remove('is-overlay-open');
    if (lenis) lenis.start();
  }

  document.getElementById('open-all-projects-btn').addEventListener('click', openAllProjects);
  document.getElementById('catalog-back-btn').addEventListener('click', closeAllProjects);
  document.getElementById('detail-back-btn').addEventListener('click', closeProjectDetail);
  document.getElementById('detail-footer-back').addEventListener('click', closeProjectDetail);

  document.getElementById('detail-enquire-btn').addEventListener('click', () => {
    const typologyToSelect = activeProject ? activeProject.formTypology : '';
    if (activeOriginMediaEl) activeOriginMediaEl.style.opacity = '';
    detailOverlay.classList.remove('is-active', 'is-content-visible', 'is-backdrop-visible');
    detailOverlay.setAttribute('aria-hidden', 'true');
    catalogOverlay.classList.remove('is-active');
    catalogOverlay.setAttribute('aria-hidden', 'true');
    activeOverlay = null;
    document.body.classList.remove('is-overlay-open');
    if (lenis) {
      lenis.start();
      lenis.scrollTo('#contact', { duration: 1.1 });
    }
    if (typologyToSelect) selectProjectOption(typologyToSelect);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (activeOverlay === 'detail') closeProjectDetail();
    else if (activeOverlay === 'catalog') closeAllProjects();
    else closeCustomSelect();
  });

  /* ------------------------------------------------------------------------
     8. CONTACT FORM & CUSTOM DROPDOWN
     ------------------------------------------------------------------------ */
  const customSelect = document.getElementById('project-select');
  const selectTrigger = document.getElementById('project-trigger');
  const selectText = document.getElementById('project-trigger-text');
  const selectInput = document.getElementById('project-value');
  const selectOptions = Array.from(customSelect.querySelectorAll('.custom-select__option'));

  function selectProjectOption(val) {
    selectInput.value = val;
    selectText.textContent = val;
    customSelect.classList.add('has-value');
    selectOptions.forEach((opt) => {
      opt.setAttribute('aria-selected', String(opt.dataset.value === val));
    });
    clearFieldError('err-project');
    closeCustomSelect();
  }

  function openCustomSelect() {
    customSelect.classList.add('is-open');
    selectTrigger.setAttribute('aria-expanded', 'true');
  }

  function closeCustomSelect() {
    customSelect.classList.remove('is-open');
    selectTrigger.setAttribute('aria-expanded', 'false');
  }

  selectTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    customSelect.classList.contains('is-open') ? closeCustomSelect() : openCustomSelect();
  });

  selectOptions.forEach((opt) => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      selectProjectOption(opt.dataset.value);
      selectTrigger.focus();
    });
  });

  document.addEventListener('click', (e) => {
    if (!customSelect.contains(e.target)) closeCustomSelect();
  });

  const inquiryForm = document.getElementById('inquiry-form');
  const formSuccess = document.getElementById('form-success');

  function setFieldError(errorId, message) {
    const errEl = document.getElementById(errorId);
    if (!errEl) return;
    errEl.textContent = message;
    errEl.closest('.form-group').classList.add('has-error');
  }

  function clearFieldError(errorId) {
    const errEl = document.getElementById(errorId);
    if (!errEl) return;
    errEl.textContent = '';
    errEl.closest('.form-group').classList.remove('has-error');
  }

  ['first-name', 'last-name'].forEach((id) => {
    document.getElementById(id).addEventListener('input', () => clearFieldError('err-name'));
  });
  document.getElementById('email').addEventListener('input', () => clearFieldError('err-email'));
  document.getElementById('phone').addEventListener('input', () => clearFieldError('err-phone'));
  document.getElementById('location').addEventListener('input', () => clearFieldError('err-location'));

  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const first = document.getElementById('first-name').value.trim();
    const last = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const projectType = selectInput.value.trim();
    const location = document.getElementById('location').value.trim();
    const info = document.getElementById('information').value.trim();

    if (!first || !last) {
      setFieldError('err-name', 'Please enter both first and last name.');
      valid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError('err-email', 'Please provide a valid email address.');
      valid = false;
    }
    if (!phone || phone.replace(/\D/g, '').length < 8) {
      setFieldError('err-phone', 'Please provide a valid contact phone number.');
      valid = false;
    }
    if (!projectType) {
      setFieldError('err-project', 'Please select a project typology.');
      valid = false;
    }
    if (!location) {
      setFieldError('err-location', 'Please specify your project city or locality.');
      valid = false;
    }

    if (!valid) return;

    const submitLabel = document.getElementById('submit-btn-label');
    submitLabel.textContent = 'Sending Inquiry...';

    setTimeout(() => {
      const waText = encodeURIComponent(
        `Hello Latest Interiors, I am ${first} ${last}. Enquiring about ${projectType} in ${location}. Email: ${email}, Phone: ${phone}.${info ? ` Notes: ${info}` : ''}`
      );
      document.getElementById('whatsapp-handoff').href = `https://wa.me/919911471712?text=${waText}`;
      inquiryForm.hidden = true;
      formSuccess.hidden = false;
      submitLabel.textContent = 'Request Consultation';
    }, 450);
  });

  document.getElementById('reset-form-btn').addEventListener('click', () => {
    inquiryForm.reset();
    selectInput.value = '';
    selectText.textContent = 'Select project typology';
    customSelect.classList.remove('has-value');
    formSuccess.hidden = true;
    inquiryForm.hidden = false;
  });

  /* ------------------------------------------------------------------------
     9. TWO-STAGE SMART ASSET LOADER & LENIS / RAF ENGINE
     ------------------------------------------------------------------------ */
  function startPhase2BackgroundPreloader() {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 180));
    const queue = ['studio-showcase.webp'];

    PROJECTS.forEach((proj) => {
      if (!proj.featured) queue.push(proj.cover);
      proj.gallery.slice(1).forEach((img) => queue.push(img));
    });

    let cursor = 0;
    const CONCURRENCY = 4;

    function processBatch() {
      if (cursor >= queue.length) return;
      const batch = queue.slice(cursor, cursor + CONCURRENCY);
      cursor += CONCURRENCY;
      Promise.all(batch.map((file) => loadAsset(file))).then(() => {
        if (cursor < queue.length) idle(processBatch);
      });
    }

    idle(processBatch);
  }

  function initStaticImages() {
    applyResolvedImage(document.getElementById('preloader-logo'), 'logo_env.webp', '', 'light');
    applyResolvedImage(document.getElementById('header-logo'), 'logo_env.webp', '', 'dark');
    applyResolvedImage(document.getElementById('footer-logo'), 'logo_env.webp', '', 'dark');
    applyResolvedImage(document.getElementById('hero-img-bg'), 'hero-bg.webp');
    applyResolvedImage(document.getElementById('hero-img-mid'), 'hero-mid.webp');
    applyResolvedImage(document.getElementById('hero-img-fg'), 'hero-fg.webp');
    applyResolvedImage(document.getElementById('studio-showcase-img'), 'studio-showcase.webp', 'LATEST INTERIORS · STUDIO');
  }

  function initLenisAndLoop() {
    if (typeof Lenis !== 'undefined') {
      lenis = new Lenis({
        lerp: 0.085,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
        smoothWheel: true,
        syncTouch: false,
        prevent: (node) => Boolean(node.closest('[data-lenis-prevent]'))
      });
    }

    document.querySelectorAll('[data-scroll-to], .site-header__logo-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.scrollTo || '#hero';
        if (lenis) lenis.scrollTo(target, { duration: 1.15 });
        else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    function raf(time) {
      if (lenis) lenis.raf(time);
      const scrollY = lenis ? lenis.scroll : window.scrollY;

      siteHeader.classList.toggle('is-scrolled', scrollY > 40);

      if (!activeOverlay) {
        updateHeroParallax(scrollY);
        updateFeaturedStack(scrollY);
      }

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  function runPhase1Preloader() {
    initStaticImages();
    renderFeaturedStack();

    const criticalAssets = [
      { file: 'logo_env.webp', variant: 'light' },
      { file: 'hero-bg.webp', variant: 'dark' },
      { file: 'hero-mid.webp', variant: 'dark' },
      { file: 'hero-fg.webp', variant: 'dark' },
      ...featuredProjects.map((p) => ({ file: p.cover, variant: 'dark' }))
    ];

    let loadedCount = 0;
    let displayRatio = 0;
    let targetRatio = 0;
    let exited = false;

    criticalAssets.forEach((item) => {
      loadAsset(item.file, '', item.variant).then(() => {
        loadedCount += 1;
        targetRatio = loadedCount / criticalAssets.length;
      });
    });

    const fontReady = document.fonts ? document.fonts.ready : Promise.resolve();
    let fontsDone = false;
    fontReady.then(() => { fontsDone = true; });

    function tickProgress() {
      if (exited) return;
      const effectiveTarget = fontsDone ? targetRatio : Math.min(targetRatio, 0.9);
      displayRatio += (effectiveTarget - displayRatio) * 0.14;

      if (effectiveTarget === 1 && displayRatio > 0.992) {
        displayRatio = 1;
      }

      preloaderFill.style.transform = `scaleX(${displayRatio.toFixed(4)})`;
      preloaderPercent.textContent = `${String(Math.round(displayRatio * 100)).padStart(2, '0')}%`;

      if (displayRatio >= 1 && fontsDone) {
        exited = true;
        setTimeout(() => {
          preloaderEl.classList.add('is-content-fading');
          setTimeout(() => {
            preloaderEl.classList.add('is-exiting');
            document.body.classList.remove('is-loading');
            document.body.classList.add('is-ready');
            initLenisAndLoop();
            startPhase2BackgroundPreloader();
            setTimeout(() => preloaderEl.remove(), 900);
          }, 180);
        }, 250);
        return;
      }

      requestAnimationFrame(tickProgress);
    }

    requestAnimationFrame(tickProgress);
  }

  document.addEventListener('DOMContentLoaded', runPhase1Preloader);
})();