/* Je Suis Jambon — Milano Bicocca
   Plumbing canonico (PLUMBING_V 2) + codice-firma del sito. */

(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) root.classList.add('reduced-motion');

  /* ══════════ CONFIG PER-SITO ══════════ */
  var SITE = {
    slug: 'je-suis-jambon',
    /* WhatsApp confermato: l'icona è nel loro Linktree, sul mobile 347 555 8130 */
    whatsapp: {
      number: '393475558130',
      message: 'Ciao! Vorrei prenotare un tavolo da Je Suis Jambon.',
      ids: ['ctaPrenota', 'heroWhatsapp', 'doveWhatsapp', 'barWhatsapp'],
    },
    /* Lun–sab 12:00–01:00 (chiusura DOPO mezzanotte → 25:00), domenica chiuso.
       Fonte: directory concordanti + conferma parziale Google («chiude alle
       ore 01», di lunedì). ⚠️ Il pannello orari di Google non si è aperto:
       se serve certezza assoluta, chiedere al locale. */
    hours: {
      0: [],
      1: [['12:00', '25:00']],
      2: [['12:00', '25:00']],
      3: [['12:00', '25:00']],
      4: [['12:00', '25:00']],
      5: [['12:00', '25:00']],
      6: [['12:00', '25:00']],
    },
    hoursStatusId: 'orarioStato',
    hoursTableSelector: '[data-day]',
    todayClass: 'is-today',
    introId: 'intro',
    introDuration: 1900,
    revealSelector: '.reveal',
    inViewClass: 'in-view',
    breakpointMenu: 960,
    EN: {
      'nav.piadina': 'The piadina', 'nav.tavola': 'Boards', 'nav.bere': 'To drink',
      'nav.voci': 'Reviews', 'nav.dove': 'Find us',
      'cta.scrivi': 'Message us', 'a.lang': 'Change language', 'a.menu': 'Open the menu', 'a.chiudi': 'Close',
      'a.stack': 'The layers of a piadina: flatbread, cured meats, cheeses, vegetables, sauces and the flatbread folded over',
      'a.zoomTagliere': 'Enlarge the photo of the cured meats board',
      'a.zoomDrink': 'Enlarge the drink list', 'a.zoomGazebo': 'Enlarge the photo of the gazebo in the square',
      'alt.piadina': 'A piadina filled with cured ham, cooked ham and salad, open on a white plate',
      'alt.tagliere': 'A plate of sliced cured meats with bread croutons and a sauce, on a red table',
      'alt.drink': "The venue's drink list, with the pig logo at the top and the cocktails with prices",
      'alt.gazebo': 'The white gazebo in piazza della Trivulziana, with the Je Suis Jambon sign and two pigs on the front',
      'hero.kicker': 'Your friendly neighbourhood beer house',
      'hero.l1': 'Build your own', 'hero.l2': 'piadina.',
      'hero.lead': 'In the reviews the word "piadine" comes up one hundred and seventy-one times. The rest is down to the boards, the beers and the tables out in the square — open until one in the morning.',
      'hero.rec': 'from 1,015 reviews',
      'hero.cta1': 'Message on WhatsApp', 'hero.cta2': 'How it works',
      'pia.occhiello': 'How it works', 'pia.h': 'It starts with the flatbread<br>and you choose what goes in',
      'st.1': 'the flatbread, warmed to order', 'st.2': 'the cured meats — raw ham, cooked ham, coppa, salami',
      'st.3': 'the cheeses', 'st.4': 'the vegetables and salad', 'st.5': 'the sauces', 'st.6': 'and it folds over',
      'pia.nota': 'The name is a French pun — "I am ham" — and the logo is a pig. The full menu, with every filling, is the one at the counter.',
      'tav.occhiello': 'For the aperitivo', 'tav.h': 'The boards',
      'tav.p': 'One review calls them a "super find": sliced cured meats, croutons and a sauce, brought to the table to go with the beer. It is how the evening starts here.',
      'tav.p2': 'The place is small and informal, and there are tables out in the square: in winter the gazebo closes with its sheets, in summer you sit outside.',
      'ber.occhiello': 'To drink', 'ber.h': 'Beers on tap, in bottles<br>and the cocktail list',
      'ber.p': 'The beer selection is wide — it is the thing customers mention most after the piadine. These instead are the cocktail prices, taken from their own list.',
      'd1': 'Spritz · Aperol, Campari, Hugo', 'd2': 'Negroni sbagliato · Americano', 'd3': 'Dark and Stormy',
      'd4': 'Negroni · Boulevardier', 'd5': 'Mojito · Cuba Libre', 'd6': 'Moscow and London Mule',
      'd7': 'Margarita · Paloma · Tequila Sunrise', 'd8': 'Long Island · Japanese Ice Tea',
      'd9': 'Bloody Mary · Godfather · Sex on the Beach',
      'cap.drink': 'Their own list, with the pig on top.',
      'voci.occhiello': 'What customers say', 'voci.h': 'Five, exactly as they are',
      'dove.occhiello': 'Where we are', 'dove.h': 'Piazza della Trivulziana 4',
      'dove.p': 'Bicocca, on a pedestrian square a short walk from the University and the Arcimboldi theatre. The tables are right outside.',
      'g.lun': 'Monday', 'g.mar': 'Tuesday', 'g.mer': 'Wednesday', 'g.gio': 'Thursday',
      'g.ven': 'Friday', 'g.sab': 'Saturday', 'g.dom': 'Sunday', 'g.chiuso': 'closed',
      'dove.nota': 'Eat in or collect outside. Home delivery is not available.',
      'cap.gazebo': 'The gazebo in the square, closed with sheets for the winter.',
      'faq.h': 'Frequently asked questions',
      'faq.q1': 'How late are you open?',
      'faq.a1': 'Monday to Saturday from 12:00 until one in the morning. Closed on Sunday.',
      'faq.q2': 'How does "build your own piadina" work?',
      'faq.a2': 'You choose what goes inside: the cured meats, the cheeses, the vegetables and the sauces. The piadina is then filled to order.',
      'faq.q3': 'Can you sit outside?',
      'faq.a3': 'Yes: there are tables in piazza della Trivulziana, which is pedestrian, and a gazebo that closes with sheets in winter.',
      'faq.q4': 'Do you do takeaway or delivery?',
      'faq.a4': 'You can collect outside. Home delivery is not available.',
      'faq.q5': 'How much are the cocktails?',
      'faq.a5': 'Spritz, Campari and Hugo 5 euros. Negroni sbagliato, americano and dark and stormy 8 euros. The others on the list 9 euros.',
      'foot.orari': 'Monday–Saturday 12:00–01:00 · closed on Sunday',
      'foot.demo': 'Demonstration website made by Bespoke Studio using public data and photographs of the business.',
      'bar.chiama': 'Call', 'bar.wa': 'WhatsApp', 'bar.dove': 'Find us',
    },
  };
  /* ═════════════════════════════════════ */

  if (SITE.whatsapp.number) {
    var waHref = 'https://wa.me/' + SITE.whatsapp.number + '?text=' + encodeURIComponent(SITE.whatsapp.message);
    SITE.whatsapp.ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.href = waHref; el.target = '_blank'; el.rel = 'noopener'; }
    });
  }

  var hasGsap = typeof gsap !== 'undefined';
  var hasST = hasGsap && typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  function showAllReveals() {
    var els = document.querySelectorAll(SITE.revealSelector);
    els.forEach(function (el) { el.classList.add(SITE.inViewClass); });
    if (hasGsap) {
      if (hasST) {
        els.forEach(function (el) {
          ScrollTrigger.getAll().forEach(function (st) {
            if (st.trigger === el && !st.progress) st.kill();
          });
        });
      }
      gsap.set(els, { opacity: 1, y: 0, x: 0 });
    }
  }
  setTimeout(function () { if (!hasGsap || reducedMotion) showAllReveals(); }, 1500);

  if (hasGsap && !reducedMotion) {
    gsap.utils.toArray(SITE.revealSelector).forEach(function (el) {
      gsap.fromTo(el, { opacity: 0, y: 26 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', immediateRender: false,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
  } else {
    if ('IntersectionObserver' in window && !reducedMotion) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add(SITE.inViewClass); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(SITE.revealSelector).forEach(function (el) { io.observe(el); });
    } else {
      showAllReveals();
    }
  }

  var intro = document.getElementById(SITE.introId);
  var heroEntrance = function () { if (window.bespokeHeroEntrance) window.bespokeHeroEntrance(); };
  function hideIntro() {
    if (!intro) return;
    var el = intro; intro = null;
    el.classList.add('hide');
    setTimeout(function () { el.remove(); }, 600);
    heroEntrance();
  }
  function killIntroNow() {
    if (!intro) return;
    var el = intro; intro = null;
    el.remove();
    heroEntrance();
  }
  if (reducedMotion || !intro) {
    if (intro) { intro.remove(); intro = null; }
    heroEntrance();
  } else {
    setTimeout(hideIntro, SITE.introDuration);
    setTimeout(hideIntro, 6000);
    intro.addEventListener('click', hideIntro);
  }

  var burger = document.getElementById('burger');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    var lastFocus = null;
    var closeNav = function () {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
      if (lastFocus) { lastFocus.focus(); lastFocus = null; }
    };
    var openNav = function () {
      killIntroNow();
      lastFocus = document.activeElement;
      nav.classList.add('nav-open');
      burger.setAttribute('aria-expanded', 'true');
      var first = nav.querySelector('a, button');
      if (first) first.focus();
    };
    burger.addEventListener('click', function () {
      nav.classList.contains('nav-open') ? closeNav() : openNav();
    });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeNav();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > SITE.breakpointMenu) closeNav();
    });
  }

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg) {
    var opener = null;
    var openLb = function (src, alt) {
      lightboxImg.src = src; lightboxImg.alt = alt || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    };
    var closeLb = function () {
      lightbox.hidden = true; lightboxImg.src = '';
      document.body.style.overflow = '';
      if (opener) { opener.focus(); opener = null; }
    };
    document.querySelectorAll('[data-full]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        opener = btn;
        var img = btn.querySelector('img');
        openLb(btn.getAttribute('data-full'), img ? img.alt : '');
      });
    });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hidden) closeLb();
    });
  }

  function romeNow() {
    try {
      var f = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
      });
      var p = f.formatToParts(new Date());
      var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var get = function (t) { return p.find(function (x) { return x.type === t; }).value; };
      return { day: map[get('weekday')], mins: parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10) };
    } catch (e) {
      var d = new Date();
      return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() };
    }
  }
  var toMin = function (hm) { var a = hm.split(':'); return parseInt(a[0], 10) * 60 + parseInt(a[1], 10); };
  var fmt = function (m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); };
  var DAYS_IT = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function hoursState() {
    var now = romeNow();
    var wins = SITE.hours[now.day] || [];
    for (var i = 0; i < wins.length; i++) {
      var s = toMin(wins[i][0]), e = toMin(wins[i][1]);
      if (now.mins >= s && now.mins < Math.min(e, 1440)) return { open: true, day: now.day, closesAt: fmt(e) };
    }
    var prev = (now.day + 6) % 7;
    var pw = SITE.hours[prev] || [];
    for (var j = 0; j < pw.length; j++) {
      var pe = toMin(pw[j][1]);
      if (pe > 1440 && now.mins < pe - 1440) return { open: true, day: prev, closesAt: fmt(pe) };
    }
    for (var k = 0; k < wins.length; k++) {
      if (now.mins < toMin(wins[k][0])) return { open: false, day: now.day, opensToday: fmt(toMin(wins[k][0])) };
    }
    for (var d = 1; d <= 7; d++) {
      var nd = (now.day + d) % 7;
      var nw = SITE.hours[nd] || [];
      if (nw.length) return { open: false, day: now.day, opensDay: nd, opensAt: fmt(toMin(nw[0][0])) };
    }
    return { open: false, day: now.day };
  }

  function renderHours() {
    var el = document.getElementById(SITE.hoursStatusId);
    var st = hoursState();
    document.querySelectorAll(SITE.hoursTableSelector).forEach(function (row) {
      row.classList.toggle(SITE.todayClass, parseInt(row.getAttribute('data-day'), 10) === st.day);
    });
    if (!el) return;
    var en = root.lang === 'en';
    var txt;
    if (st.open) {
      txt = (en ? 'Open now' : 'Aperto ora') + ' · ' + (en ? 'closes at ' : 'chiude alle ') + st.closesAt;
    } else if (st.opensToday) {
      txt = (en ? 'Closed · opens today at ' : 'Chiuso · apre oggi alle ') + st.opensToday;
    } else if (st.opensAt !== undefined) {
      txt = (en ? 'Closed · opens ' + DAYS_EN[st.opensDay] + ' at ' : 'Chiuso · apre ' + DAYS_IT[st.opensDay] + ' alle ') + st.opensAt;
    } else {
      txt = en ? 'Closed' : 'Chiuso';
    }
    el.textContent = txt;
  }
  renderHours();
  setInterval(renderHours, 60000);

  var originals = {};
  var I18N_ATTRS = [
    ['data-i18n', null], ['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt'],
    ['data-i18n-placeholder', 'placeholder'], ['data-i18n-title', 'title'],
  ];
  function setLang(lang) {
    root.lang = lang === 'en' ? 'en' : 'it';
    I18N_ATTRS.forEach(function (pair) {
      var dattr = pair[0], target = pair[1];
      if (!originals[dattr]) originals[dattr] = {};
      document.querySelectorAll('[' + dattr + ']').forEach(function (el) {
        var key = el.getAttribute(dattr);
        var store = originals[dattr];
        if (!(key in store)) store[key] = target ? el.getAttribute(target) : el.innerHTML;
        var val = lang === 'en' && SITE.EN[key] !== undefined ? SITE.EN[key] : store[key];
        if (target) el.setAttribute(target, val); else el.innerHTML = val;
      });
    });
    renderHours();
    var lt = document.getElementById('langToggle');
    if (lt) lt.textContent = lang === 'en' ? 'IT' : 'EN';
    try { localStorage.setItem(SITE.slug + '-lang', lang); } catch (e) {}
  }
  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () { setLang(root.lang === 'en' ? 'it' : 'en'); });
  }
  try { if (localStorage.getItem(SITE.slug + '-lang') === 'en') setLang('en'); } catch (e) {}

  var actionBar = document.getElementById('actionBar');
  if (actionBar) {
    var onScroll = function () {
      actionBar.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ══════════ FINE PLUMBING — codice-firma: LA PIADINA A STRATI ══════
     Gli strati si impilano uno dopo l'altro entrando nel viewport.
     ⚠️ NON usano GSAP: la transizione è in CSS e qui si aggiunge solo
     la classe .in-view con un IntersectionObserver. Così funzionano
     anche se la CDN di GSAP non risponde, e senza JS ci pensa la regola
     `html:not(.js) .strato`. Gli .strato NON sono .reveal: due
     animazioni sulla stessa opacità darebbero il flash.
     ⚠️ MAI un terzo argomento su gsap.from(): la firma legacy è
     (target, duration, vars) e l'elemento resterebbe a opacity 0. */

  var strati = document.querySelectorAll('.strato');
  function accendiStrati() {
    strati.forEach(function (s) { s.classList.add(SITE.inViewClass); });
  }
  if (strati.length) {
    if (reducedMotion || !('IntersectionObserver' in window)) {
      accendiStrati();
    } else {
      var ioStrati = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target;
          var i = [].indexOf.call(strati, el);
          setTimeout(function () { el.classList.add(SITE.inViewClass); }, Math.max(0, i) * 110);
          ioStrati.unobserve(el);
        });
      }, { threshold: 0.25 });
      strati.forEach(function (s) { ioStrati.observe(s); });
      // rete di sicurezza: se qualcosa non scatta, dopo 2,5s si mostrano
      setTimeout(accendiStrati, 2500);
    }
  }

  if (hasGsap && !reducedMotion) {
    window.bespokeHeroEntrance = function () {
      gsap.from('.hero__foto', { opacity: 0, scale: .95, duration: .9, ease: 'power3.out' });
      gsap.from('.hero__kicker, .hero__h, .hero__lead, .hero__voto, .hero__cta', {
        opacity: 0, y: 20, duration: .7, stagger: .09, ease: 'power3.out', delay: .15,
      });
    };
  }
})();
