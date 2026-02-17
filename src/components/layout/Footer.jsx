import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 py-12 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">📚</span>
                            <span className="font-bold text-lg text-blue-600 dark:text-blue-400">DevRoadmap.az</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Sıfırdan Ultra Advanced Səviyyəyə Qədər Tam Təlimat
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            Pulsuz Azərbaycanca Proqramlaşdırma Şəsidir
                        </p>
                    </div>

                    {/* Roadmaps */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Roadmaplar</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/c" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    C Dili
                                </Link>
                            </li>
                            <li>
                                <Link to="/git" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Git
                                </Link>
                            </li>
                            <li>
                                <Link to="/vim" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Vim
                                </Link>
                            </li>
                            <li>
                                <Link to="/linux" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Linux
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Bağlantılar</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://github.com/sadatnazarli/roadmap"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@devroad.az"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Bizimlə Əlaqə
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-slate-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                        © 2026 DevRoadmap.az. Bütün hüquqlar qorunur.
                    </p>

                    {/* MIT License Badge */}
                    <a
                        href="https://opensource.org/licenses/MIT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-xs font-medium"
                    >
                        📄 MIT License
                    </a>
                </div>
            </div>
        </footer>
    );
}
