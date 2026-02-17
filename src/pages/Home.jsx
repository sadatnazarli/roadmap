import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-20 sm:py-32 border-b border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="container relative mx-auto px-4 max-w-6xl text-center z-10"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
                        DevRoadmap v2.0
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                        Proqramlaşdırma <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Yol Xəritəsi</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-300 text-xl sm:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
                        Sıfırdan master səviyyəyə qədər strukturlaşdırılmış, interaktiv və pulsuz öyrənmə resursu.
                    </p>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        {[
                            { to: "/c", label: "C Dili", color: "bg-blue-600 hover:bg-blue-700" },
                            { to: "/vim", label: "Vim", color: "bg-emerald-600 hover:bg-emerald-700" },
                            { to: "/git", label: "Git", color: "bg-orange-600 hover:bg-orange-700" },
                            { to: "/linux", label: "Linux", color: "bg-slate-700 hover:bg-slate-800" },
                        ].map((btn) => (
                            <motion.div key={btn.to} variants={item}>
                                <Link
                                    to={btn.to}
                                    className={`px-8 py-4 ${btn.color} text-white rounded-xl text-lg font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2`}
                                >
                                    {btn.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Niyə DevRoadmap?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Sadəcə məqalələr toplusu deyil, tam interaktiv təhsil təcrübəsi.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: "📚", title: "Dərin Məzmun", desc: "Səthi biliklər yox, fundamental anlayışlar və detallı izahlar." },
                            { icon: "⚡", title: "İnteraktivlik", desc: "Quizlər, progress bar və real-vaxt kod nümunələri ilə öyrən." },
                            { icon: "🎯", title: "Səviyyə Sistemi", desc: "Level 0-dan Master səviyyəyə qədər addım-addım irəliləyiş." },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors group"
                            >
                                <div className="text-4xl mb-6 bg-white dark:bg-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roadmaps Grid */}
            <section className="py-24 bg-slate-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center">
                        Tədris Planları
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                to: "/c",
                                icon: "🚀",
                                title: "C Proqramlaşdırma",
                                desc: "Low-level proqramlaşdırmanın əsası. Yaddaş idarəetməsi, pointerlər və alqoritmlər.",
                                stats: "6 Level • 50+ Mövzu",
                                accent: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
                                border: "hover:border-blue-500/50"
                            },
                            {
                                to: "/vim",
                                icon: "⚡",
                                title: "Vim Master",
                                desc: "Dünyanın ən sürətli mətn redaktorunda ustalaş. Klaviatura ilə tam naviqasiya.",
                                stats: "6 Level • 40+ Mövzu",
                                accent: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
                                border: "hover:border-emerald-500/50"
                            },
                            {
                                to: "/git",
                                icon: "🌳",
                                title: "Git & GitHub",
                                desc: "Müasir versiya idarəetmə sistemi. Komanda işi, merge, rebase və daha çoxu.",
                                stats: "6 Level • 45+ Mövzu",
                                accent: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
                                border: "hover:border-orange-500/50"
                            },
                            {
                                to: "/linux",
                                icon: "🐧",
                                title: "Linux & Terminal",
                                desc: "Professional developer mühiti. CLI, bash scripting və sistem adminliyi.",
                                stats: "5 Level • 60+ Mövzu",
                                accent: "group-hover:text-slate-600 dark:group-hover:text-slate-300",
                                border: "hover:border-slate-500/50"
                            },
                        ].map((card, idx) => (
                            <motion.div
                                key={card.to}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link
                                    to={card.to}
                                    className={`group block h-full p-8 rounded-3xl bg-white dark:bg-slate-900/80 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 ${card.border}`}
                                >
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="text-5xl p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                            {card.icon}
                                        </div>
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                            Free
                                        </span>
                                    </div>

                                    <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors ${card.accent}`}>
                                        {card.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                        {card.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                                        <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
                                            {card.stats}
                                        </span>
                                        <span className={`font-semibold flex items-center gap-2 transition-transform group-hover:translate-x-1 ${card.accent}`}>
                                            Başla <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 dark:bg-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <div className="container relative mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 tracking-tight">
                        Proqramlaşdırma karyerana bu gün başla
                    </h2>
                    <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
                        Heç bir ödəniş yoxdur. Qeydiyyat tələb olunmur. Sadəcə seç və öyrən.
                    </p>
                    <Link
                        to="/c"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        İndi Başla <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </Link>
                </div>
            </section>
        </>
    );
}
