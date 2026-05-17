const ChatbotWidget = () => {
  return (
    <div
      role="complementary"
      aria-label="Виджет чат-бота"
      className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 group"
    >
      {/* Tooltip label */}
      <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-emerald-900 text-white text-xs font-bold rounded-lg px-3 py-2 shadow-xl whitespace-nowrap border border-emerald-700/50">
        Чат-бот Аналитик
      </div>

      {/* Trigger button */}
      <button
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
        aria-label="Открыть чат с ИИ"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20"></div>
        
        {/* Chat icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="8" y1="10" x2="8" y2="10" strokeWidth="2.5" />
          <line x1="12" y1="10" x2="12" y2="10" strokeWidth="2.5" />
          <line x1="16" y1="10" x2="16" y2="10" strokeWidth="2.5" />
        </svg>
      </button>
    </div>
  );
};

export default ChatbotWidget;
