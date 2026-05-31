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
      'color:#8b8592',
      'font-size:1.5rem',
      'cursor:pointer',
      'line-height:1',
      'padding:0.4rem 0.6rem',
      'border-radius:0.25rem',
      'z-index:10000',
    ].join(';');
    closeBtn.addEventListener('mouseenter', function () { closeBtn.style.color = '#e8d5ff'; });
    closeBtn.addEventListener('mouseleave', function () { closeBtn.style.color = '#8b8592'; });

    var lbImg = document.createElement('img');
    lbImg.style.cssText = [
      'max-width:95vw',
      'max-height:92vh',
      'object-fit:contain',
      'border-radius:0.5rem',
      'border:1px solid #3a3548',
      'box-shadow:0 0 80px rgba(0,0,0,0.9),0 0 40px rgba(168,106,232,0.2)',
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
    if (!content) return;

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
  });

  // Social nav icons — open in new tab
  document.querySelectorAll('.social-icons a').forEach(function (a) {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
})();
