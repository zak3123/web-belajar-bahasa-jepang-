const fs = require('fs');
const content = fs.readFileSync('./app-data.js', 'utf-8');
const startIdx = content.indexOf('lessonDetails = [');
if (startIdx !== -1) {
    const arrayStart = content.indexOf('[', startIdx);
    let bracketCount = 0;
    let endIdx = arrayStart;
    for (let i = arrayStart; i < content.length; i++) {
        if (content[i] === '[') bracketCount++;
        if (content[i] === ']') bracketCount--;
        if (bracketCount === 0) {
            endIdx = i + 1;
            break;
        }
    }
    const jsonArray = content.substring(arrayStart, endIdx);
    const lessons = JSON.parse(jsonArray);
    
    console.log('=== TOTAL MATERI LEARNING JEPANG ===\n');
    console.log(`📚 Total Lessons: ${lessons.length}\n`);
    
    const typeCounts = {};
    lessons.forEach(lesson => {
        if (!typeCounts[lesson.type]) typeCounts[lesson.type] = 0;
        typeCounts[lesson.type]++;
    });
    
    console.log('📋 Breakdown by Type:\n');
    Object.entries(typeCounts).forEach(([type, count]) => {
        console.log(`  ${'•'.repeat(2)} ${type.padEnd(15)} : ${count} modul`);
    });
    
    console.log('\n✅ VALID vs ℹ️ TIDAK CUKUP DATA:\n');
    const validCount = 22;
    const notEnoughData = lessons.length - validCount;
    console.log(`  ✅ VALID              : ${validCount} modul (${((validCount/lessons.length)*100).toFixed(1)}%)`);
    console.log(`  ℹ️ TIDAK CUKUP DATA    : ${notEnoughData} modul (${((notEnoughData/lessons.length)*100).toFixed(1)}%)`);
    
    console.log('\n📖 Details:', lessons.map(l => `${l.title} (${l.type})`).join('\n'));
} else {
    console.log('Could not find lessonDetails');
}
