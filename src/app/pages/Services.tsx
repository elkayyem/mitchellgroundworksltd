import { Link } from "react-router";
import { ArrowRight, CheckCircle2, HardHat, Droplets, Square, Wrench, Zap, Layers, Home, Trees } from "lucide-react";

const NAV = "#0B1C36";
const ORANGE = "#F56209";

const ALL_SERVICES = [
  {
    id: "extensions",
    icon: <HardHat size={28} />,
    title: "House Extensions",
    subtitle: "Our Flagship Service",
    flagship: true,
    img: "https://images.unsplash.com/photo-1593786267440-550458cc882a?w=900&h=600&fit=crop&auto=format",
    intro: "We deliver complete house extensions from the ground up. You deal with one team — us — managing your whole project from initial groundworks and structural build through to a finished extension, coordinating every trade so you don't have to.",
    items: [
      "Structural groundworks & foundations",
      "Brickwork & blockwork",
      "Structural shell & external walls",
      "Plastering & internal finishes",
      "Kitchen supply & fitting",
      "Electrical installation & certification",
      "Plumbing & heating connections",
      "Bi-fold & patio door installation",
      "Building regulations compliance & sign-off",
      "Full site clean on completion",
    ],
    trades: ["Groundworks", "Brickwork", "Structural Build", "Full Finishing"],
  },
  {
    id: "groundworks",
    icon: <Droplets size={28} />,
    title: "Groundworks & Drainage",
    intro: "Expert excavation, drainage, and soil management for residential and commercial sites across the region.",
    items: ["Excavation & earthworks", "Drainage installation & connection", "Soakaways & infiltration systems", "Retaining walls", "Utility trenching", "Foundations & concrete bases"],
  },
  {
    id: "brickwork",
    icon: <Layers size={28} />,
    title: "Brickwork & Blockwork",
    intro: "Precision brickwork and blockwork for extensions, garden walls, and new builds — one of our core in-house trades.",
    items: ["Extension brickwork & blockwork", "Garden & retaining walls", "Repointing & repairs", "Piers & boundary walls", "Facing brick & render prep", "New build superstructure"],
  },
  {
    id: "patios",
    icon: <Square size={28} />,
    title: "Patios & Driveways",
    intro: "Stunning, durable outdoor surfaces installed to the highest standard using premium materials.",
    items: ["Block paving driveways", "Natural stone & porcelain patios", "Tarmac & asphalt", "Gravel & shingle driveways", "Drainage channels & edging", "Steps and retaining borders"],
  },
  {
    id: "landscaping",
    icon: <Trees size={28} />,
    title: "Landscaping & Fencing",
    intro: "Complete garden transformations and boundary installations.",
    items: ["Fencing supply & installation", "Turf & lawn preparation", "Garden walls & raised beds", "Sleeper borders", "Hedging & planting", "Site clearance"],
  },
];

export function Services() {
  const flagship = ALL_SERVICES.find((s) => s.flagship)!;
  const rest = ALL_SERVICES.filter((s) => !s.flagship);

  return (
    <div style={{ fontFamily: "'Barlow',sans-serif" }}>

      {/* Hero */}
      <section className="relative pt-40 pb-24" style={{ background: NAV }}>
        <div className="absolute top-0 left-0 bottom-0 w-1.5" style={{ background: ORANGE }} />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1759950344779-86b5aeb1349e?w=1600&h=700&fit=crop&auto=format')`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1 }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: ORANGE }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>What We Offer</span>
          </div>
          <h1 className="text-white leading-none uppercase mb-5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem,7vw,5rem)" }}>
            Our Services
          </h1>
          <p className="max-w-xl" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7 }}>
            From foundations to finished extensions — groundworks and brickwork delivered by our own team, with every project managed start to finish.
          </p>
        </div>
      </section>

      {/* Flagship — Extensions */}
      <section className="py-24 lg:py-32" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-10"
            style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff" }}
          >
            <HardHat size={13} /> Flagship Service
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="leading-none uppercase mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: NAV }}>
                House Extensions —{" "}
                <span style={{ color: ORANGE }}>Managed Start to Finish</span>
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#52667F", fontSize: "0.94rem" }}>
                {flagship.intro}
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "#52667F", fontSize: "0.94rem" }}>
                Whether it's a single-storey kitchen extension, two-storey rear build, or a full side-return wrap, we have the experience to deliver on time and on budget. We carry out the groundworks and brickwork ourselves and manage the trades that finish it — so you get one point of contact throughout.
              </p>

              <h3 className="uppercase mb-5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "0.72rem", letterSpacing: "0.2em", color: NAV }}>Everything Included:</h3>
              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
                {flagship.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} style={{ color: ORANGE, marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: "#3A4A5E", fontSize: "0.86rem" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Trade chips */}
              <div className="flex flex-wrap gap-2 mb-10">
                {flagship.trades!.map((t) => (
                  <span key={t} className="px-4 py-1.5" style={{ background: NAV, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: ORANGE }}>
                    {t}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="flex items-center gap-2 w-fit px-8 py-4 text-white transition-opacity hover:opacity-85"
                style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.88rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                Get an Extension Quote <ArrowRight size={17} />
              </Link>
            </div>

            <div className="space-y-4">
              <img src={flagship.img} alt="Extension brickwork" className="w-full object-cover" style={{ height: 340 }} />
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=600&h=400&fit=crop&auto=format" alt="Kitchen fitting" className="w-full object-cover" style={{ height: 190 }} />
                <img src="https://images.unsplash.com/photo-1768321912048-9d358964c7ed?w=600&h=400&fit=crop&auto=format" alt="Interior construction" className="w-full object-cover" style={{ height: 190 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All other services grid */}
      <section className="py-24 lg:py-28" style={{ background: "#F2F5FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: ORANGE }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Additional Services</span>
            </div>
            <h2 className="leading-none uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: NAV }}>
              Everything Else We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {rest.map((s) => (
              <div key={s.id} className="bg-white p-7 group" style={{ border: "1px solid rgba(11,28,54,0.07)" }}>
                <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ background: NAV, color: ORANGE }}>
                  {s.icon}
                </div>
                <h3 className="uppercase mb-3" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.1rem", color: NAV }}>
                  {s.title}
                </h3>
                <p className="mb-5" style={{ color: "#52667F", fontSize: "0.84rem", lineHeight: 1.65 }}>{s.intro}</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2" style={{ color: "#52667F", fontSize: "0.82rem" }}>
                      <div className="w-1.5 h-1.5 shrink-0" style={{ background: ORANGE }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: NAV }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white uppercase mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)" }}>
            Ready to Discuss Your Project?
          </h2>
          <p className="mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.92rem" }}>
            Contact us for a free site visit and no-obligation quote. We'll assess your project and provide a clear, detailed estimate.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 text-white transition-opacity hover:opacity-85"
            style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Request a Free Quote <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
