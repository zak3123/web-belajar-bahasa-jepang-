const fs = require("fs");
const vm = require("vm");
const path = require("path");

function makeEl() {
  const el = {
    _text: "", _html: "", dataset: {},
    classList: { add() {}, remove() {}, toggle() {} },
    style: { setProperty() {} },
    addEventListener() {}, removeEventListener() {}, appendChild() {}, remove() {},
    closest() { return null; }, matches() { return false; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 10, height: 10 }; },
    querySelector() { return makeEl(); }, querySelectorAll() { return []; }, focus() {},
    set textContent(v) { this._text = v; }, get textContent() { return this._text; },
    set innerHTML(v) { this._html = v; }, get innerHTML() { return this._html; },
  };
  return el;
}
const doc = { querySelector() { return makeEl(); }, querySelectorAll() { return []; }, addEventListener() {}, createElement() { return makeEl(); } };
const storage = {};
const sandbox = {
  document: doc,
  window: { matchMedia: () => ({ matches: false }), scrollTo() {}, innerWidth: 1200, addEventListener() {} },
  localStorage: { getItem: (k) => (k in storage ? storage[k] : null), setItem: (k, v) => { storage[k] = v; }, removeItem: (k) => { delete storage[k]; } },
  console, setTimeout, Math, JSON, Date,
};
sandbox.window.document = doc;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);

const dir = path.join(__dirname, "..");
const appData = fs.readFileSync(path.join(dir, "app-data.js"), "utf8");
const script = fs.readFileSync(path.join(dir, "script.js"), "utf8");
const shim = `
;globalThis.__api = {
  openLesson, startQuiz, renderQuestion,
  buildLessonQuestions,
  get data(){ return data; },
  get activeQuizQuestions(){ return activeQuizQuestions; },
  get activeQuestion(){ return activeQuestion; },
};`;
vm.runInContext(appData + "\n" + script + shim, sandbox, { filename: "combined.js" });
console.log("Script loaded without throwing.");

const api = sandbox.__api;
function simulate(lessonTitle) {
  api.openLesson(lessonTitle);
  api.startQuiz(lessonTitle);
  const qs = api.activeQuizQuestions;
  if (!qs.length) { console.log(`[${lessonTitle}] -> 0 soal (fallback)`); return; }
  const q = qs[api.activeQuestion];
  console.log(`[${lessonTitle}] soal=${qs.length} | Q: ${q.question} | benar[${q.correctAnswer}]: ${q.options[q.correctAnswer]}`);
}
["Hiragana Dasar", "Katakana Dasar", "Kamus Kosakata", "Partikel WO untuk Objek", "Reading Dokkai", "Kanji N5-N1"].forEach(simulate);
api.startQuiz(null);
console.log("General quiz soal =", api.activeQuizQuestions.length);
api.renderQuestion();
console.log("renderQuestion() ok");
console.log("ALL RUNTIME CHECKS PASSED");
