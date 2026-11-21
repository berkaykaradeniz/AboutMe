(function () {
  "use strict";

  var SENIOR_START_DATE = new Date(2026, 0, 1);

  function updateSeniorTenure() {
    var workingTimeEl = document.querySelector(".working-time");
    if (!workingTimeEl) return;

    var now = new Date();
    var years = now.getFullYear() - SENIOR_START_DATE.getFullYear();
    var months = now.getMonth() - SENIOR_START_DATE.getMonth();
    var days = now.getDate() - SENIOR_START_DATE.getDate();

    if (days < 0) {
      months -= 1;
      var previousMonthLastDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();
      days += previousMonthLastDay;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    var parts = [];
    if (years > 0) parts.push(years + " Yıl");
    if (months > 0) parts.push(months + " Ay");
    if (days > 0 || parts.length === 0) parts.push(days + " Gün");

    workingTimeEl.textContent = "(" + parts.join(" ") + ")";
  }

  function initMobileMenu() {
    var openBtn = document.getElementById("mobile-menu-open");
    var closeBtn = document.getElementById("mobile-menu-close");
    var drawer = document.getElementById("mobile-menu-drawer");
    var backdrop = document.getElementById("mobile-menu-backdrop");
    if (!openBtn || !closeBtn || !drawer) return;

    function setOpen(isOpen) {
      drawer.classList.toggle("hidden", !isOpen);
      openBtn.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("overflow-hidden", isOpen);
    }

    openBtn.addEventListener("click", function () {
      setOpen(true);
    });
    closeBtn.addEventListener("click", function () {
      setOpen(false);
    });
    if (backdrop) {
      backdrop.addEventListener("click", function () {
        setOpen(false);
      });
    }

    var navLinks = drawer.querySelectorAll("a[href^='#']");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !drawer.classList.contains("hidden")) {
        setOpen(false);
      }
    });
  }

  function initStickyHeader() {
    var header = document.getElementById("site-header");
    if (!header) return;

    function onScroll() {
      var scrolled = window.scrollY > 24;
      header.classList.toggle("bg-secondary/95", scrolled);
      header.classList.toggle("shadow-lg", scrolled);
      header.classList.toggle("backdrop-blur-md", scrolled);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateSeniorTenure();
    initMobileMenu();
    initStickyHeader();
  });
})();
