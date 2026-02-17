import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CommandCard({ command, description }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy keys:', err);
        }
    };

    return (
        <div className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Əmr
                </span>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-400 transition-colors"
                    title="Copy command"
                >
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
            </div>

            {/* Command */}
            <div className="px-4 py-3 bg-gray-900 dark:bg-gray-950">
                <code className="font-mono text-sm text-gray-100 break-all">{command}</code>
            </div>

            {/* Description */}
            {description && (
                <div className="px-4 py-3 border-t border-gray-200 dark:border-slate-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
                </div>
            )}
        </div>
    );
}
