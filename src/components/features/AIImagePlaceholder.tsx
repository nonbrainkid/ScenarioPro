const AIImagePlaceholder = () => {
  return (
    <section
      aria-label="AI Generated Image Placeholder"
      className="wireframe-box min-h-[280px]"
    >
      {/* Section tag */}
      <span className="wireframe-label">Block · AI Generated Image</span>

      {/* Image frame */}
      <div
        className="w-full flex-1 mt-3 bg-gray-200 border border-gray-300 rounded flex flex-col items-center justify-center gap-3"
        style={{ minHeight: 180 }}
        aria-hidden="true"
      >
        {/* Generic image icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className="text-xs text-gray-400">AI-generated visual asset</span>
      </div>

      <p className="wireframe-title mt-3">[ AI Generated Image Placeholder ]</p>
      <p className="text-xs text-gray-400 mt-1">
        Generative AI artwork or data visualization will render here
      </p>
    </section>
  );
};

export default AIImagePlaceholder;
