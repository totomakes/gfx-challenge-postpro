/* GFX Challenge — Post-Production Guide · interactions */
(function () {
  "use strict";

  /* ---------- Tab cards (Premiere / Resolve) ---------- */
  document.querySelectorAll("[data-tabs]").forEach(function (card) {
    var tabs = card.querySelectorAll(".tabcard__tab");
    var panels = card.querySelectorAll(".tabcard__panel");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var key = tab.getAttribute("data-tab");
        tabs.forEach(function (t) { t.classList.remove("is-active"); });
        panels.forEach(function (p) { p.classList.remove("is-active"); });
        tab.classList.add("is-active");
        var panel = card.querySelector('[data-panel="' + key + '"]');
        if (panel) panel.classList.add("is-active");
      });
    });
  });

  /* ---------- Copy buttons ---------- */
  document.querySelectorAll(".copybtn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy") || "";
      var done = function () {
        var original = btn.textContent;
        btn.textContent = "✓ Copied";
        btn.classList.add("is-copied");
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("is-copied");
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta); done();
      }
    });
  });

  /* ---------- Scroll progress bar ---------- */
  var bar = document.getElementById("scrollProgress");
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (bar) bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll-spy nav ---------- */
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll("[data-spy]"));
  var targets = spyLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && targets.length) {
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          spyLinks.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    targets.forEach(function (t) { spyObserver.observe(t); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(
    ".section, .phase, .recipe, .flowmap li, .specgrid__item, .layer, .master, .bookend"
  );
  if ("IntersectionObserver" in window) {
    revealEls.forEach(function (el) { el.classList.add("io-hide"); });
    var revObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove("io-hide");
          entry.target.classList.add("io-show");
          revObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    revealEls.forEach(function (el) { revObserver.observe(el); });
  }
})();
