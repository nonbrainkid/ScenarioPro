const AIAgentBox = () => {
  return (
    <section
      id="ai-tools"
      aria-label="AI Agent API Integration Box"
      className="wireframe-box min-h-[260px]"
    >
      <span className="wireframe-label">Block · AI Agent API Integration</span>

      {/* API connector icon */}
      <div className="mt-3 flex items-center gap-3" aria-hidden="true">
        {/* Left node */}
        <div className="w-10 h-10 border-2 border-gray-400 rounded bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-bold">
          APP
        </div>
        {/* Connector line */}
        <div className="flex-1 h-0.5 border-t-2 border-dashed border-gray-400 relative">
          <div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-gray-300 border border-gray-400 rounded text-[10px] text-gray-500 px-1.5 py-0.5">
            API
          </div>
        </div>
        {/* Right node */}
        <div className="w-10 h-10 border-2 border-gray-400 rounded bg-gray-300 flex items-center justify-center text-xs text-gray-600 font-bold">
          AI
        </div>
      </div>

      {/* Simulated request/response block */}
      <div className="w-full mt-5 bg-gray-200 border border-gray-300 rounded p-3 text-left space-y-1" aria-hidden="true">
        <div className="text-[10px] text-gray-400 font-mono">POST /api/agent · Request payload →</div>
        <div className="h-2.5 bg-gray-300 rounded w-4/5" />
        <div className="h-2.5 bg-gray-300 rounded w-3/5" />
        <div className="text-[10px] text-gray-400 font-mono mt-2">← Response: AI insight</div>
        <div className="h-2.5 bg-gray-300 rounded w-full" />
        <div className="h-2.5 bg-gray-300 rounded w-2/3" />
      </div>

      <p className="wireframe-title mt-4">[ AI Agent API Integration Box ]</p>
      <p className="text-xs text-gray-400 mt-1">
        Connected AI agent endpoint · live query & response display
      </p>
    </section>
  );
};

export default AIAgentBox;
