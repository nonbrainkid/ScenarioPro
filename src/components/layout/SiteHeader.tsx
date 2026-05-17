const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Analytics", href: "#analytics", active: false },
  { label: "AI Tools", href: "#ai-tools", active: false },
  { label: "Media", href: "#media", active: false },
  { label: "Contact", href: "#contact", active: false },
];

const SiteHeader = () => {
  return (
    <header className="w-full border-b border-gray-300 bg-white sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Logo icon placeholder */}
          <div className="w-8 h-8 border-2 border-gray-900 rounded bg-gray-900 flex items-center justify-center">
            <span className="text-white text-xs font-black leading-none">PV</span>
          </div>
          <span className="text-base font-black tracking-tight text-gray-900 select-none">
            ProfitVision <span className="font-light text-gray-500">AI</span>
          </span>
        </div>

        {/* Navigation */}
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={link.active ? "nav-link-active" : "nav-link"}
                  aria-current={link.active ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
