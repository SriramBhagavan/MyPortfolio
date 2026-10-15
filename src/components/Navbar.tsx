import { useState, useEffect } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const getInitialTheme = (): "dark" | "light" => {
  try {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage blocked: ignore */
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 76;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: id === "home" ? 0 : top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
      style={scrolled || isOpen ? { backgroundColor: "hsl(var(--nav-bg))" } : undefined}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 font-bold hover:scale-105 transition-transform"
            aria-label="Go to top"
          >
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary text-white text-sm font-extrabold">
              RB
            </span>
            <span className="hidden sm:inline text-lg">Rama Bhagavan</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === item.id
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="grid place-items-center w-10 h-10 rounded-xl border border-border bg-card/60 hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="Bhagavan_resume_v2.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <Download size={16} />
              Resume
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-xl border border-border bg-card/60 hover:bg-muted transition-colors"
              aria-label="Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-1 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  active === item.id ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="Bhagavan_resume_v2.pdf"
              download
              className="sm:hidden flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl bg-gradient-primary text-white font-semibold"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
