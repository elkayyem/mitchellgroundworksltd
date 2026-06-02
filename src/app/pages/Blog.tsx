import { Link } from "react-router";
import { ArrowRight, Clock, User } from "lucide-react";

const NAV = "#0B1C36";
const ORANGE = "#F56209";

const POSTS = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1593786267440-550458cc882a?w=800&h=500&fit=crop&auto=format",
    cat: "Extensions",
    title: "How Much Does a House Extension Cost in 2024?",
    excerpt: "A realistic breakdown of extension costs — from single-storey kitchen builds to two-storey rear additions. What affects the price and what to watch out for.",
    author: "Ross Mitchell",
    date: "12 Nov 2024",
    mins: 8,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&h=500&fit=crop&auto=format",
    cat: "Kitchen",
    title: "Planning Your Extension Kitchen: 7 Things to Decide Before You Start",
    excerpt: "Kitchen extensions are the most popular home improvement in the UK. Here's what you need to think about before work begins — from layouts to appliances.",
    author: "Ross Mitchell",
    date: "4 Oct 2024",
    mins: 6,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1759950344779-86b5aeb1349e?w=800&h=500&fit=crop&auto=format",
    cat: "Groundworks",
    title: "What Are Groundworks? A Homeowner's Guide",
    excerpt: "Groundworks underpin every construction project, but most homeowners don't know much about what's involved. This guide explains the process from excavation to foundations.",
    author: "Kevin Mitchell",
    date: "19 Sep 2024",
    mins: 5,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1766595680974-e63877a2ab5b?w=800&h=500&fit=crop&auto=format",
    cat: "Driveways",
    title: "Block Paving vs Natural Stone: Which is Right for Your Driveway?",
    excerpt: "Two of the most popular driveway and patio materials compared. Pros, cons, costs, and which type of property suits each best.",
    author: "Ross Mitchell",
    date: "2 Aug 2024",
    mins: 7,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1593012671976-1422185230fb?w=800&h=500&fit=crop&auto=format",
    cat: "Extensions",
    title: "Do You Need Planning Permission for a Rear Extension?",
    excerpt: "Permitted development rules explained in plain English. Find out what size extension you can build without planning permission — and what pushes you over the line.",
    author: "Ross Mitchell",
    date: "14 Jun 2024",
    mins: 6,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1714860534425-7ce04e013dec?w=800&h=500&fit=crop&auto=format",
    cat: "Renovations",
    title: "Renovating an Older Property: Where to Start",
    excerpt: "From structural checks to modernising layouts, here's how to approach a full renovation of a period or dated property without nasty surprises.",
    author: "Kevin Mitchell",
    date: "9 May 2024",
    mins: 5,
  },
];

const featured = POSTS[0];
const rest = POSTS.slice(1);

export function Blog() {
  return (
    <div style={{ fontFamily: "'Barlow',sans-serif" }}>

      {/* Hero */}
      <section className="relative pt-40 pb-24" style={{ background: NAV }}>
        <div className="absolute top-0 left-0 bottom-0 w-1.5" style={{ background: ORANGE }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: ORANGE }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Insights</span>
          </div>
          <h1 className="text-white leading-none uppercase mb-5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem,7vw,5rem)" }}>
            Blog & Advice
          </h1>
          <p className="max-w-xl" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7 }}>
            Practical advice on extensions, groundworks, and home improvements — straight from the team.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: "1px solid rgba(11,28,54,0.08)" }}>
            <div className="relative overflow-hidden" style={{ background: NAV }}>
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover"
                style={{ minHeight: 320, opacity: 0.8 }}
              />
            </div>
            <div className="p-10 lg:p-12 flex flex-col justify-center" style={{ background: "#fff" }}>
              <div className="flex items-center gap-3 mb-5">
                <span style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", padding: "3px 9px" }}>
                  Featured
                </span>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: ORANGE }}>
                  {featured.cat}
                </span>
              </div>
              <h2 className="leading-tight uppercase mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem,2.5vw,2rem)", color: NAV }}>
                {featured.title}
              </h2>
              <p className="mb-6" style={{ color: "#52667F", fontSize: "0.9rem", lineHeight: 1.7 }}>{featured.excerpt}</p>
              <div className="flex items-center gap-5 mb-8">
                <div className="flex items-center gap-2" style={{ color: "#52667F", fontSize: "0.8rem" }}>
                  <User size={13} /> {featured.author}
                </div>
                <div className="flex items-center gap-2" style={{ color: "#52667F", fontSize: "0.8rem" }}>
                  <Clock size={13} /> {featured.mins} min read
                </div>
                <span style={{ color: "#52667F", fontSize: "0.8rem" }}>{featured.date}</span>
              </div>
              <Link
                to={`/blog/${featured.id}`}
                className="flex items-center gap-2 w-fit px-7 py-3.5 text-white transition-opacity hover:opacity-85"
                style={{ background: NAV, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                Read Article <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 lg:py-24" style={{ background: "#F2F5FA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <article key={p.id} className="group bg-white overflow-hidden" style={{ border: "1px solid rgba(11,28,54,0.07)" }}>
                <div className="relative overflow-hidden" style={{ background: NAV }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ height: 220, opacity: 0.85 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.66rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", padding: "3px 9px" }}>
                      {p.cat}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="leading-snug uppercase mb-3" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.1rem", color: NAV }}>
                    {p.title}
                  </h3>
                  <p className="mb-5" style={{ color: "#52667F", fontSize: "0.84rem", lineHeight: 1.65 }}>{p.excerpt}</p>
                  <div className="flex items-center gap-4 mb-5" style={{ color: "#8A9AB0", fontSize: "0.76rem" }}>
                    <div className="flex items-center gap-1.5"><User size={12} /> {p.author}</div>
                    <div className="flex items-center gap-1.5"><Clock size={12} /> {p.mins} min</div>
                  </div>
                  <Link
                    to={`/blog/${p.id}`}
                    className="flex items-center gap-1.5"
                    style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: ORANGE }}
                  >
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20" style={{ background: NAV }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: ORANGE }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Stay Updated</span>
            <div className="h-px w-10" style={{ background: ORANGE }} />
          </div>
          <h2 className="text-white leading-none uppercase mb-4" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.5rem)" }}>
            Get Our Latest Advice
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.92rem" }}>
            Sign up for occasional articles on extensions, groundworks, and home improvements. No spam — ever.
          </p>
          <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm outline-none"
              style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.12)", fontFamily: "'Barlow',sans-serif" }}
            />
            <button
              type="submit"
              className="px-6 py-3 text-white shrink-0 transition-opacity hover:opacity-85"
              style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
