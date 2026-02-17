import { useEffect, useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeEditor({
  lang = 'bash',
  filename = null,
  title = null,
  showLineNumbers = false,
  children,
}) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = async () => {
    try {
      // Extract text content from code, removing line numbers if present
      const codeElement = codeRef.current;
      const textContent = codeElement?.innerText || codeElement?.textContent || '';
      
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      
      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Language display labels
  const languageLabel = {
    bash: 'bash',
    c: 'c',
    vim: 'vim',
    python: 'python',
    javascript: 'javascript',
    js: 'javascript',
    yaml: 'yaml',
    sql: 'sql',
    git: 'git',
    sh: 'bash',
  }[lang] || lang;

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
          {filename && (
            <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
              {filename}
            </span>
          )}
          {title && !filename && (
            <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
              {title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {languageLabel}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded transition-colors duration-150 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-400"
            aria-label="Copy code"
            title="Copy code"
          >
            {copied ? (
              <Check size={18} className="text-green-500" />
            ) : (
              <Copy size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Code Container */}
      <div
        className="overflow-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-slate-600"
        style={{ maxHeight: '500px' }}
      >
        <pre className="m-0 p-5 text-sm bg-gray-900 dark:bg-gray-950 text-gray-100">
          <code
            ref={codeRef}
            className="font-mono whitespace-pre text-sm leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: children,
            }}
          />
        </pre>
      </div>

      {/* Copy Feedback Tooltip */}
      {copied && (
        <div className="absolute bottom-4 right-4 px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-medium animate-fade-in">
          Kopyalandı! ✓
        </div>
      )}
    </div>
  );
}
