const AIAgentBox = () => {
  return (
    <section
      id="ai-tools"
      aria-label="Интеграция API AI Агента"
      className="premium-card flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="wireframe-label !mb-0">Блок · API ИИ Агента</span>
        <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
      </div>

      {/* API connector diagram */}
      <div className="mt-2 p-6 bg-emerald-50/50 border border-emerald-100 rounded-2xl flex items-center gap-4" aria-hidden="true">
        <div className="w-14 h-14 bg-white shadow-sm border border-emerald-200 rounded-xl flex items-center justify-center text-sm text-emerald-800 font-bold">
          APP
        </div>
        <div className="flex-1 relative flex items-center justify-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200"></div>
          <div className="absolute bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm shadow-emerald-500/20">
            API Request
          </div>
        </div>
        <div className="w-14 h-14 bg-emerald-600 shadow-md shadow-emerald-600/20 rounded-xl flex items-center justify-center text-sm text-white font-black">
          AI
        </div>
      </div>

      {/* Simulated request/response block */}
      <div className="w-full mt-6 bg-slate-900 rounded-xl p-4 text-left font-mono text-xs overflow-hidden shadow-inner border border-slate-800" aria-hidden="true">
        <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          <span className="text-slate-500 ml-2">terminal</span>
        </div>
        <div className="text-emerald-400">POST /api/v1/agent/analyze</div>
        <div className="text-slate-300 mt-1 pl-4">{"{"}</div>
        <div className="text-slate-400 pl-8">"dataset": "churn_q3",</div>
        <div className="text-slate-400 pl-8">"model": "predictive_v2"</div>
        <div className="text-slate-300 pl-4">{"}"}</div>
        <div className="text-emerald-400 mt-3">← 200 OK: AI Response</div>
        <div className="text-emerald-300 pl-4 mt-1 font-semibold">"Риск оттока снижен на 4% при реализации стратегии А."</div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-900">Live-аналитика через API</h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Мгновенный обмен данными с нашим продвинутым ИИ-агентом для получения прогнозов в реальном времени.
        </p>
      </div>
    </section>
  );
};

export default AIAgentBox;
