import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logoReversed from "@/assets/logo-reversed.png";

const NAV = "#0B1C36";
const ORANGE = "#F56209";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const transparent = location.pathname === "/" && !scrolled;

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: transparent ? "transparent" : NAV,
        boxShadow: transparent ? "none" : "0 4px 32px rgba(11,28,54,0.25)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={logoReversed} alt="Mitchell Groundworks Ltd" className="block w-auto" style={{ height: 46 }} />
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: location.pathname === l.to ? ORANGE : "rgba(255,255,255,0.82)",
                transition: "color 0.15s",
              }}
              className="hover:!text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:07700000000"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 transition-opacity hover:opacity-85"
          style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}
        >
          <Phone size={14} />
          07700 000 000
        </a>

        {/* Burger */}
        <button className="lg:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#0B1C36", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3.5 border-b"
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: location.pathname === l.to ? ORANGE : "rgba(255,255,255,0.8)",
                  borderColor: "rgba(255,255,255,0.06)",
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:07700000000"
              className="mt-4 flex items-center justify-center gap-2 py-4"
              style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}
            >
              <Phone size={16} /> 07700 000 000
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
