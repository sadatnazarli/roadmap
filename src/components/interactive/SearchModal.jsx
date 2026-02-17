import { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import Fuse from 'fuse.js';

const searchIndex = [
  // C Roadmap
  { id: 'c-intro', title: 'C Dili Giriş', roadmap: 'C', level: 1, url: '/c-roadmap#c-intro' },
  { id: 'c-variables', title: 'Dəyişənlər və Məlumat Tiplər', roadmap: 'C', level: 1, url: '/c-roadmap#variables' },
  { id: 'c-operators', title: 'Operatorlar', roadmap: 'C', level: 2, url: '/c-roadmap#operators' },
  { id: 'c-control-flow', title: 'İdarə Strukturları', roadmap: 'C', level: 2, url: '/c-roadmap#control-flow' },
  { id: 'c-functions', title: 'Funksiyalar', roadmap: 'C', level: 3, url: '/c-roadmap#functions' },
  { id: 'c-pointers', title: 'İşarəçilər', roadmap: 'C', level: 4, url: '/c-roadmap#pointers' },
  { id: 'c-arrays', title: 'Massivilər', roadmap: 'C', level: 2, url: '/c-roadmap#arrays' },
  { id: 'c-strings', title: 'Sətirlər', roadmap: 'C', level: 3, url: '/c-roadmap#strings' },
  { id: 'c-structures', title: 'Strukturlar', roadmap: 'C', level: 4, url: '/c-roadmap#structures' },
  
  // Git Roadmap
  { id: 'git-intro', title: 'Git Giriş', roadmap: 'Git', level: 1, url: '/git-roadmap#intro' },
  { id: 'git-setup', title: 'Git Kurulumu', roadmap: 'Git', level: 1, url: '/git-roadmap#setup' },
  { id: 'git-basic', title: 'Əsas Əmrlər', roadmap: 'Git', level: 1, url: '/git-roadmap#basic' },
  { id: 'git-branching', title: 'Şaxələndirmə', roadmap: 'Git', level: 2, url: '/git-roadmap#branching' },
  { id: 'git-merging', title: 'Birləşdirmə', roadmap: 'Git', level: 3, url: '/git-roadmap#merging' },
  { id: 'git-github', title: 'GitHub İş Axını', roadmap: 'Git', level: 3, url: '/git-roadmap#github' },
  { id: 'git-advanced', title: 'Səviyyəli Əmrlər', roadmap: 'Git', level: 4, url: '/git-roadmap#advanced' },
  
  // Vim Roadmap
  { id: 'vim-intro', title: 'Vim Giriş', roadmap: 'Vim', level: 1, url: '/vim-roadmap#intro' },
  { id: 'vim-modes', title: 'Vim Rejimləri', roadmap: 'Vim', level: 1, url: '/vim-roadmap#modes' },
  { id: 'vim-motions', title: 'Hərəkət Əmrləri', roadmap: 'Vim', level: 2, url: '/vim-roadmap#motions' },
  { id: 'vim-editing', title: 'Redaktə Texnikaları', roadmap: 'Vim', level: 2, url: '/vim-roadmap#editing' },
  { id: 'vim-search', title: 'Axtarış və Əvəzləmə', roadmap: 'Vim', level: 3, url: '/vim-roadmap#search' },
  { id: 'vim-macros', title: 'Makroslar', roadmap: 'Vim', level: 4, url: '/vim-roadmap#macros' },
  
  // Linux Roadmap
  { id: 'linux-intro', title: 'Linux Giriş', roadmap: 'Linux', level: 1, url: '/linux-roadmap#intro' },
  { id: 'linux-filesystem', title: 'Fayl Sistemi', roadmap: 'Linux', level: 1, url: '/linux-roadmap#filesystem' },
  { id: 'linux-shell', title: 'Qabıq (Shell)', roadmap: 'Linux', level: 1, url: '/linux-roadmap#shell' },
  { id: 'linux-users', title: 'İstifadəçilər və İcazələr', roadmap: 'Linux', level: 2, url: '/linux-roadmap#users' },
  { id: 'linux-processes', title: 'Proseslər və Tasklar', roadmap: 'Linux', level: 2, url: '/linux-roadmap#processes' },
  { id: 'linux-networking', title: 'Şəbəkə', roadmap: 'Linux', level: 3, url: '/linux-roadmap#networking' },
];

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const fuse = useRef(null);

  // Initialize Fuse.js
  useEffect(() => {
    fuse.current = new Fuse(searchIndex, {
      keys: ['title', 'roadmap'],
      threshold: 0.3,
      ignoreLocation: true,
    });
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      // Escape to close
      else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setQuery('');
      }
      // Arrow keys for navigation
      else if (isOpen && e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (results.length || 1));
      } else if (isOpen && e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev === 0 ? (results.length || 1) - 1 : prev - 1));
      }
      // Enter to select
      else if (isOpen && e.key === 'Enter' && results.length > 0) {
        const selected = results[selectedIndex];
        if (selected) {
          window.location.href = selected.item.url;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Search
  const handleSearch = (e) => {
    const q = e.target.value;
    setQuery(q);
    setSelectedIndex(0);

    if (q.trim() === '') {
      setResults([]);
    } else if (fuse.current) {
      const searchResults = fuse.current.search(q).slice(0, 10);
      setResults(searchResults);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
        title="Search (Ctrl+K)"
      >
        <Search size={18} />
        <span className="hidden md:inline">Axtar...</span>
        <kbd className="hidden lg:inline text-xs px-2 py-1 rounded bg-gray-300 dark:bg-slate-600 ml-2">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl max-h-96 shadow-2xl rounded-lg z-50 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 overflow-hidden">
        {/* Search Input */}
        <div className="p-4 border-b border-gray-200 dark:border-slate-700">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Axtar..."
              value={query}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  setResults([]);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="overflow-auto max-h-80">
          {results.length > 0 ? (
            <ul className="divide-y divide-gray-200 dark:divide-slate-700">
              {results.map(({ item }, index) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className={`block p-4 transition-colors ${
                      index === selectedIndex
                        ? 'bg-blue-50 dark:bg-blue-900/20'
                        : 'hover:bg-gray-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white truncate">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                          {item.roadmap} • Level {item.level}
                        </p>
                      </div>
                      <kbd className="hidden sm:inline text-xs px-2 py-1 rounded bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        ↵
                      </kbd>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : query ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <Search size={32} className="mx-auto mb-3 opacity-50" />
              <p>Heç bir nəticə tapılmadı</p>
              <p className="text-sm mt-1">"{query}" üçün</p>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <p>Axtarmaq üçün başlayın...</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-slate-700 px-4 py-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-slate-800">
          Naviqasiya: ↑↓ · Seç: ↵ · Bağla: Esc
        </div>
      </div>
    </>
  );
}
