import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Star, Phone, Shield, Award, Users, Layers, HardHat, Droplets, Square, Home as HomeIcon, Trees } from "lucide-react";

const NAV = "#0B1C36";
const ORANGE = "#F56209";

const STATS = [
  { n: "40+", label: "Years Experience" },
  { n: "800+", label: "Projects Completed" },
  { n: "100%", label: "Client Satisfaction" },
  { n: "2012", label: "Established" },
];

const SERVICES = [
  { icon: <HardHat size={26} />, title: "House Extensions", desc: "Full house extensions managed from the ground up — groundworks, structural build, and finishing, with one team handling your whole project from start to finish." },
  { icon: <Droplets size={26} />, title: "Groundworks & Drainage", desc: "Excavation, foundations, drainage systems, and soil management delivered with precision and built to last." },
  { icon: <Square size={26} />, title: "Patios & Driveways", desc: "Block paving, natural stone, and tarmac — transforming outdoor spaces to the highest standard." },
  { icon: <Layers size={26} />, title: "Brickwork & Blockwork", desc: "Precision brickwork and blockwork for extensions, walls, and new builds — one of our core in-house trades." },
  { icon: <HomeIcon size={26} />, title: "Renovations", desc: "Full property renovations and refurbishments — structural alterations and modernising tired or dated spaces, managed end to end." },
  { icon: <Trees size={26} />, title: "Landscaping & Fencing", desc: "Complete garden transformations, fencing, turfing, and boundary work to finish your project off." },
];

const PROJECTS = [
  { img: "https://images.unsplash.com/photo-1593786267440-550458cc882a?w=800&h=600&fit=crop&auto=format", tag: "Extension", title: "Rear Extension — Tunbridge Wells" },
  { img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&h=600&fit=crop&auto=format", tag: "Kitchen", title: "Kitchen Fit-Out — Sevenoaks" },
  { img: "https://images.unsplash.com/photo-1759950344779-86b5aeb1349e?w=800&h=600&fit=crop&auto=format", tag: "Groundworks", title: "Drainage & Foundations — Maidstone" },
];

const REVIEWS = [
  { name: "James Hollis", loc: "Tunbridge Wells", body: "Mitchell Groundworks transformed our home with a full rear extension. One team managed the whole project from start to finish — incredible result and zero stress.", stars: 5 },
  { name: "Sarah Cartwright", loc: "Tonbridge", body: "Professional, punctual, and outstanding quality. They finished on schedule and the workmanship is second to none. Highly recommend.", stars: 5 },
  { name: "David Okafor", loc: "Maidstone", body: "We'd been let down by cowboy builders before. Mitchell Groundworks were the complete opposite — reliable, tidy, and brilliant attention to detail.", stars: 5 },
];

export function Home() {
  return (
    <div style={{ fontFamily: "'Barlow',sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative flex items-center" style={{ minHeight: "100svh", background: NAV }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1759579471231-4e68075ebc76?w=1800&h=900&fit=crop&auto=format')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.22,
          }}
        />
        {/* Orange accent bar */}
        <div className="absolute top-0 left-0 bottom-0 w-1.5" style={{ background: ORANGE }} />

        <div className="relative max-w-7xl mx-auto px-6 w-full pt-32 pb-40">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-12" style={{ background: ORANGE }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>
                Groundworks &amp; Construction Specialists
              </span>
            </div>

            <h1
              className="text-white mb-8 leading-none uppercase"
              style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(3.2rem,8vw,6.5rem)", letterSpacing: "-0.01em" }}
            >
              Built Right.
              <br />
              <span style={{ color: ORANGE }}>Built to Last.</span>
            </h1>

            <p className="mb-10 max-w-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem" }}>
              From groundworks and brickwork to complete house extensions — Mitchell Groundworks delivers quality construction across Southern England. One team, one point of contact, start to finish.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2.5 px-8 py-4 text-white transition-opacity hover:opacity-85"
                style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                Get a Free Quote <ArrowRight size={17} />
              </Link>
              <Link
                to="/projects"
                className="flex items-center gap-2 px-8 py-4 border transition-colors hover:border-white"
                style={{ borderColor: "rgba(255,255,255,0.25)", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 inset-x-0" style={{ background: ORANGE }}>
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.9rem", color: "#fff", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.78)", marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO SPLIT ── */}
      <section className="py-24 lg:py-32" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1593786267440-550458cc882a?w=900&h=700&fit=crop&auto=format"
              alt="House extension brickwork under construction"
              className="w-full object-cover"
              style={{ height: 520 }}
            />
            <div className="absolute -bottom-6 -right-6 p-6" style={{ background: NAV }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "2.4rem", color: ORANGE, lineHeight: 1 }}>800+</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Projects completed</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: ORANGE }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Who We Are</span>
            </div>
            <h2 className="mb-6 leading-none uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: NAV }}>
              A Complete Construction Team You Can Rely On
            </h2>
            <p className="mb-5 leading-relaxed" style={{ color: "#52667F", fontSize: "0.96rem" }}>
              Based in Bournemouth and covering Southern England, Mitchell Groundworks has been delivering high-quality residential and commercial construction since 2012. Our core trades are groundworks and brickwork — and we now offer complete house extensions, managing your project from the initial dig right through to a finished build.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "#52667F", fontSize: "0.96rem" }}>
              When you work with us, you deal directly with the people who care the most. One team, one point of contact, one standard of quality — combining traditional values with modern techniques to deliver results built to last.
            </p>
            <ul className="space-y-3 mb-10">
              {["Over 40 years' experience in the industry","Fully insured — public liability & employer's","All work guaranteed and building-regs compliant","Free no-obligation site visits and quotes"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} style={{ color: ORANGE, marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: "#3A4A5E", fontSize: "0.9rem" }}>{i}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="flex items-center gap-2 w-fit px-7 py-3.5 text-white transition-opacity hover:opacity-85"
              style={{ background: NAV, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 lg:py-32" style={{ background: "#F2F5FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: ORANGE }} />
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>What We Do</span>
              </div>
              <h2 className="leading-none uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: NAV }}>
                Complete Construction Services
              </h2>
            </div>
            <Link to="/services" className="flex items-center gap-2 shrink-0" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: ORANGE }}>
              All Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="group bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                style={{ border: "1px solid rgba(11,28,54,0.07)" }}
              >
                <div className="w-13 h-13 w-[52px] h-[52px] flex items-center justify-center mb-6" style={{ background: i === 0 ? ORANGE : NAV, color: i === 0 ? "#fff" : ORANGE }}>
                  {s.icon}
                </div>
                <h3 className="mb-3 uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.25rem", color: NAV }}>
                  {s.title}
                </h3>
                <p style={{ color: "#52667F", fontSize: "0.88rem", lineHeight: 1.7 }}>{s.desc}</p>
                <div className="mt-6 flex items-center gap-1.5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: ORANGE }}>
                  Learn More <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK BAND — WHY US ── */}
      <section className="py-24 lg:py-32" style={{ background: NAV }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: ORANGE }} />
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Why Choose Us</span>
              </div>
              <h2 className="text-white leading-none uppercase mb-6" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,2.8rem)" }}>
                The Mitchell Groundworks Difference
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                We've built our reputation on delivering what we promise — on time, on budget, and to a standard our clients are proud to show off.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { icon: <HardHat size={22} />, title: "One Team, One Contact", desc: "You deal directly with us from start to finish. We handle our core trades ourselves and manage everything else, so your build runs smoothly." },
                { icon: <Shield size={22} />, title: "Fully Insured", desc: "Full public liability and employer's cover, with all work signed off to building regulations." },
                { icon: <Award size={22} />, title: "Transparent Pricing", desc: "Detailed written quotes with no hidden extras. We agree the scope and stick to it." },
                { icon: <Users size={22} />, title: "40+ Years Experience", desc: "Over four decades of experience delivering residential and commercial construction across Southern England." },
              ].map((item) => (
                <div key={item.title} className="p-7" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="mb-4" style={{ color: ORANGE }}>{item.icon}</div>
                  <h3 className="text-white mb-2 uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.04em" }}>{item.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-24 lg:py-32" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: ORANGE }} />
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Portfolio</span>
              </div>
              <h2 className="leading-none uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: NAV }}>
                Recent Projects
              </h2>
            </div>
            <Link to="/projects" className="flex items-center gap-2 shrink-0" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: ORANGE }}>
              View All Projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group relative overflow-hidden" style={{ background: NAV }}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ height: 300, opacity: 0.75 }}
                />
                <div className="absolute top-4 left-4">
                  <span style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", padding: "4px 10px" }}>{p.tag}</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5" style={{ background: "linear-gradient(to top,rgba(11,28,54,0.95),transparent)" }}>
                  <p className="text-white uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.04em" }}>{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 lg:py-32" style={{ background: "#F2F5FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: ORANGE }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Client Reviews</span>
              <div className="h-px w-10" style={{ background: ORANGE }} />
            </div>
            <h2 className="leading-none uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", color: NAV }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white p-8" style={{ border: "1px solid rgba(11,28,54,0.07)" }}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} size={15} fill={ORANGE} style={{ color: ORANGE }} />
                  ))}
                </div>
                <p className="mb-7" style={{ color: "#3A4A5E", fontSize: "0.88rem", lineHeight: 1.75 }}>"{r.body}"</p>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1rem", color: NAV }}>{r.name}</div>
                  <div style={{ fontSize: "0.78rem", color: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700 }}>{r.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: ORANGE }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white leading-tight uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginTop: 4 }}>Free no-obligation quote. We respond within 24 hours.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-4 text-[#F56209] transition-opacity hover:opacity-85"
              style={{ background: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:07700000000"
              className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white transition-colors hover:bg-white hover:text-[#F56209]"
              style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
