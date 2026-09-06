// Perbaiki baris "Listening Podcast Edukasi" yang punya kurung ekstra ]]]
const fs = require("fs");
const path = "app-data.js";
let content = fs.readFileSync(path, "utf8");

const before = content;
// Ganti pola: green tea"]]]], "Ringkasan -> green tea"]], "Ringkasan
content = content.split('green tea"]]]], "Ringkasan').join('green tea"]], "Ringkasan');

if (content !== before) {
  fs.writeFileSync(path, content, "utf8");
  console.log("FIXED: kurung ekstra dihapus");
} else {
  console.log("NOT FOUND: pola tidak ditemukan, cek manual");
}
