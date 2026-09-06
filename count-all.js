const fs = require('fs');
const content = fs.readFileSync('./app-data.js', 'utf-8');

// Count from lessonDetails (original) - first few lines after "lessonDetails:"
const lessonDetailsMatch = content.match(/lessonDetails:\s*\{([^}]*?)\n\s*\}/);
let originalLessons = [];

if (lessonDetailsMatch) {
    const matchLines = lessonDetailsMatch[1].split('\n').filter(line => {
        return line.trim().match(/^\s*"[^"]+"\s*:\s*\{/);
    });
    originalLessons = matchLines.map(line => {
        return line.match(/"([^"]+)"/)[1];
    });
}

// Count from extraLessonModules array
const extraMatch = content.match(/const extraLessonModules = \[\s*\[(.*?)\]\s*\]/s);
let extraLessons = [];

// Look for pattern [symbol, title, level, ...] 
const moduleMatches = content.matchAll(/\[\s*"[^"]+"\s*,\s*"([^"]+)"\s*,\s*"[^"]+"\s*,/g);
moduleMatches.forEach(m => {
    if (!m[1].includes('lesson') && !m[1].includes('Data')) {
        extraLessons.push(m[1]);
    }
});

console.log('=== TOTAL MATERI LEARNING JEPANG ===\n');
console.log(`📚 Original Lessons (from lessonDetails): ${originalLessons.length}`);
console.log(`   - ${originalLessons.join(', ')}`);
console.log(`\n📚 Extra Lessons (from extraLessonModules): ${extraLessons.length}`);
console.log(`   Total modules in extraLessonModules: ${content.split('"").length / 2 - 10}\n`);

console.log('✅ VALID: 22 modul (dari audit)');
console.log('ℹ️ TIDAK CUKUP DATA: ' + (originalLessons.length + extraLessons.length - 22) + ' modul');
console.log(`\n🎯 GRAND TOTAL: ${originalLessons.length + extraLessons.length} modul`);

// List all lessons
console.log('\n📖 FULL LIST OF ALL LESSONS:\n');
const allLessons = [...originalLessons.slice(0, 8), ...extraLessons];
allLessons.forEach((title, idx) => {
    console.log(`${(idx + 1).toString().padStart(2)}. ${title}`);
});
