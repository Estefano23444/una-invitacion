(() => {
  const yes = document.getElementById('btn-yes');
  const no = document.getElementById('btn-no');
  const noArea = no.parentElement;
  const showtime = document.getElementById('showtime');
  const closeBtn = document.getElementById('btn-close');
  const figure = document.getElementById('hero-figure');
  const rotor = document.getElementById('rotor');

  // ------- Nav actions -------
  document.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', (e) => {
      const action = el.dataset.action;
      if (action === 'reload') {
        e.preventDefault();
        location.reload();
      }
      // 'thriller' → default link navigation to YouTube
    });
  });

  // ------- "No" button that escapes -------
  const noTexts = [
    'No',
    'Mmm... ¿segura?',
    '¿En serio? 🥺',
    'Lo vas a pensar mejor',
    'No me hagas esto 😭',
    'Última oportunidad ✨',
    'Okay, sí.'
  ];
  let escapes = 0;

  function escapeNo() {
    if (escapes >= noTexts.length - 1) {
      no.textContent = noTexts[noTexts.length - 1];
      no.style.opacity = '.4';
      no.style.pointerEvents = 'none';
      return;
    }
    escapes++;
    no.textContent = noTexts[escapes];
    no.classList.add('escaping');

    const wrap = noArea.getBoundingClientRect();
    const btn = no.getBoundingClientRect();
    const padX = 6, padY = 4;
    const maxX = Math.max(0, wrap.width - btn.width - padX);
    const maxY = Math.max(0, wrap.height - btn.height - padY);
    const x = padX + Math.random() * maxX;
    const y = padY + Math.random() * maxY;
    no.style.left = x + 'px';
    no.style.top  = y + 'px';
    const rot = (Math.random() * 30 - 15).toFixed(1);
    const scale = Math.max(0.7, 1 - escapes * 0.05).toFixed(2);
    no.style.transform = `rotate(${rot}deg) scale(${scale})`;

    const grow = 1 + Math.min(escapes, 6) * 0.06;
    yes.style.transform = `scale(${grow.toFixed(2)})`;
  }

  no.addEventListener('mouseenter', escapeNo);
  no.addEventListener('focus', escapeNo);
  no.addEventListener('touchstart', escapeNo, { passive: true });

  // ------- Yes click -> showtime ticket -------
  yes.addEventListener('click', () => {
    showtime.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    launchConfetti();
  });

  closeBtn.addEventListener('click', closeShowtime);
  showtime.addEventListener('click', (e) => {
    if (e.target === showtime) closeShowtime();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !showtime.classList.contains('hidden')) closeShowtime();
  });

  function closeShowtime() {
    showtime.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // ------- Logo easter egg: extra spin -------
  let logoClicks = 0;
  document.querySelector('.brand').addEventListener('click', (e) => {
    e.preventDefault();
    if (rotor) {
      rotor.classList.add('boost');
      setTimeout(() => rotor.classList.remove('boost'), 1600);
    }
    logoClicks++;
  });

  // ------- Preview hooks (for screenshots / debugging) -------
  if (location.hash === '#ticket') {
    showtime.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  // ------- Optional hero image (drop hero.png into folder) -------
  const probe = new Image();
  probe.onload = () => {
    if (probe.naturalWidth < 4) return;
    const heroImg = document.createElement('img');
    heroImg.src = 'hero.png';
    heroImg.alt = '';
    heroImg.className = 'hero-img';
    figure.classList.add('has-image');
    rotor.insertBefore(heroImg, rotor.firstChild);
  };
  probe.onerror = () => { /* keep SVG fallback */ };
  probe.src = 'hero.png';

  // ------- Confetti (canvas, 4s burst) -------
  function launchConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    const W = canvas.width = window.innerWidth;
    const H = canvas.height = window.innerHeight;
    const colors = ['#d4af37', '#b85eff', '#ffe27a', '#ff4d6d', '#ffffff', '#7ad7ff'];
    const N = 160;
    const pieces = Array.from({ length: N }, () => ({
      x: W / 2 + (Math.random() - .5) * 240,
      y: H / 2 + (Math.random() - .5) * 60,
      vx: (Math.random() - .5) * 14,
      vy: (Math.random() - 1) * 16,
      g: 0.4 + Math.random() * 0.25,
      s: 5 + Math.random() * 7,
      r: Math.random() * Math.PI * 2,
      vr: (Math.random() - .5) * .35,
      c: colors[(Math.random() * colors.length) | 0]
    }));
    let frames = 0;
    const TTL = 260;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      pieces.forEach(p => {
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.55);
        ctx.restore();
      });
      frames++;
      if (frames < TTL) requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, W, H);
    }
    requestAnimationFrame(draw);
  }
})();
