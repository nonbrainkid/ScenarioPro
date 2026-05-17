/* ============================================
   SCENARIO·PRO — script.js
   ============================================ */

/* ---------- DATA (15 records: 3 scenarios × 5 years) ---------- */
window.SCENARIO_DATA = [
  {year:2019, scenario:"Оптимистичный", revenue:850000000, costs:510000000, profit:340000000, margin:40,   growth:null},
  {year:2019, scenario:"Реалистичный",  revenue:620000000, costs:434000000, profit:186000000, margin:30,   growth:null},
  {year:2019, scenario:"Пессимистичный",revenue:420000000, costs:378000000, profit:42000000,  margin:10,   growth:null},
  {year:2020, scenario:"Оптимистичный", revenue:890000000, costs:525000000, profit:365000000, margin:41,   growth:7.4},
  {year:2020, scenario:"Реалистичный",  revenue:580000000, costs:435000000, profit:145000000, margin:25,   growth:-22},
  {year:2020, scenario:"Пессимистичный",revenue:310000000, costs:341000000, profit:-31000000, margin:-10,  growth:-174},
  {year:2021, scenario:"Оптимистичный", revenue:980000000, costs:548000000, profit:432000000, margin:44,   growth:18.4},
  {year:2021, scenario:"Реалистичный",  revenue:670000000, costs:450000000, profit:220000000, margin:32.8, growth:51.7},
  {year:2021, scenario:"Пессимистичный",revenue:390000000, costs:351000000, profit:39000000,  margin:10,   growth:225.8},
  {year:2022, scenario:"Оптимистичный", revenue:1150000000,costs:598000000, profit:552000000, margin:48,   growth:27.8},
  {year:2022, scenario:"Реалистичный",  revenue:780000000, costs:491000000, profit:289000000, margin:37,   growth:31.4},
  {year:2022, scenario:"Пессимистичный",revenue:450000000, costs:391000000, profit:59000000,  margin:13.1, growth:51.3},
  {year:2023, scenario:"Оптимистичный", revenue:1320000000,costs:634000000, profit:686000000, margin:52,   growth:24.3},
  {year:2023, scenario:"Реалистичный",  revenue:890000000, costs:534000000, profit:356000000, margin:40,   growth:23.2},
  {year:2023, scenario:"Пессимистичный",revenue:520000000, costs:447000000, profit:73000000,  margin:14,   growth:23.7}
];

/* ---------- HELPERS ---------- */
const $  = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => Array.from(p.querySelectorAll(s));

const fmt = (n) => {
  if (n === null || n === undefined) return '—';
  return new Intl.NumberFormat('ru-RU').format(Math.round(n)) + ' ₸';
};
const fmtPct = (n) => {
  if (n === null || n === undefined) return '—';
  const s = n > 0 ? '+' : '';
  return s + (Math.round(n*10)/10) + '%';
};

/* ============================================
   PAGE LOADER
   ============================================ */
function initLoader(){
  const loader = $('#loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('lifted');
      setTimeout(() => loader.classList.add('gone'), 900);
    }, 1100);
  });
}

/* ============================================
   CUSTOM CURSOR
   ============================================ */
function initCursor(){
  if (window.matchMedia('(hover: none)').matches) return;
  const cursor   = $('#cursor');
  const follower = $('#cursor-follower');
  if (!cursor || !follower) return;

  let mx = window.innerWidth/2, my = window.innerHeight/2;
  let fx = mx, fy = my;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });

  const loop = () => {
    fx += (mx - fx) * 0.18;
    fy += (my - fy) * 0.18;
    follower.style.transform = `translate(${fx}px, ${fy}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  };
  loop();

  // Hover states via delegation
  document.addEventListener('mouseover', (e) => {
    const t = e.target;
    if (t.closest('a, button, .chip, .year-filter, .hex, .gallery-card, .scenario-card, .stat-card, .pred-card, .author-card, .compare-toggle button, .m-item, th, label')){
      cursor.classList.add('hover-link');
      cursor.classList.remove('hover-image');
    } else if (t.tagName === 'IMG' || t.tagName === 'VIDEO'){
      cursor.classList.add('hover-image');
      cursor.classList.remove('hover-link');
    } else {
      cursor.classList.remove('hover-link','hover-image');
    }
  });

  window.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
  });
  window.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    follower.style.opacity = '1';
  });
}

/* ============================================
   HAMBURGER NAV
   ============================================ */
function initNav(){
  const btn = $('.hamburger');
  const links = $('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
  $$('.nav-links a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('open');
    links.classList.remove('open');
  }));
}

/* ============================================
   INTERSECTION OBSERVER — REVEALS
   ============================================ */
function initReveals(){
  const els = $$('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting){
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold:0.1, rootMargin:'0px 0px -60px 0px' });
  els.forEach(e => io.observe(e));
}

/* ============================================
   COUNT-UP ON SCROLL
   ============================================ */
function initCountUp(){
  const els = $$('[data-count]');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const isInfinity = el.dataset.count === '∞';
      if (isInfinity){
        el.textContent = '∞';
        io.unobserve(el); return;
      }
      const duration = 1600;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = target * eased;
        el.textContent = (Number.isInteger(target) ? Math.floor(val) : val.toFixed(1)) + suffix;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold:0.4 });
  els.forEach(e => io.observe(e));
}

/* ============================================
   HERO PARALLAX + PARTICLES
   ============================================ */
function initParallax(){
  const bg = $('.hero-bg');
  if (!bg) return;
  window.addEventListener('scroll', () => {
    const y = window.pageYOffset;
    if (y < window.innerHeight){
      bg.style.transform = `translateY(${y * 0.35}px) scale(${1 + y*0.0003})`;
    }
  }, { passive:true });
}

function initParticles(){
  const canvas = $('#particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };
  const spawn = () => {
    particles = Array.from({length:60}, () => ({
      x: Math.random()*W,
      y: Math.random()*H,
      r: Math.random()*2 + 0.5,
      vy: -(Math.random()*0.4 + 0.15),
      vx: (Math.random()-0.5)*0.15,
      a: Math.random()*0.5 + 0.2
    }));
  };
  resize(); spawn();
  window.addEventListener('resize', () => { resize(); spawn(); });

  const tick = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.y < -10){ p.y = H + 5; p.x = Math.random()*W; }
      if (p.x < 0) p.x = W; else if (p.x > W) p.x = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(240, 192, 64, ${p.a})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(201,168,76,0.6)';
      ctx.fill();
    });
    requestAnimationFrame(tick);
  };
  tick();
}

/* ============================================
   BACK TO TOP
   ============================================ */
function initBackTop(){
  const btn = $('#back-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.pageYOffset > 320);
  }, { passive:true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:'smooth' });
  });
}

/* ============================================
   MUSIC PLAYER
   ============================================ */
function initPlayer(){
  const player = $('#player');
  if (!player) return;
  const audio = $('#bg-audio');
  const btn = $('#play-btn');
  const prog = $('#progress');
  const fill = $('#progress-fill');
  const time = $('#time');
  if (!audio) return;

  const fmtTime = (s) => {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s/60), ss = String(Math.floor(s%60)).padStart(2,'0');
    return `${m}:${ss}`;
  };

  btn.addEventListener('click', () => {
    if (audio.paused){
      audio.play().catch(() => {});
      btn.textContent = '⏸';
    } else {
      audio.pause();
      btn.textContent = '▶';
    }
  });

  audio.addEventListener('timeupdate', () => {
    const pct = (audio.currentTime / audio.duration) * 100 || 0;
    fill.style.width = pct + '%';
    prog.style.setProperty('--progress', pct + '%');
    if (time) time.textContent = `${fmtTime(audio.currentTime)} / ${fmtTime(audio.duration)}`;
  });

  prog.addEventListener('click', (e) => {
    const rect = prog.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    if (audio.duration) audio.currentTime = pct * audio.duration;
  });

  audio.addEventListener('ended', () => { btn.textContent = '▶'; });
}

/* ============================================
   DATA TABLE (analysis.html)
   ============================================ */
function initTable(){
  const tbody = $('#table-body');
  if (!tbody) return;
  const filterBtns = $$('.year-filter');
  const ths = $$('.data-table th[data-key]');

  let state = { year:'all', sortKey:null, sortDir:'asc' };

  const scenClass = (s) =>
    s === 'Оптимистичный' ? 'scen-opt' :
    s === 'Реалистичный'  ? 'scen-real' : 'scen-pess';

  const render = () => {
    let rows = window.SCENARIO_DATA.slice();
    if (state.year !== 'all'){
      const y = parseInt(state.year, 10);
      rows = rows.filter(r => r.year === y);
    }
    if (state.sortKey){
      const k = state.sortKey, dir = state.sortDir === 'asc' ? 1 : -1;
      rows.sort((a,b) => {
        const av = a[k], bv = b[k];
        if (av === null) return 1; if (bv === null) return -1;
        if (typeof av === 'string') return av.localeCompare(bv, 'ru') * dir;
        return (av - bv) * dir;
      });
    }
    tbody.innerHTML = rows.map(r => {
      const profitPos = r.profit >= 0;
      const growthHTML = r.growth === null ? '<span style="opacity:.4">—</span>'
                       : `<span class="${r.growth >= 0 ? 'pos' : 'neg'}">${r.growth >= 0 ? '▲' : '▼'} ${Math.abs(Math.round(r.growth*10)/10)}%</span>`;
      return `
        <tr>
          <td><span class="num">${r.year}</span></td>
          <td class="${scenClass(r.scenario)}">${r.scenario}</td>
          <td class="num">${fmt(r.revenue)}</td>
          <td class="num">${fmt(r.costs)}</td>
          <td class="num ${profitPos ? 'pos' : 'neg'}">${profitPos ? '▲' : '▼'} ${fmt(Math.abs(r.profit))}</td>
          <td class="num">${r.margin}%</td>
          <td class="num">${growthHTML}</td>
        </tr>`;
    }).join('');
  };

  filterBtns.forEach(b => b.addEventListener('click', () => {
    filterBtns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    state.year = b.dataset.year;
    render();
  }));

  ths.forEach(th => th.addEventListener('click', () => {
    const k = th.dataset.key;
    if (state.sortKey === k){
      state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      state.sortKey = k; state.sortDir = 'asc';
    }
    ths.forEach(x => { x.classList.remove('sorted-asc','sorted-desc'); });
    th.classList.add(state.sortDir === 'asc' ? 'sorted-asc' : 'sorted-desc');
    render();
  }));

  render();
}

/* ============================================
   COMPARE TOGGLE (visualization.html)
   ============================================ */
function initCompare(){
  const toggles = $$('.compare-toggle button');
  if (!toggles.length) return;
  const cards = $$('.compare-card');

  const animateNum = (el, target) => {
    const cur = parseFloat(el.dataset.cur || '0');
    const dur = 800, start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start)/dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = cur + (target - cur) * eased;
      el.textContent = fmt(val);
      if (t < 1) requestAnimationFrame(step);
      else el.dataset.cur = target;
    };
    requestAnimationFrame(step);
  };

  const update = (year) => {
    cards.forEach(card => {
      const scen = card.dataset.scen;
      const scenName = scen === 'optimistic' ? 'Оптимистичный'
                     : scen === 'realistic'  ? 'Реалистичный' : 'Пессимистичный';
      const row = window.SCENARIO_DATA.find(r => r.year === parseInt(year,10) && r.scenario === scenName);
      if (!row) return;
      const max = Math.max(row.revenue, row.costs, Math.abs(row.profit));
      const fields = [
        { key:'revenue', val:row.revenue, pctOfMax:(row.revenue/max)*100 },
        { key:'costs',   val:row.costs,   pctOfMax:(row.costs/max)*100 },
        { key:'profit',  val:row.profit,  pctOfMax:(Math.abs(row.profit)/max)*100 }
      ];
      fields.forEach(f => {
        const valEl  = card.querySelector(`[data-field="${f.key}"] .val`);
        const fillEl = card.querySelector(`[data-field="${f.key}"] .bar-fill`);
        if (valEl)  animateNum(valEl, f.val);
        if (fillEl) fillEl.style.width = f.pctOfMax + '%';
      });
      const marginEl = card.querySelector('[data-field="margin"] .val');
      if (marginEl) marginEl.textContent = row.margin + '%';
      const marginFill = card.querySelector('[data-field="margin"] .bar-fill');
      if (marginFill) marginFill.style.width = Math.max(0, row.margin) + '%';
    });
  };

  toggles.forEach(t => t.addEventListener('click', () => {
    toggles.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    update(t.dataset.year);
  }));
  // Trigger first render via IO
  const tgt = $('.compare-grid');
  if (tgt){
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting){
        update(toggles.find(x => x.classList.contains('active')).dataset.year);
        io.disconnect();
      }
    }, { threshold:0.2 });
    io.observe(tgt);
  }
}

/* ============================================
   CHARTS (visualization.html)
   ============================================ */
function initCharts(){
  if (typeof Chart === 'undefined') return;
  Chart.defaults.color = '#8A8070';
  Chart.defaults.borderColor = 'rgba(201,168,76,0.08)';
  Chart.defaults.font.family = "'DM Sans', sans-serif";

  const years = [2019,2020,2021,2022,2023];
  const byScen = (s) => years.map(y => {
    const r = window.SCENARIO_DATA.find(x => x.year === y && x.scenario === s);
    return r ? r.profit / 1e6 : 0;
  });

  /* Chart 1 — Line */
  const c1 = $('#chart-line');
  if (c1){
    new Chart(c1.getContext('2d'), {
      type:'line',
      data:{
        labels:years,
        datasets:[
          { label:'Оптимистичный', data:byScen('Оптимистичный'),
            borderColor:'#F0C040', backgroundColor:'rgba(240,192,64,0.12)',
            tension:0.4, fill:true, borderWidth:2.5, pointRadius:5, pointHoverRadius:9,
            pointBackgroundColor:'#F0C040', pointBorderColor:'#080808' },
          { label:'Реалистичный', data:byScen('Реалистичный'),
            borderColor:'#4A90D9', backgroundColor:'rgba(74,144,217,0.10)',
            tension:0.4, fill:true, borderWidth:2.5, pointRadius:5, pointHoverRadius:9,
            pointBackgroundColor:'#4A90D9', pointBorderColor:'#080808' },
          { label:'Пессимистичный', data:byScen('Пессимистичный'),
            borderColor:'#8B0000', backgroundColor:'rgba(139,0,0,0.10)',
            tension:0.4, fill:true, borderWidth:2.5, pointRadius:5, pointHoverRadius:9,
            pointBackgroundColor:'#8B0000', pointBorderColor:'#080808' }
        ]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{ position:'top', labels:{ usePointStyle:true, padding:20, font:{ size:12, weight:'500' } } },
          tooltip:{ backgroundColor:'#0D0D0D', borderColor:'#C9A84C', borderWidth:1,
            padding:14, titleFont:{ family:"'Orbitron',sans-serif", size:11 },
            bodyFont:{ size:12 },
            callbacks:{ label:(ctx) => `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString('ru-RU')} млн ₸` } }
        },
        scales:{
          x:{ grid:{ color:'rgba(201,168,76,0.05)' }, ticks:{ font:{ family:"'Orbitron',sans-serif", size:11 } } },
          y:{ grid:{ color:'rgba(201,168,76,0.05)' }, ticks:{ font:{ family:"'Orbitron',sans-serif", size:11 },
            callback:(v) => v.toLocaleString('ru-RU') + ' М' } }
        },
        animation:{ duration:1400, easing:'easeOutCubic' }
      }
    });
  }

  /* Chart 2 — Horizontal Bar (2023 comparison) */
  const c2 = $('#chart-bar');
  if (c2){
    const data2023 = window.SCENARIO_DATA.filter(r => r.year === 2023);
    new Chart(c2.getContext('2d'), {
      type:'bar',
      data:{
        labels:['Оптимистичный','Реалистичный','Пессимистичный'],
        datasets:[
          { label:'Выручка', data:data2023.map(r => r.revenue/1e6),
            backgroundColor:'rgba(240,192,64,0.85)', borderColor:'#F0C040', borderWidth:1 },
          { label:'Затраты', data:data2023.map(r => r.costs/1e6),
            backgroundColor:'rgba(74,144,217,0.75)', borderColor:'#4A90D9', borderWidth:1 },
          { label:'Прибыль', data:data2023.map(r => r.profit/1e6),
            backgroundColor:'rgba(26,107,60,0.85)', borderColor:'#1A6B3C', borderWidth:1 }
        ]
      },
      options:{
        indexAxis:'y',
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{ position:'top', labels:{ usePointStyle:true, padding:16 } },
          tooltip:{ backgroundColor:'#0D0D0D', borderColor:'#C9A84C', borderWidth:1,
            callbacks:{ label:(ctx) => `${ctx.dataset.label}: ${ctx.parsed.x.toLocaleString('ru-RU')} млн ₸` } }
        },
        scales:{
          x:{ grid:{ color:'rgba(201,168,76,0.05)' },
              ticks:{ font:{ family:"'Orbitron',sans-serif", size:10 }, callback:(v) => v.toLocaleString('ru-RU') + ' М' } },
          y:{ grid:{ display:false }, ticks:{ font:{ family:"'Rajdhani',sans-serif", size:12, weight:'700' }, color:'#F5F0E8' } }
        },
        animation:{ duration:1500, easing:'easeOutQuart' }
      }
    });
  }

  /* Chart 3 — Doughnut */
  const c3 = $('#chart-doughnut');
  if (c3){
    new Chart(c3.getContext('2d'), {
      type:'doughnut',
      data:{
        labels:['Производство','Маркетинг','Операции','R&D','Прочее'],
        datasets:[{
          data:[35, 20, 25, 12, 8],
          backgroundColor:['#F0C040','#C9A84C','#8B6914','#4A2C0E','#2A1A09'],
          borderColor:'#080808',
          borderWidth:3,
          hoverOffset:24
        }]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        cutout:'68%',
        plugins:{
          legend:{ position:'bottom', labels:{ usePointStyle:true, padding:18, boxWidth:8,
            font:{ family:"'Rajdhani',sans-serif", size:12, weight:'500' } } },
          tooltip:{ backgroundColor:'#0D0D0D', borderColor:'#C9A84C', borderWidth:1,
            callbacks:{ label:(ctx) => `${ctx.label}: ${ctx.parsed}%` } }
        },
        animation:{ duration:1600, easing:'easeOutQuart' }
      }
    });
  }
}

/* ============================================
   LIGHTBOX
   ============================================ */
function initLightbox(){
  const items = $$('.m-item img, [data-lightbox]');
  let box = $('#lightbox');
  if (!items.length) return;
  if (!box){
    box = document.createElement('div');
    box.id = 'lightbox';
    box.innerHTML = '<img alt="">';
    document.body.appendChild(box);
  }
  const lbImg = box.querySelector('img');
  items.forEach(img => img.addEventListener('click', () => {
    lbImg.src = img.src;
    box.classList.add('open');
  }));
  box.addEventListener('click', () => box.classList.remove('open'));
}

/* ============================================
   COPY-TO-CLIPBOARD CHIPS
   ============================================ */
function initChips(){
  $$('.chip').forEach(chip => {
    chip.addEventListener('click', async () => {
      const text = chip.dataset.text || chip.textContent.trim();
      try { await navigator.clipboard.writeText(text); } catch(e){}
      chip.classList.remove('copied');
      void chip.offsetWidth;
      chip.classList.add('copied');
      setTimeout(() => chip.classList.remove('copied'), 1500);
    });
  });
}

/* ============================================
   INIT ALL
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNav();
  initReveals();
  initCountUp();
  initParallax();
  initParticles();
  initBackTop();
  initPlayer();
  initTable();
  initCompare();
  initCharts();
  initLightbox();
  initChips();
});
