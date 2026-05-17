const AIVideoPlayer = () => {
  return (
    <section
      id="media"
      aria-label="Видеоплеер ИИ-Аватара"
      className="premium-card flex flex-col h-full"
    >
      <span className="wireframe-label">Блок · ИИ Видео / Аватар</span>

      {/* Video frame */}
      <div
        className="w-full mt-2 bg-slate-900 rounded-2xl relative overflow-hidden group shadow-lg shadow-slate-900/10"
        style={{ aspectRatio: "16/9" }}
        aria-hidden="true"
      >
        {/* Abstract background for "video" */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900 mix-blend-overlay"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,1),_transparent_60%)]"></div>

        {/* Avatar placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 backdrop-blur-sm flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div className="text-emerald-100 text-sm font-medium tracking-wide">Генерация видео-презентации...</div>
        </div>

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
          <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-emerald-500/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Progress bar overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent z-10">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-emerald-500 rounded-full" />
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-white/70 font-mono">
                <span>0:00</span>
                <span>2:45</span>
            </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-900">Интерактивный ИИ-Аватар</h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Просмотр видеопрезентаций, сгенерированных нейросетью, с персонализированным объяснением аналитических отчетов.
        </p>
      </div>
    </section>
  );
};

export default AIVideoPlayer;
