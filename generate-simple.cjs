const fs = require('fs');

console.log("=== Generating JLPT Modules ===");

// Simple vocab arrays per level
const n5Vocab = ["私", "あなた", "先生", "学生", "学校", "友達", "父", "母", "日曜日", "月曜日", "水", "火", "木", "金", "土", "食べる", "飲む", "行く", "来る", "見る"];
const n4Vocab = ["会議", "連絡", "準備", "計画", "説明", "訪問", "経験", "提案", "管理", "設計", "健康", "病気", "病院", "薬", "熱", "晴れ", "雨", "雪", "風", "曇り"];
const n3Vocab = ["方針", "基準", "評価", "検討", "実現", "対応", "改善", "効率", "影響", "確保", "仕事", "職務", "責任", "任務", "役割"];
const n2Vocab = ["措置", "施策", "動向", "見解", "配慮", "調整", "反映", "促進", "経済", "財政", "政策", "制度", "法規", "条例", "義務"];
const n1Vocab = ["懸念", "覚悟", "趣旨", "趣向", "根底", "基調", "妥当", "断片的", "包括的", "相応", "深遠", "抽象的", "具体的", "形式的", "実質的"];

let modules = [];

// Generate vocabulary modules
n5Vocab.forEach((word, i) => modules.push({type: "vocabulary", level: "JLPT N5", title: `N5 Vocab ${i+1}: ${word}`}));
n4Vocab.forEach((word, i) => modules.push({type: "vocabulary", level: "JLPT N4", title: `N4 Vocab ${i+1}: ${word}`}));
n3Vocab.forEach((word, i) => modules.push({type: "vocabulary", level: "JLPT N3", title: `N3 Vocab ${i+1}: ${word}`}));
n2Vocab.forEach((word, i) => modules.push({type: "vocabulary", level: "JLPT N2", title: `N2 Vocab ${i+1}: ${word}`}));
n1Vocab.forEach((word, i) => modules.push({type: "vocabulary", level: "JLPT N1", title: `N1 Vocab ${i+1}: ${word}`}));

console.log(`Generated ${modules.length} vocabulary modules`);
fs.writeFileSync('jlpt-vocab-modules.json', JSON.stringify(modules, null, 2));
console.log('✅ Saved to jlpt-vocab-modules.json');
