(function () {
  'use strict';

  const ICONS = {
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    arrow:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    user:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5Z"/></svg>',
    clock:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    flickr:   '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="7" cy="12" r="5" fill="#0063dc"/><circle cx="17" cy="12" r="5" fill="#ff0084"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    medium:   '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12Zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.82 24 12Z"/></svg>',
    email:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>',
    github:   '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
    x:        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.026L4.6 22H1.34l8.02-9.166L1 2h7.014l4.844 6.413L18.244 2Zm-1.2 18.066h1.806L7.04 3.83H5.106l11.938 16.236Z"/></svg>',
    twitter:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.026L4.6 22H1.34l8.02-9.166L1 2h7.014l4.844 6.413L18.244 2Zm-1.2 18.066h1.806L7.04 3.83H5.106l11.938 16.236Z"/></svg>',
    bluesky:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.5 4.5C8 4.5 10.5 7 12 10c1.5-3 4-5.5 6.5-5.5 2 0 3 1.5 3 4 0 1.8-1 6-1.5 7-.9 1.7-2.4 2-3.7 2-1.6 0-3-.6-4.3-2 1.5 2 2 4.5-1 5-3 .5-3.5-2-2-5-1.3 1.4-2.7 2-4.3 2-1.3 0-2.8-.3-3.7-2C.5 14.5-.5 10.3-.5 8.5c0-2.5 1-4 3-4Z"/></svg>',
    rss:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>',
    youtube:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>'
  };

  const THEME_MAP = {
    bg: '--bg', card: '--card', ink: '--ink', ink2: '--ink-2',
    muted: '--muted', line: '--line',
    pillBg: '--pill-bg', pillFg: '--pill-fg', pillDot: '--pill-dot',
    highlight: '--highlight', chart: '--chart', chartFill: '--chart-fill',
    gridDot: '--grid-dot', dark: '--dark'
  };

  function applyTheme(theme) {
    if (!theme) return;
    const root = document.documentElement;
    Object.entries(THEME_MAP).forEach(([key, cssVar]) => {
      if (theme[key]) root.style.setProperty(cssVar, theme[key]);
    });
    if (theme.pitchLink) root.style.setProperty('--pitch-link', theme.pitchLink);
  }

  function applyMeta(meta) {
    if (!meta) return;
    if (meta.title) document.title = meta.title;
    if (meta.description) {
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute('content', meta.description);
    }
    if (meta.favicon) {
      const link = document.querySelector('link[rel="icon"]');
      if (link) link.setAttribute('href', meta.favicon);
    }
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function renderPitch(pitch, highlight) {
    if (!pitch) return '';
    if (!highlight) return escapeHtml(pitch);
    const idx = pitch.indexOf(highlight);
    if (idx === -1) return escapeHtml(pitch);
    const before = pitch.slice(0, idx);
    const after = pitch.slice(idx + highlight.length);
    return escapeHtml(before)
      + '<a href="#" class="link">' + escapeHtml(highlight) + '</a>'
      + escapeHtml(after);
  }

  function renderProfile(profile, socials) {
    const mount = document.querySelector('[data-mount="profile"]');
    if (!mount || !profile) return;

    const socialsHtml = (socials || []).map((s) => {
      const icon = ICONS[s.icon] || '';
      return '<a href="' + escapeHtml(s.url) + '"'
        + (s.url && !s.url.startsWith('mailto:') ? ' target="_blank" rel="noopener"' : '')
        + ' aria-label="' + escapeHtml(s.label) + '"'
        + ' title="' + escapeHtml(s.label) + '">' + icon + '</a>';
    }).join('');

    mount.innerHTML = ''
      + '<div class="avatar">'
      +   '<img src="' + escapeHtml(profile.avatar) + '" alt="' + escapeHtml(profile.name) + '" />'
      + '</div>'
      + '<h1 class="name">' + escapeHtml(profile.name) + '</h1>'
      + (profile.location
          ? '<div class="meta"><span class="meta-item">'
              + ICONS.location + escapeHtml(profile.location)
              + '</span></div>'
          : '')
      + (profile.tagline
          ? '<p class="tagline">' + escapeHtml(profile.tagline) + '</p>'
          : '')
      + (profile.pitch
          ? '<p class="news-pitch">' + renderPitch(profile.pitch, profile.pitchHighlight) + '</p>'
          : '')
      + (profile.bio
          ? '<p class="blurb">' + escapeHtml(profile.bio) + '</p>'
          : '')
      + (socialsHtml
          ? '<div class="socials" aria-label="social">' + socialsHtml + '</div>'
          : '');
  }

  function renderProjectIcon(icon) {
    if (!icon) return '';
    const classAttr = ' class="card-icon ' + escapeHtml(icon.class || '') + '"';
    let inner = '';
    if (icon.image) {
      inner = '<img src="' + escapeHtml(icon.image) + '" alt="' + escapeHtml(icon.imageAlt || '') + '" />';
    } else if (icon.glyph) {
      inner = '<span class="glyph">' + escapeHtml(icon.glyph) + '</span>';
    } else if (icon.svg && ICONS[icon.svg]) {
      inner = ICONS[icon.svg];
    }
    return '<div' + classAttr + '>' + inner + '</div>';
  }

  function renderProject(project) {
    if (!project) return '';
    const slides = project.slides || [];
    const total = slides.length;

    const slidesHtml = slides.map((slide, i) => {
      const label = slide.label || '';
      const count = (i + 1) + ' / ' + total;
      const img = '<img src="' + escapeHtml(slide.image) + '"'
        + ' alt="' + escapeHtml(project.name + ' — ' + label) + '"'
        + ' loading="lazy" />';
      return '<div class="carousel-slide">'
        + (label ? '<span class="slide-label">' + escapeHtml(label) + '</span>' : '')
        + '<span class="slide-count">' + escapeHtml(count) + '</span>'
        + img
        + '</div>';
    }).join('');

    const carouselHtml = total > 0
      ? '<div class="carousel" aria-roledescription="carousel" aria-label="'
        + escapeHtml(project.name + ' mocks') + '">'
        + '<div class="carousel-track">' + slidesHtml + '</div>'
        + '</div>'
        + '<div class="carousel-hint">' + ICONS.arrow + 'scroll for more</div>'
      : '';

    const badge = project.badge
      ? '<div class="pill"><span class="dot">' + ICONS.user + '</span>'
          + escapeHtml(project.badge) + '</div>'
      : '';

    const head = '<div class="card-head">'
      + renderProjectIcon(project.icon)
      + '<div class="card-name">' + escapeHtml(project.name) + '</div>'
      + badge
      + '</div>'
      + '<p class="card-desc">' + escapeHtml(project.description || '') + '</p>'
      + carouselHtml;

    const isComingSoon = !!project.comingSoon;
    const isLink = !!project.url && !isComingSoon;

    if (isLink) {
      return '<a href="' + escapeHtml(project.url) + '"'
        + ' target="_blank" rel="noopener" class="card">' + head + '</a>';
    }
    const csAttr = isComingSoon
      ? ' card-coming-soon" data-coming-soon="' + escapeHtml(project.name)
      : '';
    return '<article class="card' + csAttr + '">' + head + '</article>';
  }

  function renderProjects(projects) {
    const mount = document.querySelector('[data-mount="projects"]');
    if (!mount) return;
    mount.innerHTML = (projects || []).map(renderProject).join('');
  }

  function initComingSoonToasts() {
    const toast = document.querySelector('[data-mount="toast"]');
    if (!toast) return;
    const textEl = toast.querySelector('[data-toast-text]');
    let hideTimer = null;

    const show = (name) => {
      if (textEl) textEl.textContent = name + ' is coming soon';
      toast.classList.add('is-visible');
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
    };

    document.querySelectorAll('.card-coming-soon').forEach((card) => {
      card.addEventListener('click', () => show(card.dataset.comingSoon || 'This'));
    });
  }

  function initCarousels() {
    const INTERVAL = 8000;
    const RESUME_DELAY = 8000;

    document.querySelectorAll('.carousel').forEach((carousel) => {
      const track = carousel.querySelector('.carousel-track');
      if (!track) return;
      const slides = track.querySelectorAll('.carousel-slide');
      if (slides.length < 2) return;

      let index = 0;
      let timer = null;
      let resumeTimer = null;

      const tick = () => {
        index = (index + 1) % slides.length;
        track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
      };
      const start = () => { stop(); timer = setInterval(tick, INTERVAL); };
      const stop  = () => { if (timer) { clearInterval(timer); timer = null; } };
      const pauseAndResume = () => {
        stop();
        if (resumeTimer) clearTimeout(resumeTimer);
        resumeTimer = setTimeout(start, RESUME_DELAY);
      };

      track.addEventListener('scroll', () => {
        index = Math.round(track.scrollLeft / track.clientWidth);
      }, { passive: true });
      carousel.addEventListener('mouseenter', stop);
      carousel.addEventListener('mouseleave', start);
      track.addEventListener('pointerdown', pauseAndResume);
      track.addEventListener('wheel', pauseAndResume, { passive: true });
      track.addEventListener('touchstart', pauseAndResume, { passive: true });

      start();
    });
  }

  async function loadConfig() {
    const res = await fetch('config.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error('Failed to load config.json: ' + res.status);
    return res.json();
  }

  async function main() {
    let config;
    try {
      config = await loadConfig();
    } catch (err) {
      console.error(err);
      const mount = document.querySelector('[data-mount="profile"]');
      if (mount) mount.textContent = 'Could not load config.json.';
      return;
    }
    applyMeta(config.meta);
    applyTheme(config.theme);
    renderProfile(config.profile, config.socials);
    renderProjects(config.projects);
    initComingSoonToasts();
    initCarousels();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
})();
