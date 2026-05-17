const ChatbotWidget = () => {
  return (
    <div
      role="complementary"
      aria-label="Chatbot Widget"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      {/* Tooltip label */}
      <div className="bg-gray-800 text-white text-xs rounded px-2.5 py-1.5 whitespace-nowrap shadow">
        [ Chatbot Widget Placeholder ]
      </div>

      {/* Trigger button */}
      <button
        className="w-14 h-14 rounded-full bg-gray-800 border-2 border-dashed border-gray-500 flex flex-col items-center justify-center gap-0.5 shadow-lg hover:bg-gray-700 transition-colors duration-150"
        aria-label="Open AI Chatbot"
      >
        {/* Chat icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="8" y1="10" x2="8" y2="10" strokeWidth="2.5" />
          <line x1="12" y1="10" x2="12" y2="10" strokeWidth="2.5" />
          <line x1="16" y1="10" x2="16" y2="10" strokeWidth="2.5" />
        </svg>
        <span className="text-[8px] text-gray-300 font-semibold leading-none">AI</span>
      </button>
    </div>
  );
};

export default ChatbotWidget;
