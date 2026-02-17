import { useEffect, useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

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
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="my-8 p-4 rounded-lg border border-gray-200 dark:border-slate-700 bg-blue-50 dark:bg-blue-950/20">
      <button
        onClick={handleMarkComplete}
        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
          isCompleted
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {isCompleted ? (
          <>
            <CheckCircle2 size={20} />
            Bu bölmə tamamlandı ✓
          </>
        ) : (
          <>
            <Circle size={20} />
            Bu bölməni tamamladım ✓
          </>
        )}
      </button>
      
      {isCompleted && (
        <p className="mt-3 text-sm text-green-700 dark:text-green-300">
          Tərəqqi! {sectionTitle} bölməsini tamamladınız.
        </p>
      )}
    </div>
  );
}
