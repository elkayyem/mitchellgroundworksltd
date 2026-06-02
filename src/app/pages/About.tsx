import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Award, Shield, Users, Clock } from "lucide-react";

const NAV = "#0B1C36";
const ORANGE = "#F56209";

const VALUES = [
  { icon: <Award size={24} />, title: "Quality Craftsmanship", desc: "Every job is completed to the standard we'd want in our own homes. No cutting corners, no rushing." },
  { icon: <Shield size={24} />, title: "Total Transparency", desc: "You receive a detailed written quote before any work begins. No hidden costs, no surprises on completion." },
  { icon: <Users size={24} />, title: "One Point of Contact", desc: "When you work with us, you deal directly with the people who care the most. We manage every trade so you don't have to." },
  { icon: <Clock size={24} />, title: "Respect for Your Time", desc: "We keep to agreed schedules and keep you informed throughout. Your project won't be left dormant." },
];

const TEAM = [
  { name: "Ross Mitchell", role: "Managing Director & Groundworks Lead", img: `${import.meta.env.BASE_URL}RossAboutMe.jpg` },
  { name: "Harry Mitchell", role: "Director, Groundworks & Main Plant Operator", img: `${import.meta.env.BASE_URL}HarryAboutMe.jpg` },
  { name: "Kevin Mitchell", role: "Director & Groundworks", img: `${import.meta.env.BASE_URL}KevinAboutMe.jpg` },
  { name: "Jack Mitchell", role: "Director, Groundworks & Landscaping Specialist", img: `${import.meta.env.BASE_URL}JackAboutMe.jpg` },
];

const TIMELINE = [
  { year: "2012", title: "Founded", desc: "Ross Mitchell founded Mitchell Groundworks as a family-run groundworks and construction company based in Bournemouth." },
  { year: "2015", title: "Growing the Team", desc: "Expanded into brickwork and took on larger residential and commercial projects across Dorset." },
  { year: "2020", title: "Covering the South", desc: "Grew our reach to cover the whole of Southern England, building a reputation on word of mouth." },
  { year: "2024", title: "Moving into Extensions", desc: "Began offering complete house extensions, managing every trade so clients deal with one team from start to finish." },
];

export function About() {
  return (
    <div style={{ fontFamily: "'Barlow',sans-serif" }}>

      {/* Hero */}
      <section className="relative pt-40 pb-24" style={{ background: NAV }}>
        <div className="absolute top-0 left-0 bottom-0 w-1.5" style={{ background: ORANGE }} />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558227691-41ea78d1f631?w=1600&h=700&fit=crop&auto=format')`, backgroundSize: "cover", backgroundPosition: "center top", opacity: 0.12 }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: ORANGE }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Our Story</span>
          </div>
          <h1 className="text-white leading-none uppercase mb-5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem,7vw,5rem)" }}>
            About Us
          </h1>
          <p className="max-w-xl" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7 }}>
            A family-run construction business built on reputation, quality, and a genuine passion for the trade.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1593786267440-550458cc882a?w=900&h=700&fit=crop&auto=format"
              alt="Mitchell Groundworks on site"
              className="w-full object-cover"
              style={{ height: 520 }}
            />
            <div className="absolute -bottom-6 -right-6 p-7" style={{ background: ORANGE }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "2.5rem", color: "#fff", lineHeight: 1 }}>Est.</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "2.5rem", color: "#fff", lineHeight: 1 }}>2012</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: ORANGE }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Who We Are</span>
            </div>
            <h2 className="leading-none uppercase mb-6" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,2.8rem)", color: NAV }}>
              Built on Reputation. Powered by the Trade.
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#52667F", fontSize: "0.95rem" }}>
              At Mitchell Groundworks, we're a proud family-run construction company based in the Bournemouth and Poole area of Dorset, with a passion for quality craftsmanship and reliable service. With over 40 years' experience in the industry, we've built our reputation on trust, integrity, and a genuine commitment to our clients.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: "#52667F", fontSize: "0.95rem" }}>
              From a simple patio to a full home extension or renovation, we offer a complete range of construction services tailored to meet your needs. Every project we take on is treated with the same level of care and attention as if it were our own home.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "#52667F", fontSize: "0.95rem" }}>
              What sets us apart is our personal approach — when you work with us, you deal directly with the people who care the most. We combine traditional values with modern techniques to deliver results that are built to last and exceed expectations. Whether you're expanding your living space, transforming your property, or starting from the ground up, we're here to bring your vision to life — on time, on budget, and with a friendly, local touch.
            </p>
            <ul className="space-y-3">
              {["Family-run, friendly local team","Over 40 years' experience in the industry","Groundworks & brickwork specialists","Fully insured — public liability & employer's liability"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={17} style={{ color: ORANGE, marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: "#3A4A5E", fontSize: "0.88rem" }}>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-28" style={{ background: "#F2F5FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: ORANGE }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Our Values</span>
              <div className="h-px w-10" style={{ background: ORANGE }} />
            </div>
            <h2 className="leading-none uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,2.8rem)", color: NAV }}>
              How We Work
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white p-8" style={{ border: "1px solid rgba(11,28,54,0.07)" }}>
                <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ background: ORANGE, color: "#fff" }}>
                  {v.icon}
                </div>
                <h3 className="uppercase mb-3" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.05rem", color: NAV }}>
                  {v.title}
                </h3>
                <p style={{ color: "#52667F", fontSize: "0.85rem", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-28" style={{ background: NAV }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: ORANGE }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Our History</span>
            </div>
            <h2 className="text-white leading-none uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,2.8rem)" }}>
              20 Years in the Making
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-px hidden md:block" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <div key={t.year} className="flex gap-8 items-start">
                  <div className="w-28 shrink-0 text-right hidden md:block">
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.4rem", color: ORANGE }}>{t.year}</span>
                  </div>
                  <div className="relative hidden md:flex items-start justify-center w-7 shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full z-10" style={{ background: ORANGE }} />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="md:hidden mb-1" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.1rem", color: ORANGE }}>{t.year}</div>
                    <h3 className="text-white uppercase mb-1" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.1rem" }}>
                      {t.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", lineHeight: 1.65 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: ORANGE }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>The Team</span>
            </div>
            <h2 className="leading-none uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,2.8rem)", color: NAV }}>
              Meet the People Behind the Work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="group overflow-hidden" style={{ background: "#F2F5FA" }}>
                <div className="relative overflow-hidden" style={{ background: NAV }}>
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full object-cover object-top sm:object-center transition-transform duration-500 group-hover:scale-105 opacity-80"
                    style={{ height: 320 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="uppercase mb-1" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.2rem", color: NAV }}>{m.name}</h3>
                  <p style={{ color: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.role}</p>
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
            <h2 className="text-white leading-tight uppercase" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
              Let's Build Something Great Together
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginTop: 4 }}>Free site visit and no-obligation quote. Respond within 24 hours.</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-4 shrink-0 text-[#F56209] transition-opacity hover:opacity-85"
            style={{ background: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
