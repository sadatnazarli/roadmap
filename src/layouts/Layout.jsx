import TopNav from '../components/layout/TopNav';
import Footer from '../components/layout/Footer';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-200">
            <TopNav />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
