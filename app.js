(() => {
  const qs = new URLSearchParams(location.search);
  const FLAT = qs.has('flat');
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => 1 - Math.pow(1 - t, 3);
  const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const mqPhone = matchMedia('(max-width: 760px)');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  $$('[data-year]').forEach(n => n.textContent = new Date().getFullYear());

  /* press logos: a second copy so the phone marquee loops seamlessly */
  const press = $('[data-press]');
  if (press) [...press.children].forEach(li => {
    const c = li.cloneNode(true);
    c.classList.add('is-dup');
    c.setAttribute('aria-hidden', 'true');
    c.querySelector('img').alt = '';
    press.appendChild(c);
  });

  /* ---------- practice areas: one tap answers in place ---------- */
  const practice = $('[data-practice]');
  if (practice) {
    const pills = $$('.pills button', practice);
    const idle = $('[data-idle]', practice), res = $('[data-res]', practice);
    const sel = $('[data-sel]', practice), d2 = $('[data-d2]', practice);
    let picked = null;
    const fill = () => {
      if (!picked) return;
      sel.textContent = picked.textContent;
      d2.textContent = document.documentElement.lang === 'es' ? picked.dataset.esD : picked.dataset.d;
    };
    pills.forEach(b => b.addEventListener('click', () => {
      picked = b;
      pills.forEach(x => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      idle.hidden = true;
      res.hidden = false;
      fill();
      res.style.animation = 'none'; void res.offsetWidth; res.style.animation = '';
    }));
    document.addEventListener('rtm:lang', fill);
  }

  /* ---------- split headings into masked lines ---------- */
  const splitEls = $$('.split');
  splitEls.forEach(el => { el.dataset.src = el.textContent.trim(); });
  function splitLines(el) {
    const words = el.dataset.src.split(/\s+/);
    el.innerHTML = words.map(w => `<span class="sw">${w}</span>`).join(' ');
    const lines = [];
    let top = null;
    $$('.sw', el).forEach(s => {
      if (s.offsetTop !== top) { lines.push([]); top = s.offsetTop; }
      lines[lines.length - 1].push(s.textContent);
    });
    el.innerHTML = lines.map(l => `<span class="hl"><span class="hl__i">${l.join(' ')}</span></span>`).join('');
  }
  const doSplit = () => splitEls.forEach(splitLines);
  // language switch (i18n.js): re-split the translated headings and re-measure the hero chip
  document.addEventListener('rtm:lang', () => {
    if (!document.body.classList.contains('is-ready')) return;
    doSplit();
    requestAnimationFrame(() => { if (typeof measureChip === 'function') measureChip(); });
  });

  /* ---------- reveal on view ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.01 });
  // Masked images (.rv-img) start fully clipped, and Chrome reports a fully clipped element as
  // never intersecting, so watch their parent and reveal the image from there.
  const ioImg = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      [...e.target.children].filter(n => n.classList.contains('rv-img')).forEach(n => n.classList.add('is-in'));
      ioImg.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.01 });
  const watch = () => {
    $$('.rv, .split, .pw__row, .ft__call .hl').forEach(n => io.observe(n));
    $$('.rv-img').forEach(n => ioImg.observe(n.parentElement));
  };

  /* ---------- smooth scroll ---------- */
  let lenis = null;
  const touch = matchMedia('(pointer: coarse)').matches;
  function initLenis() {
    if (FLAT || reduce || touch || !window.Lenis) return;
    lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
  }

  /* anchors */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    const t = id === '#top' ? document.body : $(id);
    if (!t) return;
    e.preventDefault();
    document.body.classList.remove('menu-open');
    $('.hd__menu').setAttribute('aria-expanded', 'false');
    if (lenis) lenis.scrollTo(t, { offset: 0, duration: 1.6 });
    else t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  });

  /* menu */
  $('.hd__menu').addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    $('.hd__menu').setAttribute('aria-expanded', String(open));
    $('.menu').setAttribute('aria-hidden', String(!open));
    if (lenis) open ? lenis.stop() : lenis.start();
  });

  /* ---------- hero: chip grows into a full-screen frame ---------- */
  const hero = $('[data-hero]');
  const stage = $('.hero__stage');
  const chip = $('[data-chip]');
  const box = $('[data-reveal]');
  const boxImg = $('img', box);
  const wl = $('.w-left'), wr = $('.w-right');
  const l0 = $('.hl[data-l="0"]'), l2 = $('.hl[data-l="2"]');
  const eyebrow = $('.hero__eyebrow'), foot = $('.hero__foot'), cue = $('.hero__cue');
  const bgImg = $('.hero__bg img');
  let chipR = null;

  function measureChip() {
    const s = stage.getBoundingClientRect();
    const c = chip.getBoundingClientRect();
    const inner = chip.closest('.hl__i');
    const ty = new DOMMatrix(getComputedStyle(inner).transform).m42 || 0; // ignore the line's rise-in offset
    chipR = { x: c.left - s.left, y: c.top - s.top - ty, w: c.width, h: c.height, r: parseFloat(getComputedStyle(chip).borderRadius) || 8 };
  }

  function heroTick(y, vh, vw) {
    const top = hero.offsetTop;
    const span = hero.offsetHeight - vh;
    const p = clamp((y - top) / span);
    const e = easeIO(clamp(p / 0.52));
    if (!chipR || p <= 0.001) measureChip();

    const on = p > 0.001;
    box.classList.toggle('is-on', on);
    chip.style.visibility = on ? 'hidden' : '';
    box.style.left = lerp(chipR.x, 0, e) + 'px';
    box.style.top = lerp(chipR.y, 0, e) + 'px';
    box.style.width = lerp(chipR.w, vw, e) + 'px';
    box.style.height = lerp(chipR.h, vh, e) + 'px';
    box.style.borderRadius = lerp(chipR.r, 0, e) + 'px';
    boxImg.style.transform = `scale(${lerp(1.35, 1.04, e) - clamp((p - .52) / .48) * .04})`;
    box.style.setProperty('--shade', clamp((p - .48) / .16));
    box.classList.toggle('is-text', p > .6);

    const push = vw * .55 * e;
    wl.style.transform = `translateX(${-push}px)`;
    wr.style.transform = `translateX(${push}px)`;
    l0.style.transform = `translateY(${-vh * .32 * e}px)`;
    l2.style.transform = `translateY(${vh * .32 * e}px)`;
    const fade = 1 - clamp(e * 2.2);
    eyebrow.style.opacity = foot.style.opacity = cue.style.opacity = fade;
    bgImg.style.filter = `brightness(${1 - e * .6})`;
  }

  /* ---------- people: horizontal strip while pinned ---------- */
  const people = $('[data-people]');
  const track = $('[data-track]');
  function peopleTick(y, vh, vw) {
    if (mqPhone.matches) return;
    const span = people.offsetHeight - vh;
    const p = clamp((y - people.offsetTop) / span);
    const max = Math.max(0, track.scrollWidth - vw);
    track.style.transform = `translate3d(${-max * ease(p)}px,0,0)`;
  }

  /* ---------- header + dock ---------- */
  const hd = $('.hd');
  let lastY = 0;
  function chromeTick(y, vh) {
    hd.classList.toggle('is-solid', y > 40);
    const heroEnd = hero.offsetTop + hero.offsetHeight - vh;
    const down = y > lastY + 2, up = y < lastY - 2;
    if (y > heroEnd && down) hd.classList.add('is-hidden');
    if (up || y < heroEnd) hd.classList.remove('is-hidden');
    document.body.classList.toggle('dock-on', y > vh * .5);
    lastY = y;
  }

  /* ---------- loop ---------- */
  let vh = innerHeight, vw = innerWidth;
  function frame(t) {
    if (lenis) lenis.raf(t);
    const y = lenis ? lenis.scroll : scrollY;
    heroTick(y, vh, vw);
    peopleTick(y, vh, vw);
    chromeTick(y, vh);
    requestAnimationFrame(frame);
  }

  let rz;
  addEventListener('resize', () => {
    clearTimeout(rz);
    rz = setTimeout(() => {
      vh = innerHeight; vw = innerWidth;
      measureChip();
      doSplit();
      $$('.split').forEach(el => el.classList.add('is-in'));
      if (mqPhone.matches) { track.style.transform = ''; }
    }, 150);
  });

  /* ---------- start ---------- */
  function start() {
    const intro = $('.intro');
    doSplit();
    initLenis();
    if (FLAT) {
      intro.classList.add('is-gone');
      document.body.classList.add('is-ready');
      $$('.rv, .rv-img, .split, .pw__row, .hl').filter(n => !n.closest('.hero__reveal')).forEach(n => n.classList.add('is-in'));
      $('.hero__title').classList.add('is-in');
    } else {
      watch();
      setTimeout(() => {
        intro.classList.add('is-out');
        document.body.classList.add('is-ready');
        setTimeout(() => $('.hero__title').classList.add('is-in'), 350);
        setTimeout(() => intro.classList.add('is-gone'), 1600);
      }, 900);
    }
    measureChip();
    if (qs.has('y')) scrollTo(0, +qs.get('y'));
    requestAnimationFrame(frame);
  }

  const heroReady = new Promise(r => { const i = bgImg; if (i.complete) r(); else { i.onload = r; i.onerror = r; } });
  const ready = Promise.all([document.fonts.ready, heroReady]);
  Promise.race([ready, new Promise(r => setTimeout(r, 3000))]).then(start);
})();
