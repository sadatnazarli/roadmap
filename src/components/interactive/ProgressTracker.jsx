import { useEffect, useState } from 'react';
import { Check, Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function ProgressTracker({
  lessonId,
  sectionTitle = 'Bu bölmə',
  roadmapSlug = 'general',
}) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const storageKey = `devmaps_progress_${roadmapSlug}_${lessonId}`;

  useEffect(() => {
    // Check if section is already completed
    const saved = localStorage.getItem(storageKey);
    setIsCompleted(saved === 'true');
    setMounted(true);
  }, [storageKey]);

  const handleMarkComplete = () => {
    const newState = !isCompleted;
    setIsCompleted(newState);
    localStorage.setItem(storageKey, newState ? 'true' : 'false');

    // Dispatch custom event for sidebar to listen to
    window.dispatchEvent(
      new CustomEvent('progress-updated', {
        detail: { lessonId, roadmapSlug, isCompleted: newState },
      })
    );

    if (newState) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#10b981', '#34d399']
      });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      layout
      className={`my-12 p-1 rounded-2xl transition-all duration-300 ${isCompleted ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-slate-200 dark:bg-slate-700'}`}
    >
      <div className={`p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 ${isCompleted ? 'bg-green-50 dark:bg-green-900/20' : 'bg-slate-50 dark:bg-slate-800'}`}>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            {isCompleted ? 'Təbriklər! 🎉' : 'Bölmə tamamlandı?'}
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {isCompleted ? `${sectionTitle} bölməsini uğurla bitirdiniz.` : 'Bu mövzunu mənimsədikdən sonra tamamlandı kimi işarələyin.'}
          </p>
        </div>

        <button
          onClick={handleMarkComplete}
          className={`relative group overflow-hidden px-6 py-3 rounded-xl font-bold shadow-sm transition-all duration-200 flex items-center gap-3 ${isCompleted
              ? 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/30'
              : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600'
            }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            {isCompleted ? (
              <>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white/20 p-1 rounded-full">
                  <Check size={18} />
                </motion.div>
                Tamamlandı
              </>
            ) : (
              <>
                <Circle size={18} className="text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors" />
                Tamamla
              </>
            )}
          </span>
          {isCompleted && (
            <motion.div
              layoutId="highlight"
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
            />
          )}
        </button>
      </div>
    </motion.div>
  );
}
