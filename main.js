/* ================================================================
   交互脚本（不用改，除非你想加功能）
   - 深色模式切换（记住选择）
   - 元素滚入视口时淡入
   - 页脚年份自动更新
   ================================================================ */

(function () {
  // ---------- 1. 深色 / 浅色模式 ----------
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');

  function syncLabel() {
    var dark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
    toggle.title = dark ? '切换到浅色模式' : '切换到深色模式';
  }

  if (toggle) {
    syncLabel();
    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncLabel();
    });
  }

  // ---------- 2. 滚入视口淡入 ----------
  var items = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  // ---------- 3. 页脚年份 ----------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---------- 4. 点一下复制微信号 ----------
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');

      function flash(label) {
        var hint = btn.querySelector('.copy-hint');
        if (!hint) {
          hint = document.createElement('span');
          hint.className = 'copy-hint';
          btn.appendChild(hint);
        }
        var original = hint.getAttribute('data-original') || hint.textContent || '复制';
        hint.setAttribute('data-original', original);
        hint.textContent = label;
        hint.classList.add('is-done');
        setTimeout(function () {
          hint.textContent = original;
          hint.classList.remove('is-done');
        }, 1600);
      }

      function fallback() {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.top = '-1000px';
        document.body.appendChild(ta);
        ta.select();
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        document.body.removeChild(ta);
        flash(ok ? '已复制' : '复制失败');
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () { flash('已复制'); }, fallback);
      } else {
        fallback();
      }
    });
  });
})();
