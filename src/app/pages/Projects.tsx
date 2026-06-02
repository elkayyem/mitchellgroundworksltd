import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const NAV = "#0B1C36";
const ORANGE = "#F56209";

const CATS = ["All", "Extensions", "Groundworks", "Driveways & Patios"];

const PROJECTS = [
  { img: "https://images.unsplash.com/photo-1593786267440-550458cc882a?w=800&h=600&fit=crop&auto=format", cat: "Extensions", title: "Two-Storey Rear Extension", loc: "Tunbridge Wells, Kent", desc: "Full structural build including groundworks, plastering, kitchen fit-out, and all electrics." },
  { img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&h=600&fit=crop&auto=format", cat: "Extensions", title: "Open-Plan Kitchen Extension", loc: "Sevenoaks, Kent", desc: "Single-storey extension with bi-fold doors, open-plan kitchen-diner, and LED lighting." },
  { img: "https://images.unsplash.com/photo-1759950344779-86b5aeb1349e?w=800&h=600&fit=crop&auto=format", cat: "Groundworks", title: "Commercial Site Drainage", loc: "Maidstone, Kent", desc: "Large-scale drainage installation and groundworks package for commercial development." },
  { img: "https://images.unsplash.com/photo-1593012671976-1422185230fb?w=800&h=600&fit=crop&auto=format", cat: "Extensions", title: "Side Return Extension", loc: "Tonbridge, Kent", desc: "Side return infill with internal layout reconfiguration and full plastering package." },
  { img: "https://images.unsplash.com/photo-1759579471231-4e68075ebc76?w=800&h=600&fit=crop&auto=format", cat: "Groundworks", title: "New Build Foundations", loc: "Medway, Kent", desc: "Strip foundations, drainage, and all groundworks for a detached new build." },
  { img: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&h=600&fit=crop&auto=format", cat: "Extensions", title: "L-Shaped Kitchen Extension", loc: "Bromley, London", desc: "L-shaped single-storey rear extension with vaulted ceiling, skylights, and underfloor heating." },
  { img: "https://images.unsplash.com/photo-1766595680974-e63877a2ab5b?w=800&h=600&fit=crop&auto=format", cat: "Driveways & Patios", title: "Block Paving Driveway", loc: "Haywards Heath, Sussex", desc: "200m² block paving driveway with new drainage channels and edging." },
  { img: "https://images.unsplash.com/photo-1601303981778-0f61e3d2da64?w=800&h=600&fit=crop&auto=format", cat: "Driveways & Patios", title: "Natural Stone Patio", loc: "Reigate, Surrey", desc: "Indian sandstone patio with raised planters, new garden wall, and recessed lights." },
];

export function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <div style={{ fontFamily: "'Barlow',sans-serif" }}>

      {/* Hero */}
      <section className="relative pt-40 pb-24" style={{ background: NAV }}>
        <div className="absolute top-0 left-0 bottom-0 w-1.5" style={{ background: ORANGE }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: ORANGE }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Portfolio</span>
          </div>
          <h1 className="text-white leading-none uppercase mb-5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem,7vw,5rem)" }}>
            Our Projects
          </h1>
          <p className="max-w-xl" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7 }}>
            Browse a selection of completed projects — from full house extensions to groundworks and driveways.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 lg:py-28" style={{ background: "#F2F5FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="px-5 py-2.5 transition-all duration-150"
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  background: active === c ? ORANGE : "#fff",
                  color: active === c ? "#fff" : NAV,
                  border: `1px solid ${active === c ? ORANGE : "rgba(11,28,54,0.12)"}`,
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <div key={p.title} className="group bg-white overflow-hidden" style={{ border: "1px solid rgba(11,28,54,0.07)" }}>
                <div className="relative overflow-hidden" style={{ background: NAV }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ height: 240, opacity: 0.85 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", padding: "3px 9px" }}>
                      {p.cat}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.1rem", color: NAV }}>
                    {p.title}
                  </h3>
                  <div className="mb-3" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.1em", color: ORANGE }}>
                    {p.loc}
                  </div>
                  <p style={{ color: "#52667F", fontSize: "0.84rem", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: ORANGE }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white leading-tight uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Want Results Like These?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginTop: 4 }}>Get in touch for a free no-obligation quote on your project.</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-4 text-[#F56209] shrink-0 transition-opacity hover:opacity-85"
            style={{ background: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
