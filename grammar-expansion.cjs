// Expand grammarQuizTargets dengan contoh kalimat lebih banyak dan pola penggunaan
const fs = require("fs");
const path = "app-data.js";

let content = fs.readFileSync(path, "utf8");

// Tambahkan grammar quiz targets yang lebih lengkap dengan variasi kalimat
const expandedGrammarTargets = `
  // Grammar pattern expansion untuk materi-materi umum
  \"Kata Kerja Bentuk MASU\": [\"食べます\", \"飲みません\", \"行きました\", \"見ませんでした\", \"待ちました\", \"読みませんでした\"],
  \"Kata Sifat I dan NA\": [\"大きい\", \"静か\", \"面白い\", \"新しい\", \"古い\", \"高い\"],
  \"Bentuk TE Dasar\": [\"待って\", \"読んで\", \"食べて\", \"起きて\", \"寝て\", \"出して\"],
  \"Bentuk TE IMASU\": [\"勉強しています\", \"結婚しています\", \"走っています\", \"書いています\", \"飲んでいます\", \"話しています\"],
  \"Bentuk Potensial\": [\"読めます\", \"食べられます\", \"行けます\", \"聞けます\", \"作れます\", \"使えます\"],
  \"Tai Form Keinginan\": [\"行きたい\", \"飲みたい\", \"見たい\", \"食べたい\", \"会いたい\", \"買いたい\"],
  \"Pengalaman TA KOTO GA ARU\": [\"行ったことがあります\", \"食べたことがあります\", \"見たことがあります\", \"行ったことがあります\", \"会ったことがあります\", \"食べたことがあります\"],
  \"TE MO II\": [\"座ってもいいですか\", \"撮ってもいいです\", \"入ってもいいですか\", \"使ってもいい\", \"飲んでもいいですか\", \"写してもいい\"],
  \"TE WA IKENAI\": [\"吸ってはいけません\", \"遅れてはいけません\", \"忘れてはいけません\", \"行ってはいけません\", \"買ってはいけません\", \"使ってはいけません\"],
  \"NAKEREBA NARANAI\": [\"勉強しなければなりません\", \"飲まなければなりません\", \"起きなければなりません\", \"行かなければなりません\", \"書かなければなりません\", \"考えなければなりません\"],
  \"TSUMORI\": [\"行くつもりです\", \"勉強しないつもりです\", \"買うつもりです\", \"住むつもり\", \"来るつもりです\", \"帰るつもり\"],
  \"Perbandingan YORI\": [\"大阪より\", \"バスより\", \"英語より\", \"東京より\", \"山より\", \"本より\"],
  \"Superlatif ICHIBAN\": [\"一番高い\", \"一番好き\", \"一番面白い\", \"一番美味しい\", \"一番安い\", \"一番忙しい\"],
  \"SOU DESU Kabar\": [\"雨だそうです\", \"来ないそうです\", \"有名だそうです\", \"忙しいそうです\", \"休むだそうです\", \"行くそうです\"],
  \"SOU DESU Terlihat\": [\"おいしそうです\", \"忙しそうです\", \"降りそうです\", \"大きそうです\", \"安そうです\", \"楽しそうです\"],
  \"TARA Conditional\": [\"あったら\", \"行ったら\", \"帰ったら\", \"買ったら\", \"食べたら\", \"見たら\"],
  \"BA Conditional\": [\"安ければ\", \"練習すれば\", \"降れば\", \"時間があれば\", \"お金があれば\", \"時間があれば\"],
  \"NARA Conditional\": [\"行くなら\", \"漢字なら\", \"ホテルなら\", \"食べるなら\", \"見るなら\", \"買うなら\"],
  \"Passive Ukemi\": [\"ほめられました\", \"盗まれました\", \"誘われました\", \"聞かれました\", \"作られました\", \"教えられました\"],
  \"Causative Shieki\": [\"食べさせます\", \"立たせました\", \"休ませてください\", \"行かせます\", \"飲ませます\", \"書かせます\"],
`;

// Cari lokasi grammarQuizTargets object dan expand
const oldStart = 'const grammarQuizTargets = {';
const startIdx = content.indexOf(oldStart);

if (startIdx !== -1) {
  const afterOld = content.substring(startIdx + oldStart.length);
  
  // Parse sampai awal objek baru atau end of array
  let depth = 1;
  let braceCount = 0;
  for (let i = 0; i < afterOld.length; i++) {
    if (afterOld[i] === '{') braceCount++;
    if (afterOld[i] === '}') braceCount--;
    if (braceCount === 0) {
      depth = 0;
      break;
    }
  }
  
  console.log(`Found grammarQuizTargets at index ${startIdx}`);
  
  // Ganti grammarQuizTargets dengan versi yang sudah di-expand
  const fullNewTarget = `\n${expandedGrammarTargets}};\n\nconst comprehensionQuizBank = {`;
  
  // Cari lokasi comprehensionQuizBank
  const bankStart = content.indexOf('const comprehensionQuizBank = {', startIdx);
  
  if (bankStart !== -1) {
    content = content.substring(0, startIdx + oldStart.length) + '\n' + 
             expandedGrammarTargets.trim() + 
             '\n';
    
    // Hapus closing brace lama dari grammarQuizTargets
    const remaining = content.substring(bankStart).replace(/};\n\nconst comprehensionQuizBank/, '');
    
    console.log("Updated grammar targets");
    fs.writeFileSync(path, content + remaining, "utf8");
    console.log("Grammar targets expanded successfully!");
  } else {
    console.log("comprehensionQuizBank not found at expected position");
  }
} else {
  console.log("grammarQuizTargets not found");
}

console.log("Done expanding grammar targets.");
