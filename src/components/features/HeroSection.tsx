const HeroSection = () => {
  return (
    <section
      id="home"
      aria-label="Hero Section Banner"
      className="w-full border-2 border-dashed border-gray-400 bg-gray-100 rounded-lg overflow-hidden"
    >
      {/* Section tag */}
      <div className="border-b border-dashed border-gray-400 bg-gray-200 px-4 py-1.5">
        <span className="wireframe-label">Section · Hero Banner</span>
      </div>

      {/* Content area */}
      <div className="flex flex-col items-center justify-center text-center px-8 py-16 gap-6">

        {/* Title placeholder */}
        <div className="w-full max-w-lg space-y-3">
          <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto" aria-hidden="true" />
          <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto" aria-hidden="true" />
        </div>

        {/* Subtitle / intro placeholder */}
        <div className="w-full max-w-md space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" aria-hidden="true" />
          <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" aria-hidden="true" />
          <div className="h-4 bg-gray-200 rounded w-4/6 mx-auto" aria-hidden="true" />
        </div>

        {/* Label */}
        <p className="wireframe-title mt-2">
          [ Hero Section Banner: Title and Intro ]
        </p>
        <p className="text-xs text-gray-400">
          Main headline · Tagline · Primary CTA button will go here
        </p>

        {/* CTA button placeholder */}
        <div className="flex gap-3 mt-2">
          <div className="h-10 w-36 bg-gray-400 rounded flex items-center justify-center">
            <span className="text-xs text-white font-semibold">[ CTA Button ]</span>
          </div>
          <div className="h-10 w-28 bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
            <span className="text-xs text-gray-500 font-semibold">[ Secondary ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
