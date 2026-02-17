import { useEffect, useState } from 'react';

export default function TaskList({ lessonId, roadmapSlug = 'general', items = [] }) {
    // Normalize items
    const normalizedItems = items.map((item, idx) => {
        if (typeof item === 'string') {
            return { id: `task-${idx}`, title: item };
        }
        return item;
    });

    // State for checkboxes
    const [checkedState, setCheckedState] = useState({});

    useEffect(() => {
        // Load initial state
        const initialState = {};
        normalizedItems.forEach(item => {
            const storageKey = `devmaps_task_${roadmapSlug}_${lessonId}_${item.id}`;
            initialState[item.id] = localStorage.getItem(storageKey) === 'true';
        });
        setCheckedState(initialState);
    }, [lessonId, roadmapSlug]); // Dependency array: valid dependencies

    const handleCheck = (itemId, isChecked) => {
        const storageKey = `devmaps_task_${roadmapSlug}_${lessonId}_${itemId}`;
        localStorage.setItem(storageKey, isChecked ? 'true' : 'false');

        setCheckedState(prev => ({
            ...prev,
            [itemId]: isChecked
        }));
    };

    return (
        <div className="my-6 p-6 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Tapşırıqlar</h4>
            <ul className="space-y-3">
                {normalizedItems.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            id={`task-${lessonId}-${item.id}`}
                            className="mt-1 cursor-pointer rounded border-gray-300 text-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-blue-400"
                            checked={checkedState[item.id] || false}
                            onChange={(e) => handleCheck(item.id, e.target.checked)}
                        />
                        <label
                            htmlFor={`task-${lessonId}-${item.id}`}
                            className="flex-1 text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-gray-100"
                        >
                            {item.title}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
