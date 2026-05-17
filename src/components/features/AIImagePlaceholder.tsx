const AIImagePlaceholder = () => {
  return (
    <section
      aria-label="Изображение, сгенерированное ИИ"
      className="premium-card flex flex-col h-full"
    >
      <span className="wireframe-label">Блок · Визуализация ИИ</span>

      <div
        className="w-full flex-1 mt-2 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col items-center justify-center gap-4 transition-colors hover:bg-emerald-100/50"
        style={{ minHeight: 220 }}
        aria-hidden="true"
      >
        <div className="p-4 bg-white rounded-full shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#059669"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <div className="text-center space-y-1">
          <span className="block text-sm font-bold text-emerald-800">Генерация визуала...</span>
          <span className="block text-xs text-emerald-600/70">Искусственный интеллект создает уникальный актив</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-900">Визуализация данных ИИ</h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Здесь будет отображаться уникальное изображение или инфографика, созданная нейросетью на основе ваших бизнес-показателей.
        </p>
      </div>
    </section>
  );
};

export default AIImagePlaceholder;
