(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const FLAT = new URLSearchParams(location.search).has('flat');

  /* reveal on view */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -10% 0px', threshold: .01 });
  $$('.rv, [data-bars]').forEach(n => FLAT ? n.classList.add('is-in') : io.observe(n));

  /* results 04: the figure changes digit by digit */
  const r4 = $('[data-r4]');
  if (r4) {
    const num = $('[data-num]', r4), kind = $('[data-kind]', r4);
    const draw = (v, animate) => {
      num.innerHTML = [...v].map(c => `<span class="ch">${c}</span>`).join('');
      const chs = $$('.ch', num);
      if (!animate) { chs.forEach(c => c.classList.add('is-up')); return; }
      requestAnimationFrame(() => chs.forEach((c, i) => setTimeout(() => c.classList.add('is-up'), i * 70)));
    };
    draw(num.textContent.trim(), false);
    let cur = null;
    const pick = b => {
      if (b === cur) return;
      cur = b;
      $$('button', r4).forEach(x => x.classList.toggle('is-on', x === b));
      draw(b.dataset.v, true);
      kind.textContent = b.dataset.k;
    };
    cur = $('button.is-on', r4);
    $$('.r4__list button', r4).forEach(b => {
      b.addEventListener('click', () => pick(b));
      b.addEventListener('mouseenter', () => { if (matchMedia('(hover: hover)').matches) pick(b); });
    });
  }

  /* picker: highlight the option in view */
  const links = $$('.picker__group a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('is-on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('.opt').forEach(o => spy.observe(o));
})();
