import { useEffect, useState } from 'react';

export default function LevelCard({ level, title, maxLevel = 6, duration, children, roadmapSlug = 'general' }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Check if level is completed
        const lessonId = `${roadmapSlug}-level-${level}`; // Assuming format like "c-level-1"
        const storageKey = `devmaps_progress_${roadmapSlug}_${lessonId}`;

        // Simple check: if completed in storage, 100%. Else 0%.
        // Ideally we would split levels into sub-tasks but for now this matches the Astro logic/intent
        const isCompleted = localStorage.getItem(storageKey) === 'true';
        if (isCompleted) {
            setProgress(100);
        }

        // Listen to updates
        const handleUpdate = (e) => {
            const { lessonId: updatedId, isCompleted } = e.detail;
            if (updatedId === lessonId) {
                setProgress(isCompleted ? 100 : 0);
            }
        };

        window.addEventListener('progress-updated', handleUpdate);
        return () => window.removeEventListener('progress-updated', handleUpdate);
    }, [level, roadmapSlug]);

    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="my-8 p-6 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
            {/* Header with Level Badge */}
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <div className="mt-2 flex items-center gap-3">
                        {/* Level Badge */}
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 dark:bg-blue-600 text-white font-bold text-sm">
                            {level}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            Level {level}/{maxLevel}
                        </span>
                        {duration && (
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                • {duration}
                            </span>
                        )}
                    </div>
                </div>

                {/* Completion Ring */}
                <div className="flex-shrink-0">
                    <div className="relative w-12 h-12">
                        <svg className="w-full h-full" viewBox="0 0 50 50">
                            <circle
                                cx="25"
                                cy="25"
                                r="22"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-gray-200 dark:text-slate-700"
                            />
                            <circle
                                cx="25"
                                cy="25"
                                r="22"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="text-blue-500 transition-all duration-300"
                                transform="rotate(-90 25 25)"
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-300">
                            {Math.round(progress)}%
                        </span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mt-4 prose dark:prose-invert max-w-none text-sm">
                {children}
            </div>
        </div>
    );
}
