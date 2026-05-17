const AudioPlayerControls = () => {
  return (
    <section
      aria-label="Аудиоплеер для ИИ Музыки"
      className="w-full premium-card overflow-hidden !p-0"
    >
      <div className="px-8 py-6 flex flex-col sm:flex-row items-center gap-8">

        {/* Album art cover */}
        <div
          className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </div>

        {/* Track info + controls */}
        <div className="flex-1 w-full flex flex-col gap-4">
          
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest">Аудио Фон</span>
              <h3 className="text-lg font-bold text-gray-900 leading-none">ИИ-сгенерированный саундтрек</h3>
              <p className="text-xs text-gray-500 font-medium">ProfitVision Neural Engine</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 w-full" aria-hidden="true">
            <span className="text-[10px] font-medium text-emerald-700 font-mono w-8">1:24</span>
            <div className="flex-1 h-2 bg-emerald-50 rounded-full relative cursor-pointer group">
              <div className="absolute inset-y-0 left-0 bg-emerald-500 rounded-full w-[45%]" />
              <div className="absolute top-1/2 left-[45%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-[10px] font-medium text-gray-400 font-mono w-8">3:10</span>
          </div>

          {/* Control buttons */}
          <div className="flex items-center justify-between w-full" aria-hidden="true">
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-emerald-600 transition-colors" aria-label="Случайный порядок">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
              </button>
              <button className="text-gray-600 hover:text-emerald-600 transition-colors" aria-label="Предыдущий трек">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
              </button>
              
              <button className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all" aria-label="Воспроизведение">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
              
              <button className="text-gray-600 hover:text-emerald-600 transition-colors" aria-label="Следующий трек">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
              </button>
              <button className="text-gray-400 hover:text-emerald-600 transition-colors" aria-label="Повтор">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2 hidden md:flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
              <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioPlayerControls;
