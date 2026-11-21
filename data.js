// all data & bilingual copy for dimasbotyara.github.io
// gruvbox & vibes

const SITE_DATA = {
  githubUser: "dimasbotyara",
  githubUrl: "https://github.com/dimasbotyara",
  readmeUrl: "https://github.com/dimasbotyara/dimasbotyara",
  reposUrl: "https://github.com/dimasbotyara?tab=repositories",
  telegramHandle: "@dimasbotyara",
  telegramCopyValue: "@dimasbotyara",
  discordHandle: "@dimas888",
  discordCopyValue: "dimas888",
  totalRepos: 49,

  // Color palettes (Gruvbox Dark default + Gruvbox Light + Catppuccin Mocha + Ayu Mirage + Nord)
  themes: [
    {
      id: "dark",
      short: "gruvbox",
      name: { ru: "gruvbox dark", en: "gruvbox dark" },
      themeColor: "#282828",
      aliases: ["gruvbox", "gruvbox-dark", "dark", "gd"],
      swatches: ["#282828", "#fabd2f", "#b8bb26", "#fb4934"]
    },
    {
      id: "light",
      short: "light",
      name: { ru: "gruvbox light", en: "gruvbox light" },
      themeColor: "#fbf1c7",
      aliases: ["gruvbox-light", "light", "gl"],
      swatches: ["#fbf1c7", "#af3a03", "#79740e", "#076678"]
    },
    {
      id: "catppuccin",
      short: "mocha",
      name: { ru: "catppuccin mocha", en: "catppuccin mocha" },
      themeColor: "#1e1e2e",
      aliases: ["catppuccin", "catppuccin-mocha", "mocha", "cat"],
      swatches: ["#1e1e2e", "#cba6f7", "#a6e3a1", "#f38ba8"]
    },
    {
      id: "ayu",
      short: "ayu",
      name: { ru: "ayu mirage", en: "ayu mirage" },
      themeColor: "#1f2430",
      aliases: ["ayu", "ayu-mirage", "mirage"],
      swatches: ["#1f2430", "#ffcc66", "#73d0ff", "#ffad66"]
    },
    {
      id: "nord",
      short: "nord",
      name: { ru: "nord", en: "nord" },
      themeColor: "#2e3440",
      aliases: ["nord", "arctic"],
      swatches: ["#2e3440", "#88c0d0", "#a3be8c", "#ebcb8b"]
    }
  ],

  // Exact pixel data & palette from dimasbotyara/pygame-slide-survivors (wildlife.py -> tide_crab)
  tideCrab: {
    id: "tide_crab",
    biome: "coast",
    movement: "crawler",
    baseColor: [223, 152, 116],       // 1: body (#df9874)
    highlightColor: [255, 192, 156],  // 2: body + 40 clamped (#ffc09c)
    eyeColor: [255, 237, 121],        // 3: eye (#ffed79)
    darkColor: [44, 35, 55],          // 4: dark marking (#2c2337)
    pixels: [
      "1.2...2.1",
      "222...222",
      ".1.3.3.1.",
      "..11111..",
      ".1222221.",
      "114111411",
      "11.....11"
    ]
  },

  // Visiting residents — exact pixel sprites, colors & animation modes from pygame-slide-survivors/wildlife.py
  wildlife: [
    {
      id: "clover_moth",
      biome: "meadow",
      movement: "flyer",
      baseColor: [141, 207, 106],
      highlightColor: [181, 247, 146],
      eyeColor: [255, 237, 121],
      darkColor: [44, 35, 55],
      pixels: [
        "22.....22",
        "212...212",
        "211141112",
        ".2114112.",
        "..33333..",
        ".1141411.",
        "211.4.112"
      ]
    },
    {
      id: "echo_bat",
      biome: "cavern",
      movement: "flyer",
      baseColor: [181, 142, 220],
      highlightColor: [221, 182, 255],
      eyeColor: [255, 237, 121],
      darkColor: [44, 35, 55],
      pixels: [
        "2.......2",
        "21.1.1.12",
        "211111112",
        ".2134312.",
        "..11111..",
        "..2.1.2..",
        "....2...."
      ]
    },
    {
      id: "rune_wisp",
      biome: "ruins",
      movement: "flyer",
      baseColor: [171, 191, 116],
      highlightColor: [211, 231, 156],
      eyeColor: [255, 237, 121],
      darkColor: [44, 35, 55],
      pixels: [
        "....2....",
        "...212...",
        "..21112..",
        ".2134312.",
        "..21412..",
        "...212...",
        "..2.1.2..",
        ".2...2..."
      ]
    },
    {
      id: "reed_toad",
      biome: "marsh",
      movement: "hopper",
      baseColor: [113, 173, 98],
      highlightColor: [153, 213, 138],
      eyeColor: [255, 237, 121],
      darkColor: [44, 35, 55],
      pixels: [
        "..33.33..",
        ".2141412.",
        ".2111112.",
        "111444111",
        ".2222222.",
        "..11111..",
        "222...222"
      ]
    },
    {
      id: "cinder_slug",
      biome: "basalt",
      movement: "crawler",
      baseColor: [221, 107, 76],
      highlightColor: [255, 147, 116],
      eyeColor: [255, 237, 121],
      darkColor: [44, 35, 55],
      pixels: [
        "2.2......",
        "1.1..22..",
        "333.2112.",
        "111211412",
        "111141411",
        ".22111111",
        "..2222222"
      ]
    }
  ],

  i18n: {
    ru: {
      pageTitle: "dimasbotyara — просто визитка",
      metaDesc: "привет, я димас ботяра. делаю игры на pygame, self-hosted штуки для локалки и утилиты под линукс. gruvbox внутри.",
      nav: {
        favs: "любимое",
        play: "поиграть",
        shelf: "полка",
        about: "обо мне",
        stack: "стек"
      },
      themeTooltip: "выбрать палитру (клавиша T — следующая)",
      themeMenuTitle: "палитры",
      soundOnTooltip: "звуки включены — нажми, чтобы выключить",
      soundOffTooltip: "звуки выключены — нажми, чтобы включить",
      langTooltip: "сменить язык (клавиша L)",
      hero: {
        badge: "i use arch btw",
        greeting: "привет, я димас ботяра.",
        subtitle: "пилю игры на чистом pygame, self-hosted штуки без облаков и аккаунтов, консольные утилиты под линукс и всякие странные эксперименты — просто потому что по кайфу.",
        ctaGithub: "мой github",
        ctaFavs: "любимые проекты",
        ctaPlay: "поиграть и потыкать",
        contactsLabel: "связаться:",
        copied: "скопировано! ✓",
        telegramTooltip: "нажми, чтобы скопировать юзернейм telegram",
        discordTooltip: "нажми, чтобы скопировать ник в discord",
        vibes: [
          "local-first",
          "без облака и логинов",
          "чистый python / pygame",
          "любитель gruvbox",
          "cachyos + arch на старом ноуте"
        ]
      },
      crab: {
        name: "приливной краб",
        from: "из slide survivors",
        hint: "тыкни крабика",
        quotes: [
          "димас ботяра считает меня очаровашкой, но вообще-то я могу и цапнуть на 10 урона...",
          "я приливной краб из pygame-slide-survivors, между прочим!",
          "димас ботяра любит catppuccin mocha, gruvbox, ayu... да в целом, много чего 😅",
          "мой любимый цвет — rgb(223, 152, 116) [[swatch:rgb(223, 152, 116)]]",
          "мой самый нелюбимый цвет — #ff00ff [[swatch:#ff00ff]] (буквально сломанная текстура 😭)",
          "клац-клац 🦀",
          "🦀",
          "у меня 50 hp и радиус удара 46 пикселей. имей в виду.",
          "не трогай траву, трогай тёплый песок",
          "🐚",
          "меня нарисовали в 9×7 пикселей в wildlife.py — и мне норм!",
          "i use arch btw 🦀",
          "👀",
          "я бы убежал на берег, но тут в gruvbox слишком уютно",
          "тыкнешь ещё раз — сделаю замах за 0.32 сек...",
          "🌊",
          "мои глаза — rgb(255, 237, 121) [[swatch:rgb(255, 237, 121)]], светятся даже в темноте!",
          "сижу тут, чиллю, никого не трогаю (пока)",
          "🥺",
          "бульк... ой, это прилив",
          "✨",
          "передаю привет старому hp pavilion на core 2 duo!",
          "хожу боком, потому что могу",
          "слышал про b-lang? пчёлам язык программирования сделали, а крабам — нет 😤",
          "пытался скрафтить краба в alchemy-matcher... 582 элемента, а меня там нет 🥺",
          "28 паверапов в botyarapong — это перебор? димас так не считает",
          "проиграл все фейк-рубли в botyaracasino. благо не настоящие",
          "🫧",
          "заходи в локалку в botyaratalk, пообщаемся голосом через rnnoise",
          "если услышишь «клац-клац» в дискорде — это я через botyaraPAD",
          "botyaraREC сначала пишет RAW, чтобы слабый ноут не задымился",
          "я даже на школьных компах с alt linux бывал через флешку!",
          "в cli-anims есть аквариум в терминале — там мои дальние родственники",
          "touch grass? permission denied. а вот touch sand — всегда пожалуйста",
          "батарея 0% [AC Connected] — это не баг, это стиль жизни",
          "🏖️",
          "в botyaraRTS 10 тысяч строк чистого pygame... а меня туда не позвали",
          "алтай. пчёлы. мёд. а как же море и крабы?!",
          "обыграл бы stockfish в botyarachess, но клешнями неудобно двигать пешки",
          "fish 4.9.3 — отличный шелл, одобрено морскими жителями 🐟",
          "читаю каждый diff... ну, насколько позволяют два жёлтых пикселя вместо глаз",
          "попробуй нажать T или сменить палитру сверху — вдруг тут даже catppuccin mocha есть!",
          "⚡",
          "я местный житель биома coast. без прописки, зато на чистом pygame!"
        ]
      },
      wildlife: {
        visitingLabel: "в гостях:",
        clover_moth: {
          name: "клеверный мотылёк",
          quotes: [
            "фыр-фыр! я клеверный мотылёк из биома meadow в slide survivors 🦋",
            "залетел погреться на свет твоего монитора... у тебя тут уютная палитра!",
            "у меня всего 18 hp, зато скорость 105! попробуй догони ✨",
            "мой любимый цвет — зелёный клевер rgb(141, 207, 106) [[swatch:rgb(141, 207, 106)]]",
            "если не будешь на меня тыкать 20 секунд — я полечу дальше по делам 🍃",
            "приливной краб снизу прикольный, но летать не умеет 🤭",
            "🦋",
            "видал b-lang? пчёлы — мои дальние соседи по лугу!"
          ]
        },
        echo_bat: {
          name: "гулкая мышь",
          quotes: [
            "пи-и-ик! я гулкая мышь из пещер pygame-slide-survivors 🦇",
            "выпустил бы два снаряда под углами -0.15 и +0.15, но сегодня выходной",
            "мой оттенок — пещерный фиолетовый rgb(181, 142, 220) [[swatch:rgb(181, 142, 220)]]",
            "если включишь светлую тему — я прищурюсь, предупреждаю 👀",
            "ориентируюсь по эхолокации... тут пахнет python и arch linux!",
            "🦇",
            "у меня 20 hp и ноль желания трогать траву",
            "повисим ещё чуток? не тронешь 20 секунд — полечу обратно в пещеру"
          ]
        },
        rune_wisp: {
          name: "рунный огонёк",
          quotes: [
            "ш-ш-ш... я рунный огонёк из древних руин slide survivors ✨",
            "могу проходить сквозь стены, но решил зависнуть прямо в твоём браузере",
            "свечусь ровно на rgb(171, 191, 116) [[swatch:rgb(171, 191, 116)]] — энергосберегающий!",
            "33 hp, класс ghost, 0 облачных серверов",
            "я видел все 49 репозиториев димаса... некоторые реально древние руины 🤭",
            "✨",
            "не бойся, я не кусаюсь... пока радиус не 31 пиксель",
            "поболтаем ещё или мне парить дальше по сайту?"
          ]
        },
        reed_toad: {
          name: "камышовая жаба",
          quotes: [
            "квак! я камышовая жаба из болота slide survivors 🐸",
            "видишь пиксельную лягуху в шапке сайта? это мой двоюродный брат!",
            "могу плюнуть на 196 пикселей, но в гостях веду себя культурно",
            "болотная классика — rgb(113, 173, 98) [[swatch:rgb(113, 173, 98)]] 💚",
            "🐸",
            "запрыгнул проведать приливного краба. у него тут песочек, а у меня камыши",
            "i use arch btw... то есть квак!",
            "посижу тут немного — если не тыкать 20 сек, упрыгаю обратно на болото"
          ]
        },
        cinder_slug: {
          name: "шлаковый слизень",
          quotes: [
            "пшшш... я шлаковый слизень из базальтового биома 🔥",
            "осторожнее, я вообще-то взрываюсь на 18 урона в радиусе 65px (но тут тихо!)",
            "ползу со скоростью 48, зато максимально вальяжно",
            "мой тёплый цвет — тлеющий уголёк rgb(221, 107, 76) [[swatch:rgb(221, 107, 76)]]",
            "горячее меня только старый hp pavilion при сборке rust 😭",
            "🔥",
            "приливной краб переживает, что я подпалю ему песок. не бойся, краб!",
            "если забудешь про меня на 20 секунд — неспешно уползу дальше"
          ]
        }
      },
      terminal: {
        title: "fish 4.9.3 — dimasbotyara@archlinux",
        hint: "тыкай по кнопкам или введи команду (help — список)",
        placeholder: "введи команду... (help, fastfetch, touch grass)",
        chips: [
          { cmd: "touch grass", label: "touch grass" },
          { cmd: "fastfetch", label: "fastfetch" },
          { cmd: "htop", label: "htop" },
          { cmd: "contacts", label: "contacts" },
          { cmd: "crab", label: "🦀 crab" },
          { cmd: "help", label: "help" }
        ]
      },
      sections: {
        favsEyebrow: "// из моего readme (и не только)",
        favsTitle: "любимые проекты",
        favsNote: "то, чем реально пользуюсь сам или к чему постоянно возвращаюсь",
        playEyebrow: "// браузерка + кое-что ещё",
        playTitle: "поиграть и потыкать",
        playNote: "алхимия запускается прямо в браузере, а рядом лежит обычный калькулятор — мало ли пригодится",
        playBtn: "запустить",
        codeBtn: "код",
        openRepo: "репозиторий",
        shelfEyebrow: "// 49 репо и не останавливаюсь",
        shelfTitle: "полка со всяким разным",
        shelfNote: "от rts и поддельного казино до языка программирования про пчёл",
        searchPlaceholder: "поиск по названию, описанию, стеку...",
        randomBtn: "рандомный репо",
        randomPicked: "выпало вот это:",
        emptySearch: "ничего не нашлось... попробуй другое слово или жми рандом :)",
        allReposLink: "смотреть все 49 репозиториев на github",
        aboutEyebrow: "// честно и без воды",
        aboutTitle: "как я пишу код и на чём сижу",
        stackEyebrow: "// мой зоопарк инструментов",
        stackTitle: "стек и игрушки",
        stackNote: "никаких полосок «python 92%» — просто то, чем реально пользуюсь"
      },
      calc: {
        title: "калькулятор",
        badge: "v1.0",
        idleHint: "просто калькулятор",
        divZero: "на ноль делить не буду 🤨",
        over77: [
          "ответов не будет 🤭",
          "больше 77 — считай сам 🤫",
          "ой, это больше 77... я молчу 🤐",
          "слишком много (> 77), ответов нет 🙅"
        ]
      },
      categories: {
        all: "все",
        games: "игры",
        selfhosted: "self-hosted / lan",
        linux: "linux & cli",
        weird: "угар и разное"
      },
      about: {
        aiTitle: "как я пишу код",
        aiDoodle: "diff сам себя не прочитает",
        aiText1: "я пишу код вместе с нейронками, но реально читаю каждый diff. часто трачу больше времени на промпты, архитектуру и ревью, чем если бы стучал по клавишам вручную.",
        aiText2: "ии — это инструмент, а что именно пойдёт в релиз и как оно будет работать — решаю я.",
        aiConfession: "так я оправдываю своё неумение писать код",
        aiPill1: "читаю каждый diff",
        aiPill2: "zero engine bloat",
        aiPill3: "делаю для себя и друзей",
        hwTitle: "железо и философия",
        hwDoodle: "да, батарея 0%, он живёт от розетки 😭",
        hwText1: "на основном пк — cachyos, а рядом трудится легендарный hp pavilion dv9700 на arch linux: core 2 duo t5850, geforce 8600m gs и 3.83 гига оперативки.",
        hwText2: "именно из-за любви к лёгкому софту мои штуки стараются не жрать лишнего, работать оффлайн в локальной сети, без телеметрии, облаков и регистраций — и почти везде есть темы (gruvbox обязательно).",
        hwSpecLabel: "слабый ноут из fastfetch:"
      },
      stackGroups: [
        {
          id: "langs",
          title: "языки",
          accent: "yellow",
          items: [
            { name: "python", icon: "python" },
            { name: "javascript", icon: "js" },
            { name: "bash / fish", icon: "terminal" },
            { name: "html & css", icon: "code" },
            { name: "c++17", icon: "cpp" },
            { name: "rust (tauri)", icon: "rust" },
            { name: "markdown", icon: "doc" }
          ]
        },
        {
          id: "libs",
          title: "движки и библиотеки",
          accent: "aqua",
          items: [
            { name: "pygame / pygame-ce", icon: "gamepad" },
            { name: "flask + socket.io", icon: "server" },
            { name: "pyqt5 / pyqt6", icon: "window" },
            { name: "sqlite", icon: "db" },
            { name: "pytorch", icon: "spark" },
            { name: "godot", icon: "cube" },
            { name: "rich tui", icon: "palette" }
          ]
        },
        {
          id: "env",
          title: "система и быт",
          accent: "green",
          items: [
            { name: "arch linux", icon: "arch" },
            { name: "cachyos", icon: "linux" },
            { name: "git & github", icon: "git" },
            { name: "pycharm", icon: "ide" },
            { name: "obsidian", icon: "note" },
            { name: "pipewire & ffmpeg", icon: "audio" },
            { name: "discord", icon: "chat" }
          ]
        }
      ],
      footer: {
        madeWith: "сделано с 💜 и любовью к gruvbox",
        shortcuts: "[t] тема · [l] язык · [/] поиск",
        links: {
          github: "github",
          telegram: "telegram: @dimasbotyara",
          discord: "discord: @dimas888",
          readme: "readme",
          repos: "все репо"
        }
      },
      favBadgeDaily: "юзаю каждый день",
      favBadgeBack: "постоянно допиливаю",
      favBadgeGame: "любимый рогалик",
      favBadgePong: "чистый хаос",
      favBadgeCloud: "мой lan-диск",
      favBadgeJump: "прыг-прыг",
      desktopClientNote: "+ десктоп-клиент на tauri/rust",
      siteCardNote: "визитка игры"
    },

    en: {
      pageTitle: "dimasbotyara — just a personal page",
      metaDesc: "hey, i'm dimasbotyara. i build pure pygame games, local-first self-hosted LAN apps, and linux cli tools. gruvbox inside.",
      nav: {
        favs: "favorites",
        play: "play",
        shelf: "shelf",
        about: "about",
        stack: "stack"
      },
      themeTooltip: "pick a palette (press T for next)",
      themeMenuTitle: "palettes",
      soundOnTooltip: "micro-sounds on — click to mute",
      soundOffTooltip: "micro-sounds muted — click to enable",
      langTooltip: "switch language (press L)",
      hero: {
        badge: "i use arch btw",
        greeting: "hey, i'm dimasbotyara.",
        subtitle: "i build pure pygame games, self-hosted LAN apps with zero cloud or accounts, lightweight linux tools, and weird little experiments — mostly just for fun.",
        ctaGithub: "my github",
        ctaFavs: "favorite stuff",
        ctaPlay: "play & mess around",
        contactsLabel: "find me:",
        copied: "copied! ✓",
        telegramTooltip: "click to copy telegram handle",
        discordTooltip: "click to copy discord handle",
        vibes: [
          "local-first",
          "no cloud, no accounts",
          "pure python / pygame",
          "gruvbox enjoyer",
          "cachyos + arch on a potato laptop"
        ]
      },
      crab: {
        name: "tide crab",
        from: "from slide survivors",
        hint: "boop the crab",
        quotes: [
          "dimasbotyara thinks i'm a cutie, but i can totally pinch for 10 damage...",
          "i'm the tide crab straight outta pygame-slide-survivors, btw!",
          "dimasbotyara loves catppuccin mocha, gruvbox, ayu... honestly, quite a lot of themes 😅",
          "my favorite color is rgb(223, 152, 116) [[swatch:rgb(223, 152, 116)]]",
          "my least favorite color is #ff00ff [[swatch:#ff00ff]] (literally a missing texture 😭)",
          "snip-snip 🦀",
          "🦀",
          "50 hp and a 46px strike radius. just saying.",
          "don't touch grass, touch warm sand",
          "🐚",
          "9×7 pixels of pure charm from wildlife.py",
          "i use arch btw 🦀",
          "👀",
          "would crawl back to the coast, but gruvbox is way too cozy",
          "boop me one more time and i'll do my 0.32s windup...",
          "🌊",
          "my eyes are rgb(255, 237, 121) [[swatch:rgb(255, 237, 121)]] — glow in the dark!",
          "just vibing here, pinching nobody (yet)",
          "🥺",
          "bloop... oh, that's the tide",
          "✨",
          "shoutout to the legendary core 2 duo hp pavilion!",
          "walking sideways because i can",
          "heard of b-lang? bees got their own programming language, where's crab-lang 😤",
          "tried crafting a crab in alchemy-matcher... 582 items and still no me 🥺",
          "28 power-ups in botyarapong — overkill? dimas doesn't think so",
          "lost all my fake rubles in botyaracasino. good thing they're fake",
          "🫧",
          "hop on LAN in botyaratalk, let's voice chat with local rnnoise",
          "if you hear snip-snip on discord, that's me via botyaraPAD",
          "botyaraREC records RAW first so weak laptops don't catch fire",
          "i've even visited school ALT Linux PCs via a USB stick!",
          "cli-anims has a terminal aquarium — my distant cousins live there",
          "touch grass? permission denied. touch sand? anytime",
          "battery 0% [AC Connected] — not a bug, a lifestyle",
          "🏖️",
          "botyaraRTS has 10k lines of pure pygame... and still didn't invite me",
          "altai. bees. honey. what about the ocean and crabs?!",
          "i'd beat stockfish in botyarachess, if only claws could hold pawns",
          "fish 4.9.3 — solid shell, approved by sea creatures 🐟",
          "i read every diff... well, as much as two yellow pixels for eyes allow",
          "try pressing T or the palette switcher up top — there's even catppuccin mocha in here!",
          "⚡",
          "official coast biome resident. zero engine bloat, pure pygame!"
        ]
      },
      wildlife: {
        visitingLabel: "visiting:",
        clover_moth: {
          name: "clover moth",
          quotes: [
            "flutter! i'm the clover moth from the meadow biome in slide survivors 🦋",
            "flew over to vibe by your screen glow... cozy color palette you got here!",
            "only 18 hp, but 105 speed! good luck catching me ✨",
            "my favorite shade is clover green rgb(141, 207, 106) [[swatch:rgb(141, 207, 106)]]",
            "don't boop me for 20 seconds and i'll flutter off to somewhere else 🍃",
            "tide crab down there is cool and all, but can he fly? nope 🤭",
            "🦋",
            "seen b-lang? the bees are basically my meadow neighbors!"
          ]
        },
        echo_bat: {
          name: "echo bat",
          quotes: [
            "squeak! i'm the echo bat from the cavern biome in pygame-slide-survivors 🦇",
            "could fire twin shots at -0.15 and +0.15 rad, but i'm off duty today",
            "cavern purple is my vibe: rgb(181, 142, 220) [[swatch:rgb(181, 142, 220)]]",
            "switch to light theme and i will squint at you, fair warning 👀",
            "echolocating... smells like pure python and arch linux in here!",
            "🦇",
            "20 hp and zero intention of touching grass",
            "hang out a bit? leave me idle for 20s and i'll swoop back to the cave"
          ]
        },
        rune_wisp: {
          name: "rune wisp",
          quotes: [
            "whoooosh... i'm the rune wisp from the ruins biome in slide survivors ✨",
            "i can phase through walls, yet i chose to haunt your browser tab",
            "glowing at exactly rgb(171, 191, 116) [[swatch:rgb(171, 191, 116)]] — eco-friendly!",
            "33 hp, ghost archetype, zero cloud servers",
            "i've drifted through all 49 repos... some really are ancient ruins 🤭",
            "✨",
            "don't worry, i don't bite... unless you step inside 31 pixels",
            "wanna chat more or should i drift off along the page?"
          ]
        },
        reed_toad: {
          name: "reed toad",
          quotes: [
            "ribbit! i'm the reed toad from the marsh biome in slide survivors 🐸",
            "see that pixel frog in the topbar? that's my cousin!",
            "i've got 196px spit range, but i'm polite when visiting",
            "classic marsh green — rgb(113, 173, 98) [[swatch:rgb(113, 173, 98)]] 💚",
            "🐸",
            "hopped over to check on tide crab. he's got sand, i've got reeds",
            "i use arch btw... i mean, ribbit!",
            "chilling here for a bit — ignore me for 20s and i'll hop back to the marsh"
          ]
        },
        cinder_slug: {
          name: "cinder slug",
          quotes: [
            "pssshhh... i'm the cinder slug from the basalt biome 🔥",
            "careful, i technically explode for 18 damage in a 65px radius (peaceful mode here!)",
            "moving at 48 speed, zero rush, maximum cozy",
            "my warm glow is glowing ember rgb(221, 107, 76) [[swatch:rgb(221, 107, 76)]]",
            "the only thing hotter than me is that old hp pavilion compiling rust 😭",
            "🔥",
            "tide crab worries i'll scorch his sand. chill out, crab!",
            "forget about me for 20 seconds and i'll slowly slither on"
          ]
        }
      },
      terminal: {
        title: "fish 4.9.3 — dimasbotyara@archlinux",
        hint: "click a button or type a command (try help)",
        placeholder: "type a command... (help, fastfetch, touch grass)",
        chips: [
          { cmd: "touch grass", label: "touch grass" },
          { cmd: "fastfetch", label: "fastfetch" },
          { cmd: "htop", label: "htop" },
          { cmd: "contacts", label: "contacts" },
          { cmd: "crab", label: "🦀 crab" },
          { cmd: "help", label: "help" }
        ]
      },
      sections: {
        favsEyebrow: "// straight from my readme (& more)",
        favsTitle: "favorite stuff i built",
        favsNote: "things i actually use every day or keep coming back to",
        playEyebrow: "// browser game + extra",
        playTitle: "play & mess around",
        playNote: "alchemy runs right in your browser, plus there's a totally normal calculator next to it",
        playBtn: "play now",
        codeBtn: "source",
        openRepo: "repo",
        shelfEyebrow: "// 49 repos and counting",
        shelfTitle: "the project shelf",
        shelfNote: "from a pure-python RTS and fake casino to a bee-themed programming language",
        searchPlaceholder: "filter by name, vibe, stack...",
        randomBtn: "roll random repo",
        randomPicked: "you rolled:",
        emptySearch: "nothing matched... try another word or hit random :)",
        allReposLink: "browse all 49 repositories on github",
        aboutEyebrow: "// honest & zero fluff",
        aboutTitle: "how i code & what runs it",
        stackEyebrow: "// my box of tools",
        stackTitle: "stack & toys",
        stackNote: "no fake 'python 92%' skill bars — just stuff i genuinely use"
      },
      calc: {
        title: "calculator",
        badge: "v1.0",
        idleHint: "just a calculator",
        divZero: "not dividing by zero today 🤨",
        over77: [
          "no answers above 77 🤭",
          "over 77 — figure it out yourself 🤫",
          "uh oh, that's over 77... staying quiet 🤐",
          "too big (> 77), no answers for you 🙅"
        ]
      },
      categories: {
        all: "all",
        games: "games",
        selfhosted: "self-hosted / lan",
        linux: "linux & cli",
        weird: "fun & weird"
      },
      about: {
        aiTitle: "how i code",
        aiDoodle: "diffs don't read themselves",
        aiText1: "i write code with ai, but i actually read every single diff. i often spend more time on prompts and review than i would typing it all by hand.",
        aiText2: "the ai is the tool — i'm the one deciding what actually ships.",
        aiConfession: "that's how i justify not knowing how to code",
        aiPill1: "read every diff",
        aiPill2: "zero engine bloat",
        aiPill3: "built for myself & friends",
        hwTitle: "hardware & philosophy",
        hwDoodle: "yes, battery is 0%, it lives on AC 😭",
        hwText1: "daily driving cachyos on my main rig, plus my immortal hp pavilion dv9700 running arch linux: core 2 duo t5850, geforce 8600m gs, and 3.83 GiB of RAM.",
        hwText2: "that's why my tools stay lightweight, offline-first, self-hosted over LAN, with zero telemetry or logins — and almost everything comes with themes (gruvbox included).",
        hwSpecLabel: "the weak pc from fastfetch:"
      },
      stackGroups: [
        {
          id: "langs",
          title: "languages",
          accent: "yellow",
          items: [
            { name: "python", icon: "python" },
            { name: "javascript", icon: "js" },
            { name: "bash / fish", icon: "terminal" },
            { name: "html & css", icon: "code" },
            { name: "c++17", icon: "cpp" },
            { name: "rust (tauri)", icon: "rust" },
            { name: "markdown", icon: "doc" }
          ]
        },
        {
          id: "libs",
          title: "engines & libs",
          accent: "aqua",
          items: [
            { name: "pygame / pygame-ce", icon: "gamepad" },
            { name: "flask + socket.io", icon: "server" },
            { name: "pyqt5 / pyqt6", icon: "window" },
            { name: "sqlite", icon: "db" },
            { name: "pytorch", icon: "spark" },
            { name: "godot", icon: "cube" },
            { name: "rich tui", icon: "palette" }
          ]
        },
        {
          id: "env",
          title: "os & daily gear",
          accent: "green",
          items: [
            { name: "arch linux", icon: "arch" },
            { name: "cachyos", icon: "linux" },
            { name: "git & github", icon: "git" },
            { name: "pycharm", icon: "ide" },
            { name: "obsidian", icon: "note" },
            { name: "pipewire & ffmpeg", icon: "audio" },
            { name: "discord", icon: "chat" }
          ]
        }
      ],
      footer: {
        madeWith: "made with 💜 and gruvbox",
        shortcuts: "[t] theme · [l] lang · [/] search",
        links: {
          github: "github",
          telegram: "telegram: @dimasbotyara",
          discord: "discord: @dimas888",
          readme: "readme",
          repos: "all repos"
        }
      },
      favBadgeDaily: "daily driver",
      favBadgeBack: "keep coming back to",
      favBadgeGame: "fav roguelike",
      favBadgePong: "pure chaos",
      favBadgeCloud: "my lan drive",
      favBadgeJump: "hop-hop",
      desktopClientNote: "+ tauri/rust desktop client",
      siteCardNote: "game showcase page"
    }
  },

  favorites: [
    {
      name: "botyaranewtab",
      url: "https://github.com/dimasbotyara/botyaranewtab",
      lang: "Python / JS",
      accent: "yellow",
      icon: "tab",
      badgeKey: "favBadgeDaily",
      tags: ["local-first", "15+ themes", "bangs & calc", "zero cloud"],
      desc: {
        ru: "кастомная страница новой вкладки, которой я пользуюсь буквально каждый день. 15+ тем, свои шрифты, движок обоев, умный поиск с bang-командами и калькулятором прямо в строке, виджеты и папки.",
        en: "local-first customizable new tab page i use every single day. 15+ themes, custom fonts, wallpaper engine, smart search with bang commands & inline calculator, widgets, shortcuts and folders."
      }
    },
    {
      name: "botyaratalk",
      url: "https://github.com/dimasbotyara/botyaratalk",
      extraUrl: "https://github.com/dimasbotyara/botyaratalk-desktop",
      extraLabelKey: "desktopClientNote",
      lang: "JS / Flask",
      accent: "aqua",
      icon: "chat",
      badgeKey: "favBadgeBack",
      tags: ["LAN", "voice & video", "RNNoise", "10 themes"],
      desc: {
        ru: "мессенджер для локальной сети, к которому я постоянно возвращаюсь. текстовые каналы, голосовые звонки, видео и демка экрана со звуком системы, локальное шумоподавление RNNoise и 10 тем.",
        en: "self-hosted LAN messenger i keep coming back to. text channels, voice calls, video & screen sharing with system audio, local RNNoise noise suppression, 10 themes, sqlite storage — zero cloud."
      }
    },
    {
      name: "pygame-slide-survivors",
      url: "https://github.com/dimasbotyara/pygame-slide-survivors",
      extraUrl: "https://dimasbotyara.github.io/pygame-slide-survivors/",
      extraLabelKey: "siteCardNote",
      lang: "Python",
      accent: "red",
      icon: "sword",
      badgeKey: "favBadgeGame",
      tags: ["roguelike", "survivors", "pygame", "tide crab 🦀"],
      desc: {
        ru: "аренный рогалик в духе vampire survivors на чистом pygame — герои, биомы (включая милейшего приливного краба 🦀), толпы врагов, предметы, ачивки, частицы и локальные рекорды.",
        en: "survivors-style arena roguelike built on pure pygame — heroes, biomes (featuring the adorable tide crab 🦀), enemy hordes, items, achievements, particles, and local highscores."
      }
    },
    {
      name: "botyarapong",
      url: "https://github.com/dimasbotyara/botyarapong",
      lang: "Python",
      accent: "orange",
      icon: "pong",
      badgeKey: "favBadgePong",
      tags: ["28 power-ups", "LAN", "pygame", "chaos"],
      desc: {
        ru: "классический понг на стероидах: 28 паверапов, 3 сложности бота, локальный мультиплеер с автопоиском, частицы, тряска экрана и ui на nerd font. чистый pygame и хаос.",
        en: "classic pong on steroids — 28 power-ups, 3 ai difficulties, LAN multiplayer with auto-discovery, particles, screen shake, nerd font ui. pure pygame, zero engine bloat, pure chaos."
      }
    },
    {
      name: "botyaracloud",
      url: "https://github.com/dimasbotyara/botyaracloud",
      lang: "JS / Flask",
      accent: "blue",
      icon: "cloud",
      badgeKey: "favBadgeCloud",
      tags: ["LAN", "live viewer", "8 themes", "self-hosted"],
      desc: {
        ru: "локальный файловый сервер — как `python -m http.server`, только на стероидах и реально приятный. кинул файл в папку — все сразу видят. встроенный просмотр фото, видео, аудио, pdf и кода.",
        en: "self-hosted LAN file server — like `python -m http.server`, except actually pleasant to use. drop files in a folder and everyone sees them live, with built-in viewers for media, pdf & code."
      }
    },
    {
      name: "botyarajump",
      url: "https://github.com/dimasbotyara/botyarajump",
      lang: "Python",
      accent: "green",
      icon: "jump",
      badgeKey: "favBadgeJump",
      tags: ["platformer", "level editor", "quests", "pygame-ce"],
      desc: {
        ru: "платформер в духе doodle jump на pygame-ce: бесконечные режимы от лавы до зеркального мира, скины реально меняющие геймплей, ежедневные квесты, сюжетка и встроенный редактор уровней.",
        en: "juice-loaded doodle jump-style platformer on pygame-ce — endless modes from lava to mirror world, skins that actually change gameplay, daily quests, story campaign, and a built-in level editor."
      }
    }
  ],

  playable: [
    {
      name: "alchemy-matcher",
      liveUrl: "https://dimasbotyara.github.io/alchemy-matcher/",
      repoUrl: "https://github.com/dimasbotyara/alchemy-matcher",
      accent: "purple",
      icon: "flask",
      tags: ["582 items", "dark / light", "RU / EN", "vanilla js", "no signup"],
      desc: {
        ru: "единственная браузерная игра — уютная головоломка-алхимия: скрафти 582 элемента из 4 базовых. без установок и регистраций, прогресс хранится прямо в браузере, есть светлая и тёмная темы, русский и английский.",
        en: "the one and only browser game here — a cozy element-combining puzzle where you craft 582 items from 4 basics. zero installs, zero signups, progress stays in your browser, dark/light themes, EN/RU."
      }
    }
  ],

  shelf: [
    // GAMES
    {
      name: "botyaraRTS",
      url: "https://github.com/dimasbotyara/botyaraRTS",
      cat: "games",
      lang: "Python",
      tags: ["pygame", "rts", "~10k lines"],
      desc: {
        ru: "sci-fi rts с нуля на pygame: туман войны, a* поиск пути, 30 карточек технологий, миникарта, наземные и воздушные юниты. ~10к строк без движка.",
        en: "sci-fi rts from scratch in pure pygame: fog of war, a* pathfinding, 30 roguelike tech cards, minimap, land & air units. ~10k lines, zero engine bloat."
      }
    },
    {
      name: "botyaraclick",
      url: "https://github.com/dimasbotyara/botyaraclick",
      cat: "games",
      lang: "Python",
      tags: ["clicker", "176 upgrades", "13 themes"],
      desc: {
        ru: "от гаража до галактики — огромный кликер на pygame: 176 апгрейдов, 50 ачивок, 7 эпох, престиж, 13 анимированных тем и ~17к строк питона.",
        en: "from garage to galaxy — full-featured pygame idle/clicker with 176 upgrades, 50 achievements, 7 eras, prestige, 13 animated themes, ~17k lines."
      }
    },
    {
      name: "botyaraTD",
      url: "https://github.com/dimasbotyara/botyaraTD",
      cat: "games",
      lang: "Python",
      tags: ["tower-defense", "pygame", "RU/EN"],
      desc: {
        ru: "сочный tower defense на pygame: 8 башен × 3 апгрейда, 25 волн, 3 суперспособности, взрывы из частиц и процедурный звук.",
        en: "juicy tower defense on pygame: 8 towers × 3 upgrades, 25 waves, 3 super abilities, particle explosions, screen shake, and procedural audio."
      }
    },
    {
      name: "gearworks-industrial-age",
      url: "https://github.com/dimasbotyara/gearworks-industrial-age",
      cat: "games",
      lang: "Python",
      tags: ["factorio-like", "automation", "pygame"],
      desc: {
        ru: "игра про автоматизацию заводов в духе factorio на чистом pygame — здания, производственные цепочки и сохранения.",
        en: "factory automation game inspired by factorio on pure pygame — buildings, production chains, entity systems, and saves."
      }
    },
    {
      name: "botyaradarts",
      url: "https://github.com/dimasbotyara/botyaradarts",
      cat: "games",
      lang: "Python",
      tags: ["tv-friendly", "501 & cricket", "pygame"],
      desc: {
        ru: "табло для дартса под телек: тыкаешь по мишени вместо ввода цифр. 6 режимов, 42 апгрейда с рулеткой, конфетти и лидерборды.",
        en: "tv-friendly darts scoreboard on pygame — click the board instead of typing scores. 6 modes, 42 upgrades, cricket & 501, confetti & stats."
      }
    },
    {
      name: "botyaracities-ru",
      url: "https://github.com/dimasbotyara/botyaracities-ru",
      cat: "games",
      lang: "Python",
      tags: ["LAN", "word-game", "pygame"],
      desc: {
        ru: "«города россии» по локалке вдвоём: база ~400 городов, 3 жизни, таймер, частицы и бонусная cli-искалка с нечётким поиском.",
        en: "lan multiplayer 'cities of russia' word game — ~400 city database, 3 lives, timer, particles, pygame client + tcp server."
      }
    },
    {
      name: "pygame-arkanoid",
      url: "https://github.com/dimasbotyara/pygame-arkanoid",
      cat: "games",
      lang: "Python",
      tags: ["cyberpunk", "breakout", "pygame-ce"],
      desc: {
        ru: "киберпанк-арканоид с подкруткой мяча, процедурным синтезом звука, 8 паверапами и 7 видами блоков.",
        en: "cyberpunk breakout on pygame-ce — neon visuals, spin physics, procedural audio synthesis, 8 power-ups, and 7 brick types."
      }
    },
    {
      name: "botyaragames",
      url: "https://github.com/dimasbotyara/botyaragames",
      cat: "games",
      lang: "Python",
      tags: ["minigames", "LAN", "tcp"],
      desc: {
        ru: "сборник мини-игр (4 в ряд, понг, реакция, крестики-нолики) с ботом или по локалке через плагинный реестр.",
        en: "pygame mini-game pack (connect four, pong, reaction, tic-tac-toe) — play locally, vs bot, or over LAN via pluggable registry."
      }
    },

    // SELF-HOSTED / LAN
    {
      name: "botyarachess",
      url: "https://github.com/dimasbotyara/botyarachess",
      cat: "selfhosted",
      lang: "JavaScript",
      tags: ["chess", "LLM & stockfish", "20 themes"],
      desc: {
        ru: "оффлайн-шахматы в браузере: flask + stockfish + llm-соперники, с которыми можно переписываться, онлайн-партии с часами, elo и 20 тем.",
        en: "offline-first chess web app: flask + stockfish + chat-capable llm opponents (openai/claude/gemini/lm studio), clocks, elo & 20 themes."
      }
    },
    {
      name: "botyarawatch",
      url: "https://github.com/dimasbotyara/botyarawatch",
      cat: "selfhosted",
      lang: "JavaScript",
      tags: ["watch-party", "socket.io", "flask"],
      desc: {
        ru: "совместный просмотр видео с синхронизацией: общий плейлист, голосование за следующий ролик, чат и встроенная скачка.",
        en: "self-hosted watch-party app: synced playback, shared playlist, voting for next video, chat, and built-in downloading."
      }
    },
    {
      name: "botyaratools",
      url: "https://github.com/dimasbotyara/botyaratools",
      cat: "selfhosted",
      lang: "Python",
      tags: ["yt-dlp", "ffmpeg", "media"],
      desc: {
        ru: "домашний веб-комбайн поверх yt-dlp и ffmpeg: скачка с 1000+ сайтов, сжатие под дискорд/телегу, mp3 320 kbps и обрезка без консоли.",
        en: "self-hosted web toolbox for yt-dlp + ffmpeg: download from 1000+ sites, compress for discord/telegram, 320 kbps mp3 search, trim & extract audio."
      }
    },
    {
      name: "botyarashare",
      url: "https://github.com/dimasbotyara/botyarashare",
      cat: "selfhosted",
      lang: "JavaScript",
      tags: ["encrypted", "LAN", "fernet"],
      desc: {
        ru: "оффлайн-файлообменник для локалки с шифрованием fernet, временными ссылками, drag & drop и автоочисткой.",
        en: "offline-first encrypted LAN file sharing (fernet), real-time via socket.io, expiring links, direct send & auto-cleanup."
      }
    },
    {
      name: "botyaraMC",
      url: "https://github.com/dimasbotyara/botyaraMC",
      cat: "selfhosted",
      lang: "Python",
      tags: ["minecraft", "mod-sync", "fabric/forge"],
      desc: {
        ru: "лаунчер модов для майнкрафта со своим сервером синхронизации, чтобы друзьям не кидать архивы вручную.",
        en: "minecraft mod launcher paired with a self-hosted mod sync server so everyone stays on the exact same modpack."
      }
    },
    {
      name: "lantern-v2",
      url: "https://github.com/dimasbotyara/lantern-v2",
      cat: "selfhosted",
      lang: "Python",
      tags: ["fastapi", "pyqt5", "encrypted"],
      desc: {
        ru: "шифрованный десктопный мессенджер для локальной сети на fastapi + pyqt5: стикеры, опросы, файлы и автопоиск.",
        en: "encrypted LAN desktop messenger built with fastapi + pyqt5 — websocket chat, file transfer, stickers, polls & auto-discovery."
      }
    },
    {
      name: "school-portal-game",
      url: "https://github.com/dimasbotyara/school-portal-game",
      cat: "selfhosted",
      lang: "Python",
      tags: ["flask", "sqlite", "offline"],
      desc: {
        ru: "«поиграть в школу» дома — оффлайн веб-портал с дневником, тестами, календарём контрольных, графиками и наградами.",
        en: "play school at home — offline flask + sqlite web portal with a gradebook, self-graded tests, awards, and progress charts."
      }
    },

    // LINUX & CLI
    {
      name: "botyaraPAD",
      url: "https://github.com/dimasbotyara/botyaraPAD",
      cat: "linux",
      lang: "Python",
      tags: ["pipewire", "soundpad", "wayland/x11"],
      desc: {
        ru: "аналог soundpad под linux на pipewire: пускаешь звуки прямо в микрофон для дискорда и игр, глобальные хоткеи на wayland + x11.",
        en: "soundpad alternative for linux built on pipewire — play sounds straight into your mic for discord/obs/games with global wayland + x11 hotkeys."
      }
    },
    {
      name: "botyaraREC",
      url: "https://github.com/dimasbotyara/botyaraREC",
      cat: "linux",
      lang: "Python",
      tags: ["weak-pc", "ffmpeg", "x11"],
      desc: {
        ru: "лёгкий рекордер экрана для слабого железа: сначала пишет raw без тормозов, а в mp4 кодирует уже после стопа. дружит с easyeffects.",
        en: "screen recorder built for weak hardware: captures raw first and encodes to mp4 after stopping — zero stutter, mic + system audio, easyeffects-aware."
      }
    },
    {
      name: "cli-anims",
      url: "https://github.com/dimasbotyara/cli-anims",
      cat: "linux",
      lang: "Python",
      tags: ["stdlib-only", "ansi", "20+ anims"],
      desc: {
        ru: "20+ анимаций в терминале на голом stdlib без зависимостей: пончик, матрица, чёрная дыра, аквариум, boids, салюты и игра «жизнь».",
        en: "20+ pure-python terminal animations with zero dependencies: donut, matrix, black hole, aquarium, boids, fireworks, game of life — ansi truecolor."
      }
    },
    {
      name: "install-my-games",
      url: "https://github.com/dimasbotyara/install-my-games",
      cat: "linux",
      lang: "Python",
      tags: ["gruvbox", "alt-linux", "usb"],
      desc: {
        ru: "однофайловый установщик и лаунчер моих игр с флешки для школьных компов на alt linux: сам собирает venv, показывает мини-fastfetch и живёт в gruvbox dark.",
        en: "one-file usb game installer & launcher for school linux labs (alt linux) — builds venvs, mini-fastfetch, self-updates from github, gruvbox dark."
      }
    },
    {
      name: "botyaradash",
      url: "https://github.com/dimasbotyara/botyaradash",
      cat: "linux",
      lang: "Python",
      tags: ["tui", "rich", "sysmon"],
      desc: {
        ru: "терминальный системный монитор на rich: cpu, озу, диски, сеть, gpu, батарея и процессы в живом дашборде.",
        en: "cross-platform terminal system monitor built with rich — live cpu, ram, disk, network, gpu, battery & top processes dashboard."
      }
    },
    {
      name: "botyaraenc",
      url: "https://github.com/dimasbotyara/botyaraenc",
      cat: "linux",
      lang: "Python",
      tags: ["aes-256", "cli", "stealth"],
      desc: {
        ru: "cli-шифрование файлов и текста (aes-256 + pbkdf2), маскировка шифрофайлов под .jpg/.mp3/.pdf и передача по локалке.",
        en: "cli encryption for files & text (aes-256-cbc + pbkdf2), file masquerading as .jpg/.mp3/.pdf, and LAN transfer in a rich tui."
      }
    },
    {
      name: "botyaranotes",
      url: "https://github.com/dimasbotyara/botyaranotes",
      cat: "linux",
      lang: "Python",
      tags: ["tui", "fernet", "pacman-style"],
      desc: {
        ru: "шифрованные заметки прямо в терминале с эстетикой arch pacman, тегами, бэкапами и 8 цветовыми темами.",
        en: "terminal encrypted note vault with fernet + pbkdf2, tags, backups, 8 themes, and arch pacman aesthetic."
      }
    },
    {
      name: "botyarapix",
      url: "https://github.com/dimasbotyara/botyarapix",
      cat: "linux",
      lang: "C++",
      tags: ["c++17", "pixel-art", "procedural"],
      desc: {
        ru: "консольный генератор абстрактного монохромного пиксель-арта на c++17 — сиды, симметрия и экспорт в png.",
        en: "cross-platform console generator for abstract monochrome pixel art in c++17 — seeds, symmetry, interactive menu & png export."
      }
    },
    {
      name: "dimasbotyara-rofi-launcher-theme",
      url: "https://github.com/dimasbotyara/dimasbotyara-rofi-launcher-theme",
      cat: "linux",
      lang: "Shell",
      tags: ["rofi", "ricing", "themes"],
      desc: {
        ru: "пак цветовых тем для rofi и shell-скрипты, чтобы переключать их на лету.",
        en: "rofi launcher theme pack with color schemes for launcher.rasi and shell scripts to swap themes on the fly."
      }
    },

    // WEIRD & FUN
    {
      name: "b-lang",
      url: "https://github.com/dimasbotyara/b-lang",
      cat: "weird",
      lang: "Python",
      tags: ["bees 🐝", "interpreter", "esolang"],
      desc: {
        ru: "🐝 собственный язык программирования про пчёл, написанный на питоне — с интерпретатором, stdlib и даже криптографией.",
        en: "🐝 a bee-themed programming language implemented in python — interpreter core, stdlib, examples, and optional crypto/http extensions."
      }
    },
    {
      name: "botyaraexchange",
      url: "https://github.com/dimasbotyara/botyaraexchange",
      cat: "weird",
      lang: "Python",
      tags: ["fake-crypto", "chaos", "simulator"],
      desc: {
        ru: "криптобиржа с фейковыми рублями, 15 монетами, безумными графиками и 35+ скрытыми событиями рынка.",
        en: "fake-money crypto exchange with zero real market data — 15 coins, chaotic charts, 35+ hidden market events & leaderboard."
      }
    },
    {
      name: "botyaracasino",
      url: "https://github.com/dimasbotyara/botyaracasino",
      cat: "weird",
      lang: "HTML",
      tags: ["fake-money", "14 games", "flask"],
      desc: {
        ru: "неоновое фейк-казино на flask: 14 мини-игр (слоты, краш, мины, блэкджек), чат и лидерборд. никаких реальных денег, чистый дофамин.",
        en: "neon fake casino on flask with 14 mini-games (slots, crash, blackjack, mines, limbo), chat & leaderboard. zero real bets."
      }
    },
    {
      name: "altai_bees",
      url: "https://github.com/dimasbotyara/altai_bees",
      cat: "weird",
      lang: "JavaScript",
      tags: ["humor", "flask", "honey 🍯"],
      desc: {
        ru: "🐝 Алтай. Пчёлы. Мёд. — шуточный одностраничник на flask со словарём алтайских словечек и локальным юмором.",
        en: "🐝 Altai. Bees. Honey. — humorous single-page flask app with a joke glossary of Altai words and local mountain humor."
      }
    },
    {
      name: "lm-studio-calculator",
      url: "https://github.com/dimasbotyara/lm-studio-calculator",
      cat: "weird",
      lang: "TypeScript",
      tags: ["lm-studio", "plugin", "math"],
      desc: {
        ru: "плагин научного калькулятора для lm studio, чтобы локальные llm перестали врать в математике.",
        en: "scientific calculator plugin for lm studio so local llms stop hallucinating basic arithmetic and trigonometry."
      }
    },
    {
      name: "img2palette",
      url: "https://github.com/dimasbotyara/img2palette",
      cat: "weird",
      lang: "Python",
      tags: ["50+ themes", "ricer", "rich"],
      desc: {
        ru: "перекрашивает картинки, гифки и видео в 50+ цветовых палитр (gruvbox, catppuccin, nord, dracula и всё такое).",
        en: "recolor images, gifs and video into 50+ color palettes — gruvbox, catppuccin, dracula, nord and more."
      }
    },
    {
      name: "botyaratime",
      url: "https://github.com/dimasbotyara/botyaratime",
      cat: "weird",
      lang: "Python",
      tags: ["clock", "particles", "10 themes"],
      desc: {
        ru: "красивые десктопные часы на pygame с одометр-анимацией цифр и искрами частиц на каждом тике.",
        en: "eye-candy desktop clock on pygame with odometer-style digit transitions, particle bursts every tick, and 10 themes."
      }
    },
    {
      name: "botyaratalk-desktop",
      url: "https://github.com/dimasbotyara/botyaratalk-desktop",
      cat: "selfhosted",
      lang: "Rust",
      tags: ["tauri 2", "rust", "LAN"],
      desc: {
        ru: "десктопный клиент для botyaratalk на tauri 2 + rust: открывает твой LAN-сервер в системном webview, добавляет индикатор микрофона в трее, глобальный мут и уведомления.",
        en: "desktop client for botyaratalk built with tauri 2 + rust — opens your LAN server in system webview with a tray mic indicator, global mute hotkey & native notifications."
      }
    },
    {
      name: "botyaraemoji",
      url: "https://github.com/dimasbotyara/botyaraemoji",
      cat: "selfhosted",
      lang: "JavaScript",
      tags: ["emoji", "flask", "self-hosted"],
      desc: {
        ru: "локальный веб-пикер эмодзи на flask — листаешь по категориям и копируешь в один клик, настройки хранятся локально. без облаков и аккаунтов.",
        en: "self-hosted web emoji picker on flask — browse emojis by category and copy in one click with local settings persistence. no cloud, no accounts."
      }
    },
    {
      name: "donjuan-flask",
      url: "https://github.com/dimasbotyara/donjuan-flask",
      cat: "games",
      lang: "Python",
      tags: ["fork", "dungeons", "tabletop"],
      desc: {
        ru: "форк генератора подземелий на flask для настольных ролевых игр.",
        en: "fork of a modern flask tool for generating dungeons for tabletop rpgs."
      }
    },
    {
      name: "cipher-cascade",
      url: "https://github.com/dimasbotyara/cipher-cascade",
      cat: "linux",
      lang: "Python",
      tags: ["terminal", "matrix", "pure-python"],
      desc: {
        ru: "киберпанк-водопад из слов в терминале: режимы водопада, декодера, матрицы и слайда, градиентные темы (rainbow, fire, ice, neon) и управление скоростью.",
        en: "cyberpunk word waterfall in the terminal — waterfall, decoder, matrix & slide modes, gradient themes (rainbow, fire, ice, neon) and speed controls. pure python."
      }
    },
    {
      name: "botyaramatch",
      url: "https://github.com/dimasbotyara/botyaramatch",
      cat: "linux",
      lang: "Python",
      tags: ["fuzzy-match", "EN/RU", "library"],
      desc: {
        ru: "поиск ближайшей строки на python: левенштейн, джаро-винклер, триграммы, нормализация ё/е и автоисправление перепутанной раскладки EN/RU.",
        en: "find the closest matching string in python: levenshtein, jaro-winkler, trigrams, ё/е normalization, and EN/RU keyboard layout fixing."
      }
    },
    {
      name: "botyaraclock",
      url: "https://github.com/dimasbotyara/botyaraclock",
      cat: "linux",
      lang: "Python",
      tags: ["pyqt6", "binary-clock", "pomodoro"],
      desc: {
        ru: "десктопные часы на pyqt6: аналоговый, цифровой и бинарный (bcd) циферблаты, секундомер с кругами, таймер с пресетами, встроенный помодоро и темы.",
        en: "feature-rich desktop clock on pyqt6 — analog, digital & binary (bcd) faces, precision stopwatch with laps, timer presets, built-in pomodoro & themes."
      }
    },
    {
      name: "botyaracalc",
      url: "https://github.com/dimasbotyara/botyaracalc",
      cat: "linux",
      lang: "Python",
      tags: ["pyqt5", "scientific", "RU/EN"],
      desc: {
        ru: "десктопный калькулятор на pyqt5 — инженерный режим, панель истории, темы, RU/EN интерфейс и сохранение настроек в json.",
        en: "modern desktop calculator on pyqt5 — scientific mode, history panel, themes, bilingual RU/EN interface, and json-persisted settings."
      }
    },
    {
      name: "b-lang-more-examples",
      url: "https://github.com/dimasbotyara/b-lang-more-examples",
      cat: "weird",
      lang: "b-lang",
      tags: ["bees 🐝", "examples", "b-lang"],
      desc: {
        ru: "сборник примеров программ на пчелином языке b-lang: калькулятор, фибоначчи, fizzbuzz, квиз, генератор паролей, обратный отсчёт и таблица умножения.",
        en: "example programs for the bee-themed b language: calculator, fibonacci, fizzbuzz, quiz, password generator, countdown, multiplication table and more."
      }
    },
    {
      name: "dimasbotyara",
      url: "https://github.com/dimasbotyara/dimasbotyara",
      cat: "weird",
      lang: "Markdown",
      tags: ["readme", "fastfetch", "profile"],
      desc: {
        ru: "тот самый профиль-readme на github — с `touch grass: permission denied`, легендарным fastfetch от старого hp pavilion и змейкой коммитов.",
        en: "my github profile readme — featuring `touch grass: permission denied`, the legendary core 2 duo hp pavilion fastfetch, and the contribution snake."
      }
    },
    {
      name: "dimasbotyara.github.io",
      url: "https://github.com/dimasbotyara/dimasbotyara.github.io",
      cat: "weird",
      lang: "JavaScript",
      tags: ["this site 🐸", "gruvbox", "RU/EN"],
      desc: {
        ru: "эта самая визитка, на которой ты сейчас сидишь — gruvbox dark/light, два языка, терминал, приливной краб и ноль сборщиков.",
        en: "the exact personal page you're looking at right now — gruvbox dark/light, bilingual RU/EN, interactive terminal, tide crab, zero build tools."
      }
    },
    {
      name: "nnn-countdown",
      url: "https://github.com/dimasbotyara/nnn-countdown",
      cat: "weird",
      lang: "Python",
      tags: ["joke", "desktop", "ayu-mirage"],
      desc: {
        ru: "шуточный десктопный таймер обратного отсчёта до начала и конца no nut november. просто потому что мог.",
        en: "desktop joke countdown to the start & end of no nut november with live timer and bilingual ui. just because i could."
      }
    }
  ],

  fastfetch: {
    ascii: [
      "                  -`",
      "                 .o+`",
      "                `ooo/",
      "               `+oooo:",
      "              `+oooooo:",
      "              -+oooooo+:",
      "            `/:-:++oooo+:",
      "           `/++++/+++++++:",
      "          `/++++++++++++++:",
      "         `/+++ooooooooooooo/`",
      "        ./ooosssso++osssssso+`",
      "       .oossssso-````/ossssss+`",
      "      -osssssso.      :ssssssso.",
      "     :osssssss/        osssso+++.",
      "    /ossssssss/        +ssssooo/-",
      "  `/ossssso+/:-        -:/+osssso+-",
      " `+sso+:-`                 `.-/+oso:",
      "`++:.                           `-/+/",
      ".`                                 `/"
    ],
    specs: [
      ["OS", "Arch Linux x86_64"],
      ["Host", "HP Pavilion dv9700 Notebook PC"],
      ["Kernel", "Linux 5.15.209-1-lts515"],
      ["Shell", "fish 4.9.3"],
      ["CPU", "Intel Core 2 Duo T5850 (2) @ 2.17 GHz"],
      ["GPU", "NVIDIA GeForce 8600M GS"],
      ["Memory", "561.55 MiB / 3.83 GiB (14%)"],
      ["Battery", "0% [AC Connected, Unknown]"],
      ["Locale", "ru_RU.UTF-8"]
    ]
  }
};
