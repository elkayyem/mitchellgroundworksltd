import { Link } from "react-router";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import logoReversed from "@/assets/logo-reversed.png";

const ORANGE = "#F56209";

export function Footer() {
  return (
    <footer style={{ background: "#070F1E" }}>
      {/* Top strip */}
      <div style={{ background: ORANGE }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#fff", letterSpacing: "0.03em", textTransform: "uppercase" }}>
            Ready to start your project? Let's talk.
          </p>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 shrink-0 transition-opacity hover:opacity-85"
            style={{ background: "#fff", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: ORANGE }}
          >
            Get a Free Quote <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img src={logoReversed} alt="Mitchell Groundworks Ltd" className="block w-auto" style={{ height: 42 }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", lineHeight: 1.7, fontFamily: "'Barlow',sans-serif" }}>
              Family-run groundworks and construction for residential and commercial clients. Based in Bournemouth, covering Southern England.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: ORANGE, marginBottom: "1.2rem" }}>Services</h4>
            <ul className="space-y-2.5">
              {["House Extensions","Groundworks & Drainage","Brickwork & Blockwork","Patios & Driveways","Retaining Walls","Landscaping & Fencing","Renovations","Site Clearance"].map((s) => (
                <li key={s}>
                  <Link to="/services" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.84rem", fontFamily: "'Barlow',sans-serif" }} className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: ORANGE, marginBottom: "1.2rem" }}>Company</h4>
            <ul className="space-y-2.5">
              {[{ to: "/about", l: "About Us" },{ to: "/projects", l: "Projects" },{ to: "/blog", l: "Blog" },{ to: "/contact", l: "Contact" }].map((x) => (
                <li key={x.to}>
                  <Link to={x.to} style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.84rem", fontFamily: "'Barlow',sans-serif" }} className="hover:text-white transition-colors">{x.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: ORANGE, marginBottom: "1.2rem" }}>Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone size={15} style={{ color: ORANGE, marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ color: "#fff", fontSize: "0.9rem", fontFamily: "'Barlow',sans-serif", fontWeight: 600 }}>07700 000 000</div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", fontFamily: "'Barlow',sans-serif" }}>Mon–Fri 7am–6pm</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={15} style={{ color: ORANGE, marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.84rem", fontFamily: "'Barlow',sans-serif" }}>info@mitchellgw.co.uk</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={15} style={{ color: ORANGE, marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.84rem", fontFamily: "'Barlow',sans-serif" }}>Bournemouth · Southern England</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between gap-2" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem", fontFamily: "'Barlow',sans-serif" }}>© 2024 Mitchell Groundworks Ltd. Company No. 08266908. Registered in England & Wales.</p>
          <p style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.78rem", fontFamily: "'Barlow',sans-serif" }}>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
