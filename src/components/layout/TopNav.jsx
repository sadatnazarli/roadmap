import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../interactive/ThemeToggle';
import SearchModal from '../interactive/SearchModal';

const navLinks = [
    { title: 'C Dili', url: '/c' },
    { title: 'Git', url: '/git' },
    { title: 'Linux', url: '/linux' },
    { title: 'Vim', url: '/vim' },
];

export default function TopNav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-8">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors flex-shrink-0">
                        <span className="text-2xl">📚</span>
                        <span className="hidden sm:inline">DevRoadmap</span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.url}
                                className="text-gray-700 dark:text-gray-300 font-medium text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4 ml-auto">
                        {/* Search Modal (hidden on mobile) */}
                        <div className="hidden sm:block">
                            <SearchModal />
                        </div>

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Mobile Menu Button (hidden on desktop) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-gray-700 dark:text-gray-300"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation (hidden by default) */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 dark:border-slate-700">
                        <div className="space-y-1 py-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.url}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
