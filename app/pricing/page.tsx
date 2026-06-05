"use client";

import { useState, useEffect } from "react";

const SPOTS_TOTAL = 100;
const SPOTS_TAKEN = 15;

const features = [
  "Full listing diagnosis across all your products",
  "AI-generated copy fixes, ready to paste",
  "Competitive intelligence, refreshed weekly",
];


function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5L6.5 12L13 5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OpsellLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17" stroke="#5046E5" strokeWidth="2" />
        <circle cx="18" cy="18" r="10" stroke="#5046E5" strokeWidth="2" />
        <circle cx="18" cy="18" r="4" fill="#5046E5" />
        <circle cx="18" cy="7" r="3" fill="#5046E5" opacity="0.3" />
        <circle cx="29" cy="24" r="3" fill="#5046E5" opacity="0.3" />
        <circle cx="7" cy="24" r="3" fill="#5046E5" opacity="0.3" />
      </svg>
      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "700", fontSize: "17px", color: "#0F1114", letterSpacing: "-0.3px" }}>
        Opsell AI
      </span>
    </div>
  );
}

export default function OpsellPricing() {
  const [beamX, setBeamX] = useState(-60);
  const progressPct = (SPOTS_TAKEN / SPOTS_TOTAL) * 100;

  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const duration = 3000;
    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = (ts - start) % duration;
      setBeamX(-60 + (elapsed / duration) * 220);
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", fontFamily: "'DM Sans', sans-serif", color: "#0F1114", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .nav-link {
          font-size: 13px; font-weight: 500; color: #4A4F57;
          text-decoration: none; padding: 6px 10px; border-radius: 8px;
          transition: color 0.18s, background 0.18s; cursor: pointer; white-space: nowrap;
        }
        .nav-link:hover { color: #0F1114; background: #F0F1F3; }

        .btn-primary {
          background: #5046E5; color: #fff; font-family: 'DM Sans', sans-serif;
          font-weight: 600; font-size: 14px; border: none; border-radius: 9px;
          padding: 9px 18px; cursor: pointer; white-space: nowrap;
          transition: background 0.18s, transform 0.15s, box-shadow 0.18s;
          box-shadow: 0 2px 8px rgba(80,70,229,0.25);
        }
        .btn-primary:hover { background: #3B32C4; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(80,70,229,0.35); }
        .btn-primary:active { transform: translateY(0); }

        .cta-btn {
          width: 100%; background: #5046E5; color: #fff;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
          border: none; border-radius: 11px; padding: 14px 24px; cursor: pointer;
          transition: background 0.18s, transform 0.15s, box-shadow 0.18s;
          box-shadow: 0 4px 16px rgba(80,70,229,0.3); letter-spacing: -0.1px;
        }
        .cta-btn:hover { background: #3B32C4; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(80,70,229,0.4); }

        .pill-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: #F0EFFF; border: 1px solid #C7C4FF; border-radius: 999px;
          padding: 5px 14px; font-size: 12px; font-weight: 600; color: #5046E5;
          position: relative; overflow: hidden;
        }
        .pill-dot {
          width: 6px; height: 6px; background: #5046E5; border-radius: 50%;
          animation: aiPulse 1.2s ease infinite; flex-shrink: 0;
        }

        @keyframes aiPulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
        @keyframes fadeUp { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }

        .fade-up-1 { animation: fadeUp 0.5s ease both 0.05s; }
        .fade-up-2 { animation: fadeUp 0.5s ease both 0.12s; }
        .fade-up-3 { animation: fadeUp 0.5s ease both 0.2s; }
        .fade-up-4 { animation: fadeUp 0.5s ease both 0.28s; }
        .fade-up-5 { animation: fadeUp 0.5s ease both 0.36s; }
        .fade-up-6 { animation: fadeUp 0.5s ease both 0.44s; }

        .card {
          background: #fff; border: 1px solid #E2E4E8; border-radius: 18px; padding: 28px;
          transition: box-shadow 0.22s, transform 0.22s;
        }
        .card:hover { box-shadow: 0 8px 32px rgba(15,17,20,0.10), 0 2px 8px rgba(15,17,20,0.05); transform: translateY(-2px); }

        .secondary-link { font-size: 13px; font-weight: 500; color: #5046E5; cursor: pointer; text-decoration: underline; text-underline-offset: 2px; transition: color 0.15s; }
        .secondary-link:hover { color: #3B32C4; }
        .muted-link { font-size: 13px; font-weight: 500; color: #6B707A; cursor: pointer; transition: color 0.15s; }
        .muted-link:hover { color: #0F1114; }

        .progress-bar-track { width: 100%; height: 5px; background: #E2E4E8; border-radius: 999px; overflow: hidden; }
        .progress-bar-fill { height: 100%; border-radius: 999px; background: linear-gradient(90deg, #5046E5 0%, #7B73FF 100%); transition: width 0.6s cubic-bezier(.34,1.56,.64,1); }

        .feature-row { display: flex; align-items: flex-start; gap: 9px; padding: 8px 0; }
        .feature-row + .feature-row { border-top: 1px solid #F0F1F3; }

        /* Nav collapse on small screens */
        .nav-links-group { display: flex; align-items: center; gap: 1px; background: #F0F1F3; border: 1px solid #E2E4E8; border-radius: 11px; padding: 3px; }
        @media (max-width: 900px) { .nav-links-group { display: none; } }
        @media (max-width: 600px) {
          .nav-right-login { display: none !important; }
        }
      `}</style>



      {/* MAIN */}
      <main style={{
        flex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "40px 24px 48px",
        textAlign: "center",
      }}>

        {/* Badge */}
        <div className="pill-badge fade-up-1" style={{ marginBottom: "20px" }}>
          <span style={{
            position: "absolute", top: 0, left: `${beamX}%`, width: "60%", height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
            pointerEvents: "none",
          }} />
          <span className="pill-dot" />
          Early Bird
        </div>

        {/* Headline */}
        <h1 className="fade-up-2" style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800",
          fontSize: "clamp(28px, 5vw, 52px)", lineHeight: "1.06",
          letterSpacing: "-1.2px", color: "#0F1114", maxWidth: "700px", marginBottom: "14px",
        }}>
          Lock in founder pricing<br />before we go live.
        </h1>

        {/* Subtext */}
        <p className="fade-up-3" style={{
          fontSize: "clamp(14px, 2vw, 16px)", lineHeight: "1.6",
          color: "#6B707A", maxWidth: "460px", marginBottom: "28px",
        }}>
          We're onboarding the first 100 sellers by hand. Once that fills up, pricing increases and the waitlist opens.
        </p>

        {/* Progress */}
        <div className="fade-up-4" style={{ width: "100%", maxWidth: "580px", marginBottom: "28px" }}>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", fontSize: "12px", color: "#6B707A" }}>
            <span style={{ fontWeight: "600", color: "#5046E5" }}>{SPOTS_TAKEN} of {SPOTS_TOTAL} spots taken</span>
            <span>{SPOTS_TOTAL - SPOTS_TAKEN} remaining</span>
          </div>
        </div>

        {/* Card */}
        <div className="card fade-up-5" style={{ width: "100%", maxWidth: "440px", textAlign: "left" }}>
          <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.07em", color: "#8C919A", textTransform: "uppercase", marginBottom: "12px" }}>
            Early bird — limited
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "700", fontSize: "24px", letterSpacing: "-0.4px", color: "#0F1114", marginBottom: "6px" }}>
            Customize
          </h2>
          <p style={{ fontSize: "12px", color: "#8C919A", marginBottom: "20px" }}>
            Billed monthly. Cancel anytime. Full access to everything.
          </p>
          <div style={{ height: "1px", background: "#F0F1F3", marginBottom: "16px" }} />
          <div style={{ marginBottom: "22px" }}>
            {features.map((f, i) => (
              <div key={i} className="feature-row">
                <span style={{ flexShrink: 0, marginTop: "2px" }}><CheckIcon /></span>
                <span style={{ fontSize: "13px", color: "#2E3238", lineHeight: "1.5" }}>{f}</span>
              </div>
            ))}
          </div>
          <button
            className="cta-btn"
            onClick={() =>
              window.open(
                "https://opsell.neetocal.com/meeting-with-shaurya-gupta",
                "_blank"
              )
            }
          >
            Get Early Access
          </button>        </div>

        {/* Footer links */}
        <div className="fade-up-6" style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "18px" }}>
          <span className="secondary-link">Talk to Team first</span>
          <span style={{ color: "#D1D4D9", fontSize: "13px" }}>·</span>
          <span className="muted-link">Not right now</span>
        </div>

      </main>
    </div>
  );
}