import { useEffect, useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import TableOfContents from '../components/interactive/TableOfContents';
import ReadingProgress from '../components/interactive/ReadingProgress';
import TopNav from '../components/layout/TopNav';
import Footer from '../components/layout/Footer';

export default function RoadmapLayout({ children, roadmapSlug = 'general' }) {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        // Extract sections (Levels/Headings) from the content
        // We target h2 tags which usually represent Main Levels or Chapters
        const updateSections = () => {
            const headings = document.querySelectorAll('article h2');
            const extracted = Array.from(headings)
                .filter(h => h.id)
                .map(h => ({
                    id: h.id,
                    title: h.innerText.replace('🔗', '').trim(),
                    level: 2
                }));
            if (extracted.length > 0) {
                setSections(extracted);
            }
        };

        // Small delay to ensure content is rendered
        const timer = setTimeout(updateSections, 100);
        return () => clearTimeout(timer);
    }, [children]);

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-200">
            <ReadingProgress />
            <TopNav />

            <div className="flex pt-4 md:pt-8 flex-1">
                {/* Left Sidebar */}
                <Sidebar roadmapSlug={roadmapSlug} sections={sections} />

                {/* Main Content */}
                <div className="flex-1 lg:ml-64 xl:mr-64 min-w-0 transition-all duration-200">
                    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
                        <article className="prose dark:prose-invert max-w-none prose-h1:text-4xl prose-h2:text-3xl prose-h2:border-b prose-h2:pb-2 prose-h2:mt-12 prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-800 dark:hover:prose-a:text-blue-300">
                            {children}
                        </article>
                    </main>
                    <Footer />
                </div>

                {/* Right TOC */}
                <div className="hidden xl:block fixed right-0 top-16 w-64 h-[calc(100vh-4rem)] border-l border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-y-auto z-10">
                    <TableOfContents />
                </div>
            </div>
        </div>
    );
}
