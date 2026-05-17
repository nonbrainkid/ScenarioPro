const columns = ["Scenario", "Revenue ($)", "Cost ($)", "Profit ($)", "Margin (%)"];
const rows = [
  ["Base Case", "—", "—", "—", "—"],
  ["Optimistic +10%", "—", "—", "—", "—"],
  ["Pessimistic −10%", "—", "—", "—", "—"],
  ["Custom Input", "[ editable ]", "[ editable ]", "—", "—"],
];

const WhatIfTable = () => {
  return (
    <section
      id="analytics"
      aria-label="Dynamic What-If Table Placeholder"
      className="w-full border-2 border-dashed border-gray-400 bg-gray-100 rounded-lg overflow-hidden"
    >
      {/* Section tag */}
      <div className="border-b border-dashed border-gray-400 bg-gray-200 px-4 py-1.5 flex items-center justify-between">
        <span className="wireframe-label">Section · Dynamic What-If Table</span>
        <span className="text-xs text-gray-400 font-medium">Interactive · Scenario Analysis</span>
      </div>

      <div className="p-6">
        <p className="wireframe-title mb-4">[ Dynamic 'What-If' Table Placeholder ]</p>

        {/* Table skeleton */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs" aria-label="What-If Scenario Table Wireframe">
            <thead>
              <tr className="bg-gray-300">
                {columns.map((col) => (
                  <th
                    key={col}
                    className="border border-gray-400 px-3 py-2 text-left font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border border-gray-300 px-3 py-2 text-gray-500"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          User-adjustable inputs will dynamically recalculate profit projections
        </p>
      </div>
    </section>
  );
};

export default WhatIfTable;
