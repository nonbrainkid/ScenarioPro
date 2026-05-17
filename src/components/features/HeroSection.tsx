const HeroSection = () => {
  return (
    <section
      id="home"
      aria-label="Главный баннер"
      className="relative w-full rounded-[2rem] overflow-hidden bg-emerald-950 text-white shadow-2xl shadow-emerald-900/20"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content area */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 gap-8">
        
        {/* Badge */}
        <div className="bg-emerald-500/20 border border-emerald-500/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Будущее финансовых технологий</span>
        </div>

        {/* Title */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Максимизируйте <span className="text-emerald-500">Прибыль</span> с помощью ИИ
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/70 max-w-2xl mx-auto font-medium">
            Интеллектуальный анализ удержания клиентов, прогнозирование доходов и автоматизация бизнес-процессов на одной платформе.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="premium-button-primary">
            Попробовать бесплатно
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95">
            Узнать больше
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pt-8 border-t border-white/10 mt-8 w-full max-w-3xl">
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold">99.9%</div>
            <div className="text-xs text-emerald-400 uppercase font-bold tracking-wider">Точность анализа</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold">250%</div>
            <div className="text-xs text-emerald-400 uppercase font-bold tracking-wider">Рост ROI</div>
          </div>
          <div className="space-y-1 col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl font-bold">15k+</div>
            <div className="text-xs text-emerald-400 uppercase font-bold tracking-wider">Активных клиентов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
