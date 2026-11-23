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
    sound: false,
    activeCategory: "all",
    searchQuery: "",
    highlightedRepo: null,
    termHistory: [],
    termHistoryIdx: -1
  };

  // =========================================================================
  // GENTLE PROCEDURAL MICRO-SFX (Web Audio API, muted by default, soft volume)
  // =========================================================================
  var audioCtx = null;

  function ensureAudioCtx() {
    if (!audioCtx) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(function () {});
    }
    return audioCtx;
  }

  function playTone(freqStart, freqEnd, durationSec, type, gainPeak, delaySec) {
    if (!state.sound) return;
    var ctx = ensureAudioCtx();
    if (!ctx) return;
    try {
      var now = ctx.currentTime + (delaySec || 0);
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = type || "sine";
      osc.frequency.setValueAtTime(freqStart, now);
      if (freqEnd && freqEnd !== freqStart) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, freqEnd), now + durationSec);
      }
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(gainPeak || 0.038, now + Math.min(0.012, durationSec * 0.25));
      gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + durationSec + 0.015);
    } catch (e) {}
  }

  var SFX = {
    tap: function () {
      playTone(460, 340, 0.042, "triangle", 0.03);
    },
    confirm: function () {
      playTone(520, 660, 0.065, "sine", 0.036, 0);
      playTone(660, 780, 0.08, "sine", 0.032, 0.055);
    },
    theme: function () {
      playTone(392, 440, 0.09, "sine", 0.034, 0);
      playTone(523, 587, 0.11, "triangle", 0.028, 0.055);
    },
    term: function () {
      playTone(310, 360, 0.045, "triangle", 0.024);
    },
    crab: function () {
      playTone(360, 520, 0.06, "triangle", 0.036, 0);
      playTone(580, 440, 0.055, "sine", 0.028, 0.05);
    },
    guest: function (id) {
      if (id === "reed_toad") {
        // Gentle soft croak-boop
        playTone(230, 320, 0.085, "triangle", 0.038, 0);
        playTone(270, 210, 0.075, "sine", 0.03, 0.07);
      } else if (id === "cinder_slug") {
        playTone(260, 220, 0.09, "sine", 0.032, 0);
        playTone(310, 350, 0.07, "triangle", 0.026, 0.06);
      } else if (id === "echo_bat") {
        playTone(760, 620, 0.055, "sine", 0.026, 0);
        playTone(860, 700, 0.055, "sine", 0.022, 0.05);
      } else {
        // Soft airy flutter for moth / wisp
        playTone(540, 680, 0.065, "sine", 0.03, 0);
        playTone(700, 820, 0.07, "sine", 0.024, 0.055);
      }
    },
    over77: function () {
      playTone(440, 390, 0.085, "triangle", 0.036, 0);
      playTone(330, 270, 0.13, "triangle", 0.034, 0.085);
    },
    celebrate: function () {
      playTone(523.25, 523.25, 0.09, "triangle", 0.034, 0);
      playTone(659.25, 659.25, 0.09, "triangle", 0.034, 0.07);
      playTone(783.99, 880, 0.14, "sine", 0.036, 0.14);
    }
  };

  // =========================================================================
  // PIXEL CONFETTI BURST (triggered by `dimasbotyara` in terminal!)
  // =========================================================================
  function launchConfetti() {
    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    var cs = getComputedStyle(document.documentElement);
    var palette = ["--red", "--orange", "--yellow", "--green", "--aqua", "--blue", "--purple"]
      .map(function (v) { return cs.getPropertyValue(v).trim(); })
      .filter(Boolean);
    if (!palette.length) {
      palette = ["#fb4934", "#fe8019", "#fabd2f", "#b8bb26", "#8ec07c", "#83a598", "#d3869b"];
    }

    var canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;";
    document.body.appendChild(canvas);

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);

    var ctx = canvas.getContext("2d");
    if (!ctx) {
      canvas.remove();
      return;
    }
    ctx.scale(dpr, dpr);

    var count = w < 640 ? 90 : 140;
    var pieces = [];
    for (var i = 0; i < count; i++) {
      // Launch from two cozy cannon points near the bottom-left and bottom-right, plus top shower
      var fromCannon = i < count * 0.65;
      var leftSide = i % 2 === 0;
      var x = fromCannon ? (leftSide ? w * 0.18 : w * 0.82) : Math.random() * w;
      var y = fromCannon ? h * 0.82 : -12 - Math.random() * 60;
      var angle = fromCannon
        ? (leftSide ? -Math.PI * (0.28 + Math.random() * 0.25) : -Math.PI * (0.47 + Math.random() * 0.25))
        : Math.PI * 0.5 + (Math.random() - 0.5) * 0.5;
      var speed = fromCannon ? (8 + Math.random() * 10) : (2.2 + Math.random() * 3.5);
      pieces.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 5 + Math.floor(Math.random() * 6),
        ratio: Math.random() < 0.5 ? 1 : 1.7,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.24,
        color: palette[Math.floor(Math.random() * palette.length)],
        life: 0,
        maxLife: 115 + Math.floor(Math.random() * 55)
      });
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      var alive = 0;
      for (var i = 0; i < pieces.length; i++) {
        var p = pieces[i];
        p.life += 1;
        if (p.life > p.maxLife || p.y > h + 30) continue;
        alive += 1;
        p.vy += 0.22;
        p.vx *= 0.985;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;

        var alpha = p.life > p.maxLife - 28 ? Math.max(0, (p.maxLife - p.life) / 28) : 1;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -(p.size * p.ratio) / 2, p.size, p.size * p.ratio);
        ctx.restore();
      }
      if (alive > 0) {
        requestAnimationFrame(step);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(step);
  }

  function setSound(enabled, persist, playFeedback) {
    state.sound = !!enabled;
    document.querySelectorAll(".sound-opt").forEach(function (btn) {
      var isOn = btn.dataset.sound === "on";
      btn.setAttribute("aria-pressed", isOn === state.sound ? "true" : "false");
    });
    var sw = document.getElementById("soundSwitch");
    if (sw) sw.setAttribute("title", state.sound ? t("soundOnTooltip") : t("soundOffTooltip"));
    if (persist) {
      try {
        localStorage.setItem("dimas_sound", state.sound ? "on" : "off");
      } catch (e) {}
    }
    if (state.sound && playFeedback) {
      SFX.confirm();
    }
  }

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
  // THEME MANAGEMENT (Gruvbox Dark default + Light + Catppuccin + Ayu + Nord)
  // =========================================================================
  function getThemeObj(id) {
    var list = SITE_DATA.themes || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return list[0];
  }

  function findThemeByQuery(raw) {
    var q = String(raw || "").trim().toLowerCase();
    var list = SITE_DATA.themes || [];
    if (!q || q === "next") {
      var curIdx = list.findIndex(function (th) { return th.id === state.theme; });
      return list[(curIdx + 1) % list.length];
    }
    if (q === "random" || q === "rand") {
      var others = list.filter(function (th) { return th.id !== state.theme; });
      return others[Math.floor(Math.random() * others.length)] || list[0];
    }
    for (var i = 0; i < list.length; i++) {
      var th = list[i];
      if (th.id === q || th.short === q || th.aliases.indexOf(q) !== -1) {
        return th;
      }
    }
    return null;
  }

  function renderThemeOptions() {
    var list = document.getElementById("settingsThemeList");
    if (!list) return;
    var themes = SITE_DATA.themes || [];
    var items = themes.map(function (th) {
      var active = th.id === state.theme;
      var dots = th.swatches.map(function (c) {
        return '<i style="background:' + c + '"></i>';
      }).join("");
      return (
        '<button type="button" class="theme-option' + (active ? " is-active" : "") + '" role="radio" aria-checked="' + (active ? "true" : "false") + '" data-theme-id="' + th.id + '" title="' + escapeHtml(t("themeTooltip")) + '">' +
          '<span>' + escapeHtml(th.name[state.lang] || th.name.en) + "</span>" +
          '<span class="theme-swatches" aria-hidden="true">' + dots + "</span>" +
        "</button>"
      );
    }).join("");
    list.innerHTML = items;

    list.querySelectorAll(".theme-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setTheme(btn.dataset.themeId, true, true);
      });
    });
  }

  function openSettings() {
    var overlay = document.getElementById("settingsOverlay");
    var btn = document.getElementById("settingsToggle");
    if (!overlay) return;
    renderThemeOptions();
    overlay.hidden = false;
    if (btn) btn.setAttribute("aria-expanded", "true");
    document.body.classList.add("settings-open");
    var closeBtn = document.getElementById("settingsClose");
    if (closeBtn) closeBtn.focus();
  }

  function closeSettings(restoreFocus) {
    var overlay = document.getElementById("settingsOverlay");
    var btn = document.getElementById("settingsToggle");
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    if (btn) btn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("settings-open");
    if (restoreFocus && btn) btn.focus();
  }

  function setTheme(themeId, persist, withSound) {
    var themeObj = getThemeObj(themeId);
    state.theme = themeObj.id;
    document.documentElement.setAttribute("data-theme", state.theme);

    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", themeObj.themeColor);
    }

    renderThemeOptions();

    if (persist) {
      try {
        localStorage.setItem("dimas_theme", state.theme);
      } catch (e) {}
    }

    if (withSound) {
      SFX.theme();
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
    var settingsBtn = document.getElementById("settingsToggle");
    if (settingsBtn) settingsBtn.setAttribute("title", t("settings.tooltip"));
    var settingsClose = document.getElementById("settingsClose");
    if (settingsClose) settingsClose.setAttribute("aria-label", t("settings.close"));
    var soundSwitch = document.getElementById("soundSwitch");
    if (soundSwitch) soundSwitch.setAttribute("title", state.sound ? t("soundOnTooltip") : t("soundOffTooltip"));
    var langSwitch = document.getElementById("langSwitch");
    if (langSwitch) langSwitch.setAttribute("title", t("langTooltip"));
    var tgBtn = document.getElementById("telegramCopyBtn");
    if (tgBtn) tgBtn.setAttribute("title", t("hero.telegramTooltip"));
    var dcBtn = document.getElementById("discordCopyBtn");
    if (dcBtn) dcBtn.setAttribute("title", t("hero.discordTooltip"));

    renderThemeOptions();

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

      var repoLink =
        '<a class="card-link" href="' + item.url + '" target="_blank" rel="noopener noreferrer">' +
          '<span>' + escapeHtml(t("sections.openRepo")) + "</span>" +
          ICONS.ext +
        "</a>";
      var linksHtml = item.extraFirst && extra ? (extra + repoLink) : (repoLink + extra);

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
            linksHtml +
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
  var termBootTime = Date.now();
  var pendingTermTimers = [];

  function clearPendingTermTimers() {
    for (var i = 0; i < pendingTermTimers.length; i++) {
      clearTimeout(pendingTermTimers[i]);
    }
    pendingTermTimers = [];
  }

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

  function createTermEntry(host, cmd, outputHtml) {
    if (!termOut) return null;
    var div = document.createElement("div");
    div.className = "term-entry";
    div.innerHTML =
      '<div class="term-cmd-line">' +
        '<span class="t-user">dimasbotyara@' + escapeHtml(host) + "</span>" +
        '<span class="t-path">/</span>' +
        '<span class="t-prompt">❯</span>' +
        '<span class="t-cmd">' + escapeHtml(cmd) + "</span>" +
      "</div>" +
      '<div class="term-res">' + (outputHtml || "") + "</div>";
    termOut.appendChild(div);
    termOut.scrollTop = termOut.scrollHeight;
    return div.querySelector(".term-res");
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

  function formatFrogSay(msg) {
    var safe = escapeHtml(msg);
    return (
      '<pre class="term-pre t-ok">' +
      "   @..@     " + safe + "\n" +
      "  (----)\n" +
      " ( >__< )\n" +
      " ^^ ~~ ^^" +
      "</pre>"
    );
  }

  function formatCowSay(msg) {
    var clean = String(msg || "moo");
    var border = "-".repeat(Math.min(34, clean.length + 2));
    return (
      '<pre class="term-pre t-warn">' +
      " " + border + "\n" +
      "< " + escapeHtml(clean) + " >\n" +
      " " + border + "\n" +
      "        \\   ^__^\n" +
      "         \\  (oo)\\_______\n" +
      "            (__)\\       )\\/\\\n" +
      "                ||----w |\n" +
      "                ||     ||" +
      "</pre>"
    );
  }

  function resolveCommand(cmd) {
    var lower = cmd.toLowerCase();
    var isRu = state.lang === "ru";

    if (lower === "touch grass") {
      return '<span class="t-err">touch: cannot touch \'grass\': Permission denied</span>';
    }
    if (lower === "sudo touch grass") {
      return isRu
        ? '<span class="t-warn">[sudo] пароль для dimasbotyara: ********</span><br/><span class="t-err">dimasbotyara is not in the grassers file. this incident will be reported 😭</span>'
        : '<span class="t-warn">[sudo] password for dimasbotyara: ********</span><br/><span class="t-err">dimasbotyara is not in the grassers file. this incident will be reported 😭</span>';
    }
    if (lower === "fastfetch" || lower === "neofetch") {
      return buildFastfetchHtml();
    }
    if (lower === "dimasbotyara") {
      launchConfetti();
      SFX.celebrate();
      return isRu
        ? '<span class="t-warn">🎉 dimasbotyara!!</span> <span class="t-ok">конфетти пошло!! 🐸✨</span>'
        : '<span class="t-warn">🎉 dimasbotyara!!</span> <span class="t-ok">confetti deployed!! 🐸✨</span>';
    }
    if (lower === "whoami") {
      return isRu
        ? '<span class="t-aqua">dimasbotyara</span> — пилю игры на pygame, self-hosted штуки для локалки и утилиты под arch/cachyos.<br/><span class="t-dim">local-first, self-hosted и фанат gruvbox.</span>'
        : '<span class="t-aqua">dimasbotyara</span> — building pygame games, local-first LAN apps & linux tools on arch/cachyos.<br/><span class="t-dim">local-first, self-hosted & gruvbox enjoyer.</span>';
    }
    if (lower === "contacts" || lower === "contact" || lower === "tg" || lower === "telegram" || lower === "discord") {
      return (
        '<span class="t-aqua">github:</span>   <a class="t-warn" href="https://github.com/dimasbotyara" target="_blank" rel="noopener noreferrer">github.com/dimasbotyara</a><br/>' +
        '<span class="t-aqua">telegram:</span> <span class="t-warn">@dimasbotyara</span><br/>' +
        '<span class="t-aqua">discord:</span>  <span class="t-purple">@dimas888</span>'
      );
    }
    if (lower === "crab" || lower === "tide_crab" || lower === "краб") {
      if (typeof boopCrab === "function") boopCrab();
      return (
        '<div style="display:flex;align-items:center;gap:10px;margin-top:4px">' +
          '<svg viewBox="0 0 11 9" shape-rendering="crispEdges" width="44" height="36">' + buildCrabRects(0, false) + "</svg>" +
          '<div><span class="t-orange">' + escapeHtml(t("crab.name")) + '</span> <span class="t-dim">(hp: 50, coast)</span><br/>' +
          '<span class="t-dim">' + (isRu ? "клац-клац! живой прямо под терминалом ↓" : "snip-snip! scuttling right below this terminal ↓") + "</span></div>" +
        "</div>"
      );
    }
    if (lower === "frog" || lower === "frogsay") {
      return formatFrogSay(isRu ? "квак! поставь gruvbox и не трогай облака" : "ribbit! use gruvbox & ditch the cloud");
    }
    if (lower.indexOf("frogsay ") === 0) {
      return formatFrogSay(cmd.slice(8).trim() || "квак!");
    }
    if (lower === "cowsay" || lower.indexOf("cowsay ") === 0) {
      var cowMsg = cmd.slice(6).trim() || (isRu ? "муу... поставь arch linux" : "moo... install arch linux");
      return formatCowSay(cowMsg);
    }
    if (lower === "ls" || lower === "ls -la" || lower === "ls -l") {
      return (
        '<span class="t-aqua">botyaranewtab/</span>  <span class="t-aqua">botyaratalk/</span>  <span class="t-err">pygame-slide-survivors/</span>  <span class="t-orange">botyarapong/</span><br/>' +
        '<span class="t-aqua">botyaracloud/</span>   <span class="t-ok">botyarajump/</span>  <span class="t-purple">alchemy-matcher/</span>         <span class="t-warn">b-lang/</span><br/>' +
        '<span class="t-dim">README.md  ... (+43 repos — see #shelf)</span>'
      );
    }
    if (lower === "pwd") {
      return '<span class="t-aqua">/home/dimasbotyara</span>';
    }
    if (lower === "uname" || lower === "uname -a") {
      return '<span class="t-dim">Linux archlinux 5.15.209-1-lts515 #1 SMP PREEMPT x86_64 GNU/Linux</span>';
    }
    if (lower === "date") {
      return '<span class="t-aqua">' + escapeHtml(new Date().toLocaleString(isRu ? "ru-RU" : "en-US")) + "</span>";
    }
    if (lower === "uptime") {
      var sec = Math.max(1, Math.floor((Date.now() - termBootTime) / 1000));
      var mins = Math.floor(sec / 60);
      var rem = sec % 60;
      return isRu
        ? '<span class="t-ok">up ' + mins + " мин " + rem + ' сек</span> <span class="t-dim">| core 2 duo t5850: всё ещё жив, load avg: 0.42, 0.37, 0.28</span>'
        : '<span class="t-ok">up ' + mins + " min " + rem + ' sec</span> <span class="t-dim">| core 2 duo t5850: still alive, load avg: 0.42, 0.37, 0.28</span>';
    }
    if (lower === "battery" || lower === "acpi") {
      return isRu
        ? '<span class="t-warn">Battery 0:</span> <span class="t-err">0%</span> <span class="t-dim">[AC Connected, Unknown] — живёт исключительно от розетки 😭</span>'
        : '<span class="t-warn">Battery 0:</span> <span class="t-err">0%</span> <span class="t-dim">[AC Connected, Unknown] — strictly wall-powered since 2008 😭</span>';
    }
    if (lower === "htop" || lower === "top") {
      return (
        '<pre class="term-pre">' +
        '<span class="t-aqua">CPU0</span> [<span class="t-ok">||||||||</span>          41%]  <span class="t-dim">Core2 Duo T5850</span>\n' +
        '<span class="t-aqua">CPU1</span> [<span class="t-warn">|||||||||||</span>       58%]  <span class="t-dim">@ 2.17 GHz</span>\n' +
        '<span class="t-aqua">MEM </span> [<span class="t-ok">|||</span>               561M/3.83G]\n' +
        '<span class="t-dim">PID  USER          COMMAND</span>\n' +
        ' 101 dimasbotyara  <span class="t-ok">fish 4.9.3</span>\n' +
        ' 204 dimasbotyara  <span class="t-orange">tide_crab --biome=coast</span>\n' +
        ' 318 dimasbotyara  <span class="t-aqua">python3 botyaranewtab.py</span>\n' +
        ' 409 dimasbotyara  <span class="t-purple">pygame-slide-survivors</span>' +
        "</pre>"
      );
    }
    if (lower === "cat readme" || lower === "cat readme.md") {
      return isRu
        ? '<span class="t-warn">## 🐸 dimasbotyara | i use arch btw</span><br/>' +
          'пилю игры на чистом pygame, self-hosted штуки для локалки и cli-утилиты.<br/>' +
          '<span class="t-dim">код пишу с ии, но читаю каждый diff (так я оправдываю своё неумение писать код 😅)</span>'
        : '<span class="t-warn">## 🐸 dimasbotyara | i use arch btw</span><br/>' +
          'building pure pygame games, local-first LAN apps & linux cli tools.<br/>' +
          '<span class="t-dim">i write code with ai, reading every diff (that\'s how i justify not knowing how to code 😅)</span>';
    }
    if (lower === "pacman -syu" || lower === "sudo pacman -syu" || lower === "pacman") {
      return (
        '<pre class="term-pre">' +
        '<span class="t-aqua">::</span> Synchronizing package databases...\n' +
        ' core is up to date\n' +
        ' extra is up to date\n' +
        ' multilib is up to date\n' +
        '<span class="t-aqua">::</span> Starting full system upgrade...\n' +
        '<span class="t-ok"> there is nothing to do</span> <span class="t-dim">(btw i use arch)</span>' +
        "</pre>"
      );
    }
    if (lower === "matrix") {
      var chars = "01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿ#$%@*";
      var lines = [];
      for (var r = 0; r < 4; r++) {
        var row = "";
        for (var c = 0; c < 34; c++) {
          row += Math.random() < 0.35 ? " " : chars[Math.floor(Math.random() * chars.length)];
        }
        lines.push(row);
      }
      return '<pre class="term-pre t-ok">' + escapeHtml(lines.join("\n")) + '</pre><span class="t-dim">→ github.com/dimasbotyara/cli-anims</span>';
    }
    if (lower === "fortune" || lower === "quote") {
      var pool = t("crab.quotes") || ["🦀"];
      var textOnly = pool.filter(function (q) { return q.length > 6; });
      var chosen = textOnly[Math.floor(Math.random() * textOnly.length)] || pool[0];
      var clean = chosen.replace(/\[\[swatch:[^\]]+\]\]/g, "");
      return '<span class="t-purple">✦</span> <span class="t-warn">' + escapeHtml(clean) + "</span>";
    }
    if (lower === "ping" || lower.indexOf("ping ") === 0) {
      var target = cmd.slice(4).trim() || "grass";
      if (target.toLowerCase() === "grass") {
        return '<span class="t-err">ping: grass: Temporary failure in name resolution</span>';
      }
      return (
        '<span class="t-dim">PING ' + escapeHtml(target) + ' (192.168.1.46): 56 data bytes</span><br/>' +
        '<span class="t-ok">64 bytes from ' + escapeHtml(target) + ": icmp_seq=1 ttl=64 time=0.42 ms</span>"
      );
    }
    if (lower === "echo" || lower.indexOf("echo ") === 0) {
      var arg = cmd.slice(4).trim();
      if (arg === "$USER") return '<span class="t-aqua">dimasbotyara</span>';
      if (arg === "$SHELL") return '<span class="t-aqua">/usr/bin/fish</span>';
      if (arg === "$THEME") return '<span class="t-warn">' + escapeHtml(getThemeObj(state.theme).name[state.lang]) + "</span>";
      if (arg === "$LANG") return '<span class="t-aqua">' + (state.lang === "ru" ? "ru_RU.UTF-8" : "en_US.UTF-8") + "</span>";
      return escapeHtml(arg || "");
    }
    if (lower === "vim" || lower === "nvim" || lower === "vi") {
      return isRu
        ? '<span class="t-warn">ты открыл vim.</span> <span class="t-dim">подсказка: чтобы выйти, набери :q! (ладно, я сам закрою, живи)</span>'
        : '<span class="t-warn">you opened vim.</span> <span class="t-dim">hint: type :q! to escape (jk, closing it for you)</span>';
    }
    if (lower === "nano") {
      return isRu
        ? '<span class="t-ok">уважаемо.</span> <span class="t-dim">^X чтобы выйти, но здесь просто визитка :)</span>'
        : '<span class="t-ok">respectable choice.</span> <span class="t-dim">^X to exit, though this is just a webpage :)</span>';
    }
    if (lower === "exit" || lower === "logout") {
      return isRu
        ? '<span class="t-purple">нельзя просто так выйти с моей визитки 🐸</span>'
        : '<span class="t-purple">you can\'t just exit my personal page 🐸</span>';
    }
    if (lower === "themes" || lower === "theme list" || lower === "theme -l") {
      var listHtml = SITE_DATA.themes.map(function (th) {
        var sw = th.swatches.map(function (c) {
          return '<span class="crab-swatch" style="background:' + c + '"></span>';
        }).join("");
        var mark = th.id === state.theme ? '<span class="t-ok">◀</span> ' : "  ";
        return mark + '<span class="t-aqua">' + escapeHtml(th.short.padEnd(8, " ")) + "</span> " + sw + ' <span class="t-dim">' + escapeHtml(th.name[state.lang]) + "</span>";
      }).join("<br/>");
      return listHtml + '<br/><span class="t-dim">' + (isRu ? "использование: theme gruvbox | light | catppuccin | ayu | nord" : "usage: theme gruvbox | light | catppuccin | ayu | nord") + "</span>";
    }
    if (lower === "theme" || lower.indexOf("theme ") === 0) {
      var thArg = lower === "theme" ? "next" : cmd.slice(5).trim();
      var targetTheme = findThemeByQuery(thArg);
      if (!targetTheme) {
        return isRu
          ? '<span class="t-err">неизвестная палитра: ' + escapeHtml(thArg) + '</span><br/><span class="t-dim">доступны: gruvbox · light · catppuccin · ayu · nord</span>'
          : '<span class="t-err">unknown palette: ' + escapeHtml(thArg) + '</span><br/><span class="t-dim">available: gruvbox · light · catppuccin · ayu · nord</span>';
      }
      setTheme(targetTheme.id, true, true);
      return (
        '<span class="t-ok">palette → ' + escapeHtml(targetTheme.name[state.lang]) + "</span> " +
        targetTheme.swatches.map(function (c) { return '<span class="crab-swatch" style="background:' + c + '"></span>'; }).join("") +
        '<br/><span class="t-dim">' + (isRu ? "все палитры: theme list" : "all palettes: theme list") + "</span>"
      );
    }
    if (lower === "sound" || lower === "sfx" || lower.indexOf("sound ") === 0 || lower.indexOf("sfx ") === 0) {
      var sArg = lower.replace(/^(sound|sfx)\s*/, "").trim();
      var nextSound = sArg === "on" ? true : (sArg === "off" ? false : !state.sound);
      setSound(nextSound, true, true);
      return nextSound
        ? (isRu ? '<span class="t-ok">🔊 микро-звуки включены</span>' : '<span class="t-ok">🔊 micro-sounds enabled</span>')
        : (isRu ? '<span class="t-dim">🔇 звуки выключены</span>' : '<span class="t-dim">🔇 micro-sounds muted</span>');
    }
    if (lower === "wildlife" || lower === "guests") {
      var rowsHtml = SITE_DATA.wildlife.map(function (w) {
        var wName = t("wildlife." + w.id + ".name");
        var sw = '<span class="crab-swatch" style="background:' + rgbStr(w.baseColor) + '"></span>';
        return sw + ' <span class="t-aqua">' + escapeHtml(wName) + '</span> <span class="t-dim">(' + escapeHtml(w.biome) + ", " + escapeHtml(w.movement) + ")</span>";
      }).join("<br/>");
      return (
        '<span class="t-warn">' + (isRu ? "жители pygame-slide-survivors:" : "pygame-slide-survivors residents:") + "</span><br/>" +
        '<span class="crab-swatch" style="background:' + rgbStr(SITE_DATA.tideCrab.baseColor) + '"></span> <span class="t-orange">' + escapeHtml(t("crab.name")) + '</span> <span class="t-dim">(coast, permanent)</span><br/>' +
        rowsHtml +
        '<br/><span class="t-dim">' + (isRu ? "позвать гостя: guest (или guest moth / bat / wisp / toad / slug)" : "summon a guest: guest (or guest moth / bat / wisp / toad / slug)") + "</span>"
      );
    }
    if (lower === "guest" || lower === "summon" || lower.indexOf("guest ") === 0 || lower.indexOf("summon ") === 0) {
      var gArg = lower.replace(/^(guest|summon)\s*/, "").trim();
      var spawned = typeof summonGuest === "function" ? summonGuest(gArg) : null;
      if (!spawned) {
        return isRu
          ? '<span class="t-err">не нашёл такого жителя: ' + escapeHtml(gArg) + '</span><br/><span class="t-dim">доступны: moth · bat · wisp · toad · slug</span>'
          : '<span class="t-err">resident not found: ' + escapeHtml(gArg) + '</span><br/><span class="t-dim">try: moth · bat · wisp · toad · slug</span>';
      }
      return (
        '<span class="t-ok">✦ ' + escapeHtml(t("wildlife." + spawned.id + ".name")) + "</span> " +
        '<span class="t-dim">' + (isRu ? "уже в пути к крабику ↓ (тыкни, пока не улетел!)" : "is dropping by below ↓ (boop before they leave!)") + "</span>"
      );
    }
    if (lower === "lang" || lower === "ru" || lower === "en") {
      var nextLang = (lower === "ru" || lower === "en") ? lower : (state.lang === "ru" ? "en" : "ru");
      setLang(nextLang, true);
      return '<span class="t-ok">locale -> ' + nextLang + "</span>";
    }
    if (lower === "random") {
      var pick = SITE_DATA.shelf[Math.floor(Math.random() * SITE_DATA.shelf.length)];
      return '<span class="t-purple">🎲 ' + escapeHtml(pick.name) + '</span> — ' + escapeHtml(pick.desc[state.lang]);
    }
    if (lower === "arch" || lower === "cachyos") {
      return isRu
        ? '<span class="t-aqua">i use arch btw</span> <span class="t-dim">(и cachyos на основном пк!)</span>'
        : '<span class="t-aqua">i use arch btw</span> <span class="t-dim">(and cachyos on my main rig!)</span>';
    }
    if (lower.indexOf("rm -rf") === 0) {
      return isRu
        ? '<span class="t-err">эй, руки прочь от моего core 2 duo!! он и так держится на честном слове 😭</span>'
        : '<span class="t-err">hey, hands off my core 2 duo!! it barely survived 2008 as is 😭</span>';
    }
    if (lower.indexOf("sudo ") === 0) {
      return isRu
        ? '<span class="t-err">[sudo] отказано в доступе. здесь рулит только димас ботяра (и краб) 🦀</span>'
        : '<span class="t-err">[sudo] permission denied. only dimasbotyara (and the crab) has root here 🦀</span>';
    }
    if (lower === "help") {
      return isRu
        ? '<span class="t-warn">команды:</span><br/>' +
          '<span class="t-aqua">dimasbotyara</span> · <span class="t-aqua">touch grass</span> · <span class="t-aqua">sudo touch grass</span> · <span class="t-aqua">fastfetch</span> · <span class="t-aqua">htop</span> · <span class="t-aqua">battery</span> · <span class="t-aqua">uptime</span> · <span class="t-aqua">uname</span> · <span class="t-aqua">date</span> · <span class="t-aqua">pwd</span> · <span class="t-aqua">ls</span> · <span class="t-aqua">cat readme</span> · <span class="t-aqua">whoami</span> · <span class="t-aqua">contacts</span> · <span class="t-aqua">crab</span> · <span class="t-aqua">wildlife</span> · <span class="t-aqua">guest</span> · <span class="t-aqua">frog</span> · <span class="t-aqua">cowsay</span> · <span class="t-aqua">pacman -Syu</span> · <span class="t-aqua">matrix</span> · <span class="t-aqua">fortune</span> · <span class="t-aqua">ping</span> · <span class="t-aqua">echo</span> · <span class="t-aqua">random</span> · <span class="t-aqua">theme</span> · <span class="t-aqua">theme list</span> · <span class="t-aqua">sound</span> · <span class="t-aqua">lang</span> · <span class="t-aqua">clear</span>'
        : '<span class="t-warn">commands:</span><br/>' +
          '<span class="t-aqua">dimasbotyara</span> · <span class="t-aqua">touch grass</span> · <span class="t-aqua">sudo touch grass</span> · <span class="t-aqua">fastfetch</span> · <span class="t-aqua">htop</span> · <span class="t-aqua">battery</span> · <span class="t-aqua">uptime</span> · <span class="t-aqua">uname</span> · <span class="t-aqua">date</span> · <span class="t-aqua">pwd</span> · <span class="t-aqua">ls</span> · <span class="t-aqua">cat readme</span> · <span class="t-aqua">whoami</span> · <span class="t-aqua">contacts</span> · <span class="t-aqua">crab</span> · <span class="t-aqua">wildlife</span> · <span class="t-aqua">guest</span> · <span class="t-aqua">frog</span> · <span class="t-aqua">cowsay</span> · <span class="t-aqua">pacman -Syu</span> · <span class="t-aqua">matrix</span> · <span class="t-aqua">fortune</span> · <span class="t-aqua">ping</span> · <span class="t-aqua">echo</span> · <span class="t-aqua">random</span> · <span class="t-aqua">theme</span> · <span class="t-aqua">theme list</span> · <span class="t-aqua">sound</span> · <span class="t-aqua">lang</span> · <span class="t-aqua">clear</span>';
    }
    return isRu
      ? '<span class="t-err">fish: неизвестная команда: ' + escapeHtml(cmd) + '</span><br/><span class="t-dim">напиши help чтобы глянуть, что я умею</span>'
      : '<span class="t-err">fish: unknown command: ' + escapeHtml(cmd) + '</span><br/><span class="t-dim">type help to see what works here</span>';
  }

  function runCommand(rawCmd, hostOverride, immediate) {
    var cmd = String(rawCmd || "").trim();
    if (!cmd) return;
    var lower = cmd.toLowerCase();
    var host = hostOverride || "archlinux";

    if (lower === "clear" || lower === "cls") {
      clearPendingTermTimers();
      if (termOut) termOut.innerHTML = "";
      return;
    }

    if (immediate) {
      createTermEntry(host, cmd, resolveCommand(cmd));
      return;
    }

    // Subtle 0.25s–0.50s vintage laptop execution delay
    var resNode = createTermEntry(host, cmd, '<span class="term-pending">█</span>');
    var delay = 250 + Math.random() * 250;
    var timerId = setTimeout(function () {
      if (resNode && resNode.isConnected) {
        resNode.innerHTML = resolveCommand(cmd);
        SFX.term();
        if (termOut) termOut.scrollTop = termOut.scrollHeight;
      }
    }, delay);
    pendingTermTimers.push(timerId);
  }

  function initTerminal() {
    termOut = document.getElementById("termOutput");
    var form = document.getElementById("termForm");
    var input = document.getElementById("termInput");
    var clearBtn = document.getElementById("termClear");

    // Seed immediately on load: cachyos touch grass + archlinux fastfetch
    runCommand("touch grass", "cachyos", true);
    runCommand("fastfetch", "archlinux", true);

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
        clearPendingTermTimers();
        if (termOut) termOut.innerHTML = "";
        if (input) input.focus();
      });
    }
  }

  // =========================================================================
  // TIDE CRAB + VISITING WILDLIFE — 1:1 sprites & 4-frame gaits from wildlife.py
  // =========================================================================
  function rgbStr(arr) {
    return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
  }

  function buildResidentRects(spec, frame, flashing) {
    var rows = spec.pixels;
    var height = rows.length;
    var width = rows[0].length;
    var palette = [
      flashing ? "#ffffff" : rgbStr(spec.baseColor),
      rgbStr(spec.highlightColor),
      rgbStr(spec.eyeColor),
      rgbStr(spec.darkColor)
    ];
    var phase = [0, 1, 0, -1][frame % 4];
    var isFlyer = spec.movement === "flyer";
    var rects = "";

    for (var y = 0; y < height; y++) {
      var row = rows[y];
      for (var x = 0; x < row.length; x++) {
        var cell = row[x];
        if (cell === ".") continue;
        var dy = 0;
        if (isFlyer) {
          if (x < 3 || x >= width - 3) {
            dy = phase;
          }
        } else if (y >= height - 2 && (x < 3 || x >= width - 3)) {
          dy = x < Math.floor(width / 2) ? phase : -phase;
        }
        var color = palette[Number(cell) - 1];
        rects += '<rect x="' + (x + 1) + '" y="' + (y + 1 + dy) + '" width="1" height="1" fill="' + color + '"/>';
      }
    }
    return rects;
  }

  function buildCrabRects(frame, flashing) {
    return buildResidentRects(SITE_DATA.tideCrab, frame, flashing);
  }

  var boopCrab = null;
  var summonGuest = null;
  var refreshCrabLocale = null;

  function initTideCrab() {
    var stage = document.getElementById("crabStage");
    var actor = document.getElementById("crabActor");
    var svg = document.getElementById("crabSvg");
    var guestActor = document.getElementById("guestActor");
    var guestSvg = document.getElementById("guestSvg");
    var guestBadge = document.getElementById("guestBadge");
    var hintTag = document.getElementById("crabHintTag");
    var bubbleBar = document.getElementById("crabBubbleBar");
    var speakerEl = document.getElementById("crabSpeaker");
    var speech = document.getElementById("crabSpeech");
    if (!stage || !actor || !svg) return;

    var GUEST_IDLE_LEAVE_MS = 20000;
    var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function randRange(min, max) {
      return min + Math.random() * (max - min);
    }

    function createDeckPuller() {
      var deck = [];
      var last = -1;
      return function (total) {
        if (deck.length === 0) {
          for (var i = 0; i < total; i++) deck.push(i);
          for (var j = deck.length - 1; j > 0; j--) {
            var k = Math.floor(Math.random() * (j + 1));
            var tmp = deck[j];
            deck[j] = deck[k];
            deck[k] = tmp;
          }
          if (deck.length > 1 && deck[deck.length - 1] === last) {
            var swap = deck[0];
            deck[0] = deck[deck.length - 1];
            deck[deck.length - 1] = swap;
          }
        }
        last = deck.pop();
        return last;
      };
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

    function isSingleEmoji(str) {
      var trimmed = String(str || "").trim();
      return trimmed.length > 0 && trimmed.length <= 4 && !/[a-zA-Zа-яА-ЯёЁ0-9]/.test(trimmed);
    }

    // Shared speech state (either "crab" or a wildlife guest id)
    var activeSpeaker = null; // null | { kind: "crab" | "guest", id: string, quoteIdx: number, color: string }

    function renderBubble() {
      if (!bubbleBar || !speech) return;
      if (!activeSpeaker) {
        bubbleBar.hidden = true;
        return;
      }
      var nameText = activeSpeaker.kind === "crab"
        ? t("crab.name")
        : t("wildlife." + activeSpeaker.id + ".name");
      var quotes = activeSpeaker.kind === "crab"
        ? (t("crab.quotes") || ["🦀"])
        : (t("wildlife." + activeSpeaker.id + ".quotes") || ["✨"]);
      var line = quotes[activeSpeaker.quoteIdx] || quotes[0];

      if (speakerEl) {
        speakerEl.textContent = nameText + ":";
        speakerEl.style.color = activeSpeaker.color;
      }
      speech.innerHTML = formatCrabLine(line);
      speech.classList.toggle("is-emoji", isSingleEmoji(line));
      bubbleBar.hidden = false;
    }

    function hideSpeechFor(kind) {
      if (activeSpeaker && activeSpeaker.kind === kind) {
        activeSpeaker = null;
        renderBubble();
      }
    }

    // ---- TIDE CRAB STATE ----
    var crabFrame = 0;
    var crabX = 24;
    var crabDir = 1;
    var crabFlashing = false;
    var crabMode = "idle"; // idle | walk_slow | walk_normal | talking
    var crabNextStepAt = 0;
    var crabModeUntil = 0;
    var pullCrabQuote = createDeckPuller();

    function getMaxCrabX() {
      return Math.max(20, stage.clientWidth - 72);
    }

    function drawCrab() {
      svg.innerHTML = buildCrabRects(crabFrame, crabFlashing);
      actor.style.transform = "translateX(" + Math.round(crabX) + "px)";
    }

    function pickNextCrabMode(now) {
      var r = Math.random();
      if (r < 0.36) {
        crabMode = "idle";
        crabFrame = 0;
        crabModeUntil = now + randRange(1600, 4200);
      } else if (r < 0.72) {
        crabMode = "walk_slow";
        if (Math.random() < 0.4) crabDir = -crabDir;
        crabModeUntil = now + randRange(2400, 5200);
      } else {
        crabMode = "walk_normal";
        if (Math.random() < 0.4) crabDir = -crabDir;
        crabModeUntil = now + randRange(1500, 3800);
      }
      drawCrab();
    }

    drawCrab();
    pickNextCrabMode(Date.now());

    boopCrab = function () {
      var quotes = t("crab.quotes") || ["🦀"];
      var idx = pullCrabQuote(quotes.length);
      var line = quotes[idx];
      var readDuration = isSingleEmoji(line) ? 6500 : 10000;

      crabMode = "talking";
      crabFrame = 0;
      crabFlashing = true;
      crabModeUntil = Date.now() + readDuration;
      drawCrab();

      activeSpeaker = {
        kind: "crab",
        id: "tide_crab",
        quoteIdx: idx,
        color: rgbStr(SITE_DATA.tideCrab.baseColor)
      };
      renderBubble();
      SFX.crab();

      actor.classList.remove("is-hop");
      void actor.offsetWidth;
      actor.classList.add("is-hop");

      setTimeout(function () {
        crabFlashing = false;
        drawCrab();
      }, 150);
    };

    actor.addEventListener("click", function (e) {
      e.stopPropagation();
      boopCrab();
    });

    // ---- VISITING WILDLIFE GUESTS STATE ----
    var wildlifeList = SITE_DATA.wildlife || [];
    var pullGuestSpec = createDeckPuller();
    var guestQuotePullers = {};
    wildlifeList.forEach(function (w) {
      guestQuotePullers[w.id] = createDeckPuller();
    });

    var guest = {
      spec: null,
      state: "absent", // absent | entering | roaming | talking | leaving
      x: -60,
      y: 12,
      baseY: 16,
      dir: 1,
      vx: 2.6,
      frame: 0,
      flashing: false,
      phaseTick: 0,
      hopPhase: 0,
      nextAnimAt: 0,
      talkUntil: 0,
      lastClickedAt: 0,
      nextSpawnAt: Date.now() + randRange(9000, 14000)
    };

    function updateGuestHeaderUI() {
      if (!guestBadge || !hintTag) return;
      if (guest.spec && guest.state !== "absent" && guest.state !== "leaving") {
        var gName = t("wildlife." + guest.spec.id + ".name");
        guestBadge.innerHTML =
          '<span class="guest-pill-dot" style="background:' + rgbStr(guest.spec.baseColor) + '"></span>' +
          '<span>' + escapeHtml(t("wildlife.visitingLabel") + " " + gName) + "</span>";
        guestBadge.hidden = false;
        hintTag.hidden = true;
      } else {
        guestBadge.hidden = true;
        hintTag.hidden = false;
      }
    }

    function drawGuest() {
      if (!guestActor || !guestSvg || !guest.spec) return;
      var w = guest.spec.pixels[0].length + 2;
      var h = guest.spec.pixels.length + 2;
      guestSvg.setAttribute("viewBox", "0 0 " + w + " " + h);
      guestSvg.setAttribute("width", String(w * 4));
      guestSvg.setAttribute("height", String(h * 4));
      guestSvg.innerHTML = buildResidentRects(guest.spec, guest.frame, guest.flashing);
      guestActor.style.transform = "translate3d(" + Math.round(guest.x) + "px, " + Math.round(guest.y) + "px, 0)";
    }

    function spawnGuest(specOverride) {
      if (!guestActor || !wildlifeList.length) return null;
      var spec = specOverride || wildlifeList[pullGuestSpec(wildlifeList.length)];
      var stageW = Math.max(220, stage.clientWidth);
      // Enter from the opposite side of Tide Crab so they greet each other cleanly
      var fromLeft = crabX > stageW * 0.45;

      guest.spec = spec;
      guest.state = "entering";
      guest.dir = fromLeft ? 1 : -1;
      guest.x = fromLeft ? -52 : stageW + 12;
      guest.frame = 0;
      guest.flashing = false;
      guest.phaseTick = Math.random() * Math.PI * 2;
      guest.hopPhase = 0;

      if (spec.movement === "flyer") {
        guest.baseY = randRange(8, 22);
        guest.y = guest.baseY;
        guest.vx = spec.id === "clover_moth" ? 3.2 : (spec.id === "echo_bat" ? 3.6 : 2.3);
        guestActor.classList.add("is-flyer");
      } else if (spec.movement === "hopper") {
        guest.baseY = 44;
        guest.y = guest.baseY;
        guest.vx = 2.6;
        guestActor.classList.remove("is-flyer");
      } else {
        guest.baseY = 48;
        guest.y = guest.baseY;
        guest.vx = 1.4;
        guestActor.classList.remove("is-flyer");
      }

      guest.lastClickedAt = Date.now();
      guestActor.hidden = false;
      guestActor.setAttribute("aria-label", t("wildlife." + spec.id + ".name"));
      drawGuest();
      updateGuestHeaderUI();
      return spec;
    }

    function boopGuest() {
      if (!guest.spec || guest.state === "absent") return;
      var spec = guest.spec;
      var quotes = t("wildlife." + spec.id + ".quotes") || ["✨"];
      var pull = guestQuotePullers[spec.id];
      var idx = pull ? pull(quotes.length) : 0;
      var line = quotes[idx];
      var readDuration = isSingleEmoji(line) ? 6500 : 10000;
      var now = Date.now();

      // Stop right in place while chatting & reset 20s idle timer!
      guest.state = "talking";
      guest.frame = 0;
      guest.flashing = true;
      guest.talkUntil = now + readDuration;
      guest.lastClickedAt = now;
      if (spec.movement === "hopper") {
        guest.y = guest.baseY;
      }
      drawGuest();

      activeSpeaker = {
        kind: "guest",
        id: spec.id,
        quoteIdx: idx,
        color: rgbStr(spec.baseColor)
      };
      renderBubble();
      updateGuestHeaderUI();
      SFX.guest(spec.id);

      guestActor.classList.remove("is-boop");
      void guestActor.offsetWidth;
      guestActor.classList.add("is-boop");

      setTimeout(function () {
        guest.flashing = false;
        drawGuest();
      }, 150);
    }

    summonGuest = function (query) {
      var q = String(query || "").trim().toLowerCase();
      var chosen = null;
      if (q) {
        chosen = wildlifeList.find(function (w) {
          return (
            w.id === q ||
            w.id.indexOf(q) !== -1 ||
            w.biome === q ||
            t("wildlife." + w.id + ".name").toLowerCase().indexOf(q) !== -1
          );
        });
        if (!chosen) return null;
      }
      hideSpeechFor("guest");
      return spawnGuest(chosen);
    };

    if (guestActor) {
      guestActor.addEventListener("click", function (e) {
        e.stopPropagation();
        boopGuest();
      });
    }

    if (guestBadge) {
      guestBadge.addEventListener("click", function () {
        boopGuest();
      });
    }

    refreshCrabLocale = function () {
      renderBubble();
      updateGuestHeaderUI();
      if (guest.spec && guestActor) {
        guestActor.setAttribute("aria-label", t("wildlife." + guest.spec.id + ".name"));
      }
    };

    window.addEventListener("resize", function () {
      var maxX = getMaxCrabX();
      if (crabX > maxX) {
        crabX = maxX;
        drawCrab();
      }
      if (guest.spec && guest.state === "roaming") {
        var maxGX = Math.max(20, stage.clientWidth - 60);
        if (guest.x > maxGX) {
          guest.x = maxGX;
          drawGuest();
        }
      }
    });

    if (reducedMotion) {
      // Still show one friendly visitor statically on reduced-motion devices
      var staticSpec = spawnGuest(wildlifeList[0]);
      if (staticSpec) {
        guest.state = "roaming";
        guest.x = Math.max(90, Math.round(stage.clientWidth * 0.62));
        drawGuest();
        updateGuestHeaderUI();
      }
      return;
    }

    setInterval(function () {
      var now = Date.now();
      var stageW = Math.max(220, stage.clientWidth);

      // --- 1. Update Tide Crab ---
      if (crabMode === "talking") {
        if (now >= crabModeUntil) {
          hideSpeechFor("crab");
          pickNextCrabMode(now);
        }
      } else if (now >= crabModeUntil) {
        pickNextCrabMode(now);
      } else if (crabMode !== "idle") {
        var stepDelay = crabMode === "walk_slow" ? 370 : 185;
        var stepPx = crabMode === "walk_slow" ? 2.5 : 5.5;
        if (now >= crabNextStepAt) {
          crabNextStepAt = now + stepDelay;
          var maxX = getMaxCrabX();
          crabX += crabDir * stepPx;
          if (crabX >= maxX) {
            crabX = maxX;
            crabDir = -1;
            crabMode = "idle";
            crabFrame = 0;
            crabModeUntil = now + randRange(900, 2400);
          } else if (crabX <= 12) {
            crabX = 12;
            crabDir = 1;
            crabMode = "idle";
            crabFrame = 0;
            crabModeUntil = now + randRange(900, 2400);
          } else {
            crabFrame = (crabFrame + 1) % 4;
          }
          drawCrab();
        }
      }

      // --- 2. Update Visiting Wildlife Guest ---
      if (guest.state === "absent") {
        if (now >= guest.nextSpawnAt) {
          spawnGuest();
        }
        return;
      }

      if (guest.state === "talking") {
        // Stay completely motionless while talking
        if (now >= guest.talkUntil) {
          hideSpeechFor("guest");
          guest.state = "roaming";
        }
        return;
      }

      var spec = guest.spec;
      if (!spec) return;

      var minGX = 16;
      var maxGX = Math.max(40, stageW - 64);

      // Leave if nobody clicked this guest for 20 seconds!
      if (guest.state === "roaming" && now - guest.lastClickedAt >= GUEST_IDLE_LEAVE_MS) {
        guest.state = "leaving";
        guest.dir = guest.x > stageW / 2 ? 1 : -1;
        hideSpeechFor("guest");
        updateGuestHeaderUI();
      }

      // Advance sprite gait/wing animation
      var animDelay = spec.movement === "flyer" ? 130 : (spec.movement === "hopper" ? 190 : 280);
      if (now >= guest.nextAnimAt) {
        guest.nextAnimAt = now + animDelay;
        guest.frame = (guest.frame + 1) % 4;
      }

      if (guest.state === "entering") {
        var enterSpeed = Math.max(2.6, guest.vx * 1.15);
        guest.x += guest.dir * enterSpeed;
        if (spec.movement === "flyer") {
          guest.phaseTick += 0.16;
          guest.y = guest.baseY + Math.sin(guest.phaseTick) * 6;
        } else if (spec.movement === "hopper") {
          guest.hopPhase = (guest.hopPhase + 0.24) % Math.PI;
          guest.y = guest.baseY - Math.sin(guest.hopPhase) * 14;
        }
        if ((guest.dir === 1 && guest.x >= minGX + 24) || (guest.dir === -1 && guest.x <= maxGX - 24)) {
          guest.state = "roaming";
          guest.lastClickedAt = now; // Start 20s idle countdown once arrived
        }
        drawGuest();
        return;
      }

      if (guest.state === "roaming") {
        guest.x += guest.dir * guest.vx;
        if (guest.x >= maxGX) {
          guest.x = maxGX;
          guest.dir = -1;
        } else if (guest.x <= minGX) {
          guest.x = minGX;
          guest.dir = 1;
        }

        if (spec.movement === "flyer") {
          guest.phaseTick += 0.14;
          guest.y = guest.baseY + Math.sin(guest.phaseTick) * 8;
        } else if (spec.movement === "hopper") {
          guest.hopPhase += 0.2;
          var arc = Math.sin(guest.hopPhase);
          guest.y = arc > 0 ? guest.baseY - arc * 15 : guest.baseY;
        } else {
          guest.y = guest.baseY;
        }
        drawGuest();
        return;
      }

      if (guest.state === "leaving") {
        var leaveSpeed = Math.max(3.4, guest.vx * 1.45);
        guest.x += guest.dir * leaveSpeed;
        if (spec.movement === "flyer") {
          guest.phaseTick += 0.2;
          guest.y = Math.max(-28, guest.y - 0.8 + Math.sin(guest.phaseTick) * 3);
        } else if (spec.movement === "hopper") {
          guest.hopPhase = (guest.hopPhase + 0.28) % Math.PI;
          guest.y = guest.baseY - Math.sin(guest.hopPhase) * 14;
        }
        drawGuest();

        if (guest.x < -72 || guest.x > stageW + 32) {
          guest.state = "absent";
          guest.spec = null;
          guest.nextSpawnAt = now + randRange(24000, 44000);
          guestActor.hidden = true;
          updateGuestHeaderUI();
        }
      }
    }, 65);
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
      SFX.over77();
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
        SFX.tap();
        inputDigit(btn.dataset.digit);
      } else if (btn.dataset.op) {
        SFX.tap();
        inputOp(btn.dataset.op);
      } else if (btn.dataset.action === "dot") {
        SFX.tap();
        inputDot();
      } else if (btn.dataset.action === "clear") {
        SFX.tap();
        clearAll();
      } else if (btn.dataset.action === "back") {
        SFX.tap();
        if (calc.resetNext) {
          clearAll();
        } else {
          calc.current = calc.current.length > 1 ? calc.current.slice(0, -1) : "0";
          if (calc.current === "-") calc.current = "0";
          renderCalc();
        }
      } else if (btn.dataset.action === "sign") {
        SFX.tap();
        if (calc.current !== "0") {
          calc.current = calc.current.indexOf("-") === 0 ? calc.current.slice(1) : "-" + calc.current;
          renderCalc();
        }
      } else if (btn.dataset.action === "eq") {
        evaluate();
        if (calc.statusKind === "idle") {
          SFX.confirm();
        }
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
        SFX.confirm();
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
    var savedSound = false;
    try {
      savedSound = localStorage.getItem("dimas_sound") === "on";
    } catch (e) {}

    setTheme(state.theme, false, false);
    setLang(state.lang, false);
    setSound(savedSound, false, false);
    initTideCrab();
    initCalculator();
    initContactCopy();
    initTerminal();

    // Brand logo click -> always scroll cleanly to the very top (y = 0)
    var brandLink = document.querySelector(".brand");
    if (brandLink) {
      brandLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Unified settings overlay (palette + micro-sounds + language)
    var settingsToggle = document.getElementById("settingsToggle");
    var settingsOverlay = document.getElementById("settingsOverlay");
    var settingsCloseBtn = document.getElementById("settingsClose");
    if (settingsToggle && settingsOverlay) {
      settingsToggle.addEventListener("click", function () {
        if (settingsOverlay.hidden) {
          openSettings();
        } else {
          closeSettings(true);
        }
      });

      settingsOverlay.addEventListener("click", function (e) {
        if (e.target === settingsOverlay) {
          closeSettings(true);
        }
      });
    }
    if (settingsCloseBtn) {
      settingsCloseBtn.addEventListener("click", function () {
        closeSettings(true);
      });
    }

    // Sound segmented switch (inside settings)
    document.querySelectorAll(".sound-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var wantOn = btn.dataset.sound === "on";
        if (wantOn !== state.sound) {
          setSound(wantOn, true, true);
        }
      });
    });

    // Language buttons
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        SFX.tap();
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
      randomBtn.addEventListener("click", function () {
        SFX.tap();
        rollRandomRepo();
      });
    }

    // Keyboard shortcuts (vim / linux nerd friendly!)
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeSettings(true);
        return;
      }
      var tag = document.activeElement && document.activeElement.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }
      var k = e.key.toLowerCase();
      if (k === "t" || k === "е") {
        var nextTh = findThemeByQuery("next");
        if (nextTh) setTheme(nextTh.id, true, true);
      } else if (k === "l" || k === "д") {
        SFX.tap();
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
