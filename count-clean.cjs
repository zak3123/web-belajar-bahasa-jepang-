const fs = require('fs');
const content = fs.readFileSync('./app-data.js', 'utf-8');

// Extract all module titles from extraLessonModules pattern: ["symbol", "title", "level"...]
const titles = [];
const regex = /\[\s*"[^"]+"\s*,\s*"([^"]+)"\s*,\s*"[^"]+"\s*,/g;
let match;

while ((match = regex.exec(content)) !== null) {
    const title = match[1];
    if (!title.includes('lesson') && !title.includes('Data') && !title.includes('lesson')) {
        titles.push(title);
    }
}

console.log('=== TOTAL MATERI LEARNING JEPANG ===\n');
console.log(`📚 Total Lessons: ${titles.length}\n`);

console.log('📋 Breakdown by Type:');
console.log(`   Vocabulary/Tematik/Vokasi: ~25 modul`);
console.log(`   Grammar (Non-Partikel): ~32 modul`);
console.log(`   Reading/Listening: ~9 modul + JLPT Simulasi: 3`);

console.log('\n✅ VALID: 22 modul (dari audit gen-audit)');
console.log('ℹ️ TIDAK CUKUP DATA: ' + (titles.length - 22) + ' modul');

console.log('\n📖 ALL LESSONS LISTED:\n');
titles.forEach((title, idx) => {
    console.log(`${(idx + 1).toString().padStart(2)}. ${title}`);
});
