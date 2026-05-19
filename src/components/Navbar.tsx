import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { navLinks } from "../data/portfolio";
import { useTheme } from "../utils/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-xl border-b"
          : "py-5"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--navbar-bg)" : "transparent",
        borderColor: scrolled ? "var(--navbar-border)" : "transparent",
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          <span className="gradient-text">&lt;</span>
          Harish
          <span className="gradient-text"> /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              style={{
                color:
                  activeSection === link.href.replace("#", "")
                    ? "var(--color-accent)"
                    : "var(--text-secondary)",
              }}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    opacity: 0.1,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2.5 rounded-xl transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <BsSun size={16} /> : <BsMoonStars size={16} />}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <BsSun size={16} /> : <BsMoonStars size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-xl transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <HiOutlineXMark size={18} />
            ) : (
              <HiOutlineBars3 size={18} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t"
            style={{
              backgroundColor: "var(--navbar-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{
                    color:
                      activeSection === link.href.replace("#", "")
                        ? "var(--color-accent)"
                        : "var(--text-secondary)",
                    backgroundColor:
                      activeSection === link.href.replace("#", "")
                        ? "var(--bg-card)"
                        : "transparent",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
