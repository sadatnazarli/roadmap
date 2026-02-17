export default function ConceptCard({ title, subtitle, children }) {
    return (
        <div className="my-6 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/20 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {title}
            </h4>
            {subtitle && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {subtitle}
                </p>
            )}
            <div className="prose dark:prose-invert max-w-none text-sm text-gray-700 dark:text-gray-300">
                {children}
            </div>
        </div>
    );
}
