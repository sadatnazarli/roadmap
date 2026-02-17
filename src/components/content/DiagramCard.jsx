export default function DiagramCard({ title, children }) {
    return (
        <div className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            {title && (
                <div className="px-4 py-3 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h4>
                </div>
            )}
            <div className="overflow-x-auto">
                <pre className="m-0 p-5 text-sm bg-gray-900 dark:bg-gray-950 text-gray-100 font-mono whitespace-pre">
                    <code>{children}</code>
                </pre>
            </div>
        </div>
    );
}
