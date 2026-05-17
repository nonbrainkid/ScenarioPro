const AnalyticalTextBlock = () => {
  return (
    <section
      aria-label="Analytical Text Block Placeholder"
      className="wireframe-box min-h-[280px]"
    >
      <span className="wireframe-label">Block · Analytical Text</span>

      {/* Simulated text lines */}
      <div className="w-full mt-3 space-y-2 px-2" aria-hidden="true">
        {[100, 90, 95, 80, 88, 70, 75].map((width, i) => (
          <div
            key={i}
            className="h-3 bg-gray-300 rounded"
            style={{ width: `${width}%` }}
          />
        ))}
      </div>

      {/* Stat chips placeholder */}
      <div className="flex gap-2 flex-wrap justify-center mt-4" aria-hidden="true">
        {["KPI #1", "KPI #2", "KPI #3"].map((label) => (
          <div
            key={label}
            className="border border-gray-400 rounded px-3 py-1 text-xs text-gray-500 bg-gray-50"
          >
            {label}
          </div>
        ))}
      </div>

      <p className="wireframe-title mt-4">[ Analytical Text Block Placeholder ]</p>
      <p className="text-xs text-gray-400 mt-1">
        AI-written insights, trend summaries & KPI highlights
      </p>
    </section>
  );
};

export default AnalyticalTextBlock;
