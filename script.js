document.documentElement.classList.add("js");

/* ===== DATA: ganti isi di sini ===== */
const DATA = {
  cvUrl: "assets/cv/cv-veendy.pdf", // isi tautan CV (PDF) di sini
  email: "veendysuseno@gmail.com]",
  github: "veendysuseno",
  linkedin: "veendysuseno",
  whatsapp: "087836191127",
  intro:
    "Saya memiliki ketertarikan dan pengalaman di bidang teknologi informasi, khususnya IT Support, computer troubleshooting, networking, hardware, software, dan IoT. Saya terbiasa mempelajari dan menyelesaikan permasalahan teknis secara sistematis serta memiliki kemampuan untuk mempelajari teknologi baru.",
  floating: [
    "Windows",
    "Linux",
    "Networking",
    "Troubleshooting",
    "Hardware",
    "IoT",
  ],
  stats: [
    ["01+", "Technical Areas"],
    ["05+", "Projects"],
    ["Multiple", "Technologies"],
  ],
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
        "Basic System Maintenance",
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
        "Network Configuration",
      ],
    ],
    [
      "▣",
      "Hardware",
      [
        "PC Assembly",
        "PC Maintenance",
        "Peripheral Installation",
        "Printer Installation",
        "Hardware Diagnosis",
      ],
    ],
    [
      "❯",
      "System & Software",
      ["Windows", "Linux", "Raspbian", "Python", "Arduino IDE", "SSH", "VNC"],
    ],
    [
      "◉",
      "IoT",
      ["Raspberry Pi", "ESP8266", "Sensors", "ThingSpeak", "IoT Programming"],
    ],
  ],
  tools: [
    "Windows",
    "Linux",
    "Raspberry Pi",
    "ESP8266",
    "Python",
    "Arduino",
    "Git",
    "GitHub",
    "SSH",
    "VNC",
    "ThingSpeak",
    "Networking",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  projects: [
    [
      "Raspberry Pi Mobile Robot",
      "Implementasi Raspberry Pi sebagai controller pada mobile robot dengan komunikasi berbasis web dan kendali navigasi.",
      ["Raspberry Pi", "Python", "Flask", "Linux", "Web"],
      "https://github.com/veendysuseno",
    ],
    [
      "Face Recognition Omniwheels Robot",
      "Project robot omniwheels berbasis Raspberry Pi dengan implementasi dataset acquisition, training, dan face recognition algorithm.",
      ["Raspberry Pi", "Python", "OpenCV", "Face Recognition"],
      "https://github.com/veendysuseno",
    ],
    [
      "IoT Healthcare Monitoring System",
      "Implementasi microcontroller ESP8266 dan sensor untuk monitoring data kesehatan menggunakan konsep Internet of Things.",
      ["ESP8266", "Arduino IDE", "IoT", "Sensors", "ThingSpeak"],
      "https://github.com/veendysuseno",
    ],
    [
      "Flask Image Streamer Robot",
      "Implementasi Flask pada Raspberry Pi untuk komunikasi web client dan streaming image dari mobile robot.",
      ["Raspberry Pi", "Python", "Flask", "HTML", "Networking"],
      "https://github.com/veendysuseno",
    ],
    [
      "PC & Network Troubleshooting",
      "Praktik troubleshooting perangkat komputer, instalasi sistem operasi, konfigurasi jaringan, peripheral, dan diagnosis masalah hardware/software.",
      ["Windows", "Linux", "Networking", "Hardware"],
      "",
    ],
  ],
  workflow: [
    ["Identify", "Memahami masalah user"],
    ["Diagnose", "Mengecek hardware, software, dan network"],
    ["Troubleshoot", "Mencari dan menguji solusi"],
    ["Resolve", "Menerapkan solusi"],
    ["Document", "Mencatat solusi dan konfigurasi"],
  ],
  experience: [
    [
      "Technical Experience",
      "IT & Technology Projects",
      "Project-based learning",
      ["Hardware troubleshooting", "Networking", "Raspberry Pi", "IoT", "Linux", "Python"],
    ],
    [
      "Technical Experience",
      "Workshop / Laboratory Projects",
      "Praktik di workshop dan laboratorium",
      ["Raspberry Pi", "Mobile Robot", "Face Recognition", "IoT Healthcare", "Web-based Robot Control"],
    ],
  ],
  education: [
    ["Universitas Gunadarma", "S1 Sistem Komputer", "2016-2022", "Network, Robotika, IoT"],
  ],
  certs: [
    ["MikroTik Certified Network Associate [Issued Nov 2024 · Expires Nov 2027]"],
    ["Fortinet Network Security Expert Level 4: Certified Professional [Issued Nov 2024 · Expires Nov 2026]"],
    ["Google IT Support Specialization [Issued Jul 2023]"],
    ["Google Cybersecurity Specialization [Issued Nov 2024]"],
    ["Alibaba Cloud Certification [Issued Aug 2024 · Expired Aug 2026]"],
    ["BNSP Computer Technical Support [Issued Dec 2024 · Expires Dec 2027]"],
  ],
};

/* ===== RENDER ===== */
const $ = (s) => document.querySelector(s),
  esc = (t) =>
    String(t).replace(
      /[&<">]/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );
const tags = (a) =>
  '<div class="tags">' +
  a.map((t) => "<span>" + esc(t) + "</span>").join("") +
  "</div>";
const nav = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];
$("#menu").innerHTML = nav
  .map((n) => `<li><a href="#${n.toLowerCase()}">${n}</a></li>`)
  .join("");
$("#intro").textContent = DATA.intro;
const gh = "https://github.com/" + DATA.github,
  li = "https://linkedin.com/in/" + DATA.linkedin,
  ml = "mailto:" + DATA.email;
$("#soc").innerHTML = `<a href="${gh}" target="_blank" rel="noopener">GitHub</a><a href="${li}" target="_blank" rel="noopener">LinkedIn</a><a href="${ml}">Email</a>`;
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
      };animation-delay:${i * 0.7}s">${t}</span>`
  )
  .join("");
$("#stats").innerHTML = DATA.stats
  .map((s) => `<div><b>${esc(s[0])}</b><span>${esc(s[1])}</span></div>`)
  .join("");
$("#sk").innerHTML = DATA.skills
  .map(
    (s) =>
      `<div class="card rv"><h3><i aria-hidden="true">${s[0]}</i>${
        s[1]
      }</h3>${tags(s[2])}</div>`
  )
  .join("");
$("#tools").innerHTML = DATA.tools.map((t) => `<div>${t}</div>`).join("");
$("#pj").innerHTML = DATA.projects
  .map(
    (p, i) =>
      `<article class="card pc rv"><div class="thumb" style="--x:${
        [80, 20, 60, 35, 90][i % 5]
      }%"><b>0${i + 1}</b><span>${esc(p[2][0])}</span></div><div class="pb"><h3>${esc(
        p[0]
      )}</h3><p>${esc(p[1])}</p>${tags(p[2])}${
        p[3]
          ? `<a class="btn" href="${esc(
              p[3]
            )}" target="_blank" rel="noopener" aria-label="View Project: ${esc(
              p[0]
            )}">View Project</a>`
          : ""
      }</div></article>`
  )
  .join("");
$("#fl").innerHTML = DATA.workflow
  .map(
    (w, i) =>
      `<div class="step"><b>0${i + 1}</b><h3>${w[0]}</h3><p>${
        w[1]
      }</p></div>`
  )
  .join("");
$("#xp").innerHTML = DATA.experience
  .map(
    (x) =>
      `<div class="ti rv"><small>${x[0]}</small><h3>${x[1]}</h3><p>${
        x[2]
      }</p>${tags(x[3])}</div>`
  )
  .join("");
$("#ed").innerHTML = DATA.education
  .map(
    (e) =>
      `<div class="card rv"><h3>${e[0]}</h3><p style="color:var(--mu)">${e[1]}</p><p class="ph">${e[2]} · ${e[3]}</p></div>`
  )
  .join("");
$("#ce").innerHTML = DATA.certs
  .map(
    (c) =>
      `<div class="card rv"><h3>${c[0]}</h3><p class="ph">[Issuer] · [Tahun]</p><a class="ph" href="#contact" style="color:var(--ac)">[Credential link]</a></div>`
  )
  .join("");
$("#ghu").textContent = "github.com/" + DATA.github;
$("#ghb").href = gh;
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
$("#cc").innerHTML = [
  ["Email", DATA.email, ml],
  ["GitHub", "github.com/" + DATA.github, gh],
  ["LinkedIn", "in/" + DATA.linkedin, li],
  ["WhatsApp", DATA.whatsapp, "https://wa.me/" + DATA.whatsapp.replace(/\D/g, "")],
]
  .map(
    (c) =>
      `<a class="cc" href="${esc(
        c[2]
      )}" target="_blank" rel="noopener"><b>${c[0]}</b><span>${esc(
        c[1]
      )}</span></a>`
  )
  .join("");
$("#fn").innerHTML = `<a href="${gh}" target="_blank" rel="noopener">GitHub</a><a href="${li}" target="_blank" rel="noopener">LinkedIn</a><a href="${ml}">Email</a>`;

/* ===== INTERAKSI ===== */
const toast = (m) => {
  const t = $("#toast");
  t.textContent = m;
  t.classList.add("on");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove("on"), 3200);
};
document.querySelectorAll("[data-cv]").forEach((a) => {
  if (DATA.cvUrl) {
    a.href = DATA.cvUrl;
    a.target = "_blank";
  } else
    a.addEventListener("click", (e) => {
      e.preventDefault();
      toast("Tautan CV belum diisi. Isi DATA.cvUrl di bagian atas script.");
    });
});
const bg = $("#bg"),
  mn = $("#menu");
bg.onclick = () => {
  const o = mn.classList.toggle("open");
  bg.setAttribute("aria-expanded", o);
  bg.setAttribute("aria-label", o ? "Tutup menu" : "Buka menu");
};
mn.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    mn.classList.remove("open");
    bg.setAttribute("aria-expanded", "false");
  }
});
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".rv").forEach((el) => io.observe(el));
const links = [...mn.querySelectorAll("a")],
  map = { workflow: "projects", education: "experience", github: "contact" };
const so = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        const id = map[e.target.id] || e.target.id;
        links.forEach((a) =>
          a.classList.toggle("on", a.hash === "#" + id)
        );
      }
    }),
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section").forEach((s) => so.observe(s));

/* terminal */
const L = [
  ["$ system --status", ""],
  ["-------------------------", ""],
  ["Network        ", "ONLINE"],
  ["Server         ", "ONLINE"],
  ["Workstation    ", "ONLINE"],
  ["Internet       ", "CONNECTED"],
  ["Printer        ", "READY"],
  ["System         ", "STABLE"],
  ["-------------------------", ""],
  ["Status: ", "ALL SYSTEMS OPERATIONAL"],
];
const tm = $("#tm"),
  cur = '<span class="cur"></span>',
  fast = matchMedia("(prefers-reduced-motion:reduce)").matches;
const line = (a, b, n) => {
  const t = a + b,
    s = t.slice(0, n);
  return (
    esc(s.slice(0, a.length)) +
    (n > a.length
      ? `<span class="${b.length > 12 ? "ac" : "ok"}">` +
        esc(s.slice(a.length)) +
        "</span>"
      : "")
  );
};
let li_ = 0,
  ch = 0,
  out = "";
(function tick() {
  if (fast) {
    tm.innerHTML = L.map((x) => line(x[0], x[1], 99)).join("\n") + "\n" + cur;
    return;
  }
  if (li_ >= L.length) {
    tm.innerHTML = out + cur;
    return;
  }
  const [a, b] = L[li_],
    len = (a + b).length;
  ch += 3;
  if (ch >= len) {
    out += line(a, b, len) + "\n";
    li_++;
    ch = 0;
    tm.innerHTML = out + cur;
    setTimeout(tick, li_ < 3 ? 200 : 120);
  } else {
    tm.innerHTML = out + line(a, b, ch) + cur;
    setTimeout(tick, 22);
  }
})();

/* form */
$("#f").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  let ok = true;
  [
    ["n", (v) => v.trim()],
    ["e", (v) => /^\S+@\S+\.\S+$/.test(v)],
    ["s", (v) => v.trim()],
    ["m", (v) => v.trim().length >= 10],
  ].forEach(([id, fn]) => {
    const i = $("#" + id),
      g = i.parentElement,
      v = fn(i.value);
    g.classList.toggle("bad", !v);
    i.setAttribute("aria-invalid", !v);
    if (!v) ok = false;
  });
  if (!ok) {
    toast("Periksa kembali kolom yang bertanda merah.");
    return;
  }
  const b = encodeURIComponent(f.m.value + "\n\n— " + f.n.value + " (" + f.e.value + ")");
  location.href = ml + "?subject=" + encodeURIComponent(f.s.value) + "&body=" + b;
  toast("Membuka aplikasi email Anda…");
});