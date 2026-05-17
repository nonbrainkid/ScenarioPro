const AIVideoPlayer = () => {
  return (
    <section
      id="media"
      aria-label="AI Video Avatar Player Placeholder"
      className="wireframe-box min-h-[260px]"
    >
      <span className="wireframe-label">Block · AI Video / Avatar Player</span>

      {/* Video frame */}
      <div
        className="w-full mt-3 bg-gray-200 border border-gray-300 rounded relative overflow-hidden"
        style={{ aspectRatio: "16/9" }}
        aria-hidden="true"
      >
        {/* Avatar placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-gray-500" />
          <div className="h-2.5 bg-gray-300 rounded w-24" />
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gray-500 bg-opacity-70 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="white"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
          <div className="h-full w-1/3 bg-gray-500" />
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center gap-2 mt-2 w-full px-1" aria-hidden="true">
        <div className="w-6 h-6 border border-gray-400 rounded bg-gray-200 text-[9px] text-gray-500 flex items-center justify-center">▶</div>
        <div className="flex-1 h-1.5 bg-gray-300 rounded" />
        <div className="text-[10px] text-gray-400">0:00 / 0:00</div>
        <div className="w-6 h-6 border border-gray-400 rounded bg-gray-200 text-[9px] text-gray-500 flex items-center justify-center">⛶</div>
      </div>

      <p className="wireframe-title mt-3">[ AI Video / Avatar Player Placeholder ]</p>
      <p className="text-xs text-gray-400 mt-1">
        AI-generated avatar video · embedded player with controls
      </p>
    </section>
  );
};

export default AIVideoPlayer;
