(() => {
  // ===================== Funciones reales (Multicines · Michael) =====================
  // Sáb 25 → Mié 29 abril 2026. Datos extraídos de la cartelera de Multicines.
  const CINEMAS = {
    condado: {
      key: 'condado',
      name: 'Multicines El Condado',
      location: 'Condado Shopping · Av. Mariscal Sucre y John F. Kennedy · Quito',
      days: {
        '2026-04-25': [
          { time: '11:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '11:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '11:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '12:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '12:30', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '13:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:15', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '16:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:05', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '18:30', format: '4D Esp', hall: 'Sala 4D' },
          { time: '19:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '19:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '21:20', format: '4D Esp', hall: 'Sala 4D' },
        ],
        '2026-04-26': [
          { time: '11:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '11:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '11:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '12:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '12:30', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '13:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:15', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '16:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:05', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '18:30', format: '4D Esp', hall: 'Sala 4D' },
          { time: '19:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '19:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '21:20', format: '4D Esp', hall: 'Sala 4D' },
        ],
        '2026-04-27': [
          { time: '13:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:15', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '16:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:05', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '18:30', format: '4D Esp', hall: 'Sala 4D' },
          { time: '19:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '19:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '21:20', format: '4D Esp', hall: 'Sala 4D' },
        ],
        '2026-04-28': [
          { time: '13:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:15', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '16:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:05', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '18:30', format: '4D Esp', hall: 'Sala 4D' },
          { time: '19:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '19:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '21:20', format: '4D Esp', hall: 'Sala 4D' },
        ],
        '2026-04-29': [
          { time: '13:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:15', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '16:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:05', format: '2D Esp', hall: 'Pantalla Gigante MCX' },
          { time: '19:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:25', format: '2D Esp', hall: 'Sala Normal' },
        ],
      },
    },
    cci: {
      key: 'cci',
      name: 'Multicines CCI',
      location: 'C.C. Iñaquito · Av. Amazonas y Naciones Unidas · Quito',
      days: {
        '2026-04-25': [
          { time: '10:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '11:05', format: '2D Esp', hall: 'Sala Normal' },
          { time: '11:45', format: '2D Esp', hall: 'Sala Normal' },
          { time: '12:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '12:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '12:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '13:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:50', format: '2D Sub', hall: 'Sala Normal' },
          { time: '16:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:20', format: '4D Esp', hall: 'Sala 4D' },
          { time: '18:40', format: '2D Sub', hall: 'Sala Normal' },
          { time: '19:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '21:10', format: '4D Esp', hall: 'Sala 4D' },
          { time: '21:30', format: '2D Sub', hall: 'Sala Normal' },
        ],
        '2026-04-26': [
          { time: '10:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '11:05', format: '2D Esp', hall: 'Sala Normal' },
          { time: '11:45', format: '2D Esp', hall: 'Sala Normal' },
          { time: '12:10', format: '2D Esp', hall: 'Sala Normal' },
          { time: '12:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '12:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '13:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:50', format: '2D Sub', hall: 'Sala Normal' },
          { time: '16:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:20', format: '4D Esp', hall: 'Sala 4D' },
          { time: '18:40', format: '2D Sub', hall: 'Sala Normal' },
          { time: '19:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '21:10', format: '4D Esp', hall: 'Sala 4D' },
          { time: '21:30', format: '2D Sub', hall: 'Sala Normal' },
        ],
        '2026-04-27': [
          { time: '13:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:50', format: '2D Sub', hall: 'Sala Normal' },
          { time: '16:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:20', format: '4D Esp', hall: 'Sala 4D' },
          { time: '18:40', format: '2D Sub', hall: 'Sala Normal' },
          { time: '19:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '21:10', format: '4D Esp', hall: 'Sala 4D' },
          { time: '21:30', format: '2D Sub', hall: 'Sala Normal' },
        ],
        '2026-04-28': [
          { time: '13:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:30', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:00', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:50', format: '2D Sub', hall: 'Sala Normal' },
          { time: '16:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:20', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:50', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:20', format: '4D Esp', hall: 'Sala 4D' },
          { time: '18:40', format: '2D Sub', hall: 'Sala Normal' },
          { time: '19:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:40', format: '2D Esp', hall: 'Sala Normal' },
          { time: '21:10', format: '4D Esp', hall: 'Sala 4D' },
          { time: '21:30', format: '2D Sub', hall: 'Sala Normal' },
        ],
        '2026-04-29': [
          { time: '13:15', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:05', format: '2D Esp', hall: 'Sala Normal' },
          { time: '14:35', format: '2D Esp', hall: 'Sala Normal' },
          { time: '15:05', format: '2D Esp', hall: 'Sala Normal' },
          { time: '16:05', format: '2D Sub', hall: 'Sala Normal' },
          { time: '16:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:25', format: '2D Esp', hall: 'Sala Normal' },
          { time: '17:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '18:55', format: '2D Esp', hall: 'Sala Normal' },
          { time: '19:45', format: '2D Esp', hall: 'Sala Normal' },
          { time: '20:45', format: '2D Esp', hall: 'Sala Normal' },
        ],
      },
    },
  };

  // ===================== Horario laboral · solo mostramos lo libre =====================
  // Lun-Jue: 8:30 → 17:00 → libre desde 17:30 (30 min de buffer para llegar al cine)
  // Vie:     8:00 → 16:00 → libre desde 16:30
  // Sáb-Dom: libre todo el día.
  const FREE_AFTER = {
    1: '17:30', // Lunes
    2: '17:30', // Martes
    3: '17:30', // Miércoles
    4: '17:30', // Jueves
    5: '16:30', // Viernes
    6: null,    // Sábado · todo libre
    0: null,    // Domingo · todo libre
  };

  // ===================== Días que mostramos =====================
  const DAYS = ['2026-04-25', '2026-04-26', '2026-04-27', '2026-04-28', '2026-04-29'];

  const DAY_NAMES_LONG = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const DAY_NAMES_SHORT = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const MONTH_NAMES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

  // ===================== Helpers =====================
  function dateFromKey(key) {
    const [y, m, d] = key.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  function timeToMinutes(t) {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  }

  function isShowInFreeTime(dateKey, time) {
    const dow = dateFromKey(dateKey).getDay();
    const cutoff = FREE_AFTER[dow];
    if (cutoff === null) return true;
    return timeToMinutes(time) >= timeToMinutes(cutoff);
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
  let activeCinema = 'condado';
  let pendingPick = null; // { dateKey, time, format, hall, cinema }

  // ===================== Render =====================
  const grid = document.getElementById('cal-grid');
  const range = document.getElementById('cal-range');

  function renderRange() {
    const a = dateFromKey(DAYS[0]);
    const b = dateFromKey(DAYS[DAYS.length - 1]);
    range.textContent = `${DAY_NAMES_SHORT[a.getDay()]} ${a.getDate()} — ${DAY_NAMES_SHORT[b.getDay()]} ${b.getDate()} · ${MONTH_NAMES[a.getMonth()]}`;
  }

  function renderGrid() {
    const cinema = CINEMAS[activeCinema];
    grid.innerHTML = '';

    DAYS.forEach((dateKey) => {
      const d = dateFromKey(dateKey);
      const dow = d.getDay();
      const showings = (cinema.days[dateKey] || [])
        .filter((s) => isShowInFreeTime(dateKey, s.time));

      const card = document.createElement('article');
      card.className = 'day-card';
      card.setAttribute('role', 'listitem');

      const head = document.createElement('header');
      head.className = 'day-head';
      head.innerHTML = `
        <span class="day-dow">${DAY_NAMES_SHORT[dow]}</span>
        <span class="day-num">${d.getDate()}</span>
        <span class="day-month">${MONTH_NAMES[d.getMonth()].slice(0,3)}</span>
        <span class="day-tag">${dow === 0 || dow === 6 ? 'todo el día' : (dow === 5 ? 'desde 4:30 pm' : 'desde 5:30 pm')}</span>
      `;
      card.appendChild(head);

      const list = document.createElement('div');
      list.className = 'showings';

      if (showings.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'empty';
        empty.textContent = 'Sin funciones disponibles en tu horario libre.';
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
    });
  }

  // ===================== Cinema tabs =====================
  document.querySelectorAll('.cinema-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cinema-tab').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCinema = btn.dataset.cinema;
      const c = CINEMAS[activeCinema];
      const sub = document.getElementById('cinema-sub');
      if (sub) sub.textContent = c.location;
      renderGrid();
    });
  });

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
    ticketTitle.textContent = '¿Esta es la noche? ✨';
    tDate.textContent = formatLongDate(pick.dateKey);
    tTime.textContent = formatTimeAmPm(pick.time);
    tHall.textContent = pick.hall;
    tFormat.textContent = pick.format;
    if (tCine) tCine.textContent = CINEMAS[pick.cinema].name;
    ticketBody.classList.remove('state-sent', 'state-error', 'state-loading');
    btnConfirm.disabled = false;
    btnConfirm.querySelector('span').textContent = 'Sí, confírmaselo';
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

  // ===================== Confirm → email a Estefano =====================
  btnConfirm.addEventListener('click', async () => {
    if (!pendingPick) return;
    btnConfirm.disabled = true;
    btnConfirm.querySelector('span').textContent = 'Enviando…';
    ticketBody.classList.add('state-loading');

    const pick = pendingPick;
    const cinema = CINEMAS[pick.cinema];
    const subject = `🎩 ¡Sí quiere ir! · ${formatLongDate(pick.dateKey)} ${formatTimeAmPm(pick.time)}`;
    const payload = {
      _subject: subject,
      _captcha: 'false',
      _template: 'table',
      'Mensaje': '¡Sí quiero ir contigo a ver Michael! 🎬',
      'Película': 'Michael',
      'Día': formatLongDate(pick.dateKey),
      'Hora': formatTimeAmPm(pick.time),
      'Cine': cinema.name,
      'Dirección': cinema.location,
      'Sala': pick.hall,
      'Formato': pick.format,
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/estefano.mateo.p@gmail.com', {
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
      btnConfirm.disabled = true;
      launchConfetti();
    } catch (err) {
      ticketBody.classList.remove('state-loading');
      ticketBody.classList.add('state-error');
      ticketTitle.textContent = 'Algo falló al enviar 😅';
      btnConfirm.disabled = false;
      btnConfirm.querySelector('span').textContent = 'Reintentar';
      // fallback mailto
      const body = [
        '¡Sí quiero ir contigo a ver Michael! 🎬',
        '',
        `Película: Michael`,
        `Día: ${formatLongDate(pick.dateKey)}`,
        `Hora: ${formatTimeAmPm(pick.time)}`,
        `Cine: ${cinema.name}`,
        `Sala: ${pick.hall}`,
        `Formato: ${pick.format}`,
      ].join('\n');
      const mailto = `mailto:estefano.mateo.p@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
  renderGrid();
})();
