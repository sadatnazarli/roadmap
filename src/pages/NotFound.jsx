import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-500">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">Səhifə tapılmadı</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-4 mb-8 text-lg">
                    Axtardığınız səhifə mövcud deyil və ya yeri dəyişdirilib.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                    Ana Səhifəyə Qayıt
                </Link>
            </div>
        </div>
    );
}
