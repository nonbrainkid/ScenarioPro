const AnalyticalTextBlock = () => {
  return (
    <section
      aria-label="Блок аналитического текста"
      className="premium-card flex flex-col h-full"
    >
      <span className="wireframe-label">Блок · Аналитические Выводы</span>

      {/* Simulated text lines */}
      <div className="w-full mt-4 space-y-3 px-1" aria-hidden="true">
        <div className="h-4 bg-emerald-100 rounded-full w-full" />
        <div className="h-4 bg-emerald-100/60 rounded-full w-[92%]" />
        <div className="h-4 bg-emerald-100 rounded-full w-[96%]" />
        <div className="h-4 bg-emerald-100/60 rounded-full w-[85%]" />
        <div className="h-4 bg-emerald-100 rounded-full w-[88%]" />
      </div>

      {/* KPI Chips */}
      <div className="flex gap-3 flex-wrap mt-8" aria-hidden="true">
        {[
          { label: "Конверсия", val: "+12.5%" },
          { label: "LTV", val: "$4.2k" },
          { label: "Churn", val: "-3.1%" }
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2"
          >
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">{item.label}</span>
            <span className="text-sm font-extrabold text-emerald-900">{item.val}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-900">Инсайты от ИИ</h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Автоматически сгенерированный анализ ваших ключевых показателей эффективности (KPI) с практическими рекомендациями по улучшению.
        </p>
      </div>

      <button className="mt-auto pt-6 text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-2 transition-colors">
        Подробный отчет
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
    </section>
  );
};

export default AnalyticalTextBlock;
