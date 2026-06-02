import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const NAV = "#0B1C36";
const ORANGE = "#F56209";

const SERVICES = ["House Extension","Groundworks & Drainage","Brickwork & Blockwork","Patio / Driveway","Landscaping & Fencing","Renovation","Other"];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No backend (static host): compose an email in the visitor's mail client
  // with the enquiry pre-filled, then show the confirmation state.
  const MAILTO = "info@mitchellgw.co.uk";
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website enquiry${form.service ? " — " + form.service : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service || "Not specified"}`,
      "",
      "Project details:",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${MAILTO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div style={{ fontFamily: "'Barlow',sans-serif" }}>

      {/* Hero */}
      <section className="relative pt-40 pb-24" style={{ background: NAV }}>
        <div className="absolute top-0 left-0 bottom-0 w-1.5" style={{ background: ORANGE }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: ORANGE }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ORANGE }}>Get in Touch</span>
          </div>
          <h1 className="text-white leading-none uppercase mb-5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem,7vw,5rem)" }}>
            Contact Us
          </h1>
          <p className="max-w-xl" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7 }}>
            Request a free no-obligation quote or ask us anything. We respond to all enquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-24 lg:py-32" style={{ background: "#F2F5FA" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* Info column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick contact */}
            <div className="bg-white p-8" style={{ border: "1px solid rgba(11,28,54,0.07)" }}>
              <h2 className="uppercase mb-6" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.2rem", color: NAV }}>
                Contact Details
              </h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: ORANGE }}>
                    <Phone size={17} className="text-white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A9AB0", marginBottom: 2 }}>Phone</div>
                    <a href="tel:07700000000" className="hover:underline" style={{ fontWeight: 600, color: NAV, fontSize: "1rem", fontFamily: "'Barlow',sans-serif" }}>07700 000 000</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: ORANGE }}>
                    <Mail size={17} className="text-white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A9AB0", marginBottom: 2 }}>Email</div>
                    <a href="mailto:info@mitchellgw.co.uk" className="hover:underline" style={{ fontWeight: 500, color: NAV, fontSize: "0.9rem" }}>info@mitchellgw.co.uk</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: ORANGE }}>
                    <MapPin size={17} className="text-white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A9AB0", marginBottom: 2 }}>Area</div>
                    <span style={{ color: NAV, fontSize: "0.9rem" }}>Based in Bournemouth · covering Southern England</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* What to expect */}
            <div className="p-8" style={{ background: NAV }}>
              <h3 className="text-white uppercase mb-5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1rem" }}>
                What Happens Next
              </h3>
              <ul className="space-y-4">
                {["We'll respond to your enquiry within 24 hours","We arrange a free site visit at a time to suit you","You receive a detailed written quote once we've assessed the work","No obligation — take as long as you need"].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: ORANGE }}>
                      <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "0.65rem", color: "#fff" }}>{i + 1}</span>
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.84rem", lineHeight: 1.5 }}>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-10 lg:p-12" style={{ border: "1px solid rgba(11,28,54,0.07)" }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <CheckCircle2 size={56} style={{ color: ORANGE, marginBottom: 20 }} />
                <h2 className="uppercase mb-3" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "2rem", color: NAV }}>
                  Almost There!
                </h2>
                <p style={{ color: "#52667F", fontSize: "0.94rem", maxWidth: 420 }}>
                  Your email app should have opened with your enquiry ready to go — just hit send and we'll come back to you within 24 hours. No email client? Call us on{" "}
                  <a href="tel:07700000000" style={{ color: ORANGE, fontWeight: 600, textDecoration: "none" }}>07700 000 000</a>.
                </p>
              </div>
            ) : (
              <>
                <h2 className="uppercase mb-2" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.8rem", color: NAV }}>
                  Request a Free Quote
                </h2>
                <p className="mb-8" style={{ color: "#52667F", fontSize: "0.88rem" }}>
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={submit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-1.5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: NAV }}>
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handle}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 outline-none transition-colors"
                        style={{ background: "#F2F5FA", border: "1px solid rgba(11,28,54,0.1)", fontFamily: "'Barlow',sans-serif", fontSize: "0.9rem", color: NAV }}
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: NAV }}>
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handle}
                        placeholder="07700 000 000"
                        className="w-full px-4 py-3 outline-none"
                        style={{ background: "#F2F5FA", border: "1px solid rgba(11,28,54,0.1)", fontFamily: "'Barlow',sans-serif", fontSize: "0.9rem", color: NAV }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1.5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: NAV }}>
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handle}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 outline-none"
                      style={{ background: "#F2F5FA", border: "1px solid rgba(11,28,54,0.1)", fontFamily: "'Barlow',sans-serif", fontSize: "0.9rem", color: NAV }}
                    />
                  </div>

                  <div>
                    <label className="block mb-1.5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: NAV }}>
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handle}
                      className="w-full px-4 py-3 outline-none appearance-none"
                      style={{ background: "#F2F5FA", border: "1px solid rgba(11,28,54,0.1)", fontFamily: "'Barlow',sans-serif", fontSize: "0.9rem", color: form.service ? NAV : "#8A9AB0" }}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1.5" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: NAV }}>
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handle}
                      placeholder="Tell us about your project — size, location, timescales, any specific requirements..."
                      className="w-full px-4 py-3 outline-none resize-none"
                      style={{ background: "#F2F5FA", border: "1px solid rgba(11,28,54,0.1)", fontFamily: "'Barlow',sans-serif", fontSize: "0.9rem", color: NAV }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 text-white transition-opacity hover:opacity-85"
                    style={{ background: ORANGE, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
                  >
                    Send Enquiry <ArrowRight size={17} />
                  </button>

                  <p style={{ color: "#8A9AB0", fontSize: "0.76rem", textAlign: "center" }}>
                    This opens your email app with the enquiry pre-filled. Prefer to call?{" "}
                    <a href="tel:07700000000" style={{ color: ORANGE, fontWeight: 600, textDecoration: "none" }}>07700 000 000</a>.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div
        className="flex items-center justify-center"
        style={{ background: "#E2E8F4", height: 260 }}
      >
        <div className="text-center">
          <MapPin size={32} style={{ color: ORANGE, margin: "0 auto 8px" }} />
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#52667F" }}>
            Based in Bournemouth · Serving Southern England
          </p>
        </div>
      </div>
    </div>
  );
}
