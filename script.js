/* ============================================
   PIXEL_INVITESS — script.js
   Petals, Particles, Scroll Reveal, Popup
   ============================================ */

// ---- Floating Petals ----
const petalsContainer = document.getElementById('petals');
const petalEmojis = ['🌸', '🌺', '🌼', '🪷', '✨', '🌹'];

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
  petal.style.opacity = 0.4 + Math.random() * 0.5;
  const duration = 6 + Math.random() * 10;
  petal.style.animationDuration = duration + 's';
  petal.style.animationDelay = Math.random() * 5 + 's';
  petalsContainer.appendChild(petal);
  setTimeout(() => petal.remove(), (duration + 5) * 1000);
}

// Spawn petals at intervals
setInterval(createPetal, 800);
for (let i = 0; i < 8; i++) createPetal();

// ---- Gold Particles ----
const particlesContainer = document.getElementById('particles');

function createParticle() {
  const p = document.createElement('div');
  p.classList.add('particle');
  p.style.left = Math.random() * 100 + 'vw';
  p.style.top = Math.random() * 100 + 'vh';
  p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
  const dur = 3 + Math.random() * 4;
  p.style.animationDuration = dur + 's';
  p.style.animationDelay = Math.random() * 4 + 's';
  particlesContainer.appendChild(p);
}

for (let i = 0; i < 30; i++) createParticle();

// ---- Scroll Reveal ----
const revealEls = document.querySelectorAll('.reveal, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stagger children if inside a grid/flex
      const children = entry.target.querySelectorAll('.family-block, .timeline-item');
      children.forEach((child, i) => {
        setTimeout(() => child.classList.add('visible'), i * 120);
      });
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ---- Timeline items reveal ----
const timelineItems = document.querySelectorAll('.timeline-item');
const tlObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 100);
    }
  });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(30px)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  tlObserver.observe(item);
});

// ---- Designer Popup ----
const designerBtn = document.getElementById('designerBtn');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');

designerBtn.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closePopup() {
  popupOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

popupClose.addEventListener('click', closePopup);

popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) closePopup();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePopup();
});

// ---- Smooth scroll for hero link ----
document.querySelector('.scroll-down').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
});

// ---- Person cards stagger ----
const personCards = document.querySelectorAll('.person-card');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 200);
    }
  });
}, { threshold: 0.1 });

personCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  cardObserver.observe(card);
});

// ---- Family blocks stagger ----
const familyBlocks = document.querySelectorAll('.family-block, .vineet-block, .hosts-box, .venue-box');
const fbObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 100);
    }
  });
}, { threshold: 0.08 });

familyBlocks.forEach(block => {
  block.style.opacity = '0';
  block.style.transform = 'translateY(30px)';
  block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fbObserver.observe(block);
});

// ---- Gold shimmer on couple names ----
const coupleNames = document.querySelectorAll('.groom-name, .bride-name');
coupleNames.forEach(name => {
  name.addEventListener('mouseenter', () => {
    name.style.textShadow = '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(240,201,110,0.6)';
  });
  name.addEventListener('mouseleave', () => {
    name.style.textShadow = '0 2px 15px rgba(0,0,0,0.4)';
  });
});

console.log('✦ Pixel_invitess — Nikhil ❤ Tanisha Wedding Website ✦');
