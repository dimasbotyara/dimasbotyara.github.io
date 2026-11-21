(function () {
  "use strict";

  // =========================================================================
  // INLINE SVG ICON SET (crisp, theme-reactive via currentColor)
  // =========================================================================
  const ICONS = {
    tab: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M9 4v5"/><path d="M13 13h4"/><path d="M7 13h2"/><path d="M7 16h10"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M21 12a8 8 0 0 1-11.7 7.1L4 20l1.1-4.8A8 8 0 1 1 21 12Z"/><path d="M8.5 11.5h.01"/><path d="M12 11.5h.01"/><path d="M15.5 11.5h.01"/></svg>',
    pong: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="3" y="5" width="3" height="8" rx="1"/><rect x="18" y="11" width="3" height="8" rx="1"/><circle cx="12" cy="11" r="2.2" fill="currentColor"/><path d="M12 3v3" stroke-dasharray="2 2"/><path d="M12 17v4" stroke-dasharray="2 2"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M17.5 19H7a4.5 4.5 0 0 1-.8-8.93A6 6 0 0 1 17.8 9.2 3.8 3.8 0 0 1 17.5 19Z"/><path d="M12 12v6"/><path d="m9.5 14.5 2.5-2.5 2.5 2.5"/></svg>',
    jump: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M5 19h5"/><path d="M14 14h5"/><path d="M4 10h5"/><path d="M12 15V6"/><path d="m8.5 9.5 3.5-3.5 3.5 3.5"/></svg>',
    flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M9 3h6"/><path d="M10 3v5.5L5.2 17.2A2 2 0 0 0 7 20h10a2 2 0 0 0 1.8-2.8L14 8.5V3"/><path d="M7.5 15h9"/></svg>',
    sword: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6"/><path d="m16 16 4 4"/><path d="m19 21 2-2"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M6 4.5 19.5 12 6 19.5V4.5Z"/></svg>',
    // Stack mini icons
    python: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c-3 0-4 1.2-4 3.5V9h4.5v1H6.5C4.2 10 3 11.4 3 14s1.2 4 3.5 4H8v-2.2C8 13.7 9.4 12.5 11.5 12.5h3c1.6 0 2.5-1 2.5-2.5V6.5C17 4.2 15.5 3 12 3Z"/><path d="M12 21c3 0 4-1.2 4-3.5V15h-4.5v-1h6c2.3 0 3.5-1.4 3.5-4s-1.2-4-3.5-4H16v2.2c0 2.1-1.4 3.3-3.5 3.3h-3C7.9 11.5 7 12.5 7 14v3.5C7 19.8 8.5 21 12 21Z"/></svg>',
    js: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M10 9v6a2 2 0 0 1-2 2"/><path d="M14 15.5c.5.7 1.3 1 2.2 1 1 0 1.8-.6 1.8-1.5 0-1-.9-1.4-2-1.8-1-.3-1.8-.7-1.8-1.7 0-.9.8-1.5 1.8-1.5.8 0 1.4.3 1.8.8"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m4 17 6-5-6-5"/><path d="M12 19h8"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/></svg>',
    cpp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="M13 12h4"/><path d="M15 10v4"/></svg>',
    rust: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h9l4 4v14H6V3Z"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>',
    gamepad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4"/><path d="M8 10v4"/><circle cx="15.5" cy="11" r="1" fill="currentColor"/><circle cx="17.5" cy="13" r="1" fill="currentColor"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><circle cx="7" cy="7" r="1" fill="currentColor"/><circle cx="7" cy="17" r="1" fill="currentColor"/></svg>',
    window: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>',
    db: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6"/><path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 14.8 9.2 22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8L12 2Z"/></svg>',
    cube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="M12 12 4 7.5"/><path d="m12 12 8-4.5"/><path d="M12 12v9"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="13" cy="8" r="1" fill="currentColor"/><circle cx="16" cy="11" r="1" fill="currentColor"/><circle cx="10" cy="15" r="1" fill="currentColor"/></svg>',
    arch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-.9 2.2-1.5 3.7-2.6 5.8.7.7 1.5 1.5 2.8 2.4-1.4-.6-2.4-1.2-3.1-1.8C7.7 11 5.6 15.1 2 22c3-1.7 5.3-2.8 7.5-3.2-.1-.5-.2-1-.2-1.6v-.1c.1-1.9 1.1-3.4 2.4-3.3 1.2.1 2.2 1.7 2.1 3.6 0 .5-.1 1-.2 1.4 2.2.4 4.5 1.5 7.4 3.2-.6-1.1-1.1-2.1-1.6-3.1-.8-.6-1.6-1.4-3.3-2.3 1.1.3 2 .7 2.6 1-5-9.4-5.4-10.6-6.7-14.6Z"/></svg>',
    linux: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M6 20c0-4 2.7-7 6-7s6 3 6 7"/><path d="M9 20h6"/></svg>',
    git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M6 8.5v2a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-2"/><path d="M12 14.5v1"/></svg>',
    ide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h3"/><path d="M7 13h6"/><path d="M7 17h4"/></svg>',
    note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 7l3 11 5 4 5-4 3-11-8-5Z"/></svg>',
    audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'
  };

  const LANG_COLORS = {
    Python: "var(--blue)",
    JavaScript: "var(--yellow)",
    "C++": "var(--purple)",
    Rust: "var(--orange)",
    Shell: "var(--green)",
    HTML: "var(--red)",
    TypeScript: "var(--aqua)",
    Markdown: "var(--fg3)",
    "b-lang": "var(--yellow)"
  };

  // =========================================================================
  // STATE
  // =========================================================================
  const state = {
    lang: window.__INITIAL_LANG__ || "ru",
    theme: window.__INITIAL_THEME__ || "dark",
    activeCategory: "all",
    searchQuery: "",
    highlightedRepo: null,
    termHistory: [],
    termHistoryIdx: -1
  };

  // =========================================================================
  // HELPERS
  // =========================================================================
  function getByPath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : "";
    }, obj);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatText(str) {
    return escapeHtml(str).replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function t(path) {
    return getByPath(SITE_DATA.i18n[state.lang], path);
  }

  // =========================================================================
  // THEME MANAGEMENT (Gruvbox Dark default + Light)
  // =========================================================================
  function setTheme(theme, persist) {
    state.theme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);

    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", state.theme === "dark" ? "#282828" : "#fbf1c7");
    }

    var label = document.getElementById("themeLabel");
    if (label) {
      label.textContent = state.theme;
    }

    if (persist) {
      try {
        localStorage.setItem("dimas_theme", state.theme);
      } catch (e) {}
    }
  }

  // =========================================================================
  // LANGUAGE MANAGEMENT (Browser locale detection + Manual toggle)
  // =========================================================================
  function setLang(lang, persist) {
    state.lang = lang === "en" ? "en" : "ru";
    document.documentElement.setAttribute("lang", state.lang);

    if (persist) {
      try {
        localStorage.setItem("dimas_lang", state.lang);
      } catch (e) {}
    }

    // Update page title & meta description
    document.title = t("pageTitle");
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("metaDesc"));

    // Toggle pressed state on language buttons
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.dataset.lang === state.lang ? "true" : "false");
    });

    // Update tooltips
    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) themeBtn.setAttribute("title", t("themeTooltip"));
    var langSwitch = document.getElementById("langSwitch");
    if (langSwitch) langSwitch.setAttribute("title", t("langTooltip"));
    var tgBtn = document.getElementById("telegramCopyBtn");
    if (tgBtn) tgBtn.setAttribute("title", t("hero.telegramTooltip"));
    var dcBtn = document.getElementById("discordCopyBtn");
    if (dcBtn) dcBtn.setAttribute("title", t("hero.discordTooltip"));

    // Update static i18n text nodes
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = t(el.dataset.i18n);
      if (val) el.textContent = val;
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var val = t(el.dataset.i18nPlaceholder);
      if (val) el.setAttribute("placeholder", val);
    });

    // Re-render all dynamic sections
    renderVibes();
    renderFavorites();
    renderPlayable();
    renderFilterPills();
    renderShelf();
    renderStack();
    renderTermChips();
    if (typeof refreshCalcLocale === "function") refreshCalcLocale();
    if (typeof refreshCrabLocale === "function") refreshCrabLocale();

    // Update random banner if currently visible
    if (state.highlightedRepo) {
      var repo = SITE_DATA.shelf.find(function (r) { return r.name === state.highlightedRepo; });
      if (repo) showRandomBanner(repo);
    }
  }

  // =========================================================================
  // RENDERERS
  // =========================================================================
  function renderVibes() {
    var list = document.getElementById("vibeList");
    if (!list) return;
    var vibes = t("hero.vibes") || [];
    list.innerHTML = vibes
      .map(function (v) { return "<li>" + escapeHtml(v) + "</li>"; })
      .join("");
  }

  function renderFavorites() {
    var grid = document.getElementById("favsGrid");
    if (!grid) return;

    grid.innerHTML = SITE_DATA.favorites.map(function (item) {
      var badge = item.badgeKey ? '<span class="fav-badge">' + escapeHtml(t(item.badgeKey)) + "</span>" : "";
      var extra = item.extraUrl
        ? '<a class="card-sublink" href="' + item.extraUrl + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(t(item.extraLabelKey)) + " ↗</a>"
        : "";
      var tagsHtml = item.tags.map(function (tg) { return '<span class="tag">' + escapeHtml(tg) + "</span>"; }).join("");

      return (
        '<article class="fav-card accent-' + item.accent + '">' +
          '<div class="fav-top">' +
            '<span class="fav-icon-wrap" aria-hidden="true">' + (ICONS[item.icon] || ICONS.code) + "</span>" +
            '<div class="fav-meta-right">' +
              badge +
              '<span class="lang-pill">' + escapeHtml(item.lang) + "</span>" +
            "</div>" +
          "</div>" +
          '<h3 class="fav-name">' +
            '<a href="' + item.url + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(item.name) + "</a>" +
          "</h3>" +
          '<p class="fav-desc">' + formatText(item.desc[state.lang]) + "</p>" +
          '<div class="tag-row">' + tagsHtml + "</div>" +
          '<div class="fav-links">' +
            '<a class="card-link" href="' + item.url + '" target="_blank" rel="noopener noreferrer">' +
              '<span>' + escapeHtml(t("sections.openRepo")) + "</span>" +
              ICONS.ext +
            "</a>" +
            extra +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderPlayable() {
    var grid = document.getElementById("playableGrid");
    if (!grid) return;

    grid.innerHTML = SITE_DATA.playable.map(function (item) {
      var tagsHtml = item.tags.map(function (tg) { return '<span class="tag">' + escapeHtml(tg) + "</span>"; }).join("");
      return (
        '<article class="play-card accent-' + item.accent + '">' +
          '<div class="play-head">' +
            '<div class="play-title-group">' +
              '<span class="fav-icon-wrap" aria-hidden="true">' + (ICONS[item.icon] || ICONS.gamepad) + "</span>" +
              '<h3 class="play-title">' + escapeHtml(item.name) + "</h3>" +
            "</div>" +
            '<span class="live-pill">live</span>' +
          "</div>" +
          '<p class="play-desc">' + escapeHtml(item.desc[state.lang]) + "</p>" +
          '<div class="tag-row">' + tagsHtml + "</div>" +
          '<div class="play-actions">' +
            '<a class="btn btn-play" href="' + item.liveUrl + '" target="_blank" rel="noopener noreferrer">' +
              ICONS.play +
              '<span>' + escapeHtml(t("sections.playBtn")) + "</span>" +
            "</a>" +
            '<a class="btn btn-code" href="' + item.repoUrl + '" target="_blank" rel="noopener noreferrer">' +
              '<span>' + escapeHtml(t("sections.codeBtn")) + "</span>" +
              ICONS.ext +
            "</a>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderFilterPills() {
    var container = document.getElementById("filterPills");
    if (!container) return;

    var cats = ["all", "games", "selfhosted", "linux", "weird"];
    container.innerHTML = cats.map(function (cat) {
      var count = cat === "all"
        ? SITE_DATA.shelf.length
        : SITE_DATA.shelf.filter(function (r) { return r.cat === cat; }).length;
      var selected = state.activeCategory === cat ? "true" : "false";
      return (
        '<button type="button" class="filter-pill" role="tab" data-cat="' + cat + '" aria-selected="' + selected + '">' +
          '<span>' + escapeHtml(t("categories." + cat)) + "</span>" +
          '<span class="filter-count">' + count + "</span>" +
        "</button>"
      );
    }).join("");

    container.querySelectorAll(".filter-pill").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.activeCategory = btn.dataset.cat;
        renderFilterPills();
        renderShelf();
      });
    });
  }

  function renderShelf() {
    var grid = document.getElementById("shelfGrid");
    if (!grid) return;

    var q = state.searchQuery.trim().toLowerCase();
    var filtered = SITE_DATA.shelf.filter(function (item) {
      var catOk = state.activeCategory === "all" || item.cat === state.activeCategory;
      if (!catOk) return false;
      if (!q) return true;
      var hay = [
        item.name,
        item.lang,
        item.desc.ru,
        item.desc.en,
        item.tags.join(" ")
      ].join(" ").toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="shelf-empty">' + escapeHtml(t("sections.emptySearch")) + "</div>";
      return;
    }

    grid.innerHTML = filtered.map(function (item) {
      var dotColor = LANG_COLORS[item.lang] || "var(--fg4)";
      var highlighted = state.highlightedRepo === item.name ? " is-highlighted" : "";
      var tagsHtml = item.tags.map(function (tg) { return '<span class="tag">' + escapeHtml(tg) + "</span>"; }).join("");

      return (
        '<a class="shelf-card' + highlighted + '" href="' + item.url + '" target="_blank" rel="noopener noreferrer" data-repo="' + escapeHtml(item.name) + '">' +
          '<div class="shelf-card-top">' +
            '<span class="shelf-name">' + escapeHtml(item.name) + "</span>" +
            '<span class="shelf-lang">' +
              '<span class="lang-dot" style="background:' + dotColor + '"></span>' +
              escapeHtml(item.lang) +
            "</span>" +
          "</div>" +
          '<p class="shelf-desc">' + formatText(item.desc[state.lang]) + "</p>" +
          '<div class="shelf-tags">' + tagsHtml + "</div>" +
        "</a>"
      );
    }).join("");
  }

  function showRandomBanner(repo) {
    var banner = document.getElementById("randomBanner");
    if (!banner) return;
    banner.hidden = false;
    banner.innerHTML =
      '<div class="random-banner-main">' +
        '<span class="random-label">' + escapeHtml(t("sections.randomPicked")) + "</span>" +
        '<a class="random-repo-name" href="' + repo.url + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(repo.name) + " ↗</a>" +
        '<span class="t-dim">— ' + escapeHtml(repo.desc[state.lang]) + "</span>" +
      "</div>";
  }

  function rollRandomRepo() {
    var pool = SITE_DATA.shelf;
    var pick = pool[Math.floor(Math.random() * pool.length)];
    if (pool.length > 1 && pick.name === state.highlightedRepo) {
      pick = pool[(pool.indexOf(pick) + 1) % pool.length];
    }
    state.highlightedRepo = pick.name;
    state.activeCategory = "all";
    state.searchQuery = "";

    var searchInput = document.getElementById("shelfSearch");
    if (searchInput) searchInput.value = "";

    renderFilterPills();
    renderShelf();
    showRandomBanner(pick);

    var safeName = (window.CSS && CSS.escape) ? CSS.escape(pick.name) : pick.name.replace(/"/g, '\\"');
    var card = document.querySelector('.shelf-card[data-repo="' + safeName + '"]');
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function renderStack() {
    var wrap = document.getElementById("stackGroups");
    if (!wrap) return;
    var groups = t("stackGroups") || [];

    wrap.innerHTML = groups.map(function (g) {
      var itemsHtml = g.items.map(function (it) {
        return (
          '<span class="stack-item">' +
            (ICONS[it.icon] || ICONS.code) +
            '<span>' + escapeHtml(it.name) + "</span>" +
          "</span>"
        );
      }).join("");

      return (
        '<div class="stack-group accent-' + g.accent + '">' +
          '<h3 class="stack-group-title">' + escapeHtml(g.title) + "</h3>" +
          '<div class="stack-items">' + itemsHtml + "</div>" +
        "</div>"
      );
    }).join("");
  }

  // =========================================================================
  // INTERACTIVE FISH TERMINAL
  // =========================================================================
  var termOut = null;

  function renderTermChips() {
    var wrap = document.getElementById("termChips");
    if (!wrap) return;
    var chips = t("terminal.chips") || [];
    wrap.innerHTML = chips.map(function (ch) {
      return '<button type="button" class="term-chip" data-cmd="' + escapeHtml(ch.cmd) + '">' + escapeHtml(ch.label) + "</button>";
    }).join("");

    wrap.querySelectorAll(".term-chip").forEach(function (btn) {
      btn.addEventListener("click", function () {
        runCommand(btn.dataset.cmd);
      });
    });
  }

  function appendTermEntry(host, cmd, outputHtml) {
    if (!termOut) return;
    var div = document.createElement("div");
    div.className = "term-entry";
    div.innerHTML =
      '<div class="term-cmd-line">' +
        '<span class="t-user">dimasbotyara@' + escapeHtml(host) + "</span>" +
        '<span class="t-path">/</span>' +
        '<span class="t-prompt">❯</span>' +
        '<span class="t-cmd">' + escapeHtml(cmd) + "</span>" +
      "</div>" +
      (outputHtml ? '<div class="term-res">' + outputHtml + "</div>" : "");
    termOut.appendChild(div);
    termOut.scrollTop = termOut.scrollHeight;
  }

  function buildFastfetchHtml() {
    var ascii = SITE_DATA.fastfetch.ascii.map(escapeHtml).join("\n");
    var rows = SITE_DATA.fastfetch.specs.map(function (pair) {
      return '<div class="ff-row"><span class="ff-k">' + escapeHtml(pair[0]) + ':</span> ' + escapeHtml(pair[1]) + "</div>";
    }).join("");

    return (
      '<div class="fastfetch-grid">' +
        '<pre class="ff-ascii">' + ascii + "</pre>" +
        '<div class="ff-specs">' +
          '<div class="ff-header">dimasbotyara@archlinux</div>' +
          '<div class="t-dim">----------------------</div>' +
          rows +
        "</div>" +
      "</div>"
    );
  }

  function runCommand(rawCmd, hostOverride) {
    var cmd = String(rawCmd || "").trim();
    if (!cmd) return;
    var lower = cmd.toLowerCase();
    var host = hostOverride || "archlinux";
    var isRu = state.lang === "ru";

    if (lower === "clear" || lower === "cls") {
      if (termOut) termOut.innerHTML = "";
      return;
    }

    var out = "";

    if (lower === "touch grass") {
      out = '<span class="t-err">touch: cannot touch \'grass\': Permission denied</span>';
    } else if (lower === "sudo touch grass") {
      out = isRu
        ? '<span class="t-warn">[sudo] пароль для dimasbotyara: ********</span><br/><span class="t-err">dimasbotyara is not in the grassers file. this incident will be reported 😭</span>'
        : '<span class="t-warn">[sudo] password for dimasbotyara: ********</span><br/><span class="t-err">dimasbotyara is not in the grassers file. this incident will be reported 😭</span>';
    } else if (lower === "fastfetch" || lower === "neofetch") {
      out = buildFastfetchHtml();
    } else if (lower === "whoami") {
      out = isRu
        ? '<span class="t-aqua">dimasbotyara</span> — пилю игры на pygame, self-hosted штуки для локалки и утилиты под arch/cachyos.<br/><span class="t-dim">local-first, self-hosted и фанат gruvbox.</span>'
        : '<span class="t-aqua">dimasbotyara</span> — building pygame games, local-first LAN apps & linux tools on arch/cachyos.<br/><span class="t-dim">local-first, self-hosted & gruvbox enjoyer.</span>';
    } else if (lower === "contacts" || lower === "contact" || lower === "tg" || lower === "telegram" || lower === "discord") {
      out =
        '<span class="t-aqua">github:</span>   <a class="t-warn" href="https://github.com/dimasbotyara" target="_blank" rel="noopener noreferrer">github.com/dimasbotyara</a><br/>' +
        '<span class="t-aqua">telegram:</span> <span class="t-warn">@dimasbotyara</span><br/>' +
        '<span class="t-aqua">discord:</span>  <span class="t-purple">@dimas888</span>';
    } else if (lower === "crab" || lower === "tide_crab" || lower === "краб") {
      if (typeof boopCrab === "function") boopCrab();
      out =
        '<div style="display:flex;align-items:center;gap:10px;margin-top:4px">' +
          '<svg viewBox="0 0 11 9" shape-rendering="crispEdges" width="44" height="36">' + buildCrabRects(0, false) + "</svg>" +
          '<div><span class="t-orange">' + escapeHtml(t("crab.name")) + '</span> <span class="t-dim">(hp: 50, coast)</span><br/>' +
          '<span class="t-dim">' + (isRu ? "клац-клац! живой прямо под терминалом ↓" : "snip-snip! scuttling right below this terminal ↓") + "</span></div>" +
        "</div>";
    } else if (lower === "frog" || lower === "frogsay") {
      out =
        '<pre class="term-pre t-ok">' +
        "   @..@     " + (isRu ? "квак! поставь gruvbox и не трогай облака" : "ribbit! use gruvbox & ditch the cloud") + "\n" +
        "  (----)\n" +
        " ( >__< )\n" +
        " ^^ ~~ ^^" +
        "</pre>";
    } else if (lower === "ls" || lower === "ls -la") {
      out =
        '<span class="t-aqua">botyaranewtab/</span>  <span class="t-aqua">botyaratalk/</span>  <span class="t-orange">botyarapong/</span>  <span class="t-aqua">botyaracloud/</span>  <span class="t-ok">botyarajump/</span><br/>' +
        '<span class="t-purple">alchemy-matcher/</span>  <span class="t-err">pygame-slide-survivors/</span>  <span class="t-warn">b-lang/</span>  <span class="t-dim">... (+41 more)</span>';
    } else if (lower === "theme") {
      setTheme(state.theme === "dark" ? "light" : "dark", true);
      out = '<span class="t-ok">switched to gruvbox ' + state.theme + "</span>";
    } else if (lower === "lang" || lower === "ru" || lower === "en") {
      var nextLang = (lower === "ru" || lower === "en") ? lower : (state.lang === "ru" ? "en" : "ru");
      setLang(nextLang, true);
      out = '<span class="t-ok">locale -> ' + nextLang + "</span>";
    } else if (lower === "random") {
      var pick = SITE_DATA.shelf[Math.floor(Math.random() * SITE_DATA.shelf.length)];
      out = '<span class="t-purple">🎲 ' + escapeHtml(pick.name) + '</span> — ' + escapeHtml(pick.desc[state.lang]);
    } else if (lower === "arch" || lower === "cachyos") {
      out = isRu
        ? '<span class="t-aqua">i use arch btw</span> <span class="t-dim">(и cachyos на основном пк!)</span>'
        : '<span class="t-aqua">i use arch btw</span> <span class="t-dim">(and cachyos on my main rig!)</span>';
    } else if (lower.indexOf("rm -rf") === 0) {
      out = isRu
        ? '<span class="t-err">эй, руки прочь от моего core 2 duo!! он и так держится на честном слове 😭</span>'
        : '<span class="t-err">hey, hands off my core 2 duo!! it barely survived 2008 as is 😭</span>';
    } else if (lower === "help") {
      out = isRu
        ? '<span class="t-warn">доступные команды:</span><br/>' +
          '<span class="t-aqua">touch grass</span> · <span class="t-aqua">sudo touch grass</span> · <span class="t-aqua">fastfetch</span> · <span class="t-aqua">whoami</span> · <span class="t-aqua">contacts</span> · <span class="t-aqua">crab</span> · <span class="t-aqua">frog</span> · <span class="t-aqua">ls</span> · <span class="t-aqua">random</span> · <span class="t-aqua">theme</span> · <span class="t-aqua">lang</span> · <span class="t-aqua">clear</span>'
        : '<span class="t-warn">available commands:</span><br/>' +
          '<span class="t-aqua">touch grass</span> · <span class="t-aqua">sudo touch grass</span> · <span class="t-aqua">fastfetch</span> · <span class="t-aqua">whoami</span> · <span class="t-aqua">contacts</span> · <span class="t-aqua">crab</span> · <span class="t-aqua">frog</span> · <span class="t-aqua">ls</span> · <span class="t-aqua">random</span> · <span class="t-aqua">theme</span> · <span class="t-aqua">lang</span> · <span class="t-aqua">clear</span>';
    } else {
      out = isRu
        ? '<span class="t-err">fish: неизвестная команда: ' + escapeHtml(cmd) + '</span><br/><span class="t-dim">напиши help чтобы глянуть, что я умею</span>'
        : '<span class="t-err">fish: unknown command: ' + escapeHtml(cmd) + '</span><br/><span class="t-dim">type help to see what works here</span>';
    }

    appendTermEntry(host, cmd, out);
  }

  function initTerminal() {
    termOut = document.getElementById("termOutput");
    var form = document.getElementById("termForm");
    var input = document.getElementById("termInput");
    var clearBtn = document.getElementById("termClear");

    // Seed with authentic README moment: cachyos touch grass + archlinux fastfetch preview
    runCommand("touch grass", "cachyos");
    runCommand("fastfetch", "archlinux");

    if (form && input) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var val = input.value.trim();
        if (!val) return;
        state.termHistory.unshift(val);
        state.termHistoryIdx = -1;
        runCommand(val);
        input.value = "";
      });

      input.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp") {
          if (state.termHistory.length && state.termHistoryIdx < state.termHistory.length - 1) {
            e.preventDefault();
            state.termHistoryIdx += 1;
            input.value = state.termHistory[state.termHistoryIdx];
          }
        } else if (e.key === "ArrowDown") {
          if (state.termHistoryIdx > 0) {
            e.preventDefault();
            state.termHistoryIdx -= 1;
            input.value = state.termHistory[state.termHistoryIdx];
          } else if (state.termHistoryIdx === 0) {
            state.termHistoryIdx = -1;
            input.value = "";
          }
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        if (termOut) termOut.innerHTML = "";
        if (input) input.focus();
      });
    }
  }

  // =========================================================================
  // TIDE CRAB (Приливной краб) — 1:1 sprite & 4-frame gait from wildlife.py
  // =========================================================================
  function rgbStr(arr) {
    return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
  }

  function buildCrabRects(frame, flashing) {
    var crab = SITE_DATA.tideCrab;
    var rows = crab.pixels;
    var height = rows.length;
    var width = rows[0].length;
    var palette = [
      flashing ? "#ffffff" : rgbStr(crab.baseColor),
      rgbStr(crab.highlightColor),
      rgbStr(crab.eyeColor),
      rgbStr(crab.darkColor)
    ];
    var phase = [0, 1, 0, -1][frame % 4];
    var rects = "";

    for (var y = 0; y < height; y++) {
      var row = rows[y];
      for (var x = 0; x < row.length; x++) {
        var cell = row[x];
        if (cell === ".") continue;
        var dy = 0;
        if (y >= height - 2 && (x < 3 || x >= width - 3)) {
          dy = x < Math.floor(width / 2) ? phase : -phase;
        }
        var color = palette[Number(cell) - 1];
        rects += '<rect x="' + (x + 1) + '" y="' + (y + 1 + dy) + '" width="1" height="1" fill="' + color + '"/>';
      }
    }
    return rects;
  }

  var boopCrab = null;
  var refreshCrabLocale = null;

  function initTideCrab() {
    var stage = document.getElementById("crabStage");
    var actor = document.getElementById("crabActor");
    var svg = document.getElementById("crabSvg");
    var bubbleBar = document.getElementById("crabBubbleBar");
    var speech = document.getElementById("crabSpeech");
    if (!stage || !actor || !svg) return;

    var frame = 0;
    var posX = 24;
    var dir = 1;
    var flashing = false;
    var mode = "idle"; // idle | walk_slow | walk_normal | talking
    var nextStepAt = 0;
    var modeUntil = 0;
    var lastQuoteIdx = -1;
    var activeQuoteIdx = -1;
    var quoteDeck = [];
    var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function nextShuffledQuoteIdx(total) {
      if (quoteDeck.length === 0) {
        for (var i = 0; i < total; i++) quoteDeck.push(i);
        // Fisher-Yates shuffle
        for (var j = quoteDeck.length - 1; j > 0; j--) {
          var k = Math.floor(Math.random() * (j + 1));
          var tmp = quoteDeck[j];
          quoteDeck[j] = quoteDeck[k];
          quoteDeck[k] = tmp;
        }
        // Avoid repeating the previous quote right across deck boundaries
        if (quoteDeck.length > 1 && quoteDeck[quoteDeck.length - 1] === lastQuoteIdx) {
          var swap = quoteDeck[0];
          quoteDeck[0] = quoteDeck[quoteDeck.length - 1];
          quoteDeck[quoteDeck.length - 1] = swap;
        }
      }
      return quoteDeck.pop();
    }

    function formatCrabLine(str) {
      return escapeHtml(str).replace(/\[\[swatch:([^\]]+)\]\]/g, function (_, rawColor) {
        var c = rawColor.trim();
        if (!/^(#[0-9a-fA-F]{3,8}|rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\))$/.test(c)) {
          return "";
        }
        return '<span class="crab-swatch" style="background:' + c + '" title="' + c + '" aria-hidden="true"></span>';
      });
    }

    function randRange(min, max) {
      return min + Math.random() * (max - min);
    }

    function getMaxX() {
      return Math.max(20, stage.clientWidth - 72);
    }

    function drawCrab() {
      svg.innerHTML = buildCrabRects(frame, flashing);
      actor.style.transform = "translateX(" + Math.round(posX) + "px)";
    }

    function isSingleEmoji(str) {
      var trimmed = String(str || "").trim();
      return trimmed.length > 0 && trimmed.length <= 4 && !/[a-zA-Zа-яА-ЯёЁ0-9]/.test(trimmed);
    }

    function showSpeech(text) {
      if (!bubbleBar || !speech) return;
      speech.innerHTML = formatCrabLine(text);
      speech.classList.toggle("is-emoji", isSingleEmoji(text));
      bubbleBar.hidden = false;
    }

    function hideSpeech() {
      if (!bubbleBar) return;
      bubbleBar.hidden = true;
      activeQuoteIdx = -1;
    }

    function pickNextMode(now) {
      var r = Math.random();
      if (r < 0.36) {
        // Stand completely still with no animation
        mode = "idle";
        frame = 0;
        modeUntil = now + randRange(1600, 4200);
      } else if (r < 0.72) {
        // Slow unhurried stroll
        mode = "walk_slow";
        if (Math.random() < 0.4) dir = -dir;
        modeUntil = now + randRange(2400, 5200);
      } else {
        // Normal cheerful scuttle
        mode = "walk_normal";
        if (Math.random() < 0.4) dir = -dir;
        modeUntil = now + randRange(1500, 3800);
      }
      drawCrab();
    }

    drawCrab();
    pickNextMode(Date.now());

    refreshCrabLocale = function () {
      if (mode === "talking" && activeQuoteIdx >= 0) {
        var quotes = t("crab.quotes") || [];
        if (quotes[activeQuoteIdx]) {
          showSpeech(quotes[activeQuoteIdx]);
        }
      }
    };

    boopCrab = function () {
      var quotes = t("crab.quotes") || ["🦀"];
      var idx = nextShuffledQuoteIdx(quotes.length);
      lastQuoteIdx = idx;
      activeQuoteIdx = idx;

      var line = quotes[idx];
      var plainLen = line.replace(/\[\[swatch:[^\]]+\]\]/g, "").length;
      var readDuration = isSingleEmoji(line) ? 2400 : Math.min(5800, 2700 + plainLen * 44);

      // Stop and stand still while chatting!
      mode = "talking";
      frame = 0;
      flashing = true;
      modeUntil = Date.now() + readDuration;
      drawCrab();
      showSpeech(line);

      actor.classList.remove("is-hop");
      void actor.offsetWidth;
      actor.classList.add("is-hop");

      setTimeout(function () {
        flashing = false;
        drawCrab();
      }, 150);
    };

    stage.addEventListener("click", boopCrab);
    stage.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        boopCrab();
      }
    });

    window.addEventListener("resize", function () {
      var maxX = getMaxX();
      if (posX > maxX) {
        posX = maxX;
        drawCrab();
      }
    });

    if (!reducedMotion) {
      setInterval(function () {
        var now = Date.now();

        if (mode === "talking") {
          // Stay completely still while talking until timer finishes
          if (now >= modeUntil) {
            hideSpeech();
            pickNextMode(now);
          }
          return;
        }

        if (now >= modeUntil) {
          pickNextMode(now);
          return;
        }

        if (mode === "idle") {
          return;
        }

        var stepDelay = mode === "walk_slow" ? 370 : 185;
        var stepPx = mode === "walk_slow" ? 2.5 : 5.5;
        if (now < nextStepAt) return;
        nextStepAt = now + stepDelay;

        var maxX = getMaxX();
        posX += dir * stepPx;
        if (posX >= maxX) {
          posX = maxX;
          dir = -1;
          mode = "idle";
          frame = 0;
          modeUntil = now + randRange(900, 2400);
          drawCrab();
          return;
        } else if (posX <= 12) {
          posX = 12;
          dir = 1;
          mode = "idle";
          frame = 0;
          modeUntil = now + randRange(900, 2400);
          drawCrab();
          return;
        }

        frame = (frame + 1) % 4;
        drawCrab();
      }, 80);
    }
  }

  // =========================================================================
  // SILLY GRUVBOX CALCULATOR (result > 77 => NO ANSWERS! 🤭)
  // =========================================================================
  var refreshCalcLocale = null;

  function initCalculator() {
    var keys = document.getElementById("calcKeys");
    var displayEl = document.getElementById("calcDisplay");
    var exprEl = document.getElementById("calcExpr");
    var statusEl = document.getElementById("calcStatus");
    var screenEl = document.getElementById("calcScreen");
    if (!keys || !displayEl || !exprEl || !statusEl || !screenEl) return;

    var MAX_ALLOWED = 77;
    var OP_SYMBOLS = { "+": "+", "-": "−", "*": "×", "/": "÷" };

    var calc = {
      current: "0",
      prev: null,
      op: null,
      resetNext: false,
      statusKind: "idle", // idle | divZero | over77
      refusedIdx: 0
    };

    function formatNum(num) {
      if (!isFinite(num)) return "0";
      var rounded = Math.round(num * 1e8) / 1e8;
      if (Object.is(rounded, -0)) rounded = 0;
      return String(rounded);
    }

    function setStatus(kind) {
      calc.statusKind = kind;
      screenEl.classList.remove("is-refused");
      if (kind === "over77") {
        var list = t("calc.over77") || ["no answers"];
        statusEl.textContent = list[calc.refusedIdx % list.length];
        void screenEl.offsetWidth;
        screenEl.classList.add("is-refused");
      } else if (kind === "divZero") {
        statusEl.textContent = t("calc.divZero");
        void screenEl.offsetWidth;
        screenEl.classList.add("is-refused");
      } else {
        statusEl.textContent = t("calc.idleHint");
      }
    }

    function renderCalc(displayOverride, exprOverride) {
      displayEl.textContent = displayOverride !== undefined ? displayOverride : calc.current;
      if (exprOverride !== undefined) {
        exprEl.textContent = exprOverride || "\u00a0";
      } else if (calc.prev !== null && calc.op) {
        exprEl.textContent = formatNum(calc.prev) + " " + OP_SYMBOLS[calc.op];
      } else {
        exprEl.textContent = "\u00a0";
      }
    }

    refreshCalcLocale = function () {
      if (calc.statusKind === "idle") {
        statusEl.textContent = t("calc.idleHint");
      } else if (calc.statusKind === "divZero") {
        statusEl.textContent = t("calc.divZero");
      } else if (calc.statusKind === "over77") {
        var list = t("calc.over77") || ["no answers"];
        statusEl.textContent = list[calc.refusedIdx % list.length];
      }
    };

    function compute(a, b, op) {
      if (op === "+") return a + b;
      if (op === "-") return a - b;
      if (op === "*") return a * b;
      if (op === "/") return b === 0 ? null : a / b;
      return b;
    }

    function refuseOver77(exprText) {
      calc.refusedIdx += 1;
      calc.current = "0";
      calc.prev = null;
      calc.op = null;
      calc.resetNext = true;
      setStatus("over77");
      renderCalc("> 77 🤭", exprText);
    }

    function clearAll() {
      calc.current = "0";
      calc.prev = null;
      calc.op = null;
      calc.resetNext = false;
      setStatus("idle");
      renderCalc();
    }

    function inputDigit(d) {
      if (calc.statusKind === "over77" || calc.statusKind === "divZero") {
        setStatus("idle");
      }
      if (calc.resetNext || calc.current === "0") {
        calc.current = d;
        calc.resetNext = false;
      } else if (calc.current.length < 12) {
        calc.current += d;
      }
      renderCalc();
    }

    function inputDot() {
      if (calc.statusKind === "over77" || calc.statusKind === "divZero") {
        setStatus("idle");
      }
      if (calc.resetNext) {
        calc.current = "0.";
        calc.resetNext = false;
      } else if (calc.current.indexOf(".") === -1) {
        calc.current += ".";
      }
      renderCalc();
    }

    function inputOp(nextOp) {
      var val = parseFloat(calc.current);
      if (isNaN(val)) val = 0;

      if (calc.prev !== null && calc.op && !calc.resetNext) {
        var exprLabel = formatNum(calc.prev) + " " + OP_SYMBOLS[calc.op] + " " + formatNum(val) + " =";
        var res = compute(calc.prev, val, calc.op);
        if (res === null) {
          calc.prev = null;
          calc.op = null;
          calc.current = "0";
          calc.resetNext = true;
          setStatus("divZero");
          renderCalc("nope", exprLabel);
          return;
        }
        if (res > MAX_ALLOWED) {
          refuseOver77(exprLabel);
          return;
        }
        calc.prev = res;
        calc.current = formatNum(res);
      } else {
        calc.prev = val;
      }
      calc.op = nextOp;
      calc.resetNext = true;
      setStatus("idle");
      renderCalc();
    }

    function evaluate() {
      var val = parseFloat(calc.current);
      if (isNaN(val)) val = 0;

      if (calc.prev === null || !calc.op) {
        // Even pressing "=" on a single typed number > 77 refuses!
        if (val > MAX_ALLOWED) {
          refuseOver77(formatNum(val) + " =");
        } else {
          setStatus("idle");
          renderCalc(formatNum(val), formatNum(val) + " =");
        }
        calc.resetNext = true;
        return;
      }

      var exprLabel = formatNum(calc.prev) + " " + OP_SYMBOLS[calc.op] + " " + formatNum(val) + " =";
      var res = compute(calc.prev, val, calc.op);

      if (res === null) {
        calc.prev = null;
        calc.op = null;
        calc.current = "0";
        calc.resetNext = true;
        setStatus("divZero");
        renderCalc("nope", exprLabel);
        return;
      }

      if (res > MAX_ALLOWED) {
        refuseOver77(exprLabel);
        return;
      }

      var formatted = formatNum(res);
      calc.current = formatted;
      calc.prev = null;
      calc.op = null;
      calc.resetNext = true;
      setStatus("idle");
      renderCalc(formatted, exprLabel);
    }

    keys.addEventListener("click", function (e) {
      var btn = e.target.closest("button.calc-key");
      if (!btn) return;
      if (btn.dataset.digit !== undefined) {
        inputDigit(btn.dataset.digit);
      } else if (btn.dataset.op) {
        inputOp(btn.dataset.op);
      } else if (btn.dataset.action === "dot") {
        inputDot();
      } else if (btn.dataset.action === "clear") {
        clearAll();
      } else if (btn.dataset.action === "back") {
        if (calc.resetNext) {
          clearAll();
        } else {
          calc.current = calc.current.length > 1 ? calc.current.slice(0, -1) : "0";
          if (calc.current === "-") calc.current = "0";
          renderCalc();
        }
      } else if (btn.dataset.action === "sign") {
        if (calc.current !== "0") {
          calc.current = calc.current.indexOf("-") === 0 ? calc.current.slice(1) : "-" + calc.current;
          renderCalc();
        }
      } else if (btn.dataset.action === "eq") {
        evaluate();
      }
    });
  }

  // =========================================================================
  // CLIPBOARD COPY FOR TELEGRAM (@dimasbotyara) & DISCORD (@dimas888)
  // =========================================================================
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () {
        fallbackCopy(text);
      });
    }
    fallbackCopy(text);
    return Promise.resolve();
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  function bindCopyChip(btnId, labelId, copyValue, defaultLabel) {
    var btn = document.getElementById(btnId);
    var label = document.getElementById(labelId);
    if (!btn || !label) return;
    var timer = null;
    btn.addEventListener("click", function () {
      copyText(copyValue).then(function () {
        btn.classList.add("is-copied");
        label.textContent = t("hero.copied");
        clearTimeout(timer);
        timer = setTimeout(function () {
          btn.classList.remove("is-copied");
          label.textContent = defaultLabel;
        }, 1600);
      });
    });
  }

  function bindCopyFooterBtn(btnId, copyValue, i18nKey) {
    var btn = document.getElementById(btnId);
    if (!btn) return;
    var timer = null;
    btn.addEventListener("click", function () {
      copyText(copyValue).then(function () {
        btn.textContent = t("hero.copied");
        clearTimeout(timer);
        timer = setTimeout(function () {
          btn.textContent = t(i18nKey);
        }, 1600);
      });
    });
  }

  function initContactCopy() {
    bindCopyChip("telegramCopyBtn", "telegramHandleLabel", SITE_DATA.telegramCopyValue, SITE_DATA.telegramHandle);
    bindCopyChip("discordCopyBtn", "discordHandleLabel", SITE_DATA.discordCopyValue, SITE_DATA.discordHandle);
    bindCopyFooterBtn("footerTelegramBtn", SITE_DATA.telegramCopyValue, "footer.links.telegram");
    bindCopyFooterBtn("footerDiscordBtn", SITE_DATA.discordCopyValue, "footer.links.discord");
  }

  // =========================================================================
  // WIRE UP EVENTS & BOOT
  // =========================================================================
  function boot() {
    setTheme(state.theme, false);
    setLang(state.lang, false);
    initTideCrab();
    initCalculator();
    initContactCopy();
    initTerminal();

    // Theme button
    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        setTheme(state.theme === "dark" ? "light" : "dark", true);
      });
    }

    // Language buttons
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.dataset.lang, true);
      });
    });

    // Search input
    var searchInput = document.getElementById("shelfSearch");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.searchQuery = searchInput.value;
        renderShelf();
      });
    }

    // Random repo roller
    var randomBtn = document.getElementById("randomRepoBtn");
    if (randomBtn) {
      randomBtn.addEventListener("click", rollRandomRepo);
    }

    // Keyboard shortcuts (vim / linux nerd friendly!)
    document.addEventListener("keydown", function (e) {
      var tag = document.activeElement && document.activeElement.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }
      var k = e.key.toLowerCase();
      if (k === "t" || k === "е") {
        setTheme(state.theme === "dark" ? "light" : "dark", true);
      } else if (k === "l" || k === "д") {
        setLang(state.lang === "ru" ? "en" : "ru", true);
      } else if (e.key === "/") {
        e.preventDefault();
        if (searchInput) {
          searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
          searchInput.focus();
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
