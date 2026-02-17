import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

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
      if (finalScore === questions.length && confettiRef.current) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
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
      message = 'Əla!';
      emoji = '🎉';
    } else if (scorePercentage >= 80) {
      message = 'Yaxşı!';
      emoji = '👏';
    } else if (scorePercentage >= 60) {
      message = 'Yaxşıdır!';
      emoji = '✓';
    } else {
      message = 'Daha çox çalışmaq lazımdır!';
      emoji = '💪';
    }

    return (
      <div className="my-8 p-8 rounded-lg border-2 border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-950/20 text-center">
        <div className="text-6xl mb-4">{emoji}</div>
        <h3 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-2">
          {score}/{questions.length}
        </h3>
        <p className="text-xl text-green-700 dark:text-green-300 mb-6">
          {message} — {scorePercentage}%
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          <RotateCcw size={18} />
          Yenidən başla
        </button>
      </div>
    );
  }

  return (
    <div className="my-8 p-6 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Sual {currentQuestion + 1}/{questions.length}
          </span>
          <div className="w-32 h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        {question.q}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, idx) => {
          const selected = answers[currentQuestion] === idx;
          const isCorrectOption = idx === question.correctIndex;
          const isWrongSelected = selected && !isCorrect;

          let bgColor = 'bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 hover:border-blue-400';
          if (showResults[currentQuestion]) {
            if (isCorrectOption) {
              bgColor = 'bg-green-100 dark:bg-green-950/30 border-green-500 dark:border-green-400';
            } else if (isWrongSelected) {
              bgColor = 'bg-red-100 dark:bg-red-950/30 border-red-500 dark:border-red-400';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={isAnswered}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${bgColor} ${
                isAnswered ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium">
                    {option}
                  </p>
                </div>
                {showResults[currentQuestion] && (
                  <div>
                    {isCorrectOption && (
                      <CheckCircle2 size={20} className="text-green-500 dark:text-green-400 flex-shrink-0" />
                    )}
                    {isWrongSelected && (
                      <XCircle size={20} className="text-red-500 dark:text-red-400 flex-shrink-0" />
                    )}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResults[currentQuestion] && (
        <div className={`p-4 rounded-lg mb-6 ${
          isCorrect 
            ? 'bg-green-100 dark:bg-green-950/30 text-green-900 dark:text-green-100 border border-green-300 dark:border-green-400'
            : 'bg-blue-100 dark:bg-blue-950/30 text-blue-900 dark:text-blue-100 border border-blue-300 dark:border-blue-400'
        }`}>
          <p className="font-medium mb-1">
            {isCorrect ? '✓ Doğru!' : 'Ə İzah:'}
          </p>
          <p className="text-sm">{question.explanation}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <div />
        {isAnswered && !allAnswered && (
          <button
            onClick={handleNextQuestion}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Növbəti sual →
          </button>
        )}
        {!isAnswered && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Cavab seçin...
          </p>
        )}
      </div>
    </div>
  );
}
