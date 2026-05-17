const SiteFooter = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-900 border-t border-emerald-900/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Footer text block */}
        <address className="not-italic flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-6 text-sm text-slate-400">
          <div className="font-bold text-white mb-2 sm:mb-0">
            Бауыржан Даниял Талгатович
          </div>
          <div className="hidden sm:block w-px h-5 bg-slate-700"></div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>Дисциплина: ИКТ</span>
            <span className="hidden sm:block text-slate-700">•</span>
            <span>Narxoz University</span>
            <span className="hidden sm:block text-slate-700">•</span>
            <span>Cybersecurity</span>
            <span className="hidden sm:block text-slate-700">•</span>
            <span>© 2026</span>
          </div>
        </address>

        {/* Back to top */}
        <button
          onClick={handleBackToTop}
          className="group flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-400 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full px-5 py-2.5 transition-all duration-300"
          aria-label="Вернуться наверх"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="group-hover:-translate-y-1 transition-transform"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
          Наверх
        </button>
      </div>
    </footer>
  );
};

export default SiteFooter;
