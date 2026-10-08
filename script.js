document.documentElement.classList.add("js");

/* =========================================================
   DATA PORTFOLIO VEENDY
   Fokus: IT Support • Network Support • IT Infrastructure
   ========================================================= */

const DATA = {
  /* ===== CONTACT & LINKS ===== */
  cvUrl: "assets/cv/cv-veendy.pdf",

  email: "veendysuseno@gmail.com",
  github: "veendysuseno",
  linkedin: "veendysuseno",
  whatsapp: "6287836191127",

  /* ===== INTRO ===== */
  intro:
    "Saya adalah lulusan S1 Sistem Komputer dengan pengalaman lebih dari 2 tahun di bidang IT Support, hardware, networking, troubleshooting, dan IT infrastructure. Saya terbiasa menangani permasalahan hardware dan software, instalasi serta konfigurasi jaringan, Windows/Linux, printer, backup data, dan perangkat pendukung IT. Saya memiliki sertifikasi MTCNA, Fortinet Certified Professional Network Security NSE4, dan BNSP Computer Technical Support.",

  /* ===== FLOATING SKILLS ===== */
  floating: [
    "IT Support",
    "Networking",
    "Troubleshooting",
    "MikroTik",
    "Linux",
    "Hardware",
  ],

  /* ===== STATS ===== */
  stats: [
    ["2+ Years", "IT Experience"],
    ["4", "Technical Roles"],
    ["3", "Professional Certifications"],
  ],

  /* =========================================================
     SKILLS
     ========================================================= */

  skills: [
    [
      "⌘",
      "IT Support",
      [
        "Hardware Troubleshooting",
        "Software Troubleshooting",
        "Windows Support",
        "Linux Support",
        "OS Installation",
        "Driver Installation",
        "Printer Troubleshooting",
        "Remote Support",
        "Technical Documentation",
      ],
    ],

    [
      "◈",
      "Networking",
      [
        "TCP/IP",
        "LAN",
        "WLAN",
        "IP Addressing",
        "DHCP",
        "DNS",
        "Basic Routing",
        "Network Troubleshooting",
        "Router / Switch / AP",
        "VLAN",
      ],
    ],

    [
      "▣",
      "Hardware & Devices",
      [
        "PC Assembly",
        "PC Maintenance",
        "Laptop Troubleshooting",
        "Peripheral Installation",
        "Printer Installation",
        "CCTV",
        "Attendance System",
        "Hardware Diagnosis",
      ],
    ],

    [
      "❯",
      "System & Administration",
      [
        "Windows",
        "Linux",
        "Raspbian",
        "Linux Kernel Administration",
        "SSH",
        "VNC",
        "Remote Desktop",
        "Backup & Recovery",
        "System Maintenance",
      ],
    ],

    [
      "◉",
      "Network & Security",
      [
        "MikroTik",
        "MTCNA",
        "Fortinet",
        "Network Security",
        "Firewall Basics",
        "NAT",
        "Network Monitoring",
        "IP Configuration",
      ],
    ],

    [
      "⚙",
      "IoT & Programming",
      [
        "Raspberry Pi",
        "ESP8266",
        "Python",
        "C",
        "SQL",
        "Arduino",
        "IoT",
        "Sensors",
      ],
    ],
  ],

  /* ===== TOOLS ===== */

  tools: [
    "Windows",
    "Linux",
    "Raspbian",
    "MikroTik",
    "Fortinet",
    "Raspberry Pi",
    "ESP8266",
    "Python",
    "C",
    "SQL",
    "Arduino IDE",
    "Git",
    "GitHub",
    "SSH",
    "VNC",
    "TeamViewer",
    "AnyDesk",
    "Remote Desktop",
    "Microsoft Office",
    "Google Workspace",
    "ThingSpeak",
  ],

  /* =========================================================
     PROJECTS
     ========================================================= */

  projects: [
    [
      "Raspberry Pi Mobile Robot",
      "Implementasi Raspberry Pi sebagai controller mobile robot dengan komunikasi berbasis web dan kendali navigasi.",
      ["Raspberry Pi", "Python", "Flask", "Linux", "Web"],
      "https://github.com/veendysuseno",
    ],

    [
      "Face Recognition Omniwheels Robot",
      "Pengembangan robot omniwheels berbasis Raspberry Pi dengan proses dataset acquisition, training, dan implementasi face recognition.",
      ["Raspberry Pi", "Python", "OpenCV", "Face Recognition"],
      "https://github.com/veendysuseno",
    ],

    [
      "IoT Healthcare Monitoring",
      "Implementasi ESP8266 dan sensor untuk sistem monitoring kesehatan berbasis Internet of Things menggunakan ThingSpeak.",
      ["ESP8266", "Arduino IDE", "IoT", "Sensors", "ThingSpeak"],
      "https://github.com/veendysuseno",
    ],

    [
      "Flask Image Streamer Robot",
      "Implementasi Flask pada Raspberry Pi untuk komunikasi antara web client dan mobile robot serta streaming image melalui jaringan.",
      ["Raspberry Pi", "Python", "Flask", "HTML", "Networking"],
      "https://github.com/veendysuseno",
    ],

    [
      "IT Support & Network Lab",
      "Praktik troubleshooting hardware/software, instalasi Windows/Linux, konfigurasi LAN/WLAN, peripheral, printer, dan diagnosis permasalahan jaringan.",
      ["Windows", "Linux", "Networking", "Hardware", "Troubleshooting"],
      "",
    ],

    [
      "IoT Electrical Power Monitoring",
      "Project akademik berbasis IoT untuk monitoring dan kontrol penggunaan daya listrik menggunakan microcontroller dan sensor.",
      ["IoT", "Microcontroller", "Sensors", "C", "Monitoring"],
      "https://github.com/veendysuseno",
    ],
  ],

  /* =========================================================
     WORKFLOW
     ========================================================= */

  workflow: [
    ["Identify", "Memahami kebutuhan dan mengidentifikasi masalah user."],

    [
      "Diagnose",
      "Melakukan pemeriksaan hardware, software, sistem operasi, dan network.",
    ],

    [
      "Troubleshoot",
      "Menganalisis root cause dan menguji solusi secara sistematis.",
    ],

    [
      "Resolve",
      "Menerapkan solusi dan memastikan sistem kembali berjalan normal.",
    ],

    [
      "Document",
      "Mencatat konfigurasi, solusi, dan hasil troubleshooting untuk referensi.",
    ],
  ],

  /* =========================================================
     EXPERIENCE
     ========================================================= */

  experience: [
    [
      "Jul 2025 — Jan 2026",
      "IT Hardware & Network — Kementerian Lingkungan Hidup",
      "IT Hardware & Network Amdalnet Direktorat PDLUK",
      [
        "Hardware Troubleshooting",
        "Network Support",
        "Printer & Scanner",
        "Server & Network",
        "Software Installation",
        "System Monitoring",
        "Amdalnet Support",
      ],
    ],

    [
      "Aug 2024 — Dec 2024",
      "Trainer Teknik Komputer dan Jaringan",
      "Pusat Pelatihan Kerja Daerah Jakarta Selatan",
      [
        "LAN / WLAN",
        "Router",
        "Switch",
        "Access Point",
        "Windows / Linux",
        "Hardware Troubleshooting",
        "VLAN",
      ],
    ],

    [
      "Sep 2022 — Aug 2024",
      "IT Technical Support & Jaringan",
      "Yayasan KB TP SA / CSA",
      [
        "PC & Laptop",
        "Windows / Linux",
        "Printer",
        "CCTV",
        "Attendance System",
        "Data Backup",
        "IT Inventory",
      ],
    ],

    [
      "Sep 2018 — Sep 2022",
      "Asisten Laboratorium",
      "Pusat Studi Multimedia dan Robotika",
      [
        "Laboratory Support",
        "PC Maintenance",
        "Microcontroller",
        "Robotics",
        "Printer",
        "Troubleshooting",
        "Technical Assistance",
      ],
    ],
  ],

  /* =========================================================
     EDUCATION
     ========================================================= */

  education: [
    [
      "Universitas Gunadarma",
      "S1 Sistem Komputer",
      "2016 — 2022",
      "GPA 3.42 / 4.00 · Networking · Robotika · IoT",
    ],
  ],

  /* =========================================================
     CERTIFICATIONS
     ========================================================= */

  certs: [
    [
      "MikroTik Certified Network Associate (MTCNA)",
      "MikroTik",
      "Nov 2024 — Nov 2027",
      "No. 2411NA2570",
    ],

    [
      "Fortinet Certified Professional Network Security NSE4",
      "Fortinet",
      "Nov 2024 — Nov 2026",
      "No. 3922266273VV",
    ],

    [
      "BNSP Computer Technical Support",
      "BNSP",
      "Dec 2024 — Dec 2027",
      "No. Reg. J:62 382 03104 2024",
    ],
  ],
};

/* =========================================================
   RENDER
   ========================================================= */

const $ = (s) => document.querySelector(s);

const esc = (t) =>
  String(t).replace(
    /[&<">]/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
      }[c])
  );

const tags = (a) =>
  '<div class="tags">' +
  a.map((t) => "<span>" + esc(t) + "</span>").join("") +
  "</div>";

/* =========================================================
   NAVIGATION
   ========================================================= */

const nav = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

$("#menu").innerHTML = nav
  .map((n) => `<li><a href="#${n.toLowerCase()}">${n}</a></li>`)
  .join("");

/* =========================================================
   INTRO
   ========================================================= */

$("#intro").textContent = DATA.intro;

/* =========================================================
   SOCIAL LINKS
   ========================================================= */

const gh = "https://github.com/" + DATA.github;

const li = "https://linkedin.com/in/" + DATA.linkedin;

const ml = "mailto:" + DATA.email;

$("#soc").innerHTML = `
  <a href="${gh}" target="_blank" rel="noopener">GitHub</a>
  <a href="${li}" target="_blank" rel="noopener">LinkedIn</a>
  <a href="${ml}">Email</a>
`;

/* =========================================================
   FLOATING CHIPS
   ========================================================= */

$("#chips").innerHTML = DATA.floating
  .map(
    (t, i) =>
      `<span style="${
        [
          "top:0;left:6%",
          "top:8%;right:0",
          "top:46%;left:-4%",
          "top:52%;right:-3%",
          "bottom:0;left:12%",
          "bottom:4%;right:8%",
        ][i]
      };animation-delay:${i * 0.7}s">${esc(t)}</span>`
  )
  .join("");

/* =========================================================
   STATS
   ========================================================= */

$("#stats").innerHTML = DATA.stats
  .map(
    (s) =>
      `<div>
        <b>${esc(s[0])}</b>
        <span>${esc(s[1])}</span>
      </div>`
  )
  .join("");

/* =========================================================
   SKILLS
   ========================================================= */

$("#sk").innerHTML = DATA.skills
  .map(
    (s) =>
      `<div class="card rv">
        <h3>
          <i aria-hidden="true">${s[0]}</i>
          ${esc(s[1])}
        </h3>
        ${tags(s[2])}
      </div>`
  )
  .join("");

/* =========================================================
   TOOLS
   ========================================================= */

$("#tools").innerHTML = DATA.tools
  .map((t) => `<div>${esc(t)}</div>`)
  .join("");

/* =========================================================
   PROJECTS
   ========================================================= */

$("#pj").innerHTML = DATA.projects
  .map(
    (p, i) =>
      `<article class="card pc rv">

        <div
          class="thumb"
          style="--x:${[80, 20, 60, 35, 90, 45][i % 6]}%"
        >
          <b>${String(i + 1).padStart(2, "0")}</b>
          <span>${esc(p[2][0])}</span>
        </div>

        <div class="pb">

          <h3>${esc(p[0])}</h3>

          <p>${esc(p[1])}</p>

          ${tags(p[2])}

          ${
            p[3]
              ? `<a
                  class="btn"
                  href="${esc(p[3])}"
                  target="_blank"
                  rel="noopener"
                  aria-label="View Project: ${esc(p[0])}"
                >
                  View Project
                </a>`
              : ""
          }

        </div>

      </article>`
  )
  .join("");

/* =========================================================
   WORKFLOW
   ========================================================= */

$("#fl").innerHTML = DATA.workflow
  .map(
    (w, i) =>
      `<div class="step">
        <b>${String(i + 1).padStart(2, "0")}</b>
        <h3>${esc(w[0])}</h3>
        <p>${esc(w[1])}</p>
      </div>`
  )
  .join("");

/* =========================================================
   EXPERIENCE
   ========================================================= */

$("#xp").innerHTML = DATA.experience
  .map(
    (x) =>
      `<div class="ti rv">

        <small>${esc(x[0])}</small>

        <h3>${esc(x[1])}</h3>

        <p>${esc(x[2])}</p>

        ${tags(x[3])}

      </div>`
  )
  .join("");

/* =========================================================
   EDUCATION
   ========================================================= */

$("#ed").innerHTML = DATA.education
  .map(
    (e) =>
      `<div class="card rv">

        <h3>${esc(e[0])}</h3>

        <p style="color:var(--mu)">
          ${esc(e[1])}
        </p>

        <p class="ph">
          ${esc(e[2])} · ${esc(e[3])}
        </p>

      </div>`
  )
  .join("");

/* =========================================================
   CERTIFICATIONS
   ========================================================= */

$("#ce").innerHTML = DATA.certs
  .map(
    (c) =>
      `<div class="card rv">

        <h3>${esc(c[0])}</h3>

        <p class="ph">
          ${esc(c[1])} · ${esc(c[2])}
        </p>

        <p class="ph">
          ${esc(c[3])}
        </p>

      </div>`
  )
  .join("");

/* =========================================================
   GITHUB
   ========================================================= */

$("#ghu").textContent = "github.com/" + DATA.github;

$("#ghb").href = gh;

/* =========================================================
   GITHUB ACTIVITY VISUAL
   ========================================================= */

$("#act").innerHTML = Array.from(
  { length: 182 },
  (_, i) =>
    `<i style="background:${
      (i * 7 + (i % 5) * 3) % 9 < 2
        ? "rgba(34,211,238,.7)"
        : (i * 5) % 7 < 2
        ? "rgba(34,211,238,.3)"
        : ""
    }"></i>`
).join("");

/* =========================================================
   CONTACT
   ========================================================= */

$("#cc").innerHTML = [
  ["Email", DATA.email, ml],

  ["GitHub", "github.com/" + DATA.github, gh],

  ["LinkedIn", "linkedin.com/in/" + DATA.linkedin, li],

  [
    "WhatsApp",
    "+" + DATA.whatsapp,
    "https://wa.me/" + DATA.whatsapp.replace(/\D/g, ""),
  ],
]
  .map(
    (c) =>
      `<a
        class="cc"
        href="${esc(c[2])}"
        target="_blank"
        rel="noopener"
      >
        <b>${esc(c[0])}</b>
        <span>${esc(c[1])}</span>
      </a>`
  )
  .join("");

/* =========================================================
   FOOTER
   ========================================================= */

$("#fn").innerHTML = `
  <a href="${gh}" target="_blank" rel="noopener">GitHub</a>
  <a href="${li}" target="_blank" rel="noopener">LinkedIn</a>
  <a href="${ml}">Email</a>
`;

/* =========================================================
   TOAST
   ========================================================= */

const toast = (m) => {
  const t = $("#toast");

  t.textContent = m;

  t.classList.add("on");

  clearTimeout(toast.t);

  toast.t = setTimeout(
    () => t.classList.remove("on"),
    3200
  );
};

/* =========================================================
   CV DOWNLOAD
   ========================================================= */

document.querySelectorAll("[data-cv]").forEach((a) => {
  if (DATA.cvUrl) {
    a.href = DATA.cvUrl;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("download", "CV-Veendy-Fatchulhuda-Suseno-Putra.pdf");
  } else {
    a.addEventListener("click", (e) => {
      e.preventDefault();

      toast(
        "Tautan CV belum diisi. Isi DATA.cvUrl di bagian atas script."
      );
    });
  }
});

/* =========================================================
   MOBILE MENU
   ========================================================= */

const bg = $("#bg");

const mn = $("#menu");

bg.onclick = () => {
  const o = mn.classList.toggle("open");

  bg.setAttribute("aria-expanded", o);

  bg.setAttribute(
    "aria-label",
    o ? "Tutup menu" : "Buka menu"
  );
};

mn.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    mn.classList.remove("open");

    bg.setAttribute("aria-expanded", "false");
  }
});

/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");

        io.unobserve(e.target);
      }
    }),
  {
    threshold: 0.12,
  }
);

document
  .querySelectorAll(".rv")
  .forEach((el) => io.observe(el));

/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const links = [...mn.querySelectorAll("a")];

const map = {
  workflow: "projects",
  education: "experience",
  github: "contact",
};

const so = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        const id = map[e.target.id] || e.target.id;

        links.forEach((a) =>
          a.classList.toggle(
            "on",
            a.hash === "#" + id
          )
        );
      }
    }),
  {
    rootMargin: "-45% 0px -50% 0px",
  }
);

document
  .querySelectorAll("main section")
  .forEach((s) => so.observe(s));

/* =========================================================
   TERMINAL STATUS
   ========================================================= */

const L = [
  ["$ system --status", ""],

  ["-------------------------", ""],

  ["Network        ", "ONLINE"],

  ["Server         ", "ONLINE"],

  ["Workstation    ", "ONLINE"],

  ["Internet       ", "CONNECTED"],

  ["Printer        ", "READY"],

  ["Backup         ", "READY"],

  ["Security       ", "MONITORED"],

  ["System         ", "STABLE"],

  ["-------------------------", ""],

  ["Status: ", "ALL SYSTEMS OPERATIONAL"],
];

const tm = $("#tm");

const cur = '<span class="cur"></span>';

const fast =
  matchMedia(
    "(prefers-reduced-motion:reduce)"
  ).matches;

const line = (a, b, n) => {
  const t = a + b;

  const s = t.slice(0, n);

  return (
    esc(s.slice(0, a.length)) +
    (n > a.length
      ? `<span class="${
          b.length > 12 ? "ac" : "ok"
        }">` +
        esc(s.slice(a.length)) +
        "</span>"
      : "")
  );
};

let li_ = 0;

let ch = 0;

let out = "";

(function tick() {
  if (fast) {
    tm.innerHTML =
      L.map((x) => line(x[0], x[1], 99)).join("\n") +
      "\n" +
      cur;

    return;
  }

  if (li_ >= L.length) {
    tm.innerHTML = out + cur;

    return;
  }

  const [a, b] = L[li_];

  const len = (a + b).length;

  ch += 3;

  if (ch >= len) {
    out += line(a, b, len) + "\n";

    li_++;

    ch = 0;

    tm.innerHTML = out + cur;

    setTimeout(
      tick,
      li_ < 3 ? 200 : 120
    );
  } else {
    tm.innerHTML =
      out + line(a, b, ch) + cur;

    setTimeout(tick, 22);
  }
})();

/* =========================================================
   CONTACT FORM
   ========================================================= */

$("#f").addEventListener("submit", (e) => {
  e.preventDefault();

  const f = e.target;

  let ok = true;

  [
    ["n", (v) => v.trim()],

    ["e", (v) =>
      /^\S+@\S+\.\S+$/.test(v)
    ],

    ["s", (v) => v.trim()],

    ["m", (v) =>
      v.trim().length >= 10
    ],
  ].forEach(([id, fn]) => {
    const i = $("#" + id);

    const g = i.parentElement;

    const v = fn(i.value);

    g.classList.toggle("bad", !v);

    i.setAttribute(
      "aria-invalid",
      !v
    );

    if (!v) ok = false;
  });

  if (!ok) {
    toast(
      "Periksa kembali kolom yang bertanda merah."
    );

    return;
  }

  const b = encodeURIComponent(
    f.m.value +
      "\n\n— " +
      f.n.value +
      " (" +
      f.e.value +
      ")"
  );

  location.href =
    ml +
    "?subject=" +
    encodeURIComponent(f.s.value) +
    "&body=" +
    b;

  toast(
    "Membuka aplikasi email Anda…"
  );
});