const SiteFooter = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-gray-300 bg-white mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Footer text block */}
        <address className="not-italic text-center sm:text-left text-xs text-gray-500 leading-relaxed">
          <span className="font-semibold text-gray-700">Bauyrzhan Daniyal Talgatovich</span>
          {" | "}
          <span>Дисциплина: ИКТ</span>
          {" | "}
          <span>Narxoz University</span>
          {" | "}
          <span>Cybersecurity</span>
          {" | "}
          <span>© 2026</span>
        </address>

        {/* Back to top */}
        <button
          onClick={handleBackToTop}
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 border border-gray-300 hover:border-gray-600 rounded px-3 py-1.5 transition-colors duration-150 min-h-[44px] min-w-[44px]"
          aria-label="Scroll back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default SiteFooter;
