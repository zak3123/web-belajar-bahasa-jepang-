const storeKey = "hirakatakan-demo-state";

const state = loadState();
let activeKana = "hiragana";
let activeCard = 0;
let cardFlipped = false;
let activeQuestion = 0;
let quizAnswered = false;
let activeLesson = "Hiragana Dasar";
let activeDeckTitle = "Kosakata N5";
let activeDeckCards = null;
let activeQuizQuestions = [];
let activeQuizLesson = null;

function loadState() {
  const fallback = { users: [], currentEmail: "" };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(storeKey) || "{}") };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(storeKey, JSON.stringify(state));
}

function currentUser() {
  return state.users.find((user) => user.email === state.currentEmail);
}

function setView(view) {
  document.querySelectorAll("[data-page]").forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === view);
  });
  document.querySelectorAll(".nav .nav-action").forEach((button) => {
    const isLessonDetail = view === "lesson-detail" && button.dataset.view === "lessons";
    button.classList.toggle("is-active", button.dataset.view === view || isLessonDetail);
  });
  document.querySelector(".topbar")?.classList.remove("menu-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
  bloomSakura();
  if (view === "dashboard" && !currentUser()) openAuth("login");
}

function setGenericDeck() {
  activeDeckTitle = "Kosakata N5";
  activeDeckCards = null;
  activeCard = 0;
  renderCard();
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createPetal(className = "") {
  const petal = document.createElement("span");
  petal.className = `sakura-petal ${className}`.trim();
  return petal;
}

function initSakura() {
  const layer = document.querySelector(".sakura-layer");
  if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  layer.innerHTML = "";
  const amount = window.innerWidth < 760 ? 18 : 34;
  for (let index = 0; index < amount; index += 1) {
    const petal = createPetal();
    petal.style.setProperty("--x", `${randomBetween(-4, 100)}vw`);
    petal.style.setProperty("--size", `${randomBetween(8, 17)}px`);
    petal.style.setProperty("--opacity", randomBetween(0.35, 0.82).toFixed(2));
    petal.style.setProperty("--rotate", `${randomBetween(0, 180)}deg`);
    petal.style.setProperty("--drift", `${randomBetween(-90, 90)}px`);
    petal.style.setProperty("--duration", `${randomBetween(9, 18)}s`);
    petal.style.setProperty("--delay", `${randomBetween(-18, 0)}s`);
    layer.appendChild(petal);
  }
}

function bloomSakura(originX = window.innerWidth * 0.5, originY = 120) {
  const layer = document.querySelector(".sakura-layer");
  if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  for (let index = 0; index < 14; index += 1) {
    const petal = createPetal("burst");
    petal.style.setProperty("--size", `${randomBetween(8, 15)}px`);
    petal.style.setProperty("--opacity", randomBetween(0.45, 0.88).toFixed(2));
    petal.style.setProperty("--burst-x", `${originX + randomBetween(-70, 70)}px`);
    petal.style.setProperty("--burst-y", `${originY + randomBetween(-22, 22)}px`);
    petal.style.setProperty("--burst-dx", `${randomBetween(-160, 160)}px`);
    petal.style.setProperty("--burst-dy", `${randomBetween(60, 190)}px`);
    petal.style.setProperty("--burst-rotate", `${randomBetween(120, 640)}deg`);
    layer.appendChild(petal);
    petal.addEventListener("animationend", () => petal.remove(), { once: true });
  }
}

function openAuth(tab = "login") {
  document.querySelector("[data-auth-modal]").classList.remove("is-hidden");
  setAuthTab(tab);
}

function closeAuth() {
  document.querySelector("[data-auth-modal]").classList.add("is-hidden");
}

function setAuthTab(tab) {
  document.querySelectorAll("[data-auth-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.authTab === tab);
  });
  document.querySelectorAll("[data-auth-form]").forEach((form) => {
    form.classList.toggle("is-hidden", form.dataset.authForm !== tab);
  });
}

function updateAuthUI() {
  const user = currentUser();
  document.querySelectorAll("[data-open-auth]").forEach((button) => button.classList.toggle("is-hidden", Boolean(user)));
  const pill = document.querySelector(".user-pill");
  pill.classList.toggle("is-hidden", !user);
  pill.textContent = user ? user.name.slice(0, 1).toUpperCase() : "";

  if (!user) return;
  document.querySelector("[data-dashboard-greeting]").textContent = `Selamat datang, ${user.name}. Target belajar Anda ${user.target}.`;
  document.querySelector("[data-xp]").textContent = user.xp;
  document.querySelector("[data-streak]").textContent = `${user.streak} hari`;
  document.querySelector("[data-reviewed]").textContent = user.reviewed;
  document.querySelector("[data-target-level]").textContent = user.target;
}

function recordActivity(text, xp = 0, reviewed = 0) {
  const user = currentUser();
  if (!user) return;
  user.xp += xp;
  user.reviewed += reviewed;
  user.streak = Math.max(user.streak, 1);
  user.activities.unshift(text);
  user.activities = user.activities.slice(0, 6);
  saveState();
  updateAuthUI();
  renderDashboard();
  renderLeaderboard();
}

function renderDashboard() {
  const pathWrap = document.querySelector("[data-daily-path]");
  pathWrap.innerHTML = dashboardPath.map((item) => {
    const action = item.action === "quiz"
      ? 'data-view="quiz"'
      : item.action === "flashcard"
        ? `data-flashcard-slug="${item.slug}"`
        : `data-lesson-slug="${item.slug}"`;
    return `
      <div class="path-item">
        <span>${data.lessonDetails[slugToTitle[item.slug]] ? data.lessonDetails[slugToTitle[item.slug]].symbol || "学" : "学"}</span>
        <div><strong>${item.task}</strong><p>${item.time}</p></div>
        <button class="text-link nav-action" ${action}>Buka</button>
      </div>
    `;
  }).join("");

  const user = currentUser();
  const logs = user?.activities?.length ? user.activities : ["Belum ada aktivitas. Mulai dari flashcard atau kuis cepat."];
  document.querySelector("[data-activity-log]").innerHTML = logs.map((log) => `<li>${log}</li>`).join("");
}

function renderCategories() {
  document.querySelector("[data-category-list]").innerHTML = data.categories
    .map(([name, count]) => `<span>${name} <b>${count}</b></span>`)
    .join("");
}

function renderKana() {
  const rows = data.kana[activeKana];
  const grid = document.querySelector("[data-kana-grid]");
  grid.classList.toggle("is-kanji-grid", activeKana === "kanji");
  grid.innerHTML = rows.map(([char, romaji, meaning]) => `
    <article class="kana-tile ${activeKana === "kanji" ? "kanji-tile" : ""}">
      <strong>${char}</strong>
      <span>${romaji}</span>
      <small>${meaning}</small>
    </article>
  `).join("");
}

function renderLessons() {
  const countLabel = document.querySelector("[data-lesson-count]");
  if (countLabel) countLabel.textContent = `${data.lessons.length} modul`;

  document.querySelector("[data-lesson-grid]").innerHTML = data.lessons.map((lesson) => `
    <article class="lesson-card">
      <div>
        <span class="lesson-symbol">${lesson[0]}</span>
        <h2>${lesson[1]}</h2>
        <span class="lesson-level">${lesson[2]}</span>
        <p>${lesson[3]}</p>
      </div>
      <button class="text-link" data-lesson-open="${lesson[1]}">Mulai Materi</button>
    </article>
  `).join("");
}

function showLessonNotFound() {
  activeLesson = "";
  const setText = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
  setText("[data-lesson-level]", "—");
  setText("[data-lesson-title]", "Materi tidak ditemukan");
  setText("[data-lesson-summary]", "Maaf, materi yang Anda buka tidak tersedia di aplikasi ini.");
  const goals = document.querySelector("[data-lesson-goals]"); if (goals) goals.innerHTML = "";
  const body = document.querySelector("[data-lesson-body]");
  if (body) body.innerHTML = "<p>Periksa kembali menu <strong>Materi Belajar</strong> atau gunakan pencarian di bagian atas.</p>";
  const ex = document.querySelector("[data-lesson-examples]"); if (ex) ex.innerHTML = "";
  const vb = document.querySelector("[data-lesson-vocab]"); if (vb) vb.innerHTML = "";
  const pr = document.querySelector("[data-lesson-practice]"); if (pr) pr.textContent = "";
  setView("lesson-detail");
}

function renderLessonDetail() {
  const lesson = data.lessonDetails[activeLesson];
  if (!lesson) { showLessonNotFound(); return; }
  document.querySelector("[data-lesson-level]").textContent = lesson.level;
  document.querySelector("[data-lesson-title]").textContent = activeLesson;
  document.querySelector("[data-lesson-summary]").textContent = lesson.summary;
  document.querySelector("[data-lesson-goals]").innerHTML = (lesson.goals || []).map((goal) => `<li>${goal}</li>`).join("");
  document.querySelector("[data-lesson-body]").innerHTML = (lesson.body || []).map((paragraph) => `<p>${paragraph}</p>`).join("");
  document.querySelector("[data-lesson-examples]").innerHTML = (lesson.examples || []).map((example) => `<div>${example}</div>`).join("");
  document.querySelector("[data-lesson-vocab]").innerHTML = (lesson.vocab || []).map((row) => `
    <div><strong>${row[0]}</strong><span>${row[1]}</span><small>${row[2]}</small></div>
  `).join("");
  document.querySelector("[data-lesson-practice]").textContent = lesson.practice || "";
}

function openLesson(title) {
  if (!data.lessonDetails[title]) { showLessonNotFound(); return; }
  activeLesson = title;
  const targetHash = "lesson=" + encodeURIComponent(titleToSlug[title] || slugify(title));
  if (typeof location !== "undefined" && (location.hash || "").replace(/^#/, "") !== targetHash) {
    location.hash = targetHash;
  }
  renderLessonDetail();
  recordActivity(`Membuka materi ${activeLesson}`, 5, 0);
  setView("lesson-detail");
}

function openLessonBySlug(slug) {
  const title = slugToTitle[slug];
  if (!title) { showLessonNotFound(); return; }
  openLesson(title);
}

function applyHash() {
  if (typeof location === "undefined") return;
  const m = (location.hash || "").match(/lesson=([^&]+)/);
  if (!m) return;
  const slug = decodeURIComponent(m[1]);
  const title = slugToTitle[slug];
  if (!title) return;
  openLesson(title);
}

function openLessonFlashcard(title = activeLesson) {
  const lesson = data.lessonDetails[title] || data.lessonDetails["Hiragana Dasar"];
  activeDeckTitle = title;
  activeDeckCards = buildLessonDeck(title, lesson);
  activeCard = 0;
  renderCard();
  setView("flashcard");
}

function buildLessonDeck(title, lesson) {
  if (title.includes("Hiragana")) {
    return data.kana.hiragana.map((row) => [title, row[0], `${row[1]} - ${row[2]}`]);
  }

  if (title.includes("Katakana")) {
    return data.kana.katakana.map((row) => [title, row[0], `${row[1]} - ${row[2]}`]);
  }

  if (title.includes("Kanji")) {
    return data.kana.kanji.map((row) => [title, row[0], `${row[1]} - ${row[2]}`]);
  }

  const symbol = lesson.symbol || title;
  const mainCard = [
    title,
    symbol,
    `${title} - ${lesson.summary}`
  ];
  const exampleCards = lesson.examples.slice(0, 3).map((example) => [
    title,
    example,
    "Contoh pola dari materi ini"
  ]);
  const vocabCards = [...lesson.vocab]
    .sort((a, b) => Number(b[0] === symbol) - Number(a[0] === symbol))
    .map((row) => [title, row[0], `${row[1]} - ${row[2]}`]);

  if (title === "Kamus Kosakata" || title.startsWith("Kosakata ") || title.startsWith("Vokasi ")) {
    return [...vocabCards, ...exampleCards];
  }

  if (title.includes("Partikel")) {
    return [mainCard, ...vocabCards, ...exampleCards];
  }

  return [mainCard, ...exampleCards, ...vocabCards];
}

function renderCard() {
  const cards = activeDeckCards || data.cards;
  const card = cards[activeCard % cards.length];
  cardFlipped = false;
  const studyCard = document.querySelector("[data-flip-card]");
  const heading = document.querySelector("[data-flashcard-heading]");
  const subtitle = document.querySelector("[data-flashcard-subtitle]");
  const progress = document.querySelector("[data-card-progress]");
  const hint = document.querySelector("[data-card-hint]");
  if (heading) heading.textContent = activeDeckCards ? `Review ${activeDeckTitle}` : "Kartu Belajar Pintar";
  if (subtitle) {
    subtitle.textContent = activeDeckCards
      ? "Deck ini dibuat dari isi materi yang sedang Anda buka."
      : "Balik kartu, nilai daya ingat, dan simpan progres akun lokal.";
  }
  if (studyCard) studyCard.classList.remove("is-flipped");
  if (progress) progress.textContent = `${(activeCard % cards.length) + 1}/${cards.length}`;
  if (hint) hint.textContent = "Klik kartu untuk lihat jawaban";
  document.querySelector("[data-card-label]").textContent = activeDeckCards ? `Review ${activeDeckTitle}` : card[0];
  document.querySelector("[data-card-front]").textContent = card[1];
  const back = document.querySelector("[data-card-back]");
  back.textContent = card[2];
  back.classList.add("is-hidden");
}

function startQuiz(lessonTitle) {
  activeQuestion = 0;
  quizAnswered = false;
  if (lessonTitle) {
    const qs = buildLessonQuestions(lessonTitle);
    if (qs.length) {
      activeQuizLesson = lessonTitle;
      activeQuizQuestions = qs;
    } else {
      activeQuizLesson = null;
      activeQuizQuestions = [];
    }
  } else {
    activeQuizLesson = null;
    activeQuizQuestions = buildGeneralQuestions();
  }
  renderQuestion();
  setView("quiz");
}

function renderQuestion() {
  const countEl = document.querySelector("[data-question-count]");
  const scoreEl = document.querySelector("[data-quiz-score]");
  const textEl = document.querySelector("[data-question-text]");
  const choicesEl = document.querySelector("[data-quiz-choices]");
  const topicEl = document.querySelector("[data-quiz-topic]");
  const nextBtn = document.querySelector("[data-next-question]");
  const explainBox = document.querySelector("[data-quiz-explanation]");
  if (explainBox) explainBox.classList.add("is-hidden");
  if (scoreEl) scoreEl.textContent = `${currentUser()?.xp || 0} XP`;

  if (!activeQuizQuestions.length) {
    if (countEl) countEl.textContent = activeQuizLesson ? `Materi: ${activeQuizLesson}` : "Latihan Soal";
    if (topicEl) topicEl.textContent = "";
    if (textEl) textEl.textContent = activeQuizLesson
      ? `Latihan untuk materi ini belum tersedia.`
      : "Belum ada soal tersedia.";
    if (choicesEl) choicesEl.innerHTML = "";
    if (nextBtn) {
      nextBtn.textContent = "Coba Latihan Campuran";
      nextBtn.dataset.quizFallback = "1";
    }
    return;
  }

  const question = activeQuizQuestions[activeQuestion];
  quizAnswered = false;
  if (nextBtn) {
    nextBtn.textContent = "Soal Berikutnya";
    delete nextBtn.dataset.quizFallback;
  }
  if (countEl) {
    countEl.textContent = `Soal ${activeQuestion + 1}/${activeQuizQuestions.length}`;
  }
  if (topicEl) topicEl.textContent = activeQuizLesson ? `Materi: ${activeQuizLesson}` : "Kuis Campuran";
  if (textEl) textEl.textContent = question.question;
  if (choicesEl) {
    choicesEl.innerHTML = question.options.map((choice, index) => `
      <button data-choice="${index}">${choice}</button>
    `).join("");
  }
}

function renderLeaderboard() {
  const users = state.users.map((user) => ({ name: user.name, xp: user.xp, target: user.target }));
  const rows = [
    { name: "Alya Sakura", xp: 1280, target: "N4" },
    { name: "Raka Nihongo", xp: 980, target: "N3" },
    { name: "Dina Kanji", xp: 740, target: "N5" },
    ...users
  ].sort((a, b) => b.xp - a.xp).slice(0, 8);

  document.querySelector("[data-leaderboard]").innerHTML = rows.map((row, index) => `
    <article class="leaderboard-row">
      <span class="rank">${index + 1}</span>
      <div><strong>${row.name}</strong><p>Target JLPT ${row.target}</p></div>
      <strong>${row.xp} XP</strong>
    </article>
  `).join("");
}

function renderSearch(query = "") {
  const haystack = [
    ...data.lessons.map((item) => ({ type: "Materi", title: item[1], body: item[3], view: "lesson-detail", lesson: item[1] })),
    ...data.categories.map((item) => ({ type: "Kosakata", title: item[0], body: item[1], view: "lessons" })),
    ...Object.values(data.kana).flat().map((item) => ({ type: "Aksara", title: `${item[0]} ${item[1]}`, body: item[2], view: "kana" })),
    ...data.cards.map((item) => ({ type: "Flashcard", title: item[1], body: item[2], view: "flashcard" }))
  ];
  const normalized = query.trim().toLowerCase();
  const matches = haystack.filter((item) => {
    const text = `${item.type} ${item.title} ${item.body}`.toLowerCase();
    return !normalized || text.includes(normalized);
  }).slice(0, 10);

  document.querySelector("[data-search-results]").innerHTML = matches.map((item) => `
    <button class="search-result" data-search-target="${item.view}" ${item.lesson ? `data-lesson-open="${item.lesson}"` : ""}>
      <span>${item.type}</span>
      <strong>${item.title}</strong>
      <small>${item.body}</small>
    </button>
  `).join("");
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeAuth();

  if (event.target.closest("[data-close-search]")) {
    document.querySelector("[data-search-modal]").classList.add("is-hidden");
  }

  const target = event.target.closest("button");
  if (!target) return;

  if (target.matches(".mobile-menu")) {
    document.querySelector(".topbar").classList.toggle("menu-open");
  }

  if (target.dataset.view) {
    const rect = target.getBoundingClientRect();
    bloomSakura(rect.left + rect.width / 2, rect.top + rect.height / 2);
    if (target.dataset.view === "flashcard" && !target.dataset.keepDeck) setGenericDeck();
    if (target.dataset.view === "quiz") {
      startQuiz(null);
      return;
    }
    setView(target.dataset.view);
  }

  if (target.dataset.openAuth) {
    openAuth(target.dataset.openAuth);
  }

  if (target.matches("[data-open-search]")) {
    document.querySelector("[data-search-modal]").classList.remove("is-hidden");
    renderSearch();
    document.querySelector("[data-search-input]").focus();
  }

  if (target.dataset.authTab) setAuthTab(target.dataset.authTab);

  if (target.dataset.kanaTab) {
    activeKana = target.dataset.kanaTab;
    document.querySelectorAll("[data-kana-tab]").forEach((button) => {
      button.classList.toggle("is-active", button === target);
    });
    renderKana();
  }

  if (target.dataset.lessonOpen) {
    openLesson(target.dataset.lessonOpen);
  }

  if (target.dataset.lessonSlug) {
    openLessonBySlug(target.dataset.lessonSlug);
  }

  if (target.dataset.flashcardLesson) {
    openLessonFlashcard(target.dataset.flashcardLesson);
  }

  if (target.dataset.flashcardSlug) {
    openLessonFlashcard(slugToTitle[target.dataset.flashcardSlug] || activeLesson);
  }

  if (target.matches("[data-open-lesson-flashcard]")) {
    openLessonFlashcard(activeLesson);
  }

  if (target.matches("[data-lesson-quiz]")) {
    startQuiz(activeLesson);
  }

  if (target.matches("[data-start-learning]")) {
    currentUser() ? setView("dashboard") : openAuth("register");
  }

  if (target.matches("[data-flip-card]")) {
    cardFlipped = !cardFlipped;
    target.classList.toggle("is-flipped", cardFlipped);
    document.querySelector("[data-card-back]").classList.toggle("is-hidden", !cardFlipped);
    const hint = document.querySelector("[data-card-hint]");
    if (hint) hint.textContent = cardFlipped ? "Pilih nilai ingatan di kanan" : "Klik kartu untuk lihat jawaban";
  }

  if (target.dataset.grade) {
    const label = target.textContent.trim();
    recordActivity(`Flashcard dinilai: ${label}`, Number(target.dataset.grade) * 2, 1);
    const cards = activeDeckCards || data.cards;
    activeCard = (activeCard + 1) % cards.length;
    renderCard();
  }

  if (target.dataset.choice !== undefined && !quizAnswered) {
    quizAnswered = true;
    const question = activeQuizQuestions[activeQuestion];
    const index = Number(target.dataset.choice);
    target.classList.add(index === question.correctAnswer ? "is-correct" : "is-wrong");
    if (index === question.correctAnswer) {
      recordActivity(`Menjawab kuis dengan benar (${question.lessonId})`, 10, 0);
    }
    const explainBox = document.querySelector("[data-quiz-explanation]");
    if (explainBox) {
      explainBox.textContent = question.explanation || "";
      explainBox.classList.toggle("is-hidden", !question.explanation);
    }
  }

  if (target.matches("[data-next-question]")) {
    if (target.dataset.quizFallback) {
      startQuiz(null);
      return;
    }
    activeQuestion = (activeQuestion + 1) % activeQuizQuestions.length;
    renderQuestion();
  }

  if (target.matches("[data-logout]")) {
    state.currentEmail = "";
    saveState();
    updateAuthUI();
    setView("home");
  }

  if (target.dataset.searchTarget) {
    document.querySelector("[data-search-modal]").classList.add("is-hidden");
    if (!target.dataset.lessonOpen) setView(target.dataset.searchTarget);
  }
});

document.querySelector("[data-auth-form='register']").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const email = String(formData.get("email")).toLowerCase();
  const message = document.querySelector("[data-register-message]");

  if (state.users.some((user) => user.email === email)) {
    message.textContent = "Email sudah terdaftar. Silakan masuk.";
    return;
  }

  const user = {
    name: String(formData.get("name")).trim(),
    email,
    password: String(formData.get("password")),
    target: String(formData.get("target")),
    xp: 25,
    streak: 1,
    reviewed: 0,
    activities: ["Akun gratis berhasil dibuat", "Bonus awal +25 XP"]
  };
  state.users.push(user);
  state.currentEmail = email;
  saveState();
  form.reset();
  message.textContent = "";
  closeAuth();
  updateAuthUI();
  renderDashboard();
  renderLeaderboard();
  setView("dashboard");
});

document.querySelector("[data-auth-form='login']").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const email = String(formData.get("email")).toLowerCase();
  const password = String(formData.get("password"));
  const user = state.users.find((item) => item.email === email && item.password === password);
  const message = document.querySelector("[data-login-message]");

  if (!user) {
    message.textContent = "Email atau password tidak cocok.";
    return;
  }

  state.currentEmail = email;
  saveState();
  form.reset();
  message.textContent = "";
  closeAuth();
  updateAuthUI();
  renderDashboard();
  renderLeaderboard();
  setView("dashboard");
});

document.querySelector("[data-search-input]").addEventListener("input", (event) => {
  renderSearch(event.target.value);
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("[data-search-modal]").classList.remove("is-hidden");
    renderSearch();
    document.querySelector("[data-search-input]").focus();
  }

  if (event.key === "Escape") {
    closeAuth();
    document.querySelector("[data-search-modal]").classList.add("is-hidden");
  }
});

document.querySelectorAll(".quiz-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".quiz-option").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

renderCategories();
renderKana();
renderLessons();
renderLessonDetail();
renderCard();
activeQuizQuestions = buildGeneralQuestions();
renderQuestion();
renderDashboard();
renderLeaderboard();
updateAuthUI();
initSakura();

if (typeof window !== "undefined" && window.addEventListener) {
  window.addEventListener("hashchange", applyHash);
  applyHash();
}
