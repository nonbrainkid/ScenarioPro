const columns = ["Сценарий", "Доход ($)", "Затраты ($)", "Прибыль ($)", "Маржа (%)"];
const rows = [
  ["Базовый", "120,000", "45,000", "75,000", "62.5%"],
  ["Оптимистичный (+10%)", "132,000", "49,500", "82,500", "62.5%"],
  ["Пессимистичный (-10%)", "108,000", "40,500", "67,500", "62.5%"],
  ["Пользовательский", "[ ввод ]", "[ ввод ]", "—", "—"],
];

const WhatIfTable = () => {
  return (
    <section
      id="analytics"
      aria-label="Таблица сценариев 'Что-если'"
      className="w-full premium-card overflow-hidden !p-0"
    >
      <div className="bg-emerald-950 px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Аналитический инструмент</span>
          <h2 className="text-2xl font-bold text-white">Динамический анализ «Что-если»</h2>
        </div>
        <div className="flex gap-2">
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors">
            Сохранить отчет
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors border border-white/10">
            Экспорт
          </button>
        </div>
      </div>

      <div className="p-8">
        <div className="overflow-x-auto rounded-xl border border-emerald-100 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-emerald-50/50">
                {columns.map((col) => (
                  <th
                    key={col}
                    className="px-6 py-4 text-left font-bold text-emerald-900 uppercase tracking-tight border-b border-emerald-100"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-50">
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="hover:bg-emerald-50/30 transition-colors group"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-6 py-4 text-gray-600 ${ci === 0 ? "font-bold text-gray-900" : ""}`}
                    >
                      {cell === "[ ввод ]" ? (
                        <span className="text-emerald-500 font-bold bg-emerald-50 px-2 py-1 rounded cursor-pointer hover:bg-emerald-100">
                          {cell}
                        </span>
                      ) : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center gap-3 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs">!</div>
          <p className="text-xs text-emerald-800 font-medium">
            Изменяйте параметры в строке «Пользовательский» для мгновенного пересчета прогнозируемой прибыли и рентабельности.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIfTable;
