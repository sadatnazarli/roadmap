import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuizBlock({ lessonId, questions = [] }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState({});
  const [score, setScore] = useState(null);
  const [mounted, setMounted] = useState(false);
  const confettiRef = useRef(null);

  const storageKey = `devmaps_quiz_${lessonId}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || questions.length === 0) {
    return null;
  }

  const question = questions[currentQuestion];
  if (!question) return null;

  const handleSelectOption = (optionIndex) => {
    if (answers[currentQuestion] !== undefined) return; // Already answered

    const newAnswers = {
      ...answers,
      [currentQuestion]: optionIndex,
    };
    setAnswers(newAnswers);
    setShowResults({
      ...showResults,
      [currentQuestion]: true,
    });

    const isCorrect = optionIndex === question.correctIndex;

    // Save to localStorage
    localStorage.setItem(storageKey, JSON.stringify(newAnswers));

    // Check if quiz is complete
    if (Object.keys(newAnswers).length === questions.length) {
      // Calculate final score
      let correctCount = 0;
      questions.forEach((q, idx) => {
        if (newAnswers[idx] === q.correctIndex) {
          correctCount++;
        }
      });

      const finalScore = correctCount;
      setScore(finalScore);

      // Trigger confetti if perfect score
      if (finalScore === questions.length) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#10b981', '#f59e0b']
        });
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleReset = () => {
    if (window.confirm('Sualları yenidən başlatmaq istəyirsiniz?')) {
      setCurrentQuestion(0);
      setAnswers({});
      setShowResults({});
      setScore(null);
      localStorage.removeItem(storageKey);
    }
  };

  const isAnswered = answers[currentQuestion] !== undefined;
  const isCorrect = isAnswered && answers[currentQuestion] === question.correctIndex;
  const allAnswered = Object.keys(answers).length === questions.length;

  // Render score screen
  if (score !== null) {
    const scorePercentage = Math.round((score / questions.length) * 100);
    let message = '';
    let emoji = '';

    if (score === questions.length) {
      message = 'Mükəmməl Nəticə!';
      emoji = '🏆';
    } else if (scorePercentage >= 80) {
      message = 'Çox Yaxşı!';
      emoji = '🎉';
    } else if (scorePercentage >= 60) {
      message = 'Yaxşıdır!';
      emoji = '👍';
    } else {
      message = 'Daha çox çalışmaq lazımdır!';
      emoji = '💪';
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="my-12 p-8 rounded-2xl border border-blue-200 dark:border-blue-900 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-center shadow-lg"
      >
        <div className="text-7xl mb-6 animate-bounce">{emoji}</div>
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
          {score}/{questions.length}
        </h3>
        <div className="w-full max-w-xs mx-auto h-3 bg-gray-200 dark:bg-slate-700 rounded-full mb-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${scorePercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full ${scorePercentage >= 80 ? 'bg-green-500' : 'bg-blue-500'}`}
          />
        </div>
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-8">
          {message} — {scorePercentage}%
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          <RotateCcw size={18} />
          Yenidən başla
        </button>
      </motion.div>
    );
  }

  return (
    <div className="my-10 p-1 rounded-2xl bg-gradient-to-br from-blue-100 to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-sm">
      <div className="bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-xl relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        {/* Progress */}
        <div className="relative mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Sual {currentQuestion + 1} <span className="text-slate-300 dark:text-slate-600">/</span> {questions.length}
            </span>
            <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
              Quiz
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question */}
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 leading-snug">
              {question.q}
            </h3>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {question.options.map((option, idx) => {
                const selected = answers[currentQuestion] === idx;
                const isCorrectOption = idx === question.correctIndex;
                const isWrongSelected = selected && !isCorrect;

                let borderClass = 'border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800';
                let bgClass = 'bg-white dark:bg-slate-900';
                let icon = <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-blue-400 transition-colors"></div>;

                if (showResults[currentQuestion]) {
                  if (isCorrectOption) {
                    borderClass = 'border-2 border-green-500 dark:border-green-500';
                    bgClass = 'bg-green-50 dark:bg-green-900/10';
                    icon = <CheckCircle2 className="w-6 h-6 text-green-500" />;
                  } else if (isWrongSelected) {
                    borderClass = 'border-2 border-red-500 dark:border-red-500';
                    bgClass = 'bg-red-50 dark:bg-red-900/10';
                    icon = <XCircle className="w-6 h-6 text-red-500" />;
                  } else {
                    borderClass = 'border-2 border-slate-100 dark:border-slate-800 opacity-50';
                  }
                } else if (selected) {
                  borderClass = 'border-2 border-blue-500';
                  bgClass = 'bg-blue-50 dark:bg-blue-900/10';
                  icon = <div className="w-5 h-5 rounded-full border-4 border-blue-500"></div>;
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`group w-full p-4 sm:p-5 rounded-xl text-left transition-all duration-200 flex items-center gap-4 ${borderClass} ${bgClass} ${isAnswered ? 'cursor-default' : 'cursor-pointer'
                      }`}
                  >
                    <div className="flex-shrink-0 pt-0.5">
                      {icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-medium text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showResults[currentQuestion] && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-xl mb-8 ${isCorrect
                    ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50'
                    : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50'
                  }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-1 p-1 rounded-full ${isCorrect ? 'bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-200' : 'bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-200'}`}>
                    {isCorrect ? <CheckCircle2 size={16} /> : <div className="font-bold text-xs px-1">i</div>}
                  </div>
                  <div>
                    <p className={`font-bold mb-1 ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-blue-800 dark:text-blue-200'}`}>
                      {isCorrect ? 'Doğrudur!' : 'İzah:'}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="text-sm font-medium text-slate-400">
            {isAnswered && !allAnswered ? 'Davam etmək üçün növbəti suala keçin' : ''}
          </div>
          {isAnswered && !allAnswered && (
            <button
              onClick={handleNextQuestion}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              Növbəti <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
