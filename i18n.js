/* RTM — English / Spanish, translated in place.
   Text nodes are matched by their English wording; anything without an entry stays as it is
   (names, addresses, figures). Headings split into lines by app.js are handled through data-src.
   ?lang=es or ?lang=en sets the language; the choice is remembered. */
(() => {
  const ES = {
    // navigation + chrome
    'Practice areas': 'Áreas de práctica',
    'Our people': 'Nuestro equipo',
    'Results': 'Resultados',
    'Locations': 'Oficinas',
    'What to expect': 'Qué esperar',
    'Free case review': 'Evaluación gratuita',
    'Available 24/7': 'Disponibles 24/7',
    'Call now': 'Llamar',
    'Text us': 'Mensaje',
    'Case review': 'Consulta',

    // hero
    'California personal injury attorneys': 'Abogados de lesiones personales en California',
    'Hurt in California?': '¿Lesionado en California?',
    'We': 'Nos',
    'take it': 'encargamos',
    'from here.': 'de todo.',
    'Free consultation. No fee unless we win. Available 24/7 — ¡Hablamos Español!': 'Consulta gratuita. No cobramos si no ganamos. Disponibles las 24 horas, los 7 días.',
    'Call (949) 704-6975': 'Llame al (949) 704-6975',
    'Scroll': 'Desplácese',
    'Our promise': 'Nuestra promesa',
    'You’re not just': 'Usted no es',
    'a case to us.': 'solo un caso.',
    'You’re a family who deserves care, compassion, and someone who will stand up for your future.': 'Es una familia que merece atención, compasión y alguien que defienda su futuro.',

    // proof
    'Millions': 'Millones',
    'recovered for accident victims across California': 'recuperados para víctimas de accidentes en todo California',
    'Hundreds': 'Cientos',
    'of injured people and families helped': 'de personas lesionadas y familias a quienes hemos ayudado',
    'five-star rated by clients on Google': 'calificación de cinco estrellas de nuestros clientes en Google',
    'Super Lawyers, after Rising Stars 2023–24': 'Super Lawyers, tras Rising Stars 2023–24',
    'Featured on': 'Nos han presentado en',

    // people
    'The people who pick up when you call.': 'Las personas que le contestan cuando llama.',
    'You work with our attorneys directly, from the first call to the day your case resolves. No call centre, no hand-offs.': 'Trabaja directamente con nuestros abogados, desde la primera llamada hasta el día en que se resuelve su caso. Sin centros de llamadas ni intermediarios.',
    'Principal Attorney · Super Lawyers 2025–2027': 'Abogado principal · Super Lawyers 2025–2027',
    '“I approach each case with the same dedication and care I would give my own family.”': '“Trato cada caso con la misma dedicación y el mismo cuidado que le daría a mi propia familia.”',
    'Associate Attorney': 'Abogado asociado',
    'Legal Assistant': 'Asistente legal',
    'Office Manager': 'Gerente de oficina',
    'The full team': 'Todo el equipo',
    'Meet everyone at RTM Law': 'Conozca a todo el equipo de RTM Law',

    // practice areas
    'Car accidents': 'Accidentes de auto',
    'Motorcycle': 'Motocicletas',
    'Brain injuries': 'Lesiones cerebrales',
    'Child injuries': 'Lesiones infantiles',
    'Dog bites': 'Mordeduras de perro',
    'Wrongful death': 'Muerte injusta',
    'Also': 'También',
    'Truck accidents': 'Accidentes de camión',
    'Bicycle accidents': 'Accidentes de bicicleta',
    'Pedestrian accidents': 'Accidentes de peatones',
    'Slip and fall': 'Resbalones y caídas',
    'DUI accidents': 'Accidentes por conductores ebrios',
    'Uber and Lyft accidents': 'Accidentes de Uber y Lyft',
    'Defective products': 'Productos defectuosos',
    'Neurodivergent advocacy': 'Defensa de personas neurodivergentes',
    'Unsure if you have a case? It’s free to find out.': '¿No sabe si tiene un caso? Averiguarlo es gratis.',
    'Ask us today': 'Consúltenos hoy',
    'What happened to you?': '¿Qué le pasó?',
    'Motorcycle accident': 'Accidente de moto',
    'Truck accident': 'Accidente de camión',
    'Hit as a pedestrian': 'Atropellado como peatón',
    'Bicycle accident': 'Accidente de bicicleta',
    'Uber or Lyft accident': 'Accidente de Uber o Lyft',
    'Hit by a drunk driver': 'Chocado por un conductor ebrio',
    'Dog bite': 'Mordedura de perro',
    'Head or brain injury': 'Lesión en la cabeza o el cerebro',
    'My child was hurt': 'Mi hijo resultó herido',
    'Hurt by a product': 'Lesionado por un producto',
    'I lost a loved one': 'Perdí a un ser querido',
    'Autism or special needs': 'Autismo o necesidades especiales',
    'Choose the one closest to what happened. You’ll see right away how we can help.': 'Elija la opción más parecida a lo que le pasó. Verá de inmediato cómo podemos ayudarle.',
    'We can help.': 'Podemos ayudarle.',
    'Get a free case review': 'Solicite una evaluación gratuita',

    // results
    'Global settlement · Trucking accident': 'Acuerdo global · Accidente de camión',
    'Our highest recent result. No two cases are the same, and results depend on the facts of each one.': 'Nuestro resultado reciente más alto. No hay dos casos iguales, y los resultados dependen de los hechos de cada uno.',
    'Global settlement': 'Acuerdo global',
    'Products liability': 'Responsabilidad por productos',
    'Auto collision': 'Choque automovilístico',
    'Auto v. truck': 'Auto contra camión',
    'Car accident': 'Accidente de auto',
    'Auto v. auto': 'Auto contra auto',
    'Past results do not guarantee future outcomes. Individual case results vary based on facts and circumstances.': 'Los resultados anteriores no garantizan resultados futuros. Los resultados de cada caso varían según los hechos y las circunstancias.',
    'Read client stories': 'Lea las opiniones de clientes',

    // no fee
    'No win, no fee': 'Si no ganamos, no cobramos',
    'You pay nothing unless we win.': 'No paga nada a menos que ganemos.',
    'No money up front, and nothing owed until we secure the compensation you deserve. Our fee comes out of what we recover for you. We take on the risk so you can focus on your recovery and your loved ones.': 'Sin dinero por adelantado y nada que pagar hasta que obtengamos la compensación que usted merece. Nuestros honorarios salen de lo que recuperamos para usted. Nosotros asumimos el riesgo para que usted pueda concentrarse en su recuperación y en sus seres queridos.',
    'No insurance? We can still help you get treated now, through a network of providers who defer payment until your case is resolved.': '¿No tiene seguro? Aun así podemos ayudarle a recibir tratamiento ahora, a través de una red de proveedores que aplazan el pago hasta que se resuelva su caso.',
    'How our no-fee guarantee works': 'Cómo funciona nuestra garantía sin honorarios',

    // process
    'What happens when you call.': 'Qué pasa cuando nos llama.',
    'You are not alone. Begin by simply sharing your story with us.': 'No está solo. Comience simplemente contándonos su historia.',
    'A free call': 'Una llamada gratuita',
    'A free, no-obligation consultation. Tell us what happened and we’ll give you an honest assessment of your case.': 'Una consulta gratuita y sin compromiso. Cuéntenos qué pasó y le daremos una evaluación honesta de su caso.',
    'We investigate': 'Investigamos',
    'We gather evidence, review medical records and work with experts to build a strong claim. Every detail matters.': 'Reunimos pruebas, revisamos los expedientes médicos y trabajamos con expertos para construir un reclamo sólido. Cada detalle importa.',
    'You’re never in the dark': 'Siempre estará informado',
    'We keep you informed at every stage and answer your questions as they come up. We are available 24/7.': 'Le mantenemos informado en cada etapa y respondemos sus preguntas a medida que surjan. Estamos disponibles las 24 horas, los 7 días.',
    'Settlement or trial': 'Acuerdo o juicio',
    'Whether through a negotiated settlement or in front of a jury, we fight for the compensation you deserve.': 'Ya sea mediante un acuerdo negociado o ante un jurado, luchamos por la compensación que usted merece.',
    'Your recovery': 'Su recuperación',
    'With your case resolved, you can focus on healing and moving forward with your life.': 'Con su caso resuelto, puede concentrarse en sanar y seguir adelante con su vida.',

    // advocacy
    'Injury lawyers for people with autism and special needs.': 'Abogados de lesiones para personas con autismo y necesidades especiales.',
    'We serve individuals with autism who have suffered serious and catastrophic injuries. Communication is kept clear, accommodations are tailored, and your preferences are respected throughout the legal process.': 'Representamos a personas con autismo que han sufrido lesiones graves y catastróficas. La comunicación es clara, las adaptaciones se ajustan a cada persona y sus preferencias se respetan durante todo el proceso legal.',
    'Learn about our advocacy': 'Conozca nuestra labor de defensa',

    // client stories
    'Client stories': 'Opiniones de clientes',
    'In our clients’ words.': 'En palabras de nuestros clientes.',
    'Rated five stars on Google': 'Calificación de cinco estrellas en Google',
    'See all reviews': 'Ver todas las reseñas',
    'Google review': 'Reseña de Google',
    'The other insurance company was not fixing my car and not helping with any of my medical needs. I was referred to RTM Law and they worked very fast and sent me to very good medical facilities. They were able to get me a better settlement than I even thought possible.': 'La otra compañía de seguros no estaba arreglando mi auto ni ayudándome con ninguna de mis necesidades médicas. Me recomendaron RTM Law; trabajaron muy rápido y me enviaron a muy buenos centros médicos. Lograron conseguirme un acuerdo mejor de lo que jamás imaginé.',
    'The person who helped me was always very kind, answering my questions clearly, and responding to my phone calls promptly. I’m very grateful.': 'La persona que me ayudó siempre fue muy amable, respondió mis preguntas con claridad y contestó mis llamadas rápidamente. Estoy muy agradecido.',
    'It was a pleasure working with them. Very good communication, always answered calls or text and always let me know what was going on. Would definitely recommend.': 'Fue un placer trabajar con ellos. Muy buena comunicación: siempre contestaban llamadas o mensajes y siempre me informaban de lo que pasaba. Sin duda los recomiendo.',
    'This is my second time working with RTM Law and I appreciate the speed and precision of RTM Law’s work on my case. They always made sure I was informed on any updates so I wasn’t ever worried.': 'Es la segunda vez que trabajo con RTM Law y aprecio la rapidez y la precisión de su trabajo en mi caso. Siempre se aseguraron de informarme de cualquier novedad, así que nunca me preocupé.',
    'Excellent work. They kept me informed throughout the entire process and resolved my case quickly. Thank you for your excellent service.': 'Excelente trabajo. Me mantuvieron informada durante todo el proceso y resolvieron mi caso rápidamente. Gracias por su excelente servicio.',
    'I recommend them. They’re very friendly and available whenever you need them for any questions or concerns you may have about your case. They’re very trustworthy.': 'Los recomiendo. Son muy amables y están disponibles cuando los necesita para cualquier pregunta o inquietud sobre su caso. Son muy confiables.',

    // faq
    'Questions': 'Preguntas',
    'What people ask us first.': 'Lo primero que nos preguntan.',
    'How much will I have to pay?': '¿Cuánto tendré que pagar?',
    'Nothing up front. Our no-fee guarantee means you only pay if we win your case. Any fees come from the compensation we recover for you.': 'Nada por adelantado. Nuestra garantía sin honorarios significa que solo paga si ganamos su caso. Los honorarios salen de la compensación que recuperamos para usted.',
    'Will you help me get treatment?': '¿Me ayudarán a recibir tratamiento?',
    'Yes, even if you don’t have insurance. We work with a network of providers who can treat you now, with payment deferred until your case is resolved.': 'Sí, aunque no tenga seguro. Trabajamos con una red de proveedores que pueden atenderle ahora, con el pago aplazado hasta que se resuelva su caso.',
    'How long will my case take?': '¿Cuánto tiempo tomará mi caso?',
    'Every case is different, and timelines vary with your situation. We work to resolve your case as quickly as possible while getting the best outcome, and we keep you updated every step of the way.': 'Cada caso es diferente y los plazos varían según su situación. Trabajamos para resolver su caso lo antes posible y con el mejor resultado, y le mantenemos al tanto en cada paso.',
    'How should I prepare?': '¿Cómo debo prepararme?',
    'Focus on taking care of yourself, and gather any documents you think may matter, like medical records or accident reports. We’ll handle the legal side while you recover.': 'Concéntrese en cuidarse y reúna los documentos que crea importantes, como expedientes médicos o informes del accidente. Nosotros nos encargamos de la parte legal mientras usted se recupera.',
    'When can I get back to my old life?': '¿Cuándo podré volver a mi vida normal?',
    'No one can say exactly when life will return to normal. We’re committed to helping you through it and securing the money you need to rebuild.': 'Nadie puede decir con exactitud cuándo volverá la normalidad. Estamos comprometidos a acompañarle en el proceso y a conseguir el dinero que necesita para reconstruir su vida.',

    // contact
    'We have time for your call.': 'Tenemos tiempo para su llamada.',
    'Available 24/7 · No fees unless we win · ¡Hablamos Español!': 'Disponibles 24/7 · No cobramos si no ganamos · Atención en español',
    'Prefer to write? Tell us what happened and we’ll call you back.': '¿Prefiere escribir? Cuéntenos qué pasó y le devolveremos la llamada.',
    'Your name': 'Su nombre',
    'Phone': 'Teléfono',
    'Email': 'Correo electrónico',
    '(optional)': '(opcional)',
    'What happened?': '¿Qué pasó?',
    'You can text me about my case. Message and data rates may apply. Reply STOP to opt out.': 'Pueden enviarme mensajes de texto sobre mi caso. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para cancelar.',
    'Get my free case review': 'Solicitar mi evaluación gratuita',
    'Thank you. A member of our team will call you shortly.': 'Gracias. Un miembro de nuestro equipo le llamará en breve.',

    // locations + footer
    'Six offices across Southern and Central California.': 'Seis oficinas en el sur y el centro de California.',
    'Headquarters': 'Oficina principal',
    'Talk with us tonight': 'Hable con nosotros hoy mismo',
    'Firm': 'La firma',
    'About RTM Law': 'Sobre RTM Law',
    'Testimonials': 'Testimonios',
    'Careers': 'Empleos',
    'Help': 'Ayuda',
    'FAQ': 'Preguntas frecuentes',
    'Contact': 'Contacto',
    'RTM Law, APC. All rights reserved. Attorney advertising.': 'RTM Law, APC. Todos los derechos reservados. Publicidad de abogados.',
    'Past results do not guarantee future outcomes.': 'Los resultados anteriores no garantizan resultados futuros.',

    // image descriptions + labels
    'RTM Law, APC — home': 'RTM Law, APC — inicio',
    'Main': 'Principal',
    'Open menu': 'Abrir menú',
    'A marble statue of Lady Justice, blindfolded, holding scales beside a Corinthian column': 'Estatua de mármol de la Dama de la Justicia, con los ojos vendados, sosteniendo una balanza junto a una columna corintia',
    'Close-up of the blindfolded face of Lady Justice': 'Primer plano del rostro vendado de la Dama de la Justicia',
    'Gilded balance scales on a marble ledge': 'Balanza dorada sobre una repisa de mármol',
    'A Renaissance courthouse colonnade lit at night': 'Columnata renacentista de un tribunal iluminada de noche',
  };

  const META = {
    en: { title: 'RTM Law, APC — California Personal Injury Attorneys', desc: 'Hurt in California? RTM Law fights for injured people and their families. No fee unless we win. Available 24/7. Hablamos Español.' },
    es: { title: 'RTM Law, APC — Abogados de lesiones personales en California', desc: '¿Lesionado en California? RTM Law defiende a personas lesionadas y a sus familias. No cobramos si no ganamos. Disponibles 24/7.' },
  };
  const TOGGLE = { en: { hd: 'Español', menu: 'Hablamos Español →', ft: 'Español' }, es: { hd: 'English', menu: 'English version →', ft: 'English' } };

  const norm = s => s.replace(/\s+/g, ' ').trim();
  const tr = (en, lang) => (lang === 'es' && ES[norm(en)]) || null;
  const orig = new WeakMap();

  function apply(lang) {
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    const md = document.querySelector('meta[name=description]');
    if (md) md.content = META[lang].desc;

    // elements with their own Spanish (e.g. gendered job titles)
    document.querySelectorAll('[data-es]').forEach(el => {
      if (!el.dataset.en) el.dataset.en = el.textContent;
      el.textContent = lang === 'es' ? el.dataset.es : el.dataset.en;
    });

    // headings that app.js splits into lines
    document.querySelectorAll('.split').forEach(el => {
      if (!el.dataset.en) el.dataset.en = norm(el.dataset.src || el.textContent);
      const src = tr(el.dataset.en, lang) || el.dataset.en;
      el.dataset.src = src;
      if (!el.querySelector('.hl')) el.textContent = src;
    });

    // every other text node
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      const p = n.parentElement;
      if (!p || p.closest('script, style, svg, .split, [data-es], [data-lang-toggle]')) continue;
      if (!orig.has(n)) { if (!/[A-Za-z]/.test(n.nodeValue)) continue; orig.set(n, n.nodeValue); }
      const en = orig.get(n);
      const t = tr(en, lang);
      n.nodeValue = t ? en.replace(norm(en), t) : en;
    }

    // alt text and labels
    ['alt', 'aria-label'].forEach(a => document.querySelectorAll(`[${a}]`).forEach(el => {
      const key = 'en' + a.replace(/-./g, m => m[1].toUpperCase()).replace(/^./, c => c.toUpperCase());
      if (!(key in el.dataset)) el.dataset[key] = el.getAttribute(a);
      el.setAttribute(a, tr(el.dataset[key], lang) || el.dataset[key]);
    }));

    // the language links
    document.querySelectorAll('[data-lang-toggle]').forEach(el => {
      el.textContent = TOGGLE[lang][el.dataset.langToggle];
      el.lang = lang === 'es' ? 'en' : 'es';
      el.href = '?lang=' + (lang === 'es' ? 'en' : 'es');
    });

    document.dispatchEvent(new CustomEvent('rtm:lang', { detail: lang }));
  }

  const qs = new URLSearchParams(location.search).get('lang');
  let lang = qs === 'es' || qs === 'en' ? qs : (localStorage.getItem('rtm-lang') || 'en');
  if (lang === 'es') apply('es');

  document.addEventListener('click', e => {
    const a = e.target.closest('[data-lang-toggle]');
    if (!a) return;
    e.preventDefault();
    lang = lang === 'es' ? 'en' : 'es';
    localStorage.setItem('rtm-lang', lang);
    const u = new URL(location.href); u.searchParams.set('lang', lang); history.replaceState(null, '', u);
    document.body.classList.remove('menu-open');
    apply(lang);
  });

  window.RTM_LANG = () => lang;
})();
