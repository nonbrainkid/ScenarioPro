const navLinks = [
  { label: "Главная", href: "#", active: true },
  { label: "Аналитика", href: "#analytics", active: false },
  { label: "AI Инструменты", href: "#ai-tools", active: false },
  { label: "Медиа", href: "#media", active: false },
  { label: "Контакты", href: "#contact", active: false },
];

const SiteHeader = () => {
  return (
    <header className="w-full sticky top-0 z-50 glass-effect">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white text-lg font-black leading-none">PV</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-gray-900 select-none">
            ProfitVision <span className="text-emerald-600">AI</span>
          </span>
        </div>

        {/* Navigation */}
        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex items-center gap-8">
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

        {/* Action Button */}
        <button className="hidden sm:block premium-button-primary !py-2 !px-5 text-sm">
          Начать
        </button>
      </div>
    </header>
  );
};

export default SiteHeader;
