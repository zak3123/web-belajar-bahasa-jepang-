// JLPT Quick Quiz Handler - dengan pilihan jumlah soal
// Ditambahkan untuk mengatasi masalah kuis terlalu banyak soal tanpa kontrol

let JLPT_QUIZ_SELECTION = {
  isOpen: false,
  selectedCount: 10, // Default 10 soal
  levels: ["N5"]
};

// Popup Modal untuk Pilih Jumlah Soal
function showJLPTQuizSelection(level = "N5") {
  const overlay = document.createElement("div");
  overlay.className = "quiz-selection-overlay";
  overlay.innerHTML = `
    <div class="quiz-selection-modal">
      <div class="quiz-selection-header">
        <h3>🎌 Kuis Cepat JLPT ${level}</h3>
        <button class="close-selection" onclick="closeJLPTQuizSelection()">✕</button>
      </div>
      
      <div class="quiz-selection-body">
        <p class="selection-instruction">Pilih jumlah soal yang ingin dikerjakan:</p>
        
        <div class="question-count-options">
          ${[5, 10, 15, 20, 30].map(count => `
            <button 
              class="count-btn ${count === 10 ? 'selected' : ''}" 
              data-count="${count}"
              onclick="selectQuestionCount(${count})"
            >
              ${count} Soal
              ${count === 10 ? '⭐ (Recommended)' : ''}
            </button>
          `).join('')}
        </div>
        
        <div class="level-selector">
          <p>Pilih Level JLPT:</p>
          <div class="level-chips">
            ${['N5', 'N4', 'N3', 'N2', 'N1'].map(lvl => `
              <button 
                class="level-chip ${lvl === 'N5' ? 'active' : ''}" 
                data-level="${lvl}"
                onclick="toggleJLPTLevel('${lvl}')"
              >
                ${lvl}
              </button>
            `).join('')}
          </div>
        </div>
        
        <div class="selection-summary">
          <p><strong>Summary:</strong></p>
          <p>Total soal: <span id="summary-count">${JLPT_QUIZ_SELECTION.selectedCount}</span></p>
          <p>Level: <span id="summary-levels">${JLPT_QUIZ_SELECTION.levels.join(', ')}</span></p>
        </div>
      </div>
      
      <div class="quiz-selection-footer">
        <button class="cancel-btn" onclick="closeJLPTQuizSelection()">Batal</button>
        <button class="start-btn" onclick="startJLPTQuickQuiz()">Mulai Kuis ▶</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  JLPT_QUIZ_SELECTION.isOpen = true;
  
  // Animasi fade in
  setTimeout(() => {
    overlay.querySelector('.quiz-selection-modal').classList.add('fade-in');
  }, 10);
}

function closeJLPTQuizSelection() {
  const overlay = document.querySelector('.quiz-selection-overlay');
  if (overlay) {
    overlay.classList.remove('fade-in');
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 200);
  }
  JLPT_QUIZ_SELECTION.isOpen = false;
}

function selectQuestionCount(count) {
  JLPT_QUIZ_SELECTION.selectedCount = count;
  
  // Update UI
  document.querySelectorAll('.count-btn').forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.count) === count);
  });
  
  // Update summary
  document.getElementById('summary-count').textContent = count;
}

function toggleJLPTLevel(level) {
  const idx = JLPT_QUIZ_SELECTION.levels.indexOf(level);
  
  if (idx > -1) {
    // Remove level
    JLPT_QUIZ_SELECTION.levels.splice(idx, 1);
  } else {
    // Add level (minimal 1 level)
    if (JLPT_QUIZ_SELECTION.levels.length < 5) {
      JLPT_QUIST_SELECTION.levels.push(level);
    }
  }
  
  // Update UI
  document.querySelectorAll('.level-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.level === level);
  });
  
  // Update summary
  document.getElementById('summary-levels').textContent = JLPT_QUIZ_SELECTION.levels.join(', ');
}

function startJLPTQuickQuiz() {
  // Close selection modal
  closeJLPTQuizSelection();
  
  // Start the quiz with selected parameters
  const activeLesson = `Simulasi JLPT ${JLPT_QUIZ_SELECTION.levels[0]}`;
  buildAndStartJLPTQuiz(activeLesson, JLPT_QUIZ_SELECTION.selectedCount, JLPT_QUIZ_SELECTION.levels);
}

function buildAndStartJLPTQuiz(lessonTitle, questionCount, levels) {
  console.log(`Building JLPT Quiz: ${questionCount} questions from ${levels.join(', ')}`);
  
  // Reset quiz state
  activeQuestion = 0;
  quizAnswered = false;
  quizCorrect = 0;
  quizWrong = 0;
  quizXp = 0;
  activeQuizLesson = lessonTitle;
  
  // Build questions pool from selected levels
  let allQuestions = [];
  
  levels.forEach(level => {
    const lessonSlug = titleToSlug[`Simulasi JLPT ${level}`];
    if (lessonSlug && data.lessonDetails[`Simulasi JLPT ${level}`]) {
      const lesson = data.lessonDetails[`Simulasi JLPT ${level}`];
      const vocab = lesson.vocab || [];
      
      // Generate quiz questions from vocabulary - improve quality
      vocab.forEach((row, idx) => {
        if (row[0] && row[2]) {
          const correct = row[2];
          const romaji = row[1] || '';
          
          // Create diverse question types for better engagement
          const questionTypes = [
            `Arti dari "${row[0]}" adalah...`,
            `Kata "${row[0]}" berarti...`,
            `"${row[0]}" dalam bahasa Indonesia artinya...`,
            `Apa terjemahan dari "${row[0]}"?`
          ];
          const randomQuestionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
          
          // Generate distractors with better variation
          const distractors = generateQualityDistractors(correct, vocab, row[2], romaji);
          
          if (distractors.length >= 3) {
            allQuestions.push({
              id: `jlpt_${level}_q${idx}_${Date.now()}`,
              lessonId: `Simulasi JLPT ${level}`,
              category: level,
              type: "vocabulary",
              question: randomQuestionType,
              options: shuffle([correct, ...distractors.slice(0, 3)]),
              correctAnswer: [correct, ...distractors.slice(0, 3)].indexOf(correct),
              explanation: `${romaji ? `"${row[0]}" dibaca "${romaji}" dan berarti "${correct}".` : `"${row[0]}" berarti "${correct}".`}`
            });
          }
        }
      });
    }
  });
  
  console.log(`Total questions in pool: ${allQuestions.length}`);
  console.log(`Requested question count: ${questionCount}`);
  
  // Ensure we have at least the requested amount or use available
  const finalCount = Math.min(questionCount, allQuestions.length);
  
  // Use Fisher-Yates shuffle for perfect randomization
  if (allQuestions.length > finalCount) {
    allQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, finalCount);
  }
  
  console.log(`Final questions for quiz: ${allQuestions.length}`);
  
  if (allQuestions.length === 0) {
    alert("Maaf, tidak ada pertanyaan yang tersedia untuk level yang dipilih.");
    return;
  }
  
  activeQuizQuestions = allQuestions;
  
  // Start rendering quiz
  renderQuizInterface();
  setView("quiz");
  
  // Show first question
  showQuizQuestion();
}

// Better distractor generation with quality control
function generateQualityDistractors(correctAnswer, vocabPool, currentIdx, romaji = '') {
  console.log(`Generating distractors for "${currentIdx}"`);
  
  // Get other meanings from vocab pool as distractors
  const otherMeanings = vocabPool
    .filter(row => row[2] !== correctAnswer && row[2] && row[2].trim().length > 0)
    .map(row => ({
      meaning: row[2],
      romaji: row[1] || '',
      original: row[0]
    }));
  
  // Shuffle and pick top 3-5 unique distractors
  const shuffled = otherMeanings.sort(() => Math.random() - 0.5);
  
  // Take up to 5 candidates then randomly select 3
  const candidates = shuffled.slice(0, Math.min(5, shuffled.length));
  const selectedDistractors = candidates.sort(() => Math.random() - 0.5).slice(0, 3);
  
  console.log(`Generated ${selectedDistractors.length} distractors`);
  
  return selectedDistractors.map(d => d.meaning);
}

// Add CSS styles for the selection modal
const modalStyles = `
  .quiz-selection-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
  }
  
  .quiz-selection-modal {
    background: #faf8f5;
    border-radius: 16px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease-out;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fade-in {
    animation: fadeIn 0.3s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .quiz-selection-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-bottom: 2px solid #e0d0b0;
    background: linear-gradient(135deg, #fff8f0, #fffefb);
  }
  
  .quiz-selection-header h3 {
    margin: 0;
    font-size: 24px;
    color: #c91818;
    font-weight: bold;
  }
  
  .close-selection {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    padding: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }
  
  .close-selection:hover {
    background: rgba(201, 24, 24, 0.1);
    color: #c91818;
  }
  
  .quiz-selection-body {
    padding: 32px;
  }
  
  .selection-instruction {
    font-size: 16px;
    color: #333;
    margin-bottom: 24px;
    text-align: center;
  }
  
  .question-count-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 12px;
    margin-bottom: 32px;
  }
  
  .count-btn {
    background: #fff;
    border: 2px solid #ddd;
    border-radius: 12px;
    padding: 16px 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  
  .count-btn:hover {
    border-color: #d4af37;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
  }
  
  .count-btn.selected {
    background: linear-gradient(135deg, #c91818, #e02828);
    color: white;
    border-color: #c91818;
    box-shadow: 0 6px 20px rgba(201, 24, 24, 0.4);
  }
  
  .count-btn span {
    font-size: 12px;
    font-weight: normal;
    opacity: 0.9;
  }
  
  .count-btn.selected span {
    opacity: 1;
  }
  
  .level-selector {
    margin-bottom: 24px;
  }
  
  .level-selector p {
    font-size: 16px;
    color: #333;
    margin-bottom: 16px;
    font-weight: 600;
  }
  
  .level-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  
  .level-chip {
    background: #fff;
    border: 2px solid #ddd;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .level-chip:hover {
    border-color: #d4af37;
    transform: scale(1.05);
  }
  
  .level-chip.active {
    background: linear-gradient(135deg, #2e5a27, #3a6b37);
    color: white;
    border-color: #2e5a27;
    box-shadow: 0 4px 12px rgba(46, 90, 39, 0.3);
  }
  
  .selection-summary {
    background: #f8f5f0;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 32px;
    border-left: 4px solid #d4af37;
  }
  
  .selection-summary p {
    margin: 8px 0;
    font-size: 15px;
    color: #444;
  }
  
  .selection-summary strong {
    color: #c91818;
  }
  
  .quiz-selection-footer {
    display: flex;
    gap: 16px;
    padding: 24px;
    border-top: 2px solid #e0d0b0;
    background: #faf8f5;
    border-radius: 0 0 16px 16px;
  }
  
  .cancel-btn, .start-btn {
    flex: 1;
    padding: 16px 24px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .cancel-btn {
    background: #f0f0f0;
    color: #666;
  }
  
  .cancel-btn:hover {
    background: #e0e0e0;
    transform: translateY(-2px);
  }
  
  .start-btn {
    background: linear-gradient(135deg, #2e5a27, #3a6b37);
    color: white;
    box-shadow: 0 4px 12px rgba(46, 90, 39, 0.3);
  }
  
  .start-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(46, 90, 39, 0.4);
  }
  
  /* Mobile responsive */
  @media (max-width: 768px) {
    .quiz-selection-modal {
      margin: 10px;
      max-height: 95vh;
    }
    
    .question-count-options {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .quiz-selection-footer {
      flex-direction: column;
    }
    
    .cancel-btn, .start-btn {
      padding: 14px 20px;
      font-size: 15px;
    }
  }
`;

// Inject styles into page
if (!document.getElementById('jlpt-quiz-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'jlpt-quiz-styles';
  styleSheet.textContent = modalStyles;
  document.head.appendChild(styleSheet);
}

// Export functions globally
window.showJLPTQuizSelection = showJLPTQuizSelection;
window.closeJLPTQuizSelection = closeJLPTQuizSelection;
window.selectQuestionCount = selectQuestionCount;
window.toggleJLPTLevel = toggleJLPTLevel;
window.startJLPTQuickQuiz = startJLPTQuickQuiz;
