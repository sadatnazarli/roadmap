import { useEffect, useState } from 'react';

export default function Sidebar({ roadmapSlug, sections = [] }) {
    const [completedLessons, setCompletedLessons] = useState({});

    useEffect(() => {
        // Load initial completion status
        const loadStatus = () => {
            const status = {};
            sections.forEach(section => {
                const storageKey = `devmaps_progress_${roadmapSlug}_${section.id}`;
                status[section.id] = localStorage.getItem(storageKey) === 'true';
            });
            setCompletedLessons(status);
        };

        loadStatus();

        // Listen for progress updates
        const handleProgressUpdate = (event) => {
            const { lessonId, isCompleted } = event.detail;
            setCompletedLessons(prev => ({
                ...prev,
                [lessonId]: isCompleted
            }));
        };

        window.addEventListener('progress-updated', handleProgressUpdate);
        return () => window.removeEventListener('progress-updated', handleProgressUpdate);
    }, [roadmapSlug, sections]);

    return (
        <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border-r border-gray-200 dark:border-slate-800 overflow-y-auto z-40 hidden lg:block transition-all duration-300">
            <nav className="p-6 space-y-2">
                {sections.length > 0 ? (
                    <>
                        <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-4">
                            Mövzular
                        </h3>
                        <ul className="space-y-1">
                            {sections.map((section) => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${section.level && section.level > 2
                                            ? 'ml-4 text-gray-600 dark:text-gray-400'
                                            : 'text-gray-900 dark:text-white'
                                            } hover:bg-gray-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400`}
                                    >
                                        <span
                                            className={`inline-block mr-2 ${completedLessons[section.id] ? 'text-green-500 font-bold' : ''}`}
                                        >
                                            {completedLessons[section.id] ? '✓' : '○'}
                                        </span>
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        <p>Mövzular yüklənir...</p>
                    </div>
                )}
            </nav>
        </aside>
    );
}
