(() => {
  // ===================== Funciones reales (Multicines · Toy Story) =====================
  // Viernes 19 de junio 2026. Datos extraídos de la cartelera de Multicines El Portal (Portal Shopping).
  const CINEMAS = {
    plaza: {
      key: 'plaza',
      name: 'Multicines El Portal',
      location: 'C.C. Portal Shopping · Av. Panamericana Norte · Quito',
      days: {
        '2026-06-19': [
          { time: '14:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:45', format: '3D Esp', hall: 'Sala Normal y DBOX' },
          { time: '16:35', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:45', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:05', format: '3D Esp', hall: 'Sala Normal y DBOX' },
          { time: '18:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '19:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:05', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:30', format: '3D Sub', hall: 'Sala Normal y DBOX' },
          { time: '21:20', format: '2D Sub', hall: 'Sala Normal' },
        ],
      },
    },
  };

  // ===================== Días que mostramos =====================
  const DAYS = ['2026-06-19'];

  const DAY_NAMES_LONG = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const DAY_NAMES_SHORT = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const MONTH_NAMES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

  // ===================== Helpers =====================
  function dateFromKey(key) {
    const [y, m, d] = key.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  function formatLongDate(dateKey) {
    const d = dateFromKey(dateKey);
    return `${DAY_NAMES_LONG[d.getDay()]} ${d.getDate()} de ${MONTH_NAMES[d.getMonth()]}`;
  }

  function formatTimeAmPm(time) {
    const [h, m] = time.split(':').map(Number);
    const ampm = h >= 12 ? 'pm' : 'am';
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${h12}:${String(m).padStart(2,'0')} ${ampm}`;
  }

  // ===================== Estado =====================
  let activeCinema = 'plaza';
  let activeDay = DAYS[0];
  let pendingPick = null; // { dateKey, time, format, hall, cinema }
  let lastSubmitOK = false;

  // Canción de Toy Story que abre el botón "¡Nos vemos!" tras confirmar.
  const ROMANTIC_SONG_URL = 'https://www.youtube.com/results?search_query=hay+un+amigo+en+mi+toy+story';

  // ===================== Render =====================
  const grid = document.getElementById('cal-grid');
  const range = document.getElementById('cal-range');
  const chipsContainer = document.getElementById('day-chips');

  function renderRange() {
    const a = dateFromKey(DAYS[0]);
    range.textContent = `${DAY_NAMES_LONG[a.getDay()]} ${a.getDate()} · ${MONTH_NAMES[a.getMonth()]}`;
  }

  function showingsForDay(dateKey) {
    return CINEMAS[activeCinema].days[dateKey] || [];
  }

  function renderDayChips() {
    if (!chipsContainer) return;
    chipsContainer.innerHTML = '';
    DAYS.forEach((dateKey) => {
      const d = dateFromKey(dateKey);
      const dow = d.getDay();
      const n = showingsForDay(dateKey).length;

      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'day-chip' + (dateKey === activeDay ? ' active' : '') + (n === 0 ? ' is-empty' : '');
      chip.dataset.date = dateKey;
      chip.setAttribute('role', 'tab');
      chip.setAttribute('aria-selected', dateKey === activeDay ? 'true' : 'false');
      chip.innerHTML = `
        <span class="chip-dow">${DAY_NAMES_SHORT[dow]}.</span>
        <span class="chip-num">${d.getDate()}</span>
        <span class="chip-count">${n} ⭐</span>
      `;
      chip.addEventListener('click', () => {
        activeDay = dateKey;
        renderDayChips();
        renderGrid();
      });
      chipsContainer.appendChild(chip);
    });
  }

  function renderGrid() {
    grid.innerHTML = '';

    const dateKey = activeDay;
    const d = dateFromKey(dateKey);
    const dow = d.getDay();
    const showings = showingsForDay(dateKey);

    const card = document.createElement('article');
    card.className = 'day-card';
    card.setAttribute('role', 'listitem');

    const head = document.createElement('header');
    head.className = 'day-head';
    head.innerHTML = `
      <span class="day-dow">${DAY_NAMES_SHORT[dow]}</span>
      <span class="day-num">${d.getDate()}</span>
      <span class="day-month">${MONTH_NAMES[d.getMonth()].slice(0,3)}</span>
      <span class="day-tag">elige tu hora ✨</span>
    `;
    card.appendChild(head);

    const list = document.createElement('div');
    list.className = 'showings';

    if (showings.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'empty';
      empty.textContent = 'Sin funciones disponibles este día.';
      list.appendChild(empty);
    } else {
      showings.forEach((s) => {
        const pill = document.createElement('button');
        pill.className = 'show-pill';
        pill.type = 'button';
        pill.dataset.date = dateKey;
        pill.dataset.time = s.time;
        pill.dataset.format = s.format;
        pill.dataset.hall = s.hall;
        pill.innerHTML = `
          <span class="star" aria-hidden="true">⭐</span>
          <span class="show-time">${formatTimeAmPm(s.time)}</span>
          <span class="show-meta">${s.format} · ${s.hall}</span>
        `;
        pill.addEventListener('click', () => openTicket({
          dateKey, time: s.time, format: s.format, hall: s.hall, cinema: activeCinema,
        }));
        list.appendChild(pill);
      });
    }

    card.appendChild(list);
    grid.appendChild(card);
  }

  // ===================== Ticket modal =====================
  const showtime = document.getElementById('showtime');
  const ticketBody = document.getElementById('ticket-body');
  const ticketTitle = document.getElementById('ticket-title');
  const tDate = document.getElementById('t-date');
  const tTime = document.getElementById('t-time');
  const tHall = document.getElementById('t-hall');
  const tFormat = document.getElementById('t-format');
  const tCine = document.getElementById('t-cine');
  const btnConfirm = document.getElementById('btn-confirm');
  const btnCancel = document.getElementById('btn-cancel');
  const btnClose = document.getElementById('btn-close');

  function openTicket(pick) {
    pendingPick = pick;
    ticketTitle.textContent = '¿Esta es la cita? ✨';
    tDate.textContent = formatLongDate(pick.dateKey);
    tTime.textContent = formatTimeAmPm(pick.time);
    tHall.textContent = pick.hall;
    tFormat.textContent = pick.format;
    if (tCine) tCine.textContent = CINEMAS[pick.cinema].name;
    ticketBody.classList.remove('state-sent', 'state-error', 'state-loading');
    btnConfirm.disabled = false;
    btnConfirm.querySelector('span').textContent = 'Sí, confírmaselo';
    lastSubmitOK = false;
    showtime.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeTicket() {
    showtime.classList.add('hidden');
    document.body.style.overflow = '';
    pendingPick = null;
  }

  btnCancel.addEventListener('click', closeTicket);
  btnClose.addEventListener('click', closeTicket);
  showtime.addEventListener('click', (e) => { if (e.target === showtime) closeTicket(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !showtime.classList.contains('hidden')) closeTicket();
  });

  // ===================== Confirm → email a Estéfano =====================
  btnConfirm.addEventListener('click', async () => {
    // Si ya confirmó antes, el botón se convierte en "¡Nos vemos!" y abre la canción.
    if (lastSubmitOK) {
      window.open(ROMANTIC_SONG_URL, '_blank', 'noopener');
      return;
    }
    if (!pendingPick) return;
    btnConfirm.disabled = true;
    btnConfirm.querySelector('span').textContent = 'Enviando…';
    ticketBody.classList.add('state-loading');

    const pick = pendingPick;
    const cinema = CINEMAS[pick.cinema];
    const subject = `🚀 ¡Enmanuel dijo que sí! · ${formatLongDate(pick.dateKey)} ${formatTimeAmPm(pick.time)}`;
    const payload = {
      _subject: subject,
      _captcha: 'false',
      _template: 'table',
      'Mensaje': '¡Enmanuel quiere ir contigo a ver Toy Story! 🎬💚',
      'Película': 'Toy Story',
      'Día': formatLongDate(pick.dateKey),
      'Hora': formatTimeAmPm(pick.time),
      'Cine': cinema.name,
      'Dirección': cinema.location,
      'Sala': pick.hall,
      'Formato': pick.format,
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/jakyingavelez@hotmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('bad status ' + res.status);
      // success
      ticketBody.classList.remove('state-loading');
      ticketBody.classList.add('state-sent');
      ticketTitle.textContent = '¡Listo! Le acabo de avisar 💌';
      btnConfirm.querySelector('span').textContent = '¡Nos vemos!';
      btnConfirm.disabled = false;
      lastSubmitOK = true;
      launchConfetti();
    } catch (err) {
      ticketBody.classList.remove('state-loading');
      ticketBody.classList.add('state-error');
      ticketTitle.textContent = 'Algo falló al enviar 😅';
      btnConfirm.disabled = false;
      btnConfirm.querySelector('span').textContent = 'Reintentar';
      // fallback mailto
      const body = [
        '¡Enmanuel quiere ir contigo a ver Toy Story! 🎬💚',
        '',
        `Película: Toy Story`,
        `Día: ${formatLongDate(pick.dateKey)}`,
        `Hora: ${formatTimeAmPm(pick.time)}`,
        `Cine: ${cinema.name}`,
        `Sala: ${pick.hall}`,
        `Formato: ${pick.format}`,
      ].join('\n');
      const mailto = `mailto:jakyingavelez@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const link = document.createElement('a');
      link.href = mailto;
      link.textContent = 'Abrir en mi correo';
      link.className = 'btn-link';
      const errBox = document.createElement('p');
      errBox.className = 'ticket-note';
      errBox.appendChild(link);
      ticketBody.appendChild(errBox);
    }
  });

  // ===================== Mini rotor easter egg =====================
  const rotor = document.getElementById('rotor-mini');
  document.querySelector('.brand').addEventListener('click', () => {
    if (rotor) {
      rotor.classList.add('boost');
      setTimeout(() => rotor.classList.remove('boost'), 1600);
    }
  });

  // ===================== Confetti =====================
  function launchConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    const W = canvas.width = window.innerWidth;
    const H = canvas.height = window.innerHeight;
    const colors = ['#5fd14f', '#7b5cff', '#ffe27a', '#ff5a4d', '#ffffff', '#7ad7ff'];
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
      c: colors[(Math.random() * colors.length) | 0],
    }));
    let frames = 0;
    const TTL = 260;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      pieces.forEach((p) => {
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

  // ===================== Init =====================
  renderRange();
  renderDayChips();
  renderGrid();
})();
