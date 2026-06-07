(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Build overlay entirely in JS — outside content area, no CSS conflicts
    var overlay = document.createElement('div');
    overlay.style.cssText = [
      'display:none',
      'position:fixed',
      'inset:0',
      'background:rgba(0,0,0,0.92)',
      'z-index:9999',
      'align-items:center',
      'justify-content:center',
      'padding:1.5rem',
      'backdrop-filter:blur(4px)',
      'cursor:zoom-out',
    ].join(';');

    var closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = [
      'position:absolute',
      'top:1rem',
      'right:1.25rem',
      'background:none',
      'border:none',
      'color:#8080a0',
      'font-size:1.5rem',
      'cursor:pointer',
      'line-height:1',
      'padding:0.4rem 0.6rem',
      'border-radius:0.25rem',
      'z-index:10000',
    ].join(';');
    closeBtn.addEventListener('mouseenter', function () { closeBtn.style.color = '#c8c9ff'; });
    closeBtn.addEventListener('mouseleave', function () { closeBtn.style.color = '#8080a0'; });

    var lbImg = document.createElement('img');
    lbImg.style.cssText = [
      'max-width:95vw',
      'max-height:92vh',
      'object-fit:contain',
      'border-radius:0.5rem',
      'border:1px solid rgba(86,87,245,0.4)',
      'box-shadow:0 0 80px rgba(0,0,0,0.9),0 0 40px rgba(86,87,245,0.25)',
      'cursor:zoom-out',
      'display:block',
      'margin:0',
    ].join(';');

    overlay.appendChild(closeBtn);
    overlay.appendChild(lbImg);
    document.body.appendChild(overlay);

    function openLB(src) {
      lbImg.src = src;
      overlay.style.display = 'flex';
    }
    function closeLB() {
      overlay.style.display = 'none';
      lbImg.src = '';
    }

    overlay.addEventListener('click', closeLB);
    closeBtn.addEventListener('click', function (e) { e.stopPropagation(); closeLB(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLB(); });

    var content = document.querySelector('.sl-markdown-content');
    if (content) {
      // Images already wrapped in <a> — use href (full-res source)
      content.querySelectorAll('a > img').forEach(function (img) {
        var a = img.parentElement;
        a.style.cursor = 'zoom-in';
        a.addEventListener('click', function (e) {
          e.preventDefault();
          openLB(a.href);
        });
      });

      // Standalone images not wrapped in <a> — use src
      content.querySelectorAll('img').forEach(function (img) {
        if (img.parentElement.tagName.toLowerCase() !== 'a') {
          img.style.cursor = 'zoom-in';
          img.addEventListener('click', function () {
            openLB(img.src);
          });
        }
      });
    }

    // ── Expressive Code frame dots + label — match wiki-terminal bar ─────
    document.querySelectorAll('.expressive-code .frame').forEach(function (frame) {
      var header = frame.querySelector('.header');
      if (!header) return;
      if (header.querySelector('.ec-frame-dots')) return; // idempotency guard

      // Dots
      var wrap = document.createElement('div');
      wrap.className = 'ec-frame-dots';
      ['dot-red', 'dot-yellow', 'dot-green'].forEach(function (cls) {
        var dot = document.createElement('span');
        dot.className = cls;
        wrap.appendChild(dot);
      });
      header.insertBefore(wrap, header.firstChild);

      // Label — use existing title text, else language, else 'terminal'
      var existing = header.querySelector('.title');
      if (existing && existing.textContent.trim()) {
        existing.className = 'ec-frame-title';
      } else {
        var pre = frame.querySelector('pre');
        var lang = 'terminal';
        if (pre) {
          var la = pre.getAttribute('data-language');
          if (la) { lang = la; }
          else {
            var code = pre.querySelector('code');
            if (code) {
              var m = (code.className || '').match(/language-(\w+)/);
              if (m) lang = m[1];
            }
          }
        }
        var title = document.createElement('span');
        title.className = 'ec-frame-title';
        title.textContent = lang.toUpperCase();
        header.appendChild(title);
      }
    });

    // ── Layan accent painter — XeroHub style ──────────────────────────
    // 14-color sunset+Layan palette. Each bordered element gets the next
    // color in DOM order so neighbors always differ.
    var PALETTE = [
      '86, 87, 245',    // Layan indigo
      '255, 107, 157',  // sunset pink
      '255, 138, 61',   // sunset orange
      '92, 224, 255',   // ice cyan
      '184, 92, 232',   // magenta-violet
      '255, 214, 107',  // golden yellow
      '154, 75, 184',   // lavender violet
      '255, 128, 224',  // Layan magenta
      '43, 208, 90',    // Layan positive
      '66, 133, 244',   // Layan link blue
      '255, 95, 162',   // hot pink
      '95, 224, 154',   // mint green
      '125, 211, 252',  // sky cyan
      '255, 87, 119',   // coral
    ];

    function paintAccents() {
      var selectors = [
        '.faq-card',
        '.tour-card',
        '.stat-pill',
        '.sl-link-card',
        '.wiki-terminal',
        '.video-embed',
        '.contrib-callout',
        '.sl-markdown-content hr',
        '.sl-markdown-content > p > img',
        '.sl-markdown-content img:not(.tour-card-img img)',
      ];

      var seen = new WeakSet();
      var nodes = [];
      selectors.forEach(function (sel) {
        try {
          document.querySelectorAll(sel).forEach(function (el) {
            if (seen.has(el)) return;
            seen.add(el);
            nodes.push(el);
          });
        } catch (e) {}
      });

      // Sort by DOM order
      nodes.sort(function (a, b) {
        var pos = a.compareDocumentPosition(b);
        if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
        if (pos & Node.DOCUMENT_POSITION_PRECEDING)  return 1;
        return 0;
      });

      nodes.forEach(function (el, i) {
        var rgb = PALETTE[i % PALETTE.length];
        el.style.setProperty('--col-accent', rgb);
        el.style.setProperty('border-color', 'rgba(' + rgb + ', 0.45)', 'important');
      });
    }

    paintAccents();

    // ── Sidebar nav — random color per link ──────────────────────────────────
    (function () {
      var links = document.querySelectorAll('nav.sidebar a');
      if (!links.length) return;
      var pool = PALETTE.slice();
      for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = pool[i]; pool[i] = pool[j]; pool[j] = t;
      }
      links.forEach(function (a, i) {
        a.style.setProperty('--nav-color', pool[i % pool.length]);
      });
    })();

    // ── Per-page title word coloring (random on every load) ─────────────────
    (function () {
      var h1 = document.querySelector('h1#_top');
      if (!h1) return;

      var path = window.location.pathname.replace(/\/?$/, '/');

      var WORDS = {
        '/':                ['Welcome',   'XeroLinux',     'Wiki'],
        '/distro/':         ['XeroLinux', 'Distro'],
        '/xero-install/':   ['Installer', 'Script'],
        '/xero-tools/':     ['In-House',  'Tools'],
        '/xpackagemanager/':['Package',   'Manager'],
        '/xero-archarm/':   ['Arch',      'ARM',           'Flasher'],
        '/hypr-noc/':       ['Hyprland',  'Noctalia'],
        '/contributions/':  ['XeroLinux', 'Contributions'],
        '/faq/':            ['XeroLinux', 'F.A.Q.'],
      };

      var words = WORDS[path];
      if (!words) return;

      var COLORS = [
        '#5657f5', '#ff6b9d', '#ff8a3d', '#5ce0ff',
        '#b85ce8', '#ffd66b', '#9a4bb8', '#ff80e0',
        '#2bd05a', '#4285f4', '#ff5f62', '#5fe09a',
        '#7dd3fc', '#ff5777',
      ];

      // Fisher-Yates shuffle, pick one color per word with no repeats
      var pool = COLORS.slice();
      for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
      }

      var text = h1.textContent;
      words.forEach(function (word, i) {
        var col = pool[i % pool.length];
        var span = '<span style="color:' + col + ';text-shadow:0 0 18px ' + col + '88">' + word + '</span>';
        text = text.split(word).join(span);
      });
      h1.innerHTML = text;
    })();
  });

  // Social nav icons — open in new tab
  document.querySelectorAll('.social-icons a').forEach(function (a) {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });

  // ── Layan animated background — CPU grid packets (XeroHub AnimatedBG) ──
  (function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth <= 800) return;

    var canvas = document.createElement('canvas');
    canvas.style.cssText = [
      'position:fixed',
      'inset:0',
      'z-index:0',
      'pointer-events:none',
      'width:100%',
      'height:100%',
    ].join(';');
    canvas.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(canvas, document.body.firstChild);

    var ctx = canvas.getContext('2d');
    var CELL = 38;
    var DIRS = [[1,0],[-1,0],[0,1],[0,-1]];
    var w, h, cols, rows, packets = [], animId, tick = 0;
    var COLORS = ['86, 87, 245', '180, 110, 200', '120, 130, 160'];

    function spawn() {
      var d = DIRS[(Math.random() * 4) | 0];
      return {
        cx: (Math.random() * cols) | 0,
        cy: (Math.random() * rows) | 0,
        dx: d[0], dy: d[1],
        prog: 0,
        speed: 0.006 + Math.random() * 0.005,
        colIdx: (Math.random() * 3) | 0,
        phase: Math.random() * Math.PI * 2,
      };
    }

    function build() {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.ceil(w / CELL);
      rows = Math.ceil(h / CELL);
      var count = Math.min((w * h) / 22000 | 0, window.innerWidth < 768 ? 40 : 100);
      packets = [];
      for (var i = 0; i < count; i++) packets.push(spawn());
    }

    function render() {
      ctx.fillStyle = '#191a22';
      ctx.fillRect(0, 0, w, h);
      tick += 0.03;
      for (var i = 0; i < packets.length; i++) {
        var p = packets[i];
        p.prog += p.speed;
        if (p.prog >= 1) {
          p.prog = 0;
          p.cx += p.dx; p.cy += p.dy;
          if (p.cx < 0) p.cx = cols - 1; else if (p.cx >= cols) p.cx = 0;
          if (p.cy < 0) p.cy = rows - 1; else if (p.cy >= rows) p.cy = 0;
          if (Math.random() < 0.32) {
            if (p.dx) { p.dx = 0; p.dy = Math.random() < 0.5 ? 1 : -1; }
            else      { p.dy = 0; p.dx = Math.random() < 0.5 ? 1 : -1; }
          }
        }
        var x = (p.cx + p.dx * p.prog) * CELL + CELL / 2;
        var y = (p.cy + p.dy * p.prog) * CELL + CELL / 2;
        var pulse = 0.5 + 0.5 * Math.sin(tick + p.phase);
        var r = 0.8 + pulse * 0.6;
        var a = 0.06 + pulse * 0.10;
        var col = COLORS[p.colIdx % COLORS.length];
        ctx.shadowBlur  = 1 + pulse * 1.5;
        ctx.shadowColor = 'rgba(' + col + ', 0.5)';
        ctx.fillStyle   = 'rgba(' + col + ', ' + a + ')';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function loop() {
      animId = requestAnimationFrame(loop);
      render();
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animId = requestAnimationFrame(loop);
      }
    });

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(build, 160);
    });

    build();
    animId = requestAnimationFrame(loop);
  })();
})();
