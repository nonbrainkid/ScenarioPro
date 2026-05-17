const AudioPlayerControls = () => {
  return (
    <section
      aria-label="Audio Player Controls for AI Music"
      className="w-full border-2 border-dashed border-gray-400 bg-gray-100 rounded-lg overflow-hidden"
    >
      {/* Section tag */}
      <div className="border-b border-dashed border-gray-400 bg-gray-200 px-4 py-1.5">
        <span className="wireframe-label">Section · Audio Player · AI Music</span>
      </div>

      <div className="px-6 py-5 flex flex-col sm:flex-row items-center gap-6">

        {/* Album art placeholder */}
        <div
          className="w-16 h-16 flex-shrink-0 bg-gray-300 border border-gray-400 rounded flex items-center justify-center"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>

        {/* Track info + controls */}
        <div className="flex-1 w-full space-y-3">
          {/* Track title */}
          <div className="space-y-1" aria-hidden="true">
            <div className="h-3 bg-gray-300 rounded w-40" />
            <div className="h-2.5 bg-gray-200 rounded w-24" />
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="text-[10px] text-gray-400">0:00</span>
            <div className="flex-1 h-2 bg-gray-300 rounded-full relative">
              <div className="h-full w-2/5 bg-gray-500 rounded-full" />
              <div className="absolute top-1/2 left-2/5 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-600 border border-white shadow" />
            </div>
            <span className="text-[10px] text-gray-400">0:00</span>
          </div>

          {/* Control buttons */}
          <div className="flex items-center gap-3" aria-hidden="true">
            {/* Shuffle */}
            <button className="w-8 h-8 border border-gray-400 rounded bg-gray-200 text-[10px] text-gray-500 flex items-center justify-center" aria-label="Shuffle">
              ⇄
            </button>
            {/* Prev */}
            <button className="w-8 h-8 border border-gray-400 rounded bg-gray-200 text-[10px] text-gray-500 flex items-center justify-center" aria-label="Previous">
              ⏮
            </button>
            {/* Play/Pause */}
            <button className="w-10 h-10 border-2 border-gray-600 rounded-full bg-gray-500 text-white text-sm flex items-center justify-center" aria-label="Play">
              ▶
            </button>
            {/* Next */}
            <button className="w-8 h-8 border border-gray-400 rounded bg-gray-200 text-[10px] text-gray-500 flex items-center justify-center" aria-label="Next">
              ⏭
            </button>
            {/* Repeat */}
            <button className="w-8 h-8 border border-gray-400 rounded bg-gray-200 text-[10px] text-gray-500 flex items-center justify-center" aria-label="Repeat">
              ↻
            </button>
            {/* Volume */}
            <div className="flex items-center gap-1.5 ml-auto">
              <span className="text-[10px] text-gray-500">🔊</span>
              <div className="w-20 h-1.5 bg-gray-300 rounded-full">
                <div className="h-full w-3/4 bg-gray-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dashed border-gray-300 px-6 py-2 text-center">
        <p className="wireframe-title">[ Audio Player Controls for AI Music ]</p>
        <p className="text-xs text-gray-400 mt-0.5">
          AI-composed background music or voiceover · track queue & volume controls
        </p>
      </div>
    </section>
  );
};

export default AudioPlayerControls;
