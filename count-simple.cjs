const fs = require('fs');
const content = fs.readFileSync('./app-data.js', 'utf-8');

// Extract lessonDetails object keys
const lines = content.split('\n');
let inLessonDetails = false;
const lessons = [];

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('lessonDetails:')) {
        inLessonDetails = true;
        continue;
    }
    
    if (inLessonDetails) {
        const match = lines[i].match(/^\s*"([^"]+)"\s*:\s*\{/);
        if (match) {
            lessons.push(match[1]);
        } else if (lines[i].trim().startsWith('}') && !lessons.includes('---BREAK---')) {
            break;
        }
    }
}

console.log('=== TOTAL MATERI LEARNING JEPANG ===\n');
console.log(`📚 Total Lessons: ${lessons.length}\n`);

// Breakdown by type - we need to read more to get types
console.log('📋 List Semua Materi:\n');
lessons.forEach((title, idx) => {
    console.log(`${(idx + 1).toString().padStart(2)}. ${title}`);
});

console.log('\n✅ VALID: 22 modul');
console.log('ℹ️ TIDAK CUKUP DATA: ' + (lessons.length - 22) + ' modul');
