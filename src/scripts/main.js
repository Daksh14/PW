const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes}`;
};

// Clock in the header
const span = document.getElementById('span');

if (span) {
  const time = () => {
    span.textContent = formatAMPM(new Date());
  };

  time();
  setInterval(time, 1000);
}

// Frosted header once the page scrolls
const header = document.querySelector('header');

const onScroll = () => {
  if (header) {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
};

// Reading progress on blog posts
const post = document.querySelector('.blog-post');

if (post) {
  const bar = document.createElement('div');
  bar.className = 'read-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    bar.style.setProperty('--progress', progress);
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Fade sections in as they enter the viewport
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}

// Stretch headline lines so each one spans the full content width
const fits = document.querySelectorAll('.fit');

const fitText = () => {
  fits.forEach((el) => {
    const available = el.parentElement.clientWidth;
    el.style.fontSize = '100px';
    const natural = el.getBoundingClientRect().width;
    if (natural > 0) {
      // Small trim so glyph overhang never pokes past the gutter
      el.style.fontSize = `${(available / natural) * 98.5}px`;
    }
  });
};

// Grow the hero copy to the largest size that still fits the space left on screen
const heroCopy = document.querySelector('.hero-copy');

const fillHero = () => {
  if (!heroCopy) return;
  let lo = 16;
  let hi = 400;
  while (hi - lo > 0.5) {
    const mid = (lo + hi) / 2;
    heroCopy.style.fontSize = `${mid}px`;
    const inBounds =
      heroCopy.scrollHeight <= heroCopy.clientHeight &&
      heroCopy.scrollWidth <= heroCopy.clientWidth;
    if (inBounds) lo = mid;
    else hi = mid;
  }
  heroCopy.style.fontSize = `${lo}px`;
};

const layout = () => {
  fitText();
  fillHero();
};

if (fits.length || heroCopy) {
  layout();
  window.addEventListener('resize', layout);
  if (document.fonts) {
    document.fonts.ready.then(layout);
  }
}

// Material ripple on interactive surfaces
const rippleTargets = document.querySelectorAll(
  'header .center-part a, .links a, .first-page-blog li a, .projects .card',
);

rippleTargets.forEach((el) => {
  el.addEventListener('pointerdown', (e) => {
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.setProperty('--size', `${Math.max(rect.width, rect.height) * 2.2}px`);
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    el.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});
